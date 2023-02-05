import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HTML() {
    return (
        <div className='container-fluid p-0'>
            <div className='row' style={{ height: "90vh" }}>
                <div className='col-3 bg-primary text-white'>
                    <ol>
                        <li className='pt-4'>Day-1
                            <ul>
                                <li>Assignments
                                    <ol>
                                        <li><Link to="/html/day1/employeeform" className='text-white text-decoration-none'>Employee Details Form</Link></li>
                                    </ol>
                                </li>
                                <li>Practicals
                                    <ol>
                                        <li><Link to="/html/day1/reportcard" className='text-white text-decoration-none'>Report Card</Link></li>
                                        <li><Link to="/html/day1/deptheirarchy" className='text-white text-decoration-none'>Department Heirarchy</Link></li>
                                        <li><Link to="/html/day1/loginform" className='text-white text-decoration-none'>Login Form</Link></li>
                                        <li><Link to="/html/day1/article" className='text-white text-decoration-none'>Article</Link></li>
                                        <li><Link to="/html/day1/horizontalmenu" className='text-white text-decoration-none'>Horizontal Menu</Link></li>
                                    </ol> 
                                </li>
                            </ul>
                        </li><br />
                        <li>Day-2
                            <ul>
                                <li>Assignments
                                    <ol>
                                        <li><Link to="/html/day2/resume" className='text-white text-decoration-none'>Resume</Link></li>
                                    </ol> 
                                </li>
                                <li>Practicals
                                    <ol>
                                        <li><Link to="/html/day2/basicform" className='text-white text-decoration-none'>Basic Form</Link></li>
                                    </ol>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className='col-9 p-4 px-5 overflow-scroll' style={{ height: "90vh" }}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
