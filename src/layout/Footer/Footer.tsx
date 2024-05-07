import "./Footer.sass"
const Footer = () => {
	return (
		<footer>
			<div className='footer__header'>
				<section className='footer__icons'>
					<img src='./../../../public/icons/youtube.svg' alt='youtube' />
					<img src='./../../../public/icons/osy.svg' alt='osu' />
					<img src='./../../../public/icons/facebook.svg' alt='facebook' />
					<img src='./../../../public/icons/x.svg' alt='x' />
				</section>
			</div>
			<div className='footer__footer'>
				<article>f&b ® 2020</article>
			</div>
		</footer>
	)
}

export default Footer
