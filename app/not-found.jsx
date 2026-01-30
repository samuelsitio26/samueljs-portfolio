"use client"
import React from "react";
import Link from "next/link";

const NotFound = () => (
	<div>
		<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			<div className="min-h-screen flex justify-center items-center">
				<div className="mx-auto grid grid-cols-1   ">
					<div className="flex justify-center items-center flex-col mb-5 space-y-10">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-[#f97316] text-center">
								Page not found
							</h2>
							<h1 className="text-4xl font-medium text-white text-center">
								404
							</h1>
						</div>
						<div>
							<button
								onClick={() => window.history.back()}
								className="text-lg text-white hover:text-[#f97316] text-center border-2 border-[#f97316] rounded-xl p-3 py-2 mt-2">
								Go Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default NotFound;
