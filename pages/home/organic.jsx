import React from 'react';

import ContainerHomeOrganic from '~/components/layouts/ContainerHomeOrganic';
import OrganicBanner from '~/components/partials/homepage/organic/OrganicBanner';
import OrganicSiteFeatures from '~/components/partials/homepage/organic/OrganicSiteFeatures';
import OrganicTopCategories from '~/components/partials/homepage/organic/OrganicTopCategories';
import OrganicPromotions from '~/components/partials/homepage/organic/OrganicPromotions';
import ProductGroupDealHot from '~/components/partials/product/ProductGroupDealHot';
import OrganicNewArrivals from '~/components/partials/homepage/organic/OrganicNewArrivals';
import OrganicClientSay from '~/components/partials/homepage/organic/OrganicClientSay';
import OrganicBlog from '~/components/partials/homepage/organic/OrganicBlog';

const HomeOrganicPage = () => {
    return (
        <div className="site-content">
            <ContainerHomeOrganic>
                <OrganicBanner />
                <OrganicSiteFeatures />
                <OrganicTopCategories />
                <OrganicPromotions />
                <ProductGroupDealHot collectionSlug="organic-products" />
                <OrganicNewArrivals collectionSlug="organic-products" />
                <OrganicClientSay />
                <OrganicBlog />
            </ContainerHomeOrganic>
        </div>
    );
};

export default HomeOrganicPage;
