import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import ProductPage from "./ProductPage";

export default function ProductPageContainer() {
    const [data, setData] = useState(null);
    const { id, type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/products/");
                setData(res.data[0]); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    let filteredData = data ? data[type].find(item => item.id === Number(id)) : null

    return (
        <>
            {filteredData ? 
                (
                    <ProductPage image={filteredData.image} cost={filteredData.cost} rating={filteredData.rating} name={filteredData.name}/>
                ) :
                (
                    <Preloader />
                )
            }
        </>
    );
}
