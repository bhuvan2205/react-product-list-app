import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);

    const path = useHistory();

    const url ='https://fakestoreapi.com/products';

    const handleSubmit = (e) => {

        //Prevent page load
        e.preventDefault();
        
        // create body for fetch-post
        const product = { title, description, category, price, image };
        console.log(product);
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(() => {
                setLoading(false);
                alert('Product Added successfully!', product);
                setTitle('');
                setDescription('');
                setCategory('');
                path.push('/');
            })
    }

    return (
        <div className="create">
            <h2>Add a new Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Desc :</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label>Price :</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label>Category :</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value='jwelley'>jwellery</option>
                    <option value='electronics'>electronics</option>
                    <option value="women's clothing">women's clothing</option>
                </select>
                <label>Select image :</label>
                <input
                    type="file"
                    value={image}
                    accept="image/*"
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit" disabled={loading}>Submit</button>
            </form>
        </div>
    );
}

export default Create;