# Samuel Sitio Portfolio

![visitor badge](https://visitor-badge.laobi.icu/badge?page_id=samuelsitio26-portfolio.visitor-badge)

A modern portfolio website built with Next.js 16, featuring smooth animations, dynamic project showcase, and responsive design. This website showcases my web development skills and projects.

🌐 **Live Demo:** [https://samueljs.vercel.app](https://samueljs.vercel.app)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

* **Smooth Animation:** Smooth page scroll and scroll trigger animation powered by Framer Motion.
* **Smooth Page Transition:** Smooth page transition with prefetching feature of Next.js.
* **Dynamic Data:** Read the project data from JSON file instead of directly implemented the data.
* **Spotify Realtime Widget:** Show what song you're currently playing on Spotify.
* **Responsive Design:** Fully responsive design that works on all devices.
* **Project Categories:** Filter projects by Web Development, AI & Machine Learning, and Other.

## Tech Stack

- **Framework:** Next.js 16 (with Turbopack)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Deployment:** Vercel
- **Package Manager:** pnpm

## Installation

1. Ensure you have [pnpm](https://pnpm.io/) installed. If not, you can install it using:

   ```shell
   npm install -g pnpm
   ```
2. Clone the repository:

   ```shell
   git clone https://github.com/samuelsitio26/samueljs-portfolio.git
   ```
3. Navigate to the project directory:

   ```shell
   cd samueljs-portfolio
   ```
4. Install dependencies:

   ```shell
   pnpm install
   ```
5. Set up environment variables by copying `.env.example` to `.env.local` and fill in the variables:

   ```
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
   NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=
   NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=
   ```

   For reference on how to set up Spotify API, check this [guide](https://leerob.io/blog/spotify-api-nextjs).

6. Start the development server:

   ```shell
   pnpm dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── (root)/          # Home page
│   ├── about/           # About page with skills, experience, education
│   ├── projects/        # Projects listing and details
│   └── api/             # API routes (Spotify)
├── components/          # Reusable React components
├── json/                # Project data (data.json)
└── public/              # Static assets (images, documents)
```

## Usage

### Home
The home page serves as an introduction to the portfolio with animated hero section.

### About
Detailed information about skills, work experience, education, and a real-time Spotify widget.

### Projects
Showcases projects with filtering by category:
- **Web Development** - Web applications and websites
- **AI & Machine Learning** - AI/ML projects
- **Other** - Games and other projects

### Project Archive
List of all projects including archived ones.

## Customization

### Adding New Projects
Edit `json/data.json` to add new projects:

```json
{
  "show": true,
  "title": "Project Name",
  "desc": ["Description paragraph 1", "Description paragraph 2"],
  "year": "2025",
  "preview": "https://live-demo-url.com",
  "code": "https://github.com/username/repo",
  "thumbnail": "/image/projects/category/folder/thumbnail.png",
  "images": ["/image/projects/category/folder/image1.png"],
  "tech": ["Tech1", "Tech2"],
  "slug": "project-slug",
  "category": [1]
}
```

Category IDs: `1` = Web Development, `2` = AI & Machine Learning, `9` = Other

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

Copyright (C) 2025-2026 Samuel Janring Saragi Sitio