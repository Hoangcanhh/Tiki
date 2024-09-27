import { Link } from "react-router-dom";
import './header.css'
import SearchBar from './SearchBar';
import NavElement from './NavElement';
import Cart from './Cart';

function Header({nav, setNav, input, setInput, setPopup, result, data, cart}) {

    return (
        <div className="header flex items-center
        sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
            <div className="buttonMore lg:hidden sm:block p-3 mr-3 rounded-lg hover:cursor-pointer"
                onClick={() => setNav(nav ? false : true)}>
                <svg className="fill-[#ffffff] w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>
            <Link to="/" className="logoTiki sm:hidden lg:block basis-[6%] mr-12">
                <img
                    src="./assets/logos/logoTiki.png"
                    alt="logoTiki"
                />
            </Link>
            <SearchBar
                data={data}
                input={input}
                setInput={setInput}
                setPopup={setPopup}
                result={result}
            />
            <Link 
                to="/"
                className="sm:hidden lg:flex items-center">
                <NavElement
                    navIcon={3}
                    navName={'Trang chủ'}
                />
            </Link>
            <div className="sm:hidden lg:flex items-center">
                <NavElement
                    navIcon={2}
                    navName={'Tài khoản'}
                />
            </div>
            <Link to="/cart">
                <Cart
                    quantity={cart.length}
                />
            </Link>
        </div>
    );
}
export default Header;
