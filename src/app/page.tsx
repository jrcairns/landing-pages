import { currentProduct } from "@/products/utils/get-product";
import dynamic from "next/dynamic";

const Rsc = dynamic(() => import('../products/rsc'))
const Attractivo = dynamic(() => import('../products/attractivo'))

const products = {
  rsc: Rsc,
  attractivo: Attractivo
}


export default async function LandingPage() {
  const product = currentProduct()

  const Component = products[product] || Rsc

  return <Component />
}