import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	// @ts-ignore
	base: process.env.NODE_ENV === "production" ? `/${process.env.DOMAIN}/` : "/",
	plugins: [react()],
})
