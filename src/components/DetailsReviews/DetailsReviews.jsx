import Rating from "react-rating";

const DetailsReviews = ({ reviews = [] }) => {
  if (reviews.length === 0) {
    return <p className="ml-16 mt-14">No reviews yet.</p>;
  }

  return (
    <div className="w-[631px] max-h-[340px] pl-16 mt-14 flex flex-col gap-11 overflow-y-auto pr-4">
      {reviews.map((review, index) => {
        const initial = review.reviewer_name?.[0]?.toUpperCase() || "?";

        return (
          <div key={index} className="flex flex-col">
            <div className="flex gap-4 items-center">
              <div className="w-[40px] h-[40px] text-[#E44848] border border-[#F2F4F7] rounded-full text-xl flex items-center justify-center">
                {initial}
              </div>
              <div className="flex flex-col gap-2">
                <p>{review.reviewer_name}</p>
                <Rating
                  initialRating={review.reviewer_rating}
                  readonly
                  emptySymbol={
                    <svg width="16px" height="16px" className="text-gray-300">
                      <use href="/sprite.svg#icon-star" />
                    </svg>
                  }
                  fullSymbol={
                    <svg width="16px" height="16px" className="text-[#FFC531]">
                      <use href="/sprite.svg#icon-filled-star" />
                    </svg>
                  }
                />
              </div>
            </div>
            <p className="mt-4">{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsReviews;
