import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const ProductDetails = () => {

    const path = useHistory();
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const { data: product, error, isPending } = useFetch(url);

    const handleClick = () => {
        fetch(url, {
            method: 'DELETE'
        })
            .then(() => {
                alert('Product deleted sucessfully!!')
                path.push('/');
            })
    }

    return (
        <div className="product-details">
            {isPending && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {product && (
                <article>
                    <div>
                        <img src={product.image} alt='Product' />
                        <h3 style={{ textAlign: "center" }}>Price: ${product.price}</h3>
                    </div>
                    <div>
                        <h2>{product.title}</h2>
                        <p>Category - {product.category}</p>
                        <div>{product.description}</div>
                        <button onClick={handleClick}>Delete item</button>
                    </div>
                </article>
            )}
        </div>
    )
}

export default ProductDetails;