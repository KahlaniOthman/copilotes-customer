import React from 'react';

import demo from 'images/demo.mp4'

import './style.css'
const Demo = () => {
  return (
    <div className="demo">
      <h2>Demo</h2>
      <video controls width="600px">
        <source src={demo} type='video/mp4' />
      </video>
    </div>
  );
}
export default Demo
