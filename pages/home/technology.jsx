import React from 'react';
import ContainerHomeTechnology from '~/components/layouts/ContainerHomeTechnology';
import ProductGroupDealOfDay from '~/components/partials/product/ProductGroupDealOfDay';
import TechnologyProductGroupWithCarousel from '~/components/partials/homepage/technology/TechnologyProductGroupWithCarousel';
import TechnologyBanner from '~/components/partials/homepage/technology/TechnologyBanner';
import TechnologySiteFeatures from '~/components/partials/homepage/technology/TechnologySiteFeatures';
import TechnologyPromotions from '~/components/partials/homepage/technology/TechnologyPromotions';
import TechnologyTopCategories from '~/components/partials/homepage/technology/TechnologyTopCategories';

const HomeTechnologyPage = () => {
    const smartPhoneLinks = ['Iphone, Ipad, Samsung'];
    const laptopAndSoundLinks = [
        'Apple',
        'Laptop',
        'Asus',
        'Mashall',
        'Speaker',
        'JBL',
        'Speaker',
    ];
    const toysLink = ['Micro', 'Drone/Flycam', 'JQOS'];
    const goodPriceLinks = [
        'Headphone',
        'Charge',
        'Case USB',
        'Hard Driver',
        'TV Box',
    ];

    return (
        <ContainerHomeTechnology>
            <TechnologyBanner />
            <TechnologySiteFeatures />
            <ProductGroupDealOfDay
                categorySlug="computers-and-technologies"
                boxed={true}
            />
            <TechnologyPromotions />
            <TechnologyTopCategories />
            <TechnologyProductGroupWithCarousel
                categorySlug="phones-and-accessories"
                title="Popular Smartphones & Tablets"
                links={smartPhoneLinks}
            />
            <TechnologyProductGroupWithCarousel
                categorySlug="computers-and-technologies"
                title="Best Seller Laptops & Sounds"
                links={laptopAndSoundLinks}
            />
            <TechnologyProductGroupWithCarousel
                collectionSlug="technology-toys"
                title="Technology Toys Recommended For You"
                links={toysLink}
            />
            <TechnologyProductGroupWithCarousel
                collectionSlug="technology-good-price"
                title="Good Price Accessories"
                links={goodPriceLinks}
            />
        </ContainerHomeTechnology>
    );
};

export default HomeTechnologyPage;
