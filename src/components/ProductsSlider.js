import ProductCard from '../components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductsSlider() {
    return (
        <section className='mb-6'>
            <h4 className='fs-20 fw-7 mb-4 mb-md-5'>Вам может понравится</h4>
            <div className='position-relative'>
                <Swiper
                    className='position-unset'
                    modules={[Navigation]}
                    spaceBetween={8}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                >
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}