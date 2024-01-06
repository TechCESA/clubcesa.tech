import Product from '@/components/product/product';
import Nav from '@/components/product/nav';
import './local.css';
import { productInformation } from '@/product-data';
import { notFound } from 'next/navigation';

const findProduct = (slug) => {
  return productInformation.find((product) => product.sku === slug);
};

export default function Page({ params }) {
  const product = findProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Nav />
      {/* <Banner /> */}
      <Product product={product} />
    </>
  );
}
