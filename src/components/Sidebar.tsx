import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector, useOutsideClick } from '../hooks'
import { toggleSidebar } from '../redux/slices/SidebarSlice'
import { useRef } from 'react'

export default function Sidebar() {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen)

  // Function to close the sidebar
  const closeSidebar = () => {
    if (isSidebarOpen) {
      dispatch(toggleSidebar()) // Dispatch action to toggle the sidebar
    }
  }

  const sidebarRef = useRef(null)

  // Hook to handle outside click and close the sidebar
  useOutsideClick(sidebarRef, closeSidebar)

  return (
    <div
      className="fixed top-0 sm:top-14 sm:z-0 z-10 left-0 h-full min-h-[100vh] bg-col-bg-body w-[250px] bg-prim-bg-color shadow-md "
      ref={sidebarRef}
    >
      <ul className="px-4 py-12 text-xl list-none text-[#232323]">
        <li className="sm:hidden pb-4 text-lg cursor-pointer" onClick={closeSidebar}>
          X Close
        </li>
        <li className="pb-4 text-lg ">
          <Link to="/contacts" className="font-medium tracking-tight" onClick={closeSidebar}>
            Contacts
          </Link>
        </li>
        <li className="text-lg">
          <Link to="/covid-dashboard" className="font-medium tracking-tight" onClick={closeSidebar}>
            Charts And Maps
          </Link>
        </li>
      </ul>
    </div>
  )
}
