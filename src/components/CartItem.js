import BtnFav from '../components/utils/BtnFav';
import { FaRegTrashAlt } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function CartItem(props) {
    return (
        <div className='cart-item'>
            <img src="imgs/img5.png" />
            <div className='info'>
                <div className='order-1 flex-1 pe-3'>
                    <div className='fw-6 mb-1 mb-md-2 mb-xl-3'><span className='light-gray'>Код:</span> 25678</div>
                    <h5 className='mb-1 mb-md-3 mb-xl-4'>Большое название товара</h5>
                    <div className='fs-11 gray'>Производитель</div>
                </div>
                <div className='order-3 order-md-2 count-input'>
                    <button type='button'>
                        <IoRemove/>
                    </button>
                    <input type="number" placeholder='0' min={0}/>
                    <button type='button'>
                        <IoAdd/>
                    </button>
                </div>
                <div className='order-2 order-md-3 price'>625 ₽</div>
            </div>
            <div className='btns'>
                <BtnFav/>
                <button type='button' className='fs-16 mt-4'><FaRegTrashAlt/></button>
            </div>
        </div>
    );
}