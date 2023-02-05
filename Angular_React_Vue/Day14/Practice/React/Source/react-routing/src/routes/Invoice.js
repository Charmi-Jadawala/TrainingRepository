import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../data';

export default function Invoice() {

    let params = useParams();
    let invoice = getInvoice(parseInt(params.id));

    return (
        // <div>Invoice { params.id }</div>
        <div>
            <h2 className="pb-2 text-primary display-6 text-center">Invoice Details</h2>
			<div className="card fs-5 m-3 p-0 w-25 mx-auto">
				<div className="card-header text-primary">Invoice { params.id }</div>
				<div className="card-body">
					<p>Name: { invoice.name }</p>
					<p>Amount: { invoice.amount }</p>
					<p>Due Date: { invoice.due }</p>
				</div> 
			</div>
        </div>
    )
}
