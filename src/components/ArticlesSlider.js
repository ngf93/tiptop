import ArticlePreview from './ArticlePreview';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ArticlesSlider(props) {
    return (
        <div className='position-relative'>
            <Swiper
            className='position-unset'
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}