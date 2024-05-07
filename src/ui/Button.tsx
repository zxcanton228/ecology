import { FC } from "react"

interface IButton {
	text?: string
	className?: string
	disabled?: boolean
	submit?: boolean
}
const Button: FC<IButton> = ({ submit, text, className, disabled }) => {
	return (
		<button disabled={disabled} className={className}>
			{submit ? "Отправить" : "Подробнее"}
		</button>
	)
}

export default Button
