import React from 'react';
import {Link} from 'react-router-dom';

export default function CategoryCard(props) {
    return (
        <div className='category-card'>
            <h3><Link to='category'>Стройматериалы</Link></h3>
            <ul className='list-unstyled'>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
            </ul>
            <button type='button' className='more mt-3 mt-sm-4'>Ещё 15</button>
        </div>
    );
}