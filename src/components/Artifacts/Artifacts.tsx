import { motion } from "framer-motion"
import { IMG_URL } from "../../sys"
import { blockAnim } from "../../types/anim.types"
import Title from "../../ui/Title"
import "./Artifacts.sass"
import { Badge } from "./Badge/Badge"
const Artifacts = () => {
	return (
		<>
			<div className='container'>
				<Title text='Новые артефакты' />
			</div>
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.1, once: true }}
				className='artifacts container'
			>
				<motion.img
					custom={1}
					variants={blockAnim}
					src={`${IMG_URL}artifacts.svg`}
					alt='error'
				/>
				<Badge custom={3} variants={blockAnim} />
			</motion.section>
		</>
	)
}

export default Artifacts
