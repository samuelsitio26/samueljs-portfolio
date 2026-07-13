// Favicon generator: creates app/icon.png and app/favicon.ico
// Adjust vertical position (y %) if letter looks too high/low.
// Run: node scripts/generate-favicon.js
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

(async () => {
  try {
    const size = 256; // base SVG size
    const radius = 56; // corner radius
    const fontSize = Math.floor(size * 0.66); // letter size relative to canvas
    // y history: 58% -> 70% (current) for progressive downward adjustment (optical centering)
    const verticalPercent = 70;
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
	<defs>
		<style>
			.bg { fill: #ffffff; }
			.letter { fill: #000000; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 700; font-size: ${fontSize}px; }
		</style>
	</defs>
	<rect class="bg" width="${size}" height="${size}" rx="${radius}" />
	<text class="letter" x="50%" y="${verticalPercent}%" dominant-baseline="middle" text-anchor="middle">S</text>
</svg>`;

    // Render SVG to PNG
    const pngBufferBig = await sharp(Buffer.from(svg))
      .png({ compressionLevel: 9 })
      .toBuffer();

    // Prepare output directory
    const appDir = path.join(__dirname, "..", "app");
    if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

    // Write main PNG (256x256)
    const pngPath = path.join(appDir, "icon.png");
    fs.writeFileSync(pngPath, pngBufferBig);

    // Also create a 32x32 and 16x16 resized versions for proper ICO container
    const png32 = await sharp(pngBufferBig).resize(32, 32).png().toBuffer();
    const png16 = await sharp(pngBufferBig).resize(16, 16).png().toBuffer();

    // Minimal ICO writer supporting PNG images (ICONDIR + ICONDIRENTRY + PNG data).
    // We'll pack 3 sizes: 16, 32, 256. Browser will pick best.
    function buildIco(buffers) {
      // ICONDIR (6 bytes): reserved(0,2) type(1=icon,2) count(2)
      const count = buffers.length;
      const header = Buffer.alloc(6);
      header.writeUInt16LE(0, 0); // reserved
      header.writeUInt16LE(1, 2); // type icon
      header.writeUInt16LE(count, 4); // count
      let entries = Buffer.alloc(16 * count);
      let offset = 6 + entries.length; // initial data offset after headers
      buffers.forEach((b, i) => {
        const size = b.sizeMeta; // {w,h,bytes}
        const idx = i * 16;
        entries[idx] = size.w === 256 ? 0 : size.w; // width (0 means 256)
        entries[idx + 1] = size.h === 256 ? 0 : size.h; // height
        entries[idx + 2] = 0; // color count
        entries[idx + 3] = 0; // reserved
        entries.writeUInt16LE(1, idx + 4); // planes
        entries.writeUInt16LE(32, idx + 6); // bit count
        entries.writeUInt32LE(b.length, idx + 8); // bytes in resource
        entries.writeUInt32LE(offset, idx + 12); // offset
        offset += b.length;
      });
      return Buffer.concat([header, entries, ...buffers.map((b) => b)]);
    }

    // Attach meta for ICO entries
    png16.sizeMeta = { w: 16, h: 16 };
    png32.sizeMeta = { w: 32, h: 32 };
    pngBufferBig.sizeMeta = { w: 256, h: 256 };
    const icoBuffer = buildIco([png16, png32, pngBufferBig]);
    const icoPath = path.join(appDir, "favicon.ico");
    fs.writeFileSync(icoPath, icoBuffer);

    console.log(
      `Generated favicon with vertical y=${verticalPercent}%. Files: icon.png, favicon.ico`
    );
  } catch (err) {
    console.error("Failed to generate favicon:", err);
    process.exit(1);
  }
})();
