import React from 'react';

export default function CategoryCard(props) {
    return (
        <div className='category-card'>
            <h3>Стройматериалы</h3>
            <ul className='list-unstyled'>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <li><a href='/'>Заголовок</a></li>
                <button type='button' className='blue fs-11 text-decoration-underline mt-4'>Ещё 15</button>
            </ul>
        </div>
    );
}