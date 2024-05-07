import More from "../../ui/More"
import "./Artifacts.sass"
const Artifacts = () => {
	return (
		<>
			<div className='container'>
				<h1 className='title'>Новые артефакты</h1>
			</div>
			<section className='artifacts container'>
				<img src='./../../public/artifacts.svg' alt='error' />
				<section className='artifacts__badge'>
					<h1>Kurische Nehrung 24</h1>
					<p>
						Вот вам яркий пример современных тенденций - начало повседневной
						работы по формированию позиции выявляет срочную потребность методов
						управления процессами.
					</p>
					<p>
						Есть над чем задуматься: представители современных социальных
						резервов своевременно верифицированы.
					</p>
					<div className='badge__more'>
						<More text='Читать далее' />
					</div>
				</section>
			</section>
		</>
	)
}

export default Artifacts
