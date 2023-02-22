import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'


const Sidebar = () => {
    const { isSideBarOpen, closeSideBar } = useGlobalContext()
    return <aside className={`${isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
        <div className="sidebar">
            <button className="close-btn" onClick={closeSideBar}>
                <FaTimes />
            </button>
            <div className="sidebar-links">
                {sublinks.map((item, index) => {
                    const { links, page } = item;
                    return <article key={index}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map((link, index) => {
                                const { label, icon, url } = link;
                                return <a key={index} href={url}>{icon}{label}</a>
                            })}
                        </div>
                    </article>
                })}
            </div>
        </div>
    </aside >
}


export default Sidebar