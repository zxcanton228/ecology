import Card from "./Card/Card"
import "./Cards.sass"

const Cards = () => {
	return (
		<section className='cards container'>
			<Card
				img='one'
				text='Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.'
				title='Fig. 1 (plant)'
			/>
			<Card
				img='two'
				text='Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.'
				title='Fig. 2 (flower)'
			/>
			<Card
				img='three'
				text='Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.'
				title='Fig. 3 (leaf)'
			/>
			<Card
				img='four'
				text='Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.'
				title='Fig. 4 (wood)'
			/>
		</section>
	)
}

export default Cards
