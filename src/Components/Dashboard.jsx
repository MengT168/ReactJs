import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FetchProduct } from '../service/ProductCategory';

function Dashboard() {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        FetchProduct()
        .then(res=>setProduct(res))
    })
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Images',
            selector: row => <img src={row.images[0]} style={{width:'100px'}}/>
        },
        {
            name: 'Action',
            selector : row => <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
        }
    ];
    
  return (
    <div class="container mx-auto px-10">
        <DataTable
			columns={columns}
			data={product}
		/>
    </div>
  )
}

export default Dashboard