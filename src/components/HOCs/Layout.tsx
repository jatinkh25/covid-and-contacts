import { Navbar, Sidebar } from '..'
import { LayoutProps } from '../../utils/types'
import { useAppSelector } from '../../hooks'

export default function Layout({ children }: LayoutProps) {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen)

  return (
    <>
      <Navbar />
      <div
        className={`z-10 fixed inset-0 w-full h-full ${
          isSidebarOpen ? 'bg-black/50' : 'bg-transparent'
        } ${
          isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }  sm:bg-transparent sm:pointer-events-auto`}
      >
        <div
          className={`sm:transition-none transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
        >
          <Sidebar />
        </div>
      </div>
      <div className="p-4 sm:p-8 mt-16 ml-auto sm:w-page"> {children}</div>
    </>
  )
}
