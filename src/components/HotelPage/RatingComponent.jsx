import React from "react";

const RatingComponent = ({ totalReviews = 834}) => {
  const ratingData = [
    { stars: 5, count: 500 },
    { stars: 4, count: 200 },
    { stars: 3, count: 100 },
    { stars: 2, count: 30 },
    { stars: 1, count: 4 },
    { stars:0, count: 0 } // Added 0 stars rating,
  ];

  const maxCount = Math.max(...ratingData.map(r => r.count));

  return (
    <div className="px-4 md:px-8 py-6 max-w-5xl ">
<div className="grid md:grid-cols-3 gap-2 ">
        <div className="md:col-span-1 md:flex gap-3 mt-7">

      <div className=" ">
          <img src="./Logo2.png" alt="" />

        </div>

         <div>
 <h3 className="text-[#232323] text-2xl font-bold mt-1">Overall rating</h3>
      <p className="text-sm text-gray-500">{totalReviews} Reviews</p>


      <div className="flex mt-4 text-yellow-500 text-xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <img src="./star.png" key={i}/>
        ))}
      </div>

</div>
</div>



        <div className="md:col-span-2 w-full">
      <div className="mt-4">
        {ratingData.map((rating) => (
          <div key={rating.stars} className="flex items-center mb-2">
            <span className="w-12 text-sm font-medium text-gray-600">
              {rating.stars} stars
            </span>
            <div className="flex-1 bg-gray-200 rounded h-2 mx-2 relative">
              <div
                className="bg-[#1677BD] h-2 rounded"
                style={{
                  width: `${(rating.count / maxCount) * 100}%`, // Calculate width based on count
                }}
              ></div>
            </div>
            <span className="w-6 text-sm font-medium text-gray-600">
              {rating.count}
            </span>
          </div>
        ))}
      </div>

<div/>
</div>



</div>
<div className="w-full h-[3px] bg-gray-300 mt-8"/>


    </div>
  );
};

export default RatingComponent;