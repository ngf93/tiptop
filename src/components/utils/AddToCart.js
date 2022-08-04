import {useState} from 'react';
import { IoAdd, IoRemove } from "react-icons/io5";

export default function AddToCart(props) {
    const [cart, setCart] = useState(props.cart);

    return (
        <div className='count'>
            {
                (cart===0)&&
                <button type='button' className='btn-1 w-100 fs-11' onClick={()=>setCart(cart+1)}><span>В корзину</span></button>
            }
            {
                (cart>0)&&
                <div className='count-input'>
                    <button type='button' onClick={()=>setCart(cart-1)}>
                        <IoRemove/>
                    </button>
                    <input type="number" placeholder='0' value={cart} min={0}/>
                    <button type='button' onClick={()=>setCart(cart+1)}>
                        <IoAdd/>
                    </button>
                </div>
            }
        </div>
    );
}