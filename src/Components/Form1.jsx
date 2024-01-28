import React from 'react'
import { useEffect , useState } from 'react'
import { FetchCategory , InsertProduct} from '../service/ProductCategory'
function Form1() {

  const [category,setCategory] = useState([])
    const [product,setProduct] = useState({
        title: "",
        price: "",
        categoryId : "",
        description : "",
        images : ["https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"]
    })

    useEffect(()=>{
      FetchCategory()
      .then(res=>setCategory(res))
      
  },[])

  const handleClick=(e)=>{
    let {name , value} = e.target
    console.log(name);
    console.log(value);
    setProduct(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
    console.log(product&&product);
}

  const onSubmit = ()=>{
    
    InsertProduct(product)
  }

  const upLoadIimg = (e)=>{
    console.log(e.target.files);
  }

  return (

<form class="max-w-sm mx-auto p-8 mb-3 mt-5 " style={{backgroundImage:'radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )' , borderRadius:'6px' }}> 
  <div class="mb-5">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="username-success" name="title" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter Title" onChange={handleClick}/>
  </div>
  <div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input type="text" id="username-error" name="price" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Price" onChange={handleClick}/>
    
  </div>
	<div>
<label for="username-error" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
  <select id="countries" name="categoryId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleClick}>

   {
                     category.map((item)=>(
                        <option value={item.id}>{item.name}</option>
                        ))
                   }
  </select>
	</div>
  <div>
    <label for="countries" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Image</label>
    <input type="file" name='img' class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Price" onChange={upLoadIimg}/>
  </div>
	<div>
	 <label for="message" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Description</label>
  <textarea id="message" rows="4" name="description" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" onChange={handleClick} ></textarea>
	</div>
  <input type="button" value='Insert' class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onSubmit}/>
</form>
  )
}

export default Form1