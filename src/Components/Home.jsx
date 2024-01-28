import { Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Banner from './Banner';
import Card from './Card';
import Loading from './Loading';
import { FetchProduct } from '../service/ProductCategory';
function Home() {
    const [product,setProduct] = useState([]);
    const [isloading,setIsloading] = useState(true);
    
    useEffect(()=>{
        FetchProduct()
        .then(resp=>{
          setProduct(resp)
          setIsloading(false)
        })
    },[])
  return (
    <>
    <Banner/>
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p class="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {
        isloading ?<>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
        </>:
        product.map((e)=>(
         <Link to={`/read/${e.id}`}>
           <Card
            img=  {e.images}
            name = {e.title}
            des = {e.description}
            price = {e.price}
          />
         </Link>
        ))
      }
    </ul>
  </div>
</section>
    </>
    
  )
}

export default Home