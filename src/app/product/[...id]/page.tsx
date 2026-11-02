import { ProductDetailComponent } from "@/components/products/ProductDetailComponent";

export default async function ProductDetailPage(
{
  params
}:{
  params: Promise<{id: number}>
}){
  const {id} = await params;

  return (
    <ProductDetailComponent/>
  )
}