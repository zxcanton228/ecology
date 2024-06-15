import { motion } from "framer-motion"
import { blockAnim } from "../../../types/anim.types"
import Card from "../Card/Card"
import { flowersCards } from "../flowers.data"

const PcCards = () => {
	return (
		<motion.div
			initial='hidden'
			viewport={{ amount: 0.2, once: true }}
			whileInView='visible'
			className='cards__pc'
		>
			{flowersCards.map(({ img, text, title }, index) => (
				<Card
					custom={index}
					variants={blockAnim}
					key={index}
					img={img}
					text={text}
					title={title}
				/>
			))}
		</motion.div>
	)
}

export default PcCards
