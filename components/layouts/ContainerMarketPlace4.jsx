import React from 'react';
import Head from 'next/head';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import NavigationList from '~/components/shared/navigation/NavigationList';

import FooterMarketPlace2 from '~/components/shared/footers/FooterMarketPlace2';
import HeaderMarketPlace4 from '~/components/shared/headers/HeaderMarketPlace4';

const ContainerMarketPlace4 = ({ children, title }) => {
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
            <HeaderMarketPlace4 />
            <HeaderMobile />
            <NavigationList />
            <main id="homepage-6">{children}</main>
            <FooterMarketPlace2 />
        </div>
    );
};

export default ContainerMarketPlace4;
