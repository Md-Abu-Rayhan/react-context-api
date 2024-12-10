import React from 'react';

function Card() {
    const cardsData = [
        {
            id: 1,
            imgSrc: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
            title: 'Peace Lily',
            category: 'Indoor',
            price: '$36.00',
            backgroundColor: 'bg-orange-500',
            priceColor: 'text-orange-500',
        },
        {
            id: 2,
            imgSrc: 'https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png',
            title: 'Monstera',
            category: 'Outdoor',
            price: '$45.00',
            backgroundColor: 'bg-green-500',
            priceColor: 'text-teal-500',
        },

        {
            id: 3,
            imgSrc: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
            title: 'Monstera',
            category: 'Outdoor',
            price: '$46.00',
            backgroundColor: 'bg-blue-500',
            priceColor: 'text-teal-500',
        },
        {
            id: 4,
            imgSrc: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
            title: 'Monstera',
            category: 'Outdoor',
            price: '$47.00',
            backgroundColor: 'bg-yellow-500',
            priceColor: 'text-teal-500',
        }
    ];

    return (
        <div className="p-1 flex flex-wrap items-center justify-center">
            {cardsData.map((card) => (
                <div
                    key={card.id} className={`flex-shrink-0 m-6 relative overflow-hidden ${card.backgroundColor} rounded-lg max-w-xs shadow-lg dark:bg-${card.backgroundColor.split('-')[1]}-700`}
                >
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: 'radial-gradient(black, transparent 60%)',
                                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                opacity: 0.2,
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src={card.imgSrc}
                            alt={card.title}
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{card.category}</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">{card.title}</span>
                            <span
                                className={`block bg-white dark:bg-gray-900 rounded-full ${card.priceColor} dark:text-white text-xs font-bold px-3 py-2 leading-none flex items-center`}
                            >
                                {card.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;