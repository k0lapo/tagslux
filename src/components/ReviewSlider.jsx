
const reviews = [
  {
    id: 1,
    name: 'Sarah',
    review: ' I love these shirts! They are top quality, incredibly comfortable, and the attention to detail is superb. They withstand multiple washes without fading or losing shape. Plus, the brand commitment to sustainability and great customer service make them a top choice for stylish, durable, and ethical clothing.',
    profilePic: '/rev 1.jpg',
  },
  {
    id: 2,
    name: 'Wale',
    review: 'I have been a loyal customer of this brand for a while now, and they never disappoint. The quality is consistently high, and the shirts fit true to size. I love the unique patterns and vibrant colors, and the fabric is durable yet comfortable. Even after numerous washes, the colors remain bright and the fabric retains its shape.', 
    profilePic: '/rev 2.jpg', 
  },
  {
    id: 3,
    name: 'Johnson',
    review: 'These shirts exceeded my expectations! They fit perfectly, are incredibly soft, and come in a great variety of colors and styles. The attention to detail is impressive, and they are wrinkle resistant, perfect for travel. The customer service is excellent too. Definitely worth it, I will be buying more!',   
    profilePic: '/rev 3.jpg',
  },
];

const ReviewSlider = () => {
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center font-bold text-3xl">Reviews</h2>
        <p className='text-center text-gray-600 font-bold mt-2 mb-8'>What our customers have to say</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex p-6 flex-col items-center rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg">
                <img
                  src={review.profilePic}
                  alt={`${review.name}'s profile`}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                  <p className="text-gray-700">{review.review}</p>
                  <p className='mt-5 text-gray-600 font-bold italic'>&quot;Off the Hinges, 2024&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ReviewSlider;
