import React from 'react';

export default function CategoryCard(props) {
    return (
        <div className='category-card'>
            <h3><a href='/'>Стройматериалы</a></h3>
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