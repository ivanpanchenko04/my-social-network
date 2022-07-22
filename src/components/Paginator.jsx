import React, {useState} from 'react';
import s from './Users.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map(page => {
            return <span className={cn({[s.selectedPage] : currentPage === page}, s.pageNumber)}
                         key={page}
                         onClick={(e) => {
                             onPageChanged(page)
                         }
                         }>{page}</span>
        })}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}

export default Paginator;