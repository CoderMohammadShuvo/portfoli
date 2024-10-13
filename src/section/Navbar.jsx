import React from 'react'
import {navLinks} from "../constants/index.ts";

const  NavItem = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map((item, i) => (
                    <li key={i} className="nav-li">
                        <a className="nav-li_a" href={item.href}>{item.name}</a>
                    </li>
                )
            )
            }

        </ul>
    )
}

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);
    const handleToggle = () => setToggle((prev) => !prev);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 ">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space ">
                    <a href='/' className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Shuvo</a>
                    <button onClick={handleToggle} className={"text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"}>
                        <img src={toggle ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="h-6 w-6"/>
                    </button>
                    <nav className={"sm:flex hidden"}>
                        <NavItem />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${toggle ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItem/>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
