import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import { Suspense } from "react";

// logic of getAllProduct() fetch data from API (server-side)

const getAllProducts = () => 
  fetch(`${process.env.DUMMY_API_URL}/products`)
  .then(data => data.json())
  .then(products => products.products)
  .catch(error => error)

export default function ProductPage(){
  const productList = getAllProducts();
  
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
       <ProductCardListComponent product={productList}/>
    </Suspense> 
  )
}