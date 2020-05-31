import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchPic } from '../actions';

export const LoadPic = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={className}
      onClick={() => dispatch(fetchPic())}
    >Загрузить</button>
  );
};

export default LoadPic;