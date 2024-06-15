import { motion } from "framer-motion"
import { LegacyRef, forwardRef } from "react"
import More from "../../../ui/More"
import "./Badge.sass"
const MBadge = forwardRef(({}, ref: LegacyRef<HTMLButtonElement>) => {
	return (
		<section className='artifacts__badge' ref={ref}>
			<h1>Kurische Nehrung 24</h1>
			<p>
				Вот вам яркий пример современных тенденций - начало повседневной работы
				по формированию позиции выявляет срочную потребность методов управления
				процессами.
			</p>
			<p>
				Есть над чем задуматься: представители современных социальных резервов
				своевременно верифицированы.
			</p>
			<div className='badge__more'>
				<More text='Читать далее' />
			</div>
		</section>
	)
})
export const Badge = motion(MBadge)
