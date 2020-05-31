import React from 'react';
import { useSelector } from 'react-redux';

export const LatestPic = ({ className }) => {
  const latestPic = useSelector(state => state.pics.last());
  const isLoading = useSelector(state => state.pics.get('loading'));

  return !isLoading ? (
    <img
      className={className}
      src={latestPic.src}
      alt={latestPic.title || ''}
      />
    ) : (
      <span className={className}>Загружается...</span>
    );
};

export default LatestPic;
