import React from "react";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import CampaignSingle from "../../components/CampaignSingle/CampaignSingle";
import Policy from "../../components/Policy/Policy";

const Shoppage = () => {
    return (
        <>
            <Categories />
            <Products/>
            <CampaignSingle/>
            <Products/>
            <Policy/>
        </>
    );
};

export default Shoppage;
