import './Pagination.css'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

export default function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }) {
    let totalPages = Math.ceil(totalProducts / productsPerPage);
    let pages = [];
    let maxVisibleButtons = 5; // Adjust based on your preference

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className='Pagination'>
            <button onClick={() => setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage)} className='button-navigate'><GrLinkPrevious /> Previous</button>

            <div className="totalButtons">
                {pages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? 'active' : ''}
                    >
                        {page}
                    </button>
                ))}
            </div>
                
            <button onClick={() => setCurrentPage(currentPage !== endPage ? currentPage + 1 : currentPage + 0)} className='button-navigate next'>Next<GrLinkNext /></button>
        </div>
    );
}
