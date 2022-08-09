import { FiChevronRight } from "react-icons/fi";

export default function NavPagination(props) {
    return (
        <nav className='pagination mt-4 mt-sm-5'>
            <ul>
                <li>
                    <button type='button'>1</button>
                </li>
                <li>
                    <button type='button' className='active'>2</button>
                </li>
                <li>
                    <button type='button'>3</button>
                </li>
                <li>
                    <button type='button'>...</button>
                </li>
                <li>
                    <button type='button'>8</button>
                </li>
                <li>
                    <button type='button'>Далее <FiChevronRight/></button>
                </li>
            </ul>
        </nav>
    );
}