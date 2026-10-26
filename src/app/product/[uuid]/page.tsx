

export default async function ProductDetailPage(
{
  params
}:{
  params: Promise<{uuid: string}>
}){
  const {uuid} = await params;
  return (
    <h1>Product ID: {uuid}</h1>
  )
}