import React from "react";
import "./products.css";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import { useState } from "react";
import ProductsData from "../../data.json";

const Products = () => {
    const [products] = useState(ProductsData);

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow: <NextBtn />,
        // prevArrow: <PrevBtn />,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="products">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Morden Design</p>
                </div>
                <div className="product-wrapper product-carousel">
                    <ul>
                        <Slider {...sliderSettings}>
                            {products.map((product) => (
                                <ProductItem
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </Slider>
                    </ul>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button
                            className="glide__arrow glide__arrow--left"
                            data-glide-dir="<"
                        >
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button
                            className="glide__arrow glide__arrow--right"
                            data-glide-dir=">"
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
