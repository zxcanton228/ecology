import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Card from "../Card/Card"
import { flowersCards } from "../flowers.data"

const MobileCards = () => {
	const params = {
		dots: true,
	}
	return (
		<section className='cards__mobile'>
			<Slider {...params}>
				{flowersCards.map(({ img, text, title }, index) => (
					<div>
						<Card key={index} img={img} text={text} title={title} />
					</div>
				))}
			</Slider>
		</section>
	)
}

export default MobileCards
