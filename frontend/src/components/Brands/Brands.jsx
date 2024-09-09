import React from "react";
import BrandsItem from "./BrandsItem";

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brand-list">
                    <li className="brand-item">
                        <a href="#">
                            <img src="img/brands/brand1.png" alt="" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a href="#">
                            <img src="img/brands/brand2.png" alt="" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a href="#">
                            <img src="img/brands/brand3.png" alt="" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a href="#">
                            <img src="img/brands/brand4.png" alt="" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a href="#">
                            <img src="img/brands/brand5.png" alt="" />
                        </a>
                    </li>
                    <BrandsItem />
                </ul>
            </div>
        </section>
    );
};

export default Brands;
