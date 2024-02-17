import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FetchProduct } from "../service/ProductCategory";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(() => {
    FetchProduct().then((res) => setProduct(res));
  },[]);
  useEffect(()=>{
    const result=product.filter(pro=>{
      return pro.title && pro.title.toLowerCase().match(search.toLowerCase())
    })
    setProduct(result)
  },[search])
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Images",
      selector: (row) => <img src={row.images[0]} style={{ width: "100px" }} />,
    },
    {
      name: "Action",
      selector: (row) => (
        <button
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/download"
          onClick={()=>navigate('/edit',{state:row})} 
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div class="container mx-auto px-10">
      <DataTable  columns={columns} 
                  data={product} 
                  pagination 
                  subHeader 
                  subHeaderComponent={
                    <input onChange={(e)=>{
                      setSearch(e.target.value);
                    }} type="text" id="default-input" placeholder="Search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                  }/>
    </div>
  );
}

export default Dashboard;
