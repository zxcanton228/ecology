import { FC } from "react"
import { CgArrowLongRight } from "react-icons/cg"

interface IMore {
	className?: string
	bgDark?: boolean
	text?: string
}
const More: FC<IMore> = ({ className, bgDark, text }) => {
	return (
		<button className={className ? className : ""}>
			{text ? text : "Исследовать"}
			<CgArrowLongRight />
		</button>
	)
}

/* 

ARROW ->
			
Right: <CgArrowLongRight />
Left: <CgArrowLongLeft />
__________________________

Left:  <LiaArrowLeftSolid /> 
Right: <LiaArrowRightSolid /> 

*/
export default More
