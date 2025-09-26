import Navbar from "../components/Navbar"

function MainLayout({ children }) {

    return(
        <div className="flex flex-col flex-1">
            <Navbar />
            <main className="p-6 text-gray-900 dark:text-white">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;