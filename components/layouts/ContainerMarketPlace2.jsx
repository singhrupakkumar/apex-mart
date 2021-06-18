import React from 'react';
import Head from 'next/head';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import NavigationList from '~/components/shared/navigation/NavigationList';
import Newsletters from '~/components/partials/commons/Newletters';
import HeaderMarketPlace2 from '~/components/shared/headers/HeaderMarketPlace2';
import FooterMarketPlace2 from '~/components/shared/footers/FooterMarketPlace2';

const ContainerMarketPlace2 = ({ children, title }) => {
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
            <HeaderMarketPlace2 />
            <HeaderMobile />
            <NavigationList />
            <main id="homepage-4">{children}</main>
            <FooterMarketPlace2 />
        </div>
    );
};

export default ContainerMarketPlace2;
