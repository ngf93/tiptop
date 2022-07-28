import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import ArticlesSlider from '../components/ArticlesSlider';

export default function Article(props) {
    return (
        <main>
            <Container className='mb-6'>
                <section className='mb-4 mb-sm-5'>
                    <div className='d-flex align-items-center d-md-block mb-3 mb-sm-4 mb-md-0'>
                        <Link to="/articles" className="btn btn-4 fs-11 px-3 mb-md-5">
                            <VscArrowLeft className='fs-12'/>
                            <span className='ms-2 d-none d-md-inline'>Назад в статьи и советы</span>
                        </Link>
                        <h1 className='inner mb-0 mb-md-5 ms-2 ms-sm-4 ms-md-0'>Название новости</h1>
                    </div>

                    <article className='full'>
                        <figure>
                            <img src="imgs/img3.png" alt="Название новости"/>
                            <figcaption>
                                <h2>Плитка на кухню. Основные правила при выборе.</h2>
                            </figcaption>
                        </figure>
                        <h3>Абзац 1</h3>
                        <p>За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендирование. Цена этому стакану рублей 100-150 максимум.</p>
                        <p>За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендировани</p>
                        <h3>Абзац 2</h3>
                        <p>За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендирование. Цена этому стакану рублей 100-150 максимум.</p>
                        <p>За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендировани</p>
                    </article>
                </section>

                <section>
                    <h2>Читайте также</h2>
                    <ArticlesSlider />
                </section>
            </Container>
        </main>
    );
}