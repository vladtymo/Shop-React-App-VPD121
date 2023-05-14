import { useEffect, useState } from "react";

const api = 'https://dummyjson.com/products';

const pagination = {
    limit: 5,
    skip: 0,
    total: null
};

export function ProductList() {

    let [products, setProducts] = useState([]);

    // component lifecycle: mount -> update -> unmount
    useEffect(() => {
        console.log("Component mount!");
        loadProducts();
    }, []);

    useEffect(() => {
        console.log("Component update!");
    }, [products]);

    useEffect(() => {
        return () => console.log("Component unmount!");
    }, []);

    const loadProducts = () => {
        const url = `${api}?limit=${pagination.limit}&skip=${pagination.skip}`;
        pagination.skip += pagination.limit;

        fetch(url).then(res => res.json()).then(data => {
            console.log(data.products);

            //products = data.products;
            setProducts([...products, ...data.products]); // [...old_array, ...new_array]
        });
    }

    return (
        <>
            <h2>Product Catalog</h2>
            <ol className="product-list">
                {products.map(p => <li key={p.id}>{p.brand} {p.title} {p.price}$</li>)}
            </ol>
            <button onClick={loadProducts}>Load Products</button>
        </>
    )
}