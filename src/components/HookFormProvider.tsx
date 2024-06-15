import type { PropsWithChildren } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { IForm } from "./Help/Help"

export function HookFormProvider({ children }: PropsWithChildren) {
	const methods = useForm<IForm>({
		mode: "onChange",
	})
	return <FormProvider {...methods}>{children} </FormProvider>
}
