import React from 'react';
import ContainerMarketPlace3 from '~/components/layouts/ContainerMarketPlace3';
import MartketPlace3Banner from '~/components/partials/homepage/marketplace3/MartketPlace3Banner';
import MarketPlace3SearchTrending from '~/components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketPlace3Promotions from '~/components/partials/homepage/marketplace3/MarketPlace3Promotions';

import Market3ProductGroup from '~/components/partials/homepage/marketplace3/Market3ProductGroup';
import ModuleMarket3ProductGroupBanners from '~/components/partials/homepage/marketplace3/modules/ModuleMarket3ProductGroupBanners';

const HomeMarketPlace3Page = () => {
    const electricsLinks = [
        'TV Televisions',
        'Air Conditioner',
        'Washing Machine',
        'Refrigerator',
        'Microwave',
    ];
    const clothingsLinks = [
        'Women',
        'Men',
        'Girl',
        'Boy',
        'Baby',
        'Accessories',
    ];
    return (
        <ContainerMarketPlace3 title="Home Marketplace 3">
            <MartketPlace3Banner />
            <MarketPlace3SearchTrending />
            <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />

            <div className="ps-product-box">
                <MarketPlace3Promotions />
                <Market3ProductGroup
                    heading={{
                        icon: 'icon-laundry',
                        title: 'Consumer Electronic',
                    }}
                    categorySlug="clothing-and-parel"
                    links={electricsLinks}
                    banners={
                        <ModuleMarket3ProductGroupBanners type="electronic" />
                    }
                />
                <Market3ProductGroup
                    heading={{
                        icon: 'icon-shirt',
                        title: 'Clothings & Apparel',
                    }}
                    categorySlug="clothing-and-parel"
                    links={clothingsLinks}
                    banners={
                        <ModuleMarket3ProductGroupBanners type="clothing" />
                    }
                />
                <Market3ProductGroup
                    heading={{
                        icon: 'icon-home6',
                        title: 'Clothings & Apparel',
                    }}
                    categorySlug="garden-and-kitchen"
                    links={clothingsLinks}
                    banners={<ModuleMarket3ProductGroupBanners type="garden" />}
                />
            </div>
        </ContainerMarketPlace3>
    );
};

export default HomeMarketPlace3Page;
