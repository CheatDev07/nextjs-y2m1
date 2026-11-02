'use client' //mark server component to client component 

import { use } from "react";

import { ProductCardComponent } from "./ProductCardComponent";
import { ProductResponseType } from "@/lib/products/product-type";
import Link from "next/link";

export default function ProductCardListComponent({
  product
}: {
  product: Promise<ProductResponseType[]>
}) {
  // it will get ready to response data from api
  const products = use(product);

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 mx-auto">
      {
        products.map(({ title, images, description, price,id }) => (
          <Link href={`product/${id}`} key={id}>
            <ProductCardComponent
              images={images}
              title={title}
              description={description}
              price={price} />
          </Link>
        )
        )
      }
    </section>
  )
}
