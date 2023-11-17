import { createContext, useEffect, useState } from 'react';
import { client } from '../connection/sanity';
import { toast } from 'react-toastify';

export const MyMovie = createContext(); //creating context object named as MyMovie


export function AllMovieContextProvider({ children }) { //this function is wrapped in main.jsx

    const [movies, setMovies] = useState([]);
    const [moviesForMovieSlider, setMoviesForMovieSlider] = useState([]);
    const [categories, setCategory] = useState([]);
    const [addToCart, setAddToCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    // ======================== Pagination code starts from here ==============================

    const [page, setPage] = useState(1);
    const [isLastPage, setlastPage] = useState(1);

    const itemsPerPage = 4;

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        //console.log("prev Page working!");
    }
    const nextPage = () => {
        setPage(page + 1);
        //console.log("Next Page working!");
    }

    //console.log("Page = ",page);

    //=============================== Pagination code ended here================================

    const getAllMoviesForMovieSlider = async () => {

        const allMoviesForMovieSliderUse = await client.fetch("*[_type == 'movie']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast, shortDesc }");

        return setMoviesForMovieSlider(allMoviesForMovieSliderUse);

    }


    const getAllMovies = async () => {

        setIsLoading(true);

        const offset = (page - 1) * itemsPerPage;

        //console.log("offset = ",offset);

        //const allMovies = await client.fetch("*[_type == 'movie']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast, shortDesc }");

        const allMovies = await client.fetch(`*[_type == 'movie']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast, shortDesc }[${offset}...${offset + itemsPerPage}]`);

        //finding total movies using count method
        const allMoviesCount = await client.fetch("*[_type == 'movie']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast, shortDesc }");

        const lastPageNumber = Math.ceil((allMoviesCount.length) / itemsPerPage);

        setIsLoading(false);

        return [setMovies(allMovies), setlastPage(lastPageNumber)];


    }
    const getAllCategory = async () => {
        const allCategory = await client.fetch("*[_type == 'category']{category, 'imageUrlCat': catImage.asset->url, }");
        //const allCategory = await client.fetch("*[_type == 'category']");

        return setCategory(allCategory);
    }
    const searchByField = (myEvent) => {
        const searchValue = myEvent.target.value;
        fetchSearchedMovie(searchValue);
    }

    const fetchSearchedMovie = async (searchValue) => {
        const searchQuery = `*[_type == 'movie' && movieName match "${searchValue}*" ] {movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast }`;
        const searchResult = await client.fetch(searchQuery);
        //console.log(searchResult);
        setMovies(searchResult);
    }

    /*============Data filter from dropdown starts from here===================*/

    const searchByDropDown = (myEvent2) => {
        const selectedValue2 = myEvent2.target.value;
        //console.log(selectedValue2);
        fetchByDropDown(selectedValue2);

    }

    const fetchByDropDown = async (selectedValue2) => {
        // const searchQuery2 = `*[_type == 'movie'] {movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast }`;

        const searchQuery2 = `*[_type == 'movie' && category._ref in *[_type == 'category' && category == "${selectedValue2}" ]._id] {movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast }`;


        const searchResult2 = await client.fetch(searchQuery2);


        setMovies(searchResult2);

    }

    /*==============Data filter from dropdown ends here=================*/

    /*===========================add to card starts form here===============================*/

    const addCardFunction = (cartDataReceived) => {
        //console.log('Add Card working!',cartDataReceived);
        setAddToCart([...addToCart, cartDataReceived]);

        toast.success("Product Added!", { position: "bottom-right", theme: "dark", });
    }


    /*===========================add to card ends here===============================*/



    useEffect(() => {

        getAllMovies();
        getAllCategory();
        getAllMoviesForMovieSlider();

    }, [page])

    return <MyMovie.Provider value={{ movies, categories, searchByField, searchByDropDown, addCardFunction, addToCart, prevPage, nextPage, page, isLastPage, moviesForMovieSlider, isLoading  }} >
        {children}
    </MyMovie.Provider>
}


