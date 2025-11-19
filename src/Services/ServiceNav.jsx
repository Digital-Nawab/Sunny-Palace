import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const ServiceNav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            <aside className="widget widget-nav-menu">
                <ul className="widget-menu">
                    <li className={isActive('/wedding')}>
                        <Link to="/wedding"> Wedding </Link>
                    </li>
                    <li className={isActive('/reception')}>
                        <Link to="/reception"> Reception </Link>
                    </li>
                    <li className={isActive('/launch-parties')}>
                        <Link to="/launch-parties"> Launch Parties </Link>
                    </li>
                    <li className={isActive('/corporate-meeting')}>
                        <Link to="/corporate-meeting"> Corporate Meeting </Link>
                    </li>
                    <li className={isActive('/birthdays-parties')}>
                        <Link to="/birthdays-parties"> Birthdays Parties </Link>
                    </li>
                    <li className={isActive('/renewing-your-vows')}>
                        <Link to="/renewing-your-vows"> Renewing your vows </Link>
                    </li>
                    <li className={isActive('/engagement')}>
                        <Link to="/engagement"> Engagement </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}
