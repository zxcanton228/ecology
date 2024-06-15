import { motion } from "framer-motion"
import { FC, LegacyRef, forwardRef } from "react"
import { useFormContext } from "react-hook-form"
import { IForm } from "../components/Help/Help"

interface IInputProps {
	placeholder?: string
	isEmail?: boolean
}
const emailRegular = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
const MInput: FC<IInputProps> = forwardRef(
	({ placeholder, isEmail }, ref: LegacyRef<HTMLInputElement>) => {
		const {
			register,
			formState: { errors },
		} = useFormContext<IForm>()
		const option = isEmail
			? {
					required: "Поле обязательно!",
					pattern: {
						value: emailRegular,
						message: "Введите валидный Email",
					},
			  }
			: {
					required: "Поле обязательно!",
			  }
		return (
			<label>
				{isEmail && errors.email && (
					<p className='input__error'>{errors.email.message}</p>
				)}
				{errors.name && <p className='input__error'>{errors.name.message}</p>}
				<input
					type={isEmail ? "email" : "text"}
					// @ts-ignore
					ref={ref}
					placeholder={isEmail ? "Email" : placeholder}
					className={
						isEmail
							? errors.email
								? "errorInput"
								: ""
							: errors.name
							? "errorInput"
							: ""
					}
					{...register(isEmail ? "email" : "name", option)}
				/>
			</label>
		)
	}
)
const Input = motion(MInput)
export default Input
