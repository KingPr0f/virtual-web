import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }


    return (
        <nav className="sticky py-3 z-50 top-0 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container mx-auto px-4 relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img class="w-10 h-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="space-x-12 hidden lg:flex justify-center items-center">
                        <a className="py-2 px-3 border rounded-md" href="#">Sign In</a>
                        <a className="bg-gradient-to-r from-orange-400 to-orange-800 py-2 px-3 rounded-md" href="#">Create an account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed z-20 right-0 bg-neutral-900/95 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li className="py-4" key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="space-x-6 flex justify-center">
                        <a className="py-2 px-3 border rounded-md" href="#">Sign In</a>
                        <a className="bg-gradient-to-r from-orange-400 to-orange-800 py-2 px-3 rounded-md" href="#">Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar