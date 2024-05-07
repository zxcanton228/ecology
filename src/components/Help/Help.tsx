import { useForm } from "react-hook-form"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import "./Help.sass"
interface IForm {
	name: string
	email: string
}

const Help = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IForm>({
		mode: "onChange",
	})

	const onSubmit = () => {
		reset()
	}

	return (
		<div className='help'>
			<img className='help__back' src='./../../../public/help.svg' alt='' />
			<section className='container help-wrap'>
				<h1 className='title'>Помочь проекту</h1>
				<p>
					Равным образом, экономическая повестка сегодняшнего дня не даёт нам
					иного выбора, кроме определения прогресса профессионального
					сообщества. Как принято считать, элементы политического процесса
					рассмотрены исключительно в разрезе маркетинговых и финансовых
					предпосылок.
				</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					{errors.name && (
						<label className='input__error'>{errors.name?.message}</label>
					)}
					<Input
						isEmail={false}
						errors={errors}
						placeholder='Имя'
						register={register}
						registerName='name'
					/>
					{errors.email && (
						<label className='input__error'>{errors.email?.message}</label>
					)}
					<Input
						isEmail={true}
						errors={errors}
						placeholder='Email'
						register={register}
						registerName='email'
					/>
					<Button submit />
				</form>
			</section>
		</div>
		// <form onSubmit={handleSubmit(onSubmit)}>
		// 	<h1>{text}</h1>

		// 	<Input
		// 		errors={errors}
		// 		placeholder='Имя'
		// 		register={register}
		// 		registerName='name'
		// 		isEmail={false}
		// 	/>
		// 	<Input
		// 		errors={errors}
		// 		placeholder='Email'
		// 		register={register}
		// 		registerName='email'
		// 		isEmail={true}
		// 	/>

		// 	{errors.name && <h1>{errors.name.message}</h1>}
		// 	<button>Send</button>
		// </form>
	)
}

export default Help
