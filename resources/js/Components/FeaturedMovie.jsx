import React from 'react'
import PropTypes from 'prop-types';



const FeaturedMovie = ({ slug, name = '', category, thumbnail, rating = 1.000, ...props }) => {
    // src="/assets/images/featured-1.png"
    return (
        <div {...props} className="relative overflow-hidden group mr-[30px]">
            <img src={thumbnail}
                className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
            {/* <!-- rating --> */}
            <div className="absolute top-0 left-0 rating">
                <div className="p-[30px] flex items-center gap-1">
                    <img src="/assets/icons/ic_star.svg" alt="" />
                    <span className="mt-1 text-sm font-medium text-white">{rating.toFixed(1)}/5.0</span>
                </div>
            </div>
            {/* <!-- bottom detail --> */}
            <div className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                rounded-br-[28px] flex justify-between items-center px-7 h-[130px]">
                <div>
                    <div className="font-medium text-[22px] text-white">{name}</div>
                    <p className="mb-0 text-sm font-light text-white">{category}</p>
                </div>
                <div
                    className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                    <img src="/assets/icons/ic_play.svg" width="50" alt="" />
                </div>
            </div>
            <a href={slug} className="absolute inset-0 z-50"></a>
        </div>
    )
}

FeaturedMovie.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    rating: PropTypes.number,
};


export default FeaturedMovie;