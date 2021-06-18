import React from 'react';

import ContainerMarketPlace4 from '~/components/layouts/ContainerMarketPlace4';
import MartketPlace4Banner from '~/components/partials/homepage/marketplace4/MartketPlace4Banner';
import MartketPlace4SiteFeatures from '~/components/partials/homepage/marketplace4/MartketPlace4SiteFeatures';
import MartketPlace4Promotions from '~/components/partials/homepage/marketplace4/MartketPlace4Promotions';
import MartketPlace4TopCategories from '~/components/partials/homepage/marketplace4/MartketPlace4TopCategories';

import CategoriesBoxConsumerElectronics from '~/components/partials/homepage/marketplace4/modules/CategoriesBoxConsumerElectronics';
import CategoriesBoxClothings from '~/components/partials/homepage/marketplace4/modules/CategoriesBoxClothings';
import CategoriesBoxGardenAndKitchen from '~/components/partials/homepage/marketplace4/modules/CategoriesBoxGardenAndKitchen';
import ProductGroupDealHot from '~/components/partials/product/ProductGroupDealHot';

const HomeMarketPlace4Page = () => {
    return (
        <ContainerMarketPlace4 title="Home Marketplace v4">
            <MartketPlace4Banner />
            <div className="container">
                <MartketPlace4SiteFeatures />
                <MartketPlace4Promotions />
                <ProductGroupDealHot collectionSlug="deal-of-the-day" />
                <MartketPlace4TopCategories />
            </div>
            <div className="ps-categories-box">
                <div className="container">
                    <CategoriesBoxConsumerElectronics />
                    <CategoriesBoxClothings />
                    <CategoriesBoxGardenAndKitchen />
                </div>
            </div>
        </ContainerMarketPlace4>
    );
};

export default HomeMarketPlace4Page;
