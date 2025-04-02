import { get } from "http";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Search() {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { q } = router.query;

    async function getProducts(query) {
        const res = await axios.get(`/products/?search=${query}`);
        const nextProducts = res.data.results;
        setProducts(nextProducts);
    } 

    useEffect(() => {
        getProducts(q);
    },[q]);

    return (
        <>
            <h1>Search Page</h1>
            <SearchForm initialValue={q} />
            <h2>{q} 검색 결과</h2>
            <ProductList products={products} />
        </>
    );
} 