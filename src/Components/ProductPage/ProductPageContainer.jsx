import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";

export default function ProductPageContainer() {
    const [data, setData] = useState(null);
    const { id, type } = useParams();

    useEffect(() => {
        const fetchData = () => {
            try {
                const res = axios.get("http://localhost:8080/products/");
                console.log(res.data); // Log the response to see the structure
                setData(res.data); // Setting the products data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filteredData = data[type]

    console.log(filteredData);

    return (
        <>
            {filteredData ? (
                <ProductPage image={filteredData.image} />
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
