import React from 'react';

const Pagination = ({perPage, totalItems, paginate}) => {
    const pageNumbers = []
    for(let i=1; i<=Math.ceil(totalItems/perPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className="m-5">
            <ul className="pagination">
                {pageNumbers.map(num=>(
                    <li key={num} className="page-item">
                        <a
                            onClick={(e)=>{
                                e.preventDefault()
                                paginate(num)}}
                            href="!#"
                            className="page-link">{num}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;