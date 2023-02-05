function ProductList(props) {
    return (
        <div>
            <div class="container mx-auto my-2">
                <table class="table my-3 table-striped">
                    <caption></caption>
                    <thead>
                        <tr>
                        <th>Product Name</th> 
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payable Amount</th>
                        </tr>
                    </thead>
                    <tbody class="text-primary">
                    { props.ProductList.map(( products ) => ( 
                        <tr>
                            <td>{ products.ProductName }</td>
                            <td>{ products.Price }</td>
                            <td>{ products.Qty }</td>
                            <td>{ products.Amount }</td>
                            <td>{ products.PayableAmount }</td>
                        </tr>
                        )) 
                    }
                    </tbody>
                </table>
            </div>
      </div>
    );
  }
  
export default ProductList;