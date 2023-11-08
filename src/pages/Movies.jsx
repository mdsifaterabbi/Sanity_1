import MovieCard from "../components/MovieCard"
import Layout from "../layout/Layout"
import { useContext } from "react"
import { MyMovie } from "../context/database"

const Movies = () => {

    const { movies, searchByField, categories, searchByDropDown } = useContext(MyMovie);

    const [category] = categories;

    //console.log(category?.imageUrlCat);

    return (
        <Layout title="Movies">
            <>
                <section className="flex flex-wrap py-2 gap-3 justify-center">

                    <input onChange={searchByField} type="search" placeholder="Search movie..." className="input input-bordered bg-black rounded-xl basis-[60%] text-white border-white" />


                    <select id="dropdown_1" className="select w-full bg-black text-white basis-[25%]" onChange={searchByDropDown}
                    >
                        {
                            categories.map(cat => <option key={cat._id} value={cat.category}>{cat.category}</option>)
                        }

                    </select>

                </section>
                <div className="container flex flex-wrap mx-auto justify-center py-5 gap-7">
                    {/* <MovieCard /> */}
                    {
                        movies.map((movie) => <MovieCard key={movie._id} movieInfo={movie} />)
                    }

                </div>
                <div className="container text-center mx-auto py-5">
                    <a href="#" className="bg-purple-900 mr-2 py-[5px] px-[15px] no-underline text-white rounded-[30px] hover:bg-yellow-600 transition-all linear  duration-300">Prev</a>
                    <a href="#" className="bg-purple-900 ml-2 py-[5px] px-[15px] no-underline text-white rounded-[30px] hover:bg-yellow-600 transition-all linear  duration-300">Next</a>
                </div>
            </>
        </Layout>

    )
}

export default Movies