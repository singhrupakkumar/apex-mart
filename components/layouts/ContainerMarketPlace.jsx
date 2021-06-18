import React from 'react';
import Head from 'next/head';

import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import NavigationList from '~/components/shared/navigation/NavigationList';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newletters';
import MarketPlacePromotionHeader from '~/components/partials/homepage/marketplace/MarketPlacePromotionHeader';
import HeaderMarketPlace from '~/components/shared/headers/HeaderMarketPlace';

const ContainerMarketPlace = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <MarketPlacePromotionHeader />
            <HeaderMarketPlace />
            <HeaderMobile />
            <NavigationList />
            <main id="homepage-3">
                {children}
                <Newsletters />
            </main>
            <FooterDefault />
        </div>
    );
};

export default ContainerMarketPlace;
