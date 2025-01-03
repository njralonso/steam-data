import { App } from '../types/types';

export default function GameList({ games }: { games: App[] }) {

	return (
		<ul>
			{games.length > 0 ? (
				games.map((game: App) => <li key={crypto.randomUUID()}>{game.name}</li>)
			) : (
				<li>No games found</li>
			)}
		</ul>
	)
}