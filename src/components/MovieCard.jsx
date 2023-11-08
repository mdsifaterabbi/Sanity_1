import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom'
import { MyMovie } from '../context/database';
import { useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieCard = ({ movieInfo }) => {
    const myStyle = {
        backgroundColor: '#030303',
        color: '#ffffff'
    }
    const { movieName, imageUrl, _id, category, cast, shortDesc } = movieInfo;

    //console.log(<PortableText value={cast} />); //successfully done in html
    console.log(<PortableText value={shortDesc} />); //successfully done in html

    const {addCardFunction} = useContext(MyMovie);

    return (
        <>
            <div className="card shadow-xl w-[250px] h-[auto]" style={myStyle} >
                <figure><img src={imageUrl} alt="Movie" style={{ width: '100%', height: '250px',borderRadius: '15px' }} /></figure>
                <div className="card-body p-3">
                    <span className="text-sm">{movieName}</span>
                    <span className='badge badge-success'>{category?.category}</span>
                    <div className="card-actions justify-start">
                        <Link to={`/movies/${_id}`}><button className="badge badge-secondary">Details</button></Link>
                        <button onClick={()=>addCardFunction(movieInfo)} className='badge badge-warning'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard