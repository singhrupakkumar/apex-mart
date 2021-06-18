import React from 'react';
import { connect } from 'react-redux';

import ContainerHomeFurniture from '~/components/layouts/ContainerHomeFurniture';
import FurnitureBanner from '~/components/partials/homepage/furniture/FurnitureBanner';
import FurnitureSiteFeatures from '~/components/partials/homepage/furniture/FurnitureSiteFeatures';
import FurniturePromotions from '~/components/partials/homepage/furniture/FurniturePromotions';
import FurnitureCategories from '~/components/partials/homepage/furniture/FurnitureCategories';
import FurniturePromotions2 from '~/components/partials/homepage/furniture/FurniturePromotions2';
import FurnitureTrendingProducts from '~/components/partials/homepage/furniture/FurnitureTrendingProducts';
import FurnitureShopByRoom from '~/components/partials/homepage/furniture/FurnitureShopByRoom';
import FurnitureBestSaleBrands from '~/components/partials/homepage/furniture/FurnitureBestSaleBrands';
import FurnitureBestSeller from '~/components/partials/homepage/furniture/FurnitureBestSeller';

const HomeFurniturePage = () => {
    return (
        <ContainerHomeFurniture>
            <FurnitureBanner />
            <FurnitureSiteFeatures />
            <FurniturePromotions />
            <FurnitureBestSeller collectionSlug="furniture-best-sellers" />
            <FurnitureCategories />
            <FurniturePromotions2 />
            <FurnitureTrendingProducts collectionSlug="furniture-trending-products" />
            <FurnitureShopByRoom />
            <FurnitureBestSaleBrands />
        </ContainerHomeFurniture>
    );
};

export default connect()(HomeFurniturePage);
