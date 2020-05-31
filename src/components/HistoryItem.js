import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePic } from '../actions';

export const HistoryItem = ({ id, src, title, date }) => {
  const dispatch = useDispatch();

  return (
    <li className="historyitems__item">
      <div className="historyitems__media">
        <img
          className="historyitems__pic"
          src={src || ''}
          alt={title || ''}
        />

        <button
          type="button"
          className="historyitems__delete"
          onClick={() => dispatch(deletePic(id))}
        >
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
            <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
          </svg>
        </button>
      </div>

      <div className="historyitems__data">
        {title &&
          <h3 className="historyitems__title">{title}</h3>
        }
        {date &&
          <time className="historyitems__date">
            {date.toLocaleString('ru-ru', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </time>
        }
      </div>
    </li>
  );
};

export default HistoryItem;
