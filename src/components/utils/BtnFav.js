import { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function BtnFav(props) {
    const [fav, setFav] = useState(props.fav);

    return (
        <button type='button' className='btn-fav' onClick={()=>setFav((fav)?false:true)}>
            {
                (fav)
                ? <FaHeart className='sec-color'/>
                : <FaRegHeart/>
            }
        </button>
    );
}