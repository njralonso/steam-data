export default interface ApiResponse {
	applist: AppList;
}

export interface AppList {
	apps: App[];
}

export interface App {
	appid: number;
	name: string;
}

export interface SearchBarProps {
	onSearch: (games: App[]) => void;
}