import { FC } from "react"
import Button from "../../../ui/Button"
import "./Card.sass"
interface ICard {
	title: string
	text: string
	img: string
}
const Card: FC<ICard> = ({ img, text, title }) => {
	return (
		<section className='card'>
			<section className='card__image'>
				<img src={`./../../../../public/images/${img}.svg`} alt='' />
			</section>
			<div className='card__text'>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
			<div className='card__btn-cont'>
				<Button className='card__btn' />
			</div>
		</section>
	)
}

export default Card
