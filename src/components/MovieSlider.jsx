import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import './styles.css'

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';



import pat_03 from '../assets/pat_03.jpg'
import golmal from '../assets/golmal.jpg'
import gadar from '../assets/gadar.jpg'
import jawan from '../assets/jawan.jpg'
import { useContext } from 'react';
import { MyMovie } from '../context/database';


const MovieSlider = () => {

    const { movies } = useContext(MyMovie);

    return (

        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                //grabCursor={true}
                mousewheel={true}
                slidesPerView={4}
                spaceBetween={0}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
                className="mySwiper pb-2"
            >


                {
                    movies.map(movie => <SwiperSlide key={movie._id}><img className='movieSlider' src={movie.imageUrl} alt="Movie" style={{ width: '300px', height: 'auto' ,marginTop: '20px', marginBottom: '20px', borderRadius: '30px' }} /></SwiperSlide>)
                }

                {/* <SwiperSlide><img src={golmal} alt="Movie" style={{ marginTop: '20px', marginBottom: '20px', borderRadius: '30px' }} /></SwiperSlide>
                <SwiperSlide><img src={gadar} alt="Movie" style={{ marginTop: '20px', marginBottom: '20px', borderRadius: '30px' }} /></SwiperSlide>
                <SwiperSlide><img src={jawan} alt="Movie" style={{ marginTop: '20px', marginBottom: '20px', borderRadius: '30px' }} /></SwiperSlide> */}


            </Swiper>
        </>

    )
}

export default MovieSlider