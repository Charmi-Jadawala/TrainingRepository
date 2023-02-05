import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTML from './routes/HTML';
import CSS from './routes/CSS';
import JavaScript from './routes/JavaScript';
import ReportCard from './routes/ReportCard';
import DeptHeir from './routes/DeptHeir';
import EmployeeForm from './routes/EmployeeForm';
import LoginForm from './routes/LoginForm';
import Article from './routes/Article';
import HoriMenu from './routes/HoriMenu';
import Resume from './routes/Resume';
import BasicForm from './routes/BasicForm';
import CSSTask from './routes/CSSTask';
import JavaScriptTask from './routes/JavaScriptTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={
                    <div className='d-flex justify-content-center'>
                        <img src='./assets/radix.jpg' className='img-fluid w-50' />
                    </div>
                } />

                <Route path="html" element={<HTML />}>
                    <Route index element={
                        <div className='d-flex justify-content-center'>
                            <img src='./assets/html.png' className='img-fluid w-25 mt-5 pt-5' />
                        </div>
                    } />

                    <Route path="day1/employeeform" element={<EmployeeForm />} />
                    <Route path="day1/reportcard" element={<ReportCard />} />
                    <Route path="day1/deptheirarchy" element={<DeptHeir />} />
                    <Route path="day1/loginform" element={<LoginForm />} />
                    <Route path="day1/article" element={<Article />} />
                    <Route path="day1/horizontalmenu" element={<HoriMenu />} />
                    <Route path="day2/resume" element={<Resume />} />
                    <Route path="day2/basicform" element={<BasicForm />} />
                </Route>

                <Route path="css" element={<CSS />}>
                    <Route index element={
                        <div className='d-flex justify-content-center'>
                            <img src='./assets/css.png' className='img-fluid w-25 mt-5 pt-5' />
                        </div>
                    } />

                    <Route path="csstasks" element={<CSSTask />} />
                </Route>
                
                <Route path="javascript" element={<JavaScript />}>
                    <Route index element={
                        <div className='d-flex justify-content-center'>
                            <img src='./assets/javascript.png' className='img-fluid w-25 mt-5 pt-5' />
                        </div>
                    } />

                <Route path="jstasks" element={<JavaScriptTask />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
