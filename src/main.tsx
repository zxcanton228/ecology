import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles/global.sass"
import { IS_DEV, URL } from "./sys"
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter basename={IS_DEV ? "/" : `/${URL}`}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
