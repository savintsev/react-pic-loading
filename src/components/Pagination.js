import React from 'react';

export const Pagination = ({ next, prev, jump, currentPage, maxPage }) => {
  const pages = [...Array(maxPage).keys()].map(p => ++p);

  const pagesItems = pages => pages.map(page => (
    <li
      className="pagination__item"
      key={page}
    >
      <button
        type="button"
        className="pagination__button"
        onClick={() => jump(page)}
        disabled={page === currentPage}
      >{page}</button>
    </li>
  ));

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button pagination__button--prev"
        onClick={() => prev()}
        disabled={currentPage === 1}
        >Предыдущая</button>

      <ul className="pagination__list">
        {pagesItems(pages)}
      </ul>

      <button
        type="button"
        className="pagination__button pagination__button--next"
        onClick={() => next()}
        disabled={currentPage === maxPage}
      >Следующая</button>
    </div>
  );
};

export default Pagination;
