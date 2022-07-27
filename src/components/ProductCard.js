import {Link} from 'react-router-dom';
import BtnFav from './utils/BtnFav';
import AddToCart from './utils/AddToCart';

export default function ProductCard(props) {
    return (
        <div className='product-card'>
            <div className='position-relative mb-2 mb-sm-4'>
                <Link to="/product"><img src="imgs/img2.png"/></Link>
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
                <BtnFav fav={props.fav} />
                {
                    (props.bonus) &&
                    <div className='bonus'>До {props.bonus} % бонусами</div>
                }
            </div>
            <h5 className='fw-4 mb-1 mb-sm-2'><Link to="/product">{props.title}</Link></h5>
            <div className='d-flex align-items-baseline mb-2 mb-md-4 mb-xxl-5'>
                {
                    (props.discount) ?
                    <>
                        <del className='gray fs-11 fw-6 me-2'>{props.price}</del>
                        <span className='fs-15 fw-6'>
                            {
                                parseInt(props.price) * (100 - parseInt(props.discount)) / 100
                            }
                        </span>
                    </>
                    : <span className='fs-15 fw-6'>{props.price}</span>
                }
                <span className='ms-2 fs-13'>₽</span>
            </div>
            <AddToCart cart={0}/>
        </div>
    );
}