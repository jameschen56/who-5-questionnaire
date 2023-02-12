import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// const Root = () => {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   )
// }

// ReactDOM.render(
//   <React.StrictMode>
//       <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// )