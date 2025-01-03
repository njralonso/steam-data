import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/steam-news': {
				target: 'http://api.steampowered.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/steam-news/, ''),
			},
		},
	},
})



