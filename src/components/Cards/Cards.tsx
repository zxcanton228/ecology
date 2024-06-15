import "./Cards.sass"

import MobileCards from "./MobileCards/MobileCards"
import PcCards from "./PcCards/PcCards"
const Cards = () => {
	return (
		<section className='cards container'>
			<MobileCards />
			<PcCards />
		</section>
	)
}

export default Cards
