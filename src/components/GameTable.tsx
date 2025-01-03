import { useState } from "react";
import GameList from "./GameList";
import SearchBar from "./SearchBar";
import { App } from "../types/types";

export default function GameTable() {
	const [filteredGames, setFilteredGames] = useState<App[]>([]);

	return (
		<>
			<SearchBar onSearch={(games) => setFilteredGames(games)} />
			<GameList games={filteredGames} />
		</>
	)
}