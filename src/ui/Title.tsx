import { motion } from "framer-motion"
import { LegacyRef, forwardRef } from "react"

const MTitle = forwardRef(
	({ text }: { text: string }, ref: LegacyRef<HTMLHeadingElement>) => {
		return (
			<h1 className='title' ref={ref}>
				{text}
			</h1>
		)
	}
)
const Title = motion(MTitle)
export default Title
