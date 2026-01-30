import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./fetch";
import PlayingAnimation from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Card = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState({});

useEffect(() => {
	const fetchData = async () => {
		const results = await Promise.all([getNowPlayingItem()]);
		console.log(results);
		setResult(results[0]);
		setLoading(false);
	};
	fetchData(); // Fetch data immediately on component mount

	const intervalId = setInterval(fetchData, 60 * 1000); // ! Fetch data every minute: temporary 

	return () => clearInterval(intervalId); 
}, []);

	return (
		<div className="mt-3 flex justify-center w-full">
			{loading ? (
				<div className="flex justify-center mb-8">
					{/* Replace this with your own loading spinner */}
					<div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12 mb-4"></div>
				</div>
			) : (
				<div className="relative w-full mb-8 border-2 border-[#1DB954] p-6 rounded-2xl backdrop-filter backdrop-blur-lg bg-gradient-to-br from-white/40 to-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
					{/* album background image */}
					{result.albumImageUrl && (
						<Image
							src={result.albumImageUrl}
							alt="backgroundImage"
							layout="fill"
							objectFit="cover"
							className="absolute inset-0 z-0 object-cover opacity-10 rounded-2xl"
						/>
					)}

					{/* Content */}
					<div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
						{/* left: spotify logo + status */}
						<div className="flex items-center gap-4 md:w-1/2">
							<div className="flex-shrink-0 flex items-center justify-center bg-[#1DB954] rounded-full p-5 shadow-lg">
								<FontAwesomeIcon icon={faSpotify} className="text-white text-4xl" />
							</div>
							<div className="flex-1">
								<p className="font-bold text-black text-3xl leading-tight">
									{result.isPlaying ? "Now Playing" : "Spotify"}
								</p>
								{result.isPlaying && (
									<div className="mt-2">
										<PlayingAnimation />
									</div>
								)}
								{!result.isPlaying && (
									<p className="text-sm text-gray-600 mt-1">Ready to listen</p>
								)}
							</div>
						</div>

						{/* right: track info or playlist link */}
						<div className="flex-1 md:w-1/2 w-full">
							<div className="flex flex-col gap-3">
								{result.isPlaying && (
									<div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
										<a
											href={result.songUrl ? encodeURI(result.songUrl) : "#"}
											target="_blank"
											rel="noopener noreferrer"
											className="block font-bold text-lg text-[#1e3a5f] hover:text-[#1DB954] transition-colors truncate">
											{result.title}
										</a>
										<p className="truncate text-gray-600 mt-1">{result.artist}</p>
									</div>
								)}
								{/* persistent playlist link */}
								<a
									href="https://open.spotify.com/playlist/6jk5ycbLTMqLi7mabyweq5?si=1df12d01cbe44c21"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
									<FontAwesomeIcon icon={faSpotify} className="text-xl" />
									<span>Open My Playlist</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
