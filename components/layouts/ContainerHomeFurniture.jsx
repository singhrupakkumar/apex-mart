import React from 'react';
import Head from 'next/head';
import NavigationList from '~/components/shared/navigation/NavigationList';
import HeaderFurniture from '~/components/shared/headers/HeaderFurniture';
import HeaderMobileFurniture from '~/components/shared/headers/HeaderMobileFurniture';
import FooterSecond from '~/components/shared/footers/FooterSecond';

const ContainerHomeFurniture = ({ children, title = 'Home Furniture' }) => {
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
            <HeaderFurniture />
            <HeaderMobileFurniture />
            <NavigationList />
            <main id="homepage-8">{children}</main>
            <FooterSecond classes="ps-footer--furniture" />
        </div>
    );
};

export default ContainerHomeFurniture;
