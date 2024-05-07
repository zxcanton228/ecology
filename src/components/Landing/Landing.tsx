import More from "../../ui/More"
import "./Landing.sass"
const Landing = () => {
	return (
		<div className='landing'>
			<img
				src='./../../public/flowers.svg'
				className='landing__back'
				alt='error'
			/>
			<section className='landing-wrap'>
				<h1>Крупнейшая коллекция природных артефактов</h1>
				<p>
					Являясь всего лишь частью общей картины, интерактивные прототипы,
					которые представляют собой яркий пример европейского типа политической
					и социальной культуры.
				</p>
				<More className='more' bgDark />
			</section>
		</div>
	)
}

export default Landing
