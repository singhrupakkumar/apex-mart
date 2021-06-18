import React, { useEffect } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import ContainerPage from '~/components/layouts/ContainerPage';
const CheckoutPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <ContainerPage title="Checkout" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout />
            </div>
        </ContainerPage>
    );
};

export default connect()(CheckoutPage);
