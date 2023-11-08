import { useContext } from "react"
import Layout from "../layout/Layout"
import { MyMovie } from "../context/database";
import CartComp from "../components/CartComp";


const Cart = () => {

    const {addToCart} = useContext(MyMovie);

    return (
        <Layout>
            <div className="text-center py-5 text-3xl italic tracking-widest"><span>Your Cart Items: </span></div>
            {
                addToCart.map(cartItem => <CartComp key={cartItem._id} cartInfo={cartItem} />)
            }
        </Layout>
    )
}

export default Cart