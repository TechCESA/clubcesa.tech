const { getImagesFromCloudinary } = require('./cloudinary');

const varsityImages = await getImagesFromCloudinary('merch/store/varsity');
const jerseyImages = await getImagesFromCloudinary('merch/store/jersey');

export const merchStoreData = [
  {
    slug: 'sport-jersey',
    name: 'Sport Jersey',
    price: '₹ 300',
    description:
      "Introducing our latest College Edition Sports Jersey - a perfect blend of vibrant design and unmatched comfort, tailored to elevate your college event experience. Whether you're cheering for your team or showing off your school spirit, this jersey is designed to make you stand out in the crowd.",
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'breathable fabric',
    ],
    google_form: 'https://forms.gle/PoncM2q3GmYNBKFbA',
    breadcrumbs: [
      { id: Math.random().toString(), name: 'Merch', href: '/merch' },
      {
        id: Math.random().toString(),
        name: 'Sport Jersey',
        href: '/merch/sport-jersey',
      },
    ],
    size_chart: jerseyImages.resources[0],
    images: jerseyImages.resources.slice(1),
  },
  {
    slug: 'varsity',
    name: 'Varsity Jacket',
    price: '₹ 600',
    description:
      "Introducing our Varsity Edition Jackets - the epitome of style, comfort, and college spirit. Elevate your presence at campus events with our vibrant designs that seamlessly blend tradition and contemporary flair. Crafted with meticulous attention to detail, these varsity jackets are more than just a garment; they're a symbol of your academic journey and the camaraderie that defines college life. The striking design, featuring bold colors and dynamic graphics, proudly represents your college pride, making you stand out in the crowd.",
    highlights: ['BOLD design', '320 GSM PC Fleece', 'breathable fabric'],
    google_form: 'https://forms.gle/draUaVxnEeJno5ma9',
    breadcrumbs: [
      { id: Math.random().toString(), name: 'Merch', href: '/merch' },
      {
        id: Math.random().toString(),
        name: 'Varsity Jacket',
        href: '/merch/varsity',
      },
    ],
    size_chart: varsityImages.resources[0],
    images: varsityImages.resources.slice(1),
  },
];
