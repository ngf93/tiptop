import React, {useState} from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function ProductCard(props) {
    const [fav, setFav] = useState(props.fav);
    const [cart, setCart] = useState(0);

    return (
        <div className='product-card'>
            <div className='position-relative mb-4'>
                <img src="imgs/img2.png"/>
                <div className='top-left'>
                    {
                        (props.code) &&
                        <div className='fw-6 light-gray mb-1'>Код: <span className='black'>{props.code}</span></div>
                    }
                    {
                        (props.discount) &&
                        <div className='discount'>-{props.discount}%</div>
                    }
                </div>
                <button type='button' className='btn-fav' onClick={()=>setFav((fav)?false:true)}>
                    {
                        (fav)
                        ? <FaHeart/>
                        : <FaRegHeart/>
                    }
                </button>
                {
                    (props.bonus) &&
                    <div className='bonus'>До {props.bonus} % бонусами</div>
                }
            </div>
            <h5>{props.title}</h5>
            <div className='d-flex align-items-baseline mb-4'>
                {
                    (props.discount) ?
                    <>
                        <del className='gray fs-11 fw-6'>{props.price}</del>
                        <span className='ms-2 fs-15 fw-6'>
                            {
                                parseInt(props.price) * (100 - parseInt(props.discount)) / 100
                            }
                        </span>
                    </>
                    : <span className='ms-2 fs-15 fw-6'>{props.price}</span>
                }
                <span className='ms-2 fs-13'>₽</span>
            </div>
            {
                (cart===0)&&
                <button type='button' className='btn btn-1 w-100 fs-11' onClick={()=>setCart(cart+1)}>В корзину</button>
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