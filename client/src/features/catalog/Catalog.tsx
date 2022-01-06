import { Product } from '../../app/models/products';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';

// { products, addProduct } is called destructuring
export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  //() => effectively means callback function
  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); //empty array as dependency [] means this will only be called ONCE, if you forget, useEffect will run everytime component re-renders

  //   function addProduct() {
  //     setProducts((prevState) => [
  //       ...prevState,
  //       {
  //         id: prevState.length + 101,
  //         name: 'product3' + (prevState.length + 1),
  //         price: prevState.length * 100 + 100,
  //         brand: 'some brand',
  //         description: 'some desc',
  //         pictureUrl: 'http://picsum.photos/200',
  //       },
  //     ]);
  //setProducts([...products, { name: 'product3', price: 300.00 }])
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
