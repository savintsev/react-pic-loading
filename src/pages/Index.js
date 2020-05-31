import React from 'react';

import LatestPic from '../components/LatestPic';
import LoadPic from '../components/LoadPic';

import './Index.css';

const Index = () => {
  return (
    <div className="indexpage">
      <h1 className="indexpage__title">Главная</h1>
      <div className="picloader">
        <LatestPic className="picloader__pic"></LatestPic>
        <LoadPic className="picloader__load"></LoadPic>
      </div>
    </div>
  );
};

export default Index;
