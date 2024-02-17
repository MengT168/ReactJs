import React from 'react'
import { useEffect , useState } from 'react'
import { FetchCategory , InsertProduct, UploadImagetoServer , updateProduct} from '../service/ProductCategory'
import { useLocation } from 'react-router-dom'

function Form1({edit}) {
  const location=useLocation();
  const [category,setCategory] = useState([])
  const [source ,setSource] = useState("");
    const [product,setProduct] = useState({
        title: "",
        price: "",
        categoryId : "",
        description : "",
        images : [],
    })

    useEffect(()=>{
      // console.log(edit);
      if(edit){
        location.state.title;
        console.log(location.state);
        const {id,title,description,images,price,categoryId}=location.state;
        product.id=id;
        product.title=title;
        product.price=price;
        product.images=images;
        product.categoryId=categoryId;
        product.description=description;
      }
      FetchCategory()
      .then(res=>setCategory(res))
      console.log(edit);
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
    
    const formdata = new FormData();
    formdata.append("file",source);
    UploadImagetoServer(formdata)
    .then(res=>{
      product.images=[res.data.location]
      console.log(product.images);
      InsertProduct(product)
      .then(res=>res.json())
      .then(resp=>console.log(resp))
    })
    if(edit){
      console.log('product id when edit',product.id);
      updateProduct(product,product.id)
      .then(res=>res.json())
      .then(res=>console.log(res))
    }
  }

  const upLoadIimg = (e)=>{
    console.log(e.target.files);
    setSource(e.target.files[0]);
  }

  return (

<form class="max-w-sm mx-auto p-8 mb-3 mt-5 " style={{backgroundImage:'radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )' , borderRadius:'6px' }}> 
  <div class="mb-5">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="username-success" value={product.title} name="title" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter Title" onChange={handleClick}/>
  </div>
  <div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input type="text" id="username-error" name="price" value={product.price}  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Price" onChange={handleClick}/>
    
  </div>
	<div>
<label for="username-error" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
  <select id="countries" name="categoryId" value={product.categoryId} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleClick}>

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
  <div className='preview' >
    <img src={edit ? product.images[0] : source && URL.createObjectURL(source)} />
  </div>
	<div>
	 <label for="message" class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Description</label>
  <textarea id="message" rows="4" value={product.description} name="description" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" onChange={handleClick} ></textarea>
	</div>
  <input type="button" value={edit? "Edit Product" : "Insert Product"} class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onSubmit}/>
</form>
  )
}

export default Form1