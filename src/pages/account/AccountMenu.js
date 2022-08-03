import { NavLink } from 'react-router-dom';
import { GrFormNext } from "react-icons/gr";

export default function AccountMenu() {
    return (
        <>
        <h2 className='d-lg-none ms-sm-4 mb-4'>Сергей</h2>
        <nav className="box-2 account-nav">
            <ul>
                <li>
                    <NavLink to='profile'>
                        <span>Личные данные</span>
                        <GrFormNext />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='purchase-history'>
                        <span>История покупок</span>
                        <GrFormNext />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='delivery-addresses'>
                        <span>Адреса доставок</span>
                        <GrFormNext />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='bonus-card'>
                        <span>Бонусная карта</span>
                        <GrFormNext />
                    </NavLink>
                </li>
                <li>
                    <button type='button'>Выход</button>
                </li>
            </ul>
        </nav>
        </>
    )
}