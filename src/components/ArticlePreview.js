import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticlePreview(props) {
    return (
        <article className='preview'>
            <Link to="/articles/article">
                <figure>
                    <img src={props.imgURL} alt={props.title}/>
                    <figcaption>
                        <h3>{props.title}</h3>
                    </figcaption>
                </figure>
            </Link>
            <div className='mt-3 mt-md-4 d-flex justify-content-between align-items-center'>
                <h5 className='mb-0'>{props.subTitle}</h5>
                <Link to="/articles/article" className='link td-under ms-3'>Читать</Link>
            </div>
        </article>
    );
}