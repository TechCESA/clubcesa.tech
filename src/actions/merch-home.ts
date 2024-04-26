const { getImagesFromCloudinary } = require('./cloudinary');

const data = await getImagesFromCloudinary('merch/home');

export const merchHomeData = [
  {
    name: 'Sport Jersey',
    description:
      'Introducing our latest College Edition Sports Jersey - a perfect blend of vibrant design and unmatched comfort, tailored to elevate your college event experience.',
    price: '₹ 300',
    link: '/merch/sport-jersey',
    image: data.resources[0],
  },
  {
    name: 'Varsity Jacket',
    description:
      'Introducing our Varsity Edition Jackets - the epitome of style, comfort, and college spirit. Elevate your presence at campus events with our vibrant designs that seamlessly blend tradition.',
    price: '₹ 600',
    link: '/merch/varsity',
    image: data.resources[1],
  },
];
