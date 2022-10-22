import { Link } from "react-router-dom";

const ProductList = ({ products, title }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-preview" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <h2>{product.title}</h2>
                        </Link>
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
        </>
    );
}



export default ProductList;