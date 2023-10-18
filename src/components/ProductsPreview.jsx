import React, { useState, useEffect } from "react";
<<<<<<< HEAD
// import 'react-multi-carousel/lib/styles.css';
=======
// import { ProductPreviewCard } from "./ProductPreviewCard";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { useDispatch } from "react-redux";
// import { addToCart } from "../stores/cart/cartSlice";
>>>>>>> 67c234fe426b2901693fd82527704c7dc2600afe


export const ProductsPreview = () => {
    const [products, setProducts] = useState([]);
    // const dispatch = useDispatch();

    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };

    useEffect(() => {
        fetch('http://localhost:3080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
    }, [])

    // const onAddProduct = (product) => {
    //     dispatch(addToCart(product))
    // }
    
    return (
        <div className="container mx-auto pb-4 w-2/3 text-white">
            {/* <Carousel responsive={responsive}> */}
            <h2>Product</h2>
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <div key = {index}>{product.name}</div>
                            
                            
                    )
                })
            }
            {/* </Carousel> */}
        </div>
    )
}