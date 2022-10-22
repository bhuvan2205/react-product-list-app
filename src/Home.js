import { useState } from "react";
import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = () => {

    const [limit, setLimit] = useState(10);
    const [hide, setHide] = useState(false);

    const handleClick = () => {
        if (limit > 15) {
            setHide(true);
        }
        setLimit(limit + 5);
    }
    console.log(limit);

    const url = 'https://fakestoreapi.com/products?limit=' + limit;
    const { data: products, isPending, error } = useFetch(url);

    let btn = '';
    if (!hide) {
        btn =
            <button onClick={handleClick} className="btn">
                <span className="hover-underline-animation"> Load More </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {products && <ProductList products={products} title="All Products" />}
            {btn}
        </div>
    );
}

export default Home;