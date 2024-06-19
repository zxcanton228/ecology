import "./Footer.sass"
import FooterIcons from "./FooterIcons"
const Footer = () => {
	return (
		<footer>
			<div className='footer__header'>
				<FooterIcons />
			</div>
			<div className='footer__footer'>
				<article>f&b ® 2020</article>
			</div>
		</footer>
	)
}

export default Footer
