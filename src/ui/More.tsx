import { motion } from "framer-motion"
import { FC, LegacyRef, forwardRef } from "react"
import { CgArrowLongRight } from "react-icons/cg"

interface IMore {
	className?: string
	bgDark?: boolean
	text?: string
}
const MMore: FC<IMore> = forwardRef(
	({ className, text }, ref: LegacyRef<HTMLButtonElement>) => {
		return (
			<button className={className ? className : ""} ref={ref}>
				{text ? text : "Исследовать"}
				<CgArrowLongRight />
			</button>
		)
	}
)
const More = motion(MMore)
export default More
/* 

ARROW ->
			
Right: <CgArrowLongRight />
Left: <CgArrowLongLeft />
__________________________

Left:  <LiaArrowLeftSolid /> 
Right: <LiaArrowRightSolid /> 

*/
