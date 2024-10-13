import axios from "axios";
import { useEffect, useState } from "react";
import CasualList from "./CasualList";
import Pagination from "./Pagination/Pagination";

export default function CasualListContainer() {
    let [productsData, setProductsData] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [productsPerPage, setProductsPerPage] = useState(9);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('http://localhost:8080/products/');
                setProductsData(res.data[0].casual);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    let lastProductsPage = currentPage * productsPerPage;
    let firstProductsPage = lastProductsPage - productsPerPage;
    let currentProducts = productsData.slice(firstProductsPage, lastProductsPage);

    return (
        <>
            <h1>Casual</h1>
            <CasualList productsData={currentProducts} />
            <Pagination totalProducts={productsData.length} productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    );
}
