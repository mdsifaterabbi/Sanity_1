
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { MyMovie } from '../context/database';
import { useContext } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import './styles.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';



import pathan_1 from '../assets/pathan_1.jpg'

const CatMovieSlider = () => {

    const { categories } = useContext(MyMovie);
    // const { movies } = useContext(MyMovie);
    // console.log(categories);


    return (
        <>
            <Swiper
                mousewheel={true}
                slidesPerView={6}
                spaceBetween={5}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
                className="mySwiper pb-2"
            >

                {
                    categories.map(cat => <SwiperSlide key={cat._id}>
                        <div className='catSlider'>
                            <div className='badge badge-info'>{cat.category}</div>
                            <img src={cat.imageUrlCat} alt="Movie" title={cat.category} style={{ width: '300px', height: '300px', marginTop: '10px', marginBottom: '20px', borderRadius: '10px' }} />
                        </div>

                    </SwiperSlide>)
                }

                {/* <SwiperSlide><img src={pathan_1} alt="Movie" style={{ width: '300px', height: '300px', marginTop: '20px', marginBottom: '20px', borderRadius: '30px' }} /></SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default CatMovieSlider