import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import Product from '~/components/elements/products/Product';
import { carouselStandard } from '~/utilities/carousel-helpers';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';

const AutopartRecommendForYou = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);
    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            collectionSlug
        );
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            const slideItems = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
            productItemsView = (
                <Slider
                    {...carouselStandard}
                    arrows={false}
                    className="ps-carousel outside">
                    {slideItems}
                </Slider>
            );
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }
    return (
        <section className="ps-product-list ps-recommend-for-you">
            <div className="container">
                <div className="ps-section__header">
                    <h3>RECOMMENDED FOR YOU</h3>
                    <ul className="ps-section__links">
                        <li>
                            <Link href="/shop">
                                <a>Best Seller</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>New Arrival</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Top Rated</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Trending Products</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">{productItemsView}</div>
            </div>
        </section>
    );
};

export default AutopartRecommendForYou;
