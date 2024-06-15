import ReactDOM from "react-dom/client"
import Artifacts from "./components/Artifacts/Artifacts.tsx"
import Cards from "./components/Cards/Cards.tsx"
import Help from "./components/Help/Help.tsx"
import { HookFormProvider } from "./components/HookFormProvider.tsx"
import Landing from "./components/Landing/Landing.tsx"
import Footer from "./layout/Footer/Footer.tsx"
import Header from "./layout/Header/Header.tsx"
import "./styles/global.sass"
ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<Header />
		<main>
			<Landing />
			<Cards />
			<Artifacts />
			<HookFormProvider>
				<Help />
			</HookFormProvider>
		</main>
		<Footer />
	</>
)
