import { FC } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { IForm } from "../App"

interface IInputProps {
	register: UseFormRegister<IForm>
	registerName: "name" | "email"
	placeholder: string
	errors: FieldErrors<IForm>
	isEmail: boolean
}
const Input: FC<IInputProps> = ({
	placeholder,
	isEmail,
	register,
	registerName,
	errors,
}) => {
	return isEmail ? (
		<input
			type='text'
			placeholder='Email'
			className={errors.email ? "errorInput" : ""}
			{...register(registerName, {
				required: "Поле обязательно!",
				pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
					message: "Введите валидный Email",
				},
			})}
		/>
	) : (
		<input
			type='text'
			placeholder={placeholder}
			className={errors.name ? "errorInput" : ""}
			{...register(registerName, {
				required: "Поле обязательно!",
			})}
		/>
	)
}

export default Input
