import Image from 'next/image';

export default function Test() {
    return (
        <>
            <img
                src="/images/product.png"
                width="400"
                height="400"
                alt="상품 이미지"
            />
            <Image
                src="/images/product.png"
                width="400"
                height="400"
                alt="상품 이미지"
            />
        </>
    );
}
