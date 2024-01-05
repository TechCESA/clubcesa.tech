import Product from '@/components/product/product';
import Nav from '@/components/product/nav';
import './local.css';
import { productInformation } from '@/product-data';
import { notFound } from 'next/navigation';

const findEvent = (slug) => {
  return productInformation.find((event) => event.sku.toLowerCase() === slug);
};

export default function Page({ params }) {
  let event = findEvent(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Nav />
      {/* <Banner /> */}
      <Product merch_info={event} />
    </>
  );
}
