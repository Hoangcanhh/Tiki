import './header.css'

function NavElement({navIcon, navName}) {
    return (
        <div className={navIcon===3 || navIcon===4
            ? "navElement flex rounded-lg ml-1 hover:cursor-pointer hover:bg-[#e0ecff] w-full bg-white items-center justify-center pt-2 pb-2 pl-6 pr-6"
            : "navElement flex rounded-lg ml-1 hover:cursor-pointer hover:bg-[#e5e5e5] w-full bg-white items-center justify-center pt-2 pb-2 pl-6 pr-6"}>
            <div className="navIcon">
                <svg 
                    className=
                    { navIcon===1 ? "block fill-[#808089] w-5 mr-2" 
                    : navIcon===3 ? "block fill-[#0067ff] w-5 mr-2" 
                    : "hidden" }
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
                <svg
                    className=
                    { navIcon===2 ? "block fill-[#808089] w-5 mr-2" 
                    : navIcon===4 ? "block fill-[#0067ff] w-5 mr-2" 
                    : "hidden" }
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"/>
                </svg>
            </div>
            <span 
                className={navIcon===3 || navIcon === 4
                ? "sm:text-[12px] xl:text-[15px] text-[#0062ff]"
                : "sm:text-[12px] xl:text-[15px]"}>
                {navName}
            </span>
        </div>
    )
}

export default NavElement;