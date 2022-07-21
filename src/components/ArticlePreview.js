import React from 'react';

export default function ArticlePreview(props) {
    return (
        <article className='preview'>
            <a href="/">
                <figure>
                    <img src={props.imgURL} alt={props.title}/>
                    <figcaption>
                        <h3>{props.title}</h3>
                    </figcaption>
                </figure>
            </a>
            <div className='mt-4 d-flex justify-content-between align-items-center'>
                <h5 className='mb-0'>{props.subTitle}</h5>
                <a href="/" className='link td-under ms-3'>Читать</a>
            </div>
        </article>
    );
}