import { ChangeEvent, useState } from "react";
import { useFindGame } from "../hooks/useFetchGames";
import { SearchBarProps } from "../types/types";

export default function SearchBar({ onSearch }: SearchBarProps) {
	const [search, setSearch] = useState<string>("");
	const game = useFindGame(search)

	// Lists the names 
	const regexFilterGameNamesStartsWithWord = new RegExp(`^${search}`, "i");
	const filteredGames = game?.game?.applist.apps.filter((game) =>
		regexFilterGameNamesStartsWithWord.test(game.name)
	) || [];

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
		onSearch(filteredGames)
	}

	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-4">
			<div className="flex items-center w-full max-w-md bg-white shadow-md rounded-full px-4 py-2">
				<span className="text-gray-400 text-xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.61-10.6 7.5 7.5 0 0 0 10.6 10.6z"
						/>
					</svg>
				</span>
				<input
					onChange={handleSearch}
					value={search}
					type="text"
					placeholder="Search..."
					className="flex-grow bg-transparent outline-none text-gray-700 px-4"
					required
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
				>
					Search
				</button>
			</div>
		</div>
	);
}
