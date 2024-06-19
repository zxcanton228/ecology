import { motion } from "framer-motion"
import { IMG_URL } from "../../sys"
import { textAnim } from "../../types/anim.types"
import More from "../../ui/More"
import "./Landing.sass"
const Landing = () => {
	return (
		<div className='landing'>
			<img
				src={`${IMG_URL}flowers.svg`}
				className='landing__back'
				alt='error'
			/>
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='landing-wrap'
			>
				<motion.h1 custom={2} variants={textAnim}>
					Крупнейшая коллекция природных артефактов
				</motion.h1>
				<motion.p custom={4} variants={textAnim}>
					Являясь всего лишь частью общей картины, интерактивные прототипы,
					которые представляют собой яркий пример европейского типа политической
					и социальной культуры.
				</motion.p>
				<More custom={5} variants={textAnim} className='more' bgDark />
			</motion.section>
		</div>
	)
}

export default Landing
