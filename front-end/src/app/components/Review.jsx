import React from 'react';
import CommentReview from './CommentReview';
import BtnReview from './BtnReview';

const Review = () => {
    return (
        <div className="p-4 font-[sans-serif] py-10">
            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-20">
                    <h2 className="text-gray-800 text-6xl font-bold">
                        Our Clients <span className='text-color_red'>Reviews</span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                        Veniam proident aute magna anim excepteur et ex consectetur velit
                        ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem
                        minim. Officia do aliqua adipisicing ullamco in.
                    </p>
                </div>
                <CommentReview />
                <BtnReview />
            </div>
        </div>

    );
}

export default Review;
