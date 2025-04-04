import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import ProductList from '@/components/ProductList';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import axios from '@/lib/axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <>
      <Header />
      <Container>
        <SearchForm />
        <ProductList className={styles.products} products={products} />
      </Container>
  </>
  );
}
