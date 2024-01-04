import Product from '@/components/product/product';
import Nav from '@/components/product/nav';
import './global.css';
import { productInformation } from '@/product-data';

const findEvent = (slug) => {
  return productInformation.find((event) => event.sku.toLowerCase() === slug);
};

export default function Page({ params }) {
  let event = findEvent(params.slug);

  if (!event) {
    event = productInformation[0];
  }

  // const event = findEvent(params.slug)
  // console.log(params);
  // if (!event) {
  //   console.log("Not found")
  // }
  return (
    <>
      <Nav />
      {/* <Banner /> */}
      <Product merch_info={event} />
    </>
  );
}