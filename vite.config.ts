import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv } from "vite"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// @ts-ignore
	const env = loadEnv(mode, process.cwd(), "")
	return {
		plugins: [react()],
		base: env.VITE_NODE_ENV === "production" ? `/${env.VITE_URL}` : "/",
	}
})
