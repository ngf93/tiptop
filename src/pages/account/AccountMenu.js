import { NavLink } from 'react-router-dom';
import { GrFormNext } from "react-icons/gr";

export default function AccountMenu() {
    return (
        <nav className="box-2 account-nav">
            <ul>
                <li>
                    <NavLink to='profile'>
                        <span>Личные данные</span>
                        <GrFormNext />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='purchase-history'>История покупок</NavLink>
                </li>
                <li>
                    <NavLink to='delivery-addresses'>Адреса доставок</NavLink>
                </li>
                <li>
                    <NavLink to='bonus-card'>Бонусная карта</NavLink>
                </li>
                <li>
                    <button type='button'>Выход</button>
                </li>
            </ul>
        </nav>
    )
}