import { motion } from "framer-motion"
import { useFormContext } from "react-hook-form"
import { IMG_URL } from "../../sys"
import { textAnim } from "../../types/anim.types"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import Title from "../../ui/Title"
import "./Help.sass"
export interface IForm {
	name: string
	email: string
}

const Help = () => {
	const { handleSubmit, reset } = useFormContext<IForm>()

	const onSubmit = () => reset()

	return (
		<div className='help'>
			<img className='help__back' src={`${IMG_URL}help.svg`} alt='help' />
			<motion.section
				initial='hidden'
				whileInView='visible'
				className='container help-wrap'
			>
				<Title custom={1} variants={textAnim} text='Помочь проекту' />
				<motion.p custom={3} variants={textAnim}>
					Равным образом, экономическая повестка сегодняшнего дня не даёт нам
					иного выбора, кроме определения прогресса профессионального
					сообщества. Как принято считать, элементы политического процесса
					рассмотрены исключительно в разрезе маркетинговых и финансовых
					предпосылок.
				</motion.p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input custom={4} variants={textAnim} placeholder='Имя' />
					<Input custom={5} variants={textAnim} isEmail />
					<Button submit />
				</form>
			</motion.section>
		</div>
	)
}

export default Help
