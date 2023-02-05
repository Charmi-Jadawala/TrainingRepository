import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {

    let invoices = getInvoices();

    return (
        <div className="container-fluid bg-light p-4 fs-6 text-center">
            <h1 className="pb-2">Welcome to Invoices Page !!!</h1>

            { invoices.map((invoice) => (
                <Link to={ `/invoices/${invoice.number}` } key={invoice.number} className="btn btn-secondary mx-2">{invoice.name}</Link>
            ))}

            <div className='m-5'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
