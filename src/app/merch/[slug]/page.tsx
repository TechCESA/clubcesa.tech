import Product from '@/components/product/product';
import Nav from '@/components/product/nav';
import './local.css';
import { notFound } from 'next/navigation';
import { merchStoreData } from '@/actions/merch-store';

const findProduct = (slug) => {
  return merchStoreData.find((product) => product.slug === slug);
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
