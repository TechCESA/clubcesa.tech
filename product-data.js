export const productInformation = [
  {
    sku: 'sport-jersey',
    name: 'Sport Jersey',
    price: '₹ 300',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'CESA', href: '#' },
      { id: 2, name: 'Merch', href: '#' },
    ],
    images: [
      {
        src: '/images/merch2.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: '/images/merch1.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: '/images/merch5.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: '/images/merch4.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      "Introducing our latest College Edition Sports Jersey – a perfect blend of vibrant design and unmatched comfort, tailored to elevate your college event experience. Whether you're cheering for your team or showing off your school spirit, this jersey is designed to make you stand out in the crowd.",
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'breathable fabric',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
];
