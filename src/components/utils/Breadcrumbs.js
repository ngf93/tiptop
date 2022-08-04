import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routeList } from '../../routes/AppRouter';
import { NavLink } from 'react-router-dom';

export default function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(routeList);
    return (
        <nav className="breadcrumbs">
            <ul>
            {
                breadcrumbs.map(({match, breadcrumb}) => (
                    <li key={match.pathname}>
                        <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                    </li>
                ))
            }
            </ul>
        </nav>
    );
}