import { createContext, useEffect, useState } from 'react';
import { client } from '../connection/sanity';
import { toast } from 'react-toastify';

export const MyMovie = createContext(); //creating context object named as MyMovie


export function AllMovieContextProvider({ children }) { //this function is wrapped in main.jsx

    const [movies, setMovies] = useState([]);
    const [categories, setCategory] = useState([]);
    const [addToCart, setAddToCart] = useState([]);

    const getAllMovies = async () => {
        const allMovies = await client.fetch("*[_type == 'movie']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, cast, shortDesc }");

        return setMovies(allMovies);
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

        toast.success("Product Added!",{position: "bottom-right",theme: "dark",});
    }

    //console.log(addToCard);

    /*===========================add to card ends here===============================*/


    useEffect(() => {

        getAllMovies();
        getAllCategory();

    }, [])

    return <MyMovie.Provider value={{ movies, categories, searchByField, searchByDropDown, addCardFunction, addToCart }} >
        {children}
    </MyMovie.Provider>
}


