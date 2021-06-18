import React from 'react';
import Head from 'next/head';
import NavigationList from '~/components/shared/navigation/NavigationList';
import SiteFeatures from '~/components/partials/homepage/autopart/SiteFeatures';
import HeaderTechnology from '~/components/shared/headers/HeaderTechnology';
import HeaderMobileTechnology from '~/components/shared/headers/HeaderMobileTechnology';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const ContainerHomeTechnology = ({ children, title = 'Home Technology' }) => {
    let titleView;
    if (title !== '') {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderTechnology />
            <HeaderMobileTechnology />
            <NavigationList />
            <main id="homepage-10">
                {children}
                <SiteFeatures />
                <FooterSecond classes="ps-footer--technology" />
            </main>
        </div>
    );
};

export default ContainerHomeTechnology;
