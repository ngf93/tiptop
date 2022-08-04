import { Link } from 'react-router-dom';
import { IoChevronForward } from "react-icons/io5";

export default function Address(props) {
    return (
        <div className='address'>
            <label>
                <input type='radio' name="address" />
                <span className='fs-13 fw-7 ms-2 ms-sm-4'>Казань, Уличная 119, 25</span>
            </label>
            <Link to='edit' className='btn-1 fs-11'>
                <IoChevronForward className='white fs-15 d-md-none' />
                <span className='d-none d-md-block'>Редактировать</span>
            </Link>
        </div>
    );
}