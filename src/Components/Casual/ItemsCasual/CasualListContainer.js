import axios from "axios";
import { useEffect, useState } from "react";
import CasualList from "./CasualList";
import Pagination from "./Pagination/Pagination";

export default function CasualListContainer({ price }) {
    let [productsData, setProductsData] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('http://localhost:8080/products/');
                setProductsData(res.data[0].casual.filter((product) => Number(product.cost) >= price));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [price]);

    let lastProductsPage = currentPage * productsPerPage;
    let firstProductsPage = lastProductsPage - productsPerPage;
    let currentProducts = productsData.length ? productsData.slice(firstProductsPage, lastProductsPage) : [];

    return (
        <>
            <h1>Casual</h1>
            <CasualList productsData={currentProducts} />
            <Pagination 
                totalProducts={productsData.length} 
                productsPerPage={productsPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
            />
        </>
    );
}
