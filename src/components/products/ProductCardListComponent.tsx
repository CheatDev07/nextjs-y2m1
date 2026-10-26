'use client' //mark server component to client component 

import { useEffect, useState } from "react";
import { ProductCardComponent } from "./ProductCardComponent";
import { ProductResponseType } from "@/lib/products/product-type";

export default function ProductCardListComponent() {

  // useState, useEffect 
  const [products, setProducts] = useState<ProductResponseType[]>([]);

  useEffect(()=>{
    // logic of fetching data from api 
    async function fetchData(){
      const response = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_API_URL}/products`,{
        cache: 'no-cache'
      });
      const data = await response.json(); // convert from json to javascript object
      setProducts(data.products)
    }

    // calling function 
    fetchData();
  },[]) //fetch once use forever

   console.log(`===> Products Response:`,products);

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 mx-auto">
      {
         products.map(({title, images,description, price}) => (
           <ProductCardComponent 
           key={title}
           images={images} 
           title={title } 
           description={description} 
           price={price}/>
         )
        )
      }
    </section>
  )
}
