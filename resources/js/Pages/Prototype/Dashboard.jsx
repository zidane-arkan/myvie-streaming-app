import React from 'react';
import Flickity from 'react-flickity-component';
import Authenticated from '@/Layouts/Authenticated/index';
import FeaturedMovie from '@/Components/FeaturedMovie';
import BrowseMovie from '@/Components/BrowseMovie';
import { Head } from '@inertiajs/react';

function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return (
        <>
            <Head title='Dashboard'>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <Authenticated>
                {/* <!-- Featured --> */}
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>

                    <Flickity class="gap-[30px]" options={flickityOptions}>
                        {/* <!-- Movie Thumbnail --> */}
                        {[1, 2, 3, 4].map((i) => (
                            <FeaturedMovie
                                key={i}
                                slug="the-batman"
                                name={`The Batman ${i}`}
                                category={"Action"}
                                thumbnail={`https://picsum.photos/id/${20 + i}/300/300`}
                                rating={i + 1}
                            />
                        ))}
                    </Flickity>
                </div>
                {/* <!-- /Featured --> */}


                {/* <!-- Browse --> */}
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity class="gap-[30px]" options={flickityOptions}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <BrowseMovie
                                key={i}
                                slug="the-batman"
                                name={`Scary Movie ${i}`}
                                category={"Horror"}
                                thumbnail={`https://picsum.photos/id/${40 + i}/300/300`}
                                rating={i + 1}
                            />
                        ))}
                    </Flickity>
                </div>
                {/* <!-- /Continue Watching --> */}
            </Authenticated>
        </>
    )
}

export default Dashboard;