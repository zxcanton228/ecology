import { BiArrowToRight, BiSearch } from "react-icons/bi"
import "./Header.sass"
const Header = () => {
	return (
		<header>
			<div className='header__wrap'>
				<img src='./../../../public/logo.svg' alt='error' />
				<nav className='header__nav'>
					<a>Каталог</a>
					<a>Галерея</a>
					<a>О лаборатория</a>
					<a>Контакты</a>
				</nav>
				<section className='header__btn-group'>
					<BiArrowToRight />
					<BiSearch />
				</section>
			</div>
		</header>
	)
}

export default Header
