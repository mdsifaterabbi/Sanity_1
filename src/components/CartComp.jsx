import { PortableText } from "@portabletext/react"
import { useContext } from "react";
import { MyMovie } from "../context/database";
import { client } from "../connection/sanity";

const CartComp = ({ cartInfo }) => {

    const { movieName, imageUrl, category, _id, cast, shortDesc } = cartInfo


    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <div className="basis-1/8 p-2">
                    <img src={imageUrl} style={{ width: '100%', height: '100px' }}></img>
                </div>
                <div className="basis-1/5 p-2 border-b-[2px] border-r-[2px] border-red-400 text-center">
                    {movieName}
                </div>
                <div className="basis-1/5 p-2 text-center border-b-[2px] border-red-400">
                    {category.category}
                </div>

            </div>
        </>
    )
}

export default CartComp