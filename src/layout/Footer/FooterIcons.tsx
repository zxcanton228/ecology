import { IMG_URL } from "../../sys"

const FooterIcons = () => {
	return (
		<section className='footer__icons'>
			<img src={`${IMG_URL}icons/youtube.svg`} alt='youtube' />
			<img src={`${IMG_URL}icons/osy.svg`} alt='osu' />
			<img src={`${IMG_URL}icons/facebook.svg`} alt='facebook' />
			<img src={`${IMG_URL}icons/x.svg`} alt='x' />
		</section>
	)
}

export default FooterIcons
