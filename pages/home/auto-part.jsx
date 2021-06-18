import React from 'react';

import ContainerHomeAutopart from '~/components/layouts/ContainerHomeAutopart';
import AutopartBanner from '~/components/partials/homepage/autopart/AutopartBanner';
import AutopartCategories from '~/components/partials/homepage/autopart/AutopartCategories';
import AutopartPromotions from '~/components/partials/homepage/autopart/AutopartPromotions';
import AutopartPromotions2 from '~/components/partials/homepage/autopart/AutopartPromotions2';
import AutopartRecommendForYou from '~/components/partials/homepage/autopart/AutopartRecommendForYou';
import ClientSay from '~/components/partials/commons/ClientSay';
import AutopartBestSaleBrand from '~/components/partials/homepage/autopart/AutopartBestSaleBrand';
import ProductGroupDealHot from '~/components/partials/product/ProductGroupDealHot';
const HomeAutopartPage = () => {
    return (
        <ContainerHomeAutopart>
            <AutopartBanner />
            <AutopartCategories />
            <AutopartPromotions />
            <AutopartRecommendForYou collectionSlug="autopart-recommend-products" />
            <ProductGroupDealHot collectionSlug="autopart-recommend-products" />
            <AutopartPromotions2 />
            <AutopartBestSaleBrand />
            <ClientSay />
        </ContainerHomeAutopart>
    );
};

export default HomeAutopartPage;
