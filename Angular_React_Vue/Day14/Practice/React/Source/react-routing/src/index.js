import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="invoices" element={<Invoices />}>
                    <Route index element={<p className='text-success display-6 m-4 text-center'>Please select an invoice</p>} />
                    <Route path=":id" element={<Invoice />} />
                </Route>
                <Route path="expenses" element={<Expenses />} />
                <Route path="*" element={<p className='text-danger display-6 m-4 text-center'>Oops! Page Not Found</p>} />
            </Route>          
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
