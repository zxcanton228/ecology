import { BiArrowToRight, BiSearch } from "react-icons/bi"
import { IMG_URL } from "../../sys"
import "./Header.sass"
import HeaderNav from "./HeaderNav"
const Header = () => {
	return (
		<header>
			<div className='header__wrap'>
				<img src={`${IMG_URL}logo.svg`} alt='error' />
				<HeaderNav />
				<section className='header__btn-group'>
					<BiArrowToRight />
					<BiSearch />
				</section>
			</div>
		</header>
	)
}

export default Header
