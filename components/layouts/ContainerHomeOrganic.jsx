import React from 'react';
import Head from 'next/head';
import NavigationList from '~/components/shared/navigation/NavigationList';

import HeaderOrganic from '~/components/shared/headers/HeaderOrganic';
import HeaderMobileOrganic from '~/components/shared/headers/HeaderMobileOrganic';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const ContainerHomeOrganic = ({ children, title = 'Home Organic' }) => {
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
            <HeaderOrganic />
            <HeaderMobileOrganic />
            <NavigationList />
            <main id="homepage-9">{children}</main>
            <FooterSecond classes="ps-footer--organic" />
        </div>
    );
};

export default ContainerHomeOrganic;
