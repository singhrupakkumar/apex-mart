import React from 'react';
import ContainerMarketPlace2 from '~/components/layouts/ContainerMarketPlace2';
import Market2ProductGroupByCategory from '~/components/partials/homepage/marketplace2/Market2ProductGroupByCategory';
import MartketPlace2Banner from '~/components/partials/homepage/marketplace2/MartketPlace2Banner';
import MarketPlace2Promotions from '~/components/partials/homepage/marketplace2/MarketPlace2Promotions';
import MarketPlace2Download from '~/components/partials/homepage/marketplace2/MarketPlace2Download';
import MarketPlace2Categories from '~/components/partials/homepage/marketplace2/MarketPlace2Categories';

const HomeMarketPlace2Page = () => {
    return (
        <ContainerMarketPlace2 title="Home Marketplace 2">
            <MartketPlace2Banner />
            <MarketPlace2Categories />
            <MarketPlace2Promotions />
            <Market2ProductGroupByCategory
                categorySlug="consumer-electrics"
                title="Consumer Electronics"
            />
            <Market2ProductGroupByCategory
                categorySlug="clothing-and-parel"
                title="Clothings & Apparel"
            />
            <Market2ProductGroupByCategory
                categorySlug="computers-and-technologies"
                title="Computer & Technologies"
            />
            <Market2ProductGroupByCategory
                categorySlug="garden-and-kitchen"
                title="Garden & Kitchen"
            />
            <Market2ProductGroupByCategory
                categorySlug="health-and-beauty"
                title="Heath & beauty"
            />
            <MarketPlace2Download />
        </ContainerMarketPlace2>
    );
};

export default HomeMarketPlace2Page;
