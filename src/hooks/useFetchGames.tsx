import { useState, useEffect } from "react";
import ApiResponse from "../types/types";

const STEAM_API_GAME_EXAMPLE = "/steam-news/ISteamApps/GetAppList/v2/"

const useFindGame = (name: string) => {
	const [game, setGame] = useState<ApiResponse | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		const fetchGame = async () => {
			if (name.length > 1) {
				try {
					const response = await fetch(STEAM_API_GAME_EXAMPLE, { signal: controller.signal });
					const data: ApiResponse = await response.json();
					setGame(data);
				} catch (err) { }
			} else {
				setGame(null);
			}
		}
		fetchGame();
		return () => {
			controller.abort(); // Abortamos la solicitud anterior si el 'name' cambia o el componente se desmonta
		};
	}, [name]);

	// useEffect(() => {
	// 	console.log(game, "useffect 2")
	// }, [game]);

	return { game };
}

export { useFindGame };

// la api donde hay que buscar los datos del juego al tener el appid https://store.steampowered.com/api/appdetails?appids={appid}