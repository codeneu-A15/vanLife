import {Outlet , NavLink} from "react-router-dom";

export default function HostLayout(){
    return(
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host/dashboard"
                    className={({isActive}) => isActive ? "active-link" : null}>
                           Dashboard
                </NavLink>
                <NavLink
                    to="/host/income"
                    className={({isActive}) => isActive ? "active-link" : null}>
                           Income
                </NavLink>
                <NavLink
                    to="/host/review"
                    className={({isActive}) => isActive ? "active-link" : null}>
                            Reviews
                </NavLink>
            </nav>
            <Outlet/>
        </>
    )
}