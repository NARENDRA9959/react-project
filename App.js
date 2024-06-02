import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxSpanElement = <h1 className='heading'>Welcome to React Course</h1>;

console.log("jsxSpanElement", jsxSpanElement);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxSpanElement);