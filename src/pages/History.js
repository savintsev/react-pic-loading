import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import usePagination from '../hooks/pagination';
import HistoryItem from '../components/HistoryItem';
import Pagination from '../components/Pagination';

import './History.css';

const ITEMS_PER_PAGE = 5;

const History = () => {
  const allPics = useSelector(state => state.pics.remove('loading').toArray());

  const {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage
  } = usePagination(allPics, ITEMS_PER_PAGE);

  const picsItems = currentData()
    .map(([id, {src, title, date}]) => (
      <HistoryItem
        key={id}
        id={id}
        src={src}
        title={title}
        date={date}
      />
    ));

  return (
    <div className="historypage">
      <header className="historypage__header">
        <NavLink to="/" exact className="historypage__back">
          <svg
            role="img"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M20.016 11.016v1.969h-12.188l5.578 5.625-1.406 1.406-8.016-8.016 8.016-8.016 1.406 1.406-5.578 5.625h12.188z"></path>
          </svg>
        </NavLink>

        <h1 className="historypage__title">История</h1>
      </header>

      <div className="historyitems">
        <ul className="historyitems__list">
          {picsItems}
        </ul>
        <Pagination
          next={next}
          prev={prev}
          jump={jump}
          currentPage={currentPage}
          maxPage={maxPage}
        />
      </div>
    </div>
  );
}

export default History;
