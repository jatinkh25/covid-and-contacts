import { Link } from 'react-router-dom'
import { Hamburger } from '../assets/svgs'
import { useAppDispatch } from '../hooks'
import { toggleSidebar } from '../redux/slices/SidebarSlice'

export default function Navbar() {
  const dispatch = useAppDispatch()

  const hamburgerClickHandler = () => {
    dispatch(toggleSidebar())
  }

  return (
    <header className="fixed top-0 left-0 right-0 sm:z-10 p-4 shadow-md h-14 bg-prim-bg-color">
      <div className="max-w-[1360px] flex h-full m-auto items-center content-between tracking-wide">
        <div className="flex items-center">
          <div className="sm:hidden w-7 h-7 mr-2 cursor-pointer" onClick={hamburgerClickHandler}>
            <Hamburger />
          </div>
          <h1 className="pr-4 text-3xl font-kaushan">CC</h1>
          <Link to="/contacts" className="text-xl font-medium tracking-tight text-black">
            Covid And Contacts
          </Link>
        </div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
