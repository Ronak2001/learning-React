import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 1st argument is element name, 2nd is element attribute and 3rd,4th ...nth is anything between start and end tags
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "January"),
    React.createElement("li", null, "Fabuary"),
    React.createElement("li", null, "March")
  ),
);
