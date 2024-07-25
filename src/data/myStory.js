export const myStory = [
  {
    _id: '6645c5183fc9f80364c650d4',
    state: { worked: 'Виконано' }, // {"waited":"Очікується відправка"},// {"cancelled":"Скасовано"},
    title: 'Щось там',
    createDate: '2024-04-19T06:00:12.130Z',
    price: 300,
    discount: true,
    discountPrice: 600,
    img: 'https://i.ibb.co/fxByr8M/1716364689883-81591549.png',
    number: 125,
    category: { en: 'gift', uk: 'Подарункові товари' },
    subCategory: { en: 'souvenirs', uk: 'Сувеніри' },
    // фільтри які були створені при замовленні
  },
  {
    _id: '6645d115682e8d5dff4f4879',
    state: { waited: 'Очікується відправка' },
    title: 'Щось там ',
    createDate: '2024-05-19T06:00:12.130Z',
    price: 200,
    discount: true,
    discountPrice: 400,
    img: 'https://i.ibb.co/Ks1Bwsz/1715851540853-920322007.png',
    number: 327,
    category: { en: 'gift', uk: 'Подарункові товари' },
    subCategory: { en: 'souvenirs', uk: 'Сувеніри' },
  },
  {
    _id: '6649956c52e5e7c430fd10d3',
    state: { cancelled: 'Скасовано' },
    title: 'Щось там',
    createDate: '2024-03-19T06:00:12.130Z',
    price: 100,
    discount: true,
    discountPrice: 500,
    img: 'https://i.ibb.co/0r29qQK/1716098407004-348578334.png',
    number: 40,
    category: { en: 'gift', uk: 'Подарункові товари' },
    subCategory: { en: 'souvenirs', uk: 'Сувеніри' },
  },
];

const generateRandomId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const addNewProduct = (...products) => {
  products.forEach(({ 
    id, 
    category, 
    count, 
    discount, 
    discountPrice, 
    img, 
    price, 
    subCategory, 
    title, 
    number, 
  }) => {
    myStory.push({
      _id: id + '-' + generateRandomId(),
      category,
      count,
      discount,
      discountPrice,
      img,
      price,
      subCategory,
      title,
      number,
      state: {waited: "Очікується відправка"}
    });
  })
};