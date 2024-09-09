import React from "react";
import Policy from "../../components/Policy/Policy";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Campaigns from "../../components/Campaigns/Campaigns";
import Blogs from "../../components/Blogs/Blogs";
import Brands from "../../components/Brands/Brands";
import CampaignSingle from "../../components/CampaignSingle/CampaignSingle";

const Homepage = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <Campaigns />
            <Blogs />
            <Brands />
            <CampaignSingle />
            <Policy />
        </>
    );
};

export default Homepage;
