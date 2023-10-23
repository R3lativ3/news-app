const Header = () => {
    return (
        <div className="relative font-inter antialiased">
            <main className="relative flex flex-col justify-center overflow-hidden">
                <div className="">
                    <nav className="flex justify-center">
                        <ul className="flex flex-wrap items-center font-medium text-sm">
                            <li className="p-4 lg:px-8">
                                <a className="hover:text-slate-900" href="#">Prospects</a>
                            </li>
                            <li className="p-4 lg:px-8">
                                <a className="hover:text-slate-900" href="#">History</a>
                            </li>
                            <li className="p-4 lg:px-8 relative flex items-center space-x-1">
                                <a className="hover:text-slate-900" href="#0">Flyout Menu</a>
                                <button className="shrink-0 p-1">
                                    <span className="sr-only">Show submenu for "Flyout Menu"</span>
                                    <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                        <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                                    </svg>
                                </button>
                                {/* <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl [&[x-cloak]]:hidden">
                                    <li>
                                        <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                                <svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="9" height="12">
                                                    <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0 0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0 0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">Priority Ratings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                                <svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                                    <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">Insights</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                                <svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                                    <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM2 6a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4Z" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">Item Mirror</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                                <svg className="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="11" height="11">
                                                    <path d="M10.866.134a.458.458 0 0 0-.481-.106L.302 3.695a.458.458 0 0 0-.014.856l4.4 1.76 1.76 4.4c.07.175.24.29.427.29h.007a.458.458 0 0 0 .424-.302L10.973.615a.458.458 0 0 0-.107-.48Z" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">Support Center</span>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="p-4 lg:px-8">
                                <a className="hover:text-slate-900" href="#">Contacts</a>
                            </li>
                            <li className="p-4 lg:px-8">
                                <a className="hover:text-slate-900" href="#">Numbers</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>

            <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50" x-data="{ bannerOpen: true }">
                <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
                    <div className="text-slate-500 inline-flex">
                        <a className="font-medium hover:underline text-slate-300" href="https://cruip.com/build-a-hoverable-dropdown-menu-with-tailwind-css-and-alpine-js/" target="_blank">
                            Show options
                        </a>
                    </div>
                    <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700">
                        <span className="sr-only">Close</span>
                        <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                            <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header