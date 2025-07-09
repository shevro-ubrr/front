import Link from "next/link";

const Header = () => {

    return (
        <Link className="header__logo" href="/">
            <img src="https://gidpofinansam.com/assets/upload/logo.svg" alt=""/>
            <div className="delimiter"></div>
            <div className="text">Финансовая грамотность</div>
        </Link>
    )
}

export default Header;