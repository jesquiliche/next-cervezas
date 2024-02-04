'use client'
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface Props {
    totalPages: number
}

const Pagination = ({ totalPages }: Props) => {
    const pathName = usePathname();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        router.push(pathName + "?page=" + pageNumber);
    };

    const goToFirstPage = () => {
        handleClick(1);
    };

    const goToLastPage = () => {
        handleClick(totalPages);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            handleClick(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            handleClick(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center">
            {totalPages > 1 && (
                <>
                    <button
                        onClick={goToFirstPage}
                        className={`bg-gray-600 ml-0.5 px-1 rounded text-white`}
                    >
                        &lt;&lt;
                    </button>
                    <button
                        onClick={goToPreviousPage}
                        className={`bg-gray-600 ml-0.5 px-1 rounded text-white`}
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handleClick(pageNumber)}
                            className={`bg-white ml-0.5 px-1 border-1 border-gray-900 rounded ${pageNumber === currentPage ? 'active' : ''}`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        onClick={goToNextPage}
                        className={`bg-gray-600 ml-0.5 px-1 rounded text-white`}
                    >
                        &gt;
                    </button>
                    <button
                        onClick={goToLastPage}
                        className={`bg-gray-600 ml-0.5 px-1 rounded text-white`}
                    >
                        &gt;&gt;
                    </button>
                </>
            )}
        </div>
    );
};

export default Pagination;
