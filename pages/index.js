import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import ProductList from '@/components/ProductList';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import axios from '@/lib/axios';
import Head from 'next/head';

export async function getStaticProps() {
  const res = await axios.get('/products');
  const products = res.data.results;
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
  </>
  );
}
