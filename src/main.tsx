import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles/global.sass"
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter
			basename={
				// @ts-ignore
				process.env.NODE_ENV === "production" ? `/${process.env.DOMAIN}` : "/"
			}
		>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
