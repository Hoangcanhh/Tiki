import "./header.css";
import NavElement from "./NavElement";

function ShowNav({nav, setNav}) {
    return (
        <div className={nav ? "lg:hidden" : "hidden"}>
            <div 
                className="bg-[#52565c]/50 w-full h-full fixed top-0"
                onClick={() => setNav(false)}></div>

            <div className="showNav bg-white z-[2]
            relative top-3 rounded-lg pt-2 pb-2 overflow-hidden
            sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
                <NavElement
                    navIcon={3}
                    navName={'Trang chủ'}
                />
                <NavElement
                    navIcon={2}
                    navName={'Tài khoản'}
                />
            </div>
        </div>
    )
}
export default ShowNav;