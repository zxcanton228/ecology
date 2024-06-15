import { motion } from "framer-motion"
import { FC, LegacyRef, forwardRef } from "react"
import Button from "../../../ui/Button"
import "./Card.sass"
interface ICard {
	title: string
	text: string
	img: string
}
const MCard: FC<ICard> = forwardRef(
		({ img, text, title }, ref: LegacyRef<HTMLButtonElement>) => {
			return (
				<section className='card' ref={ref}>
					<section className='card__image'>
						<img
							loading='lazy'
							src={`./../../../../public/images/${img}.svg`}
							alt=''
						/>
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
	),
	Card = motion(MCard)
export default Card
