import React from "react";

function Card({ card }) {
  return (
    <div className="bg-neutral-900 text-white border border-neutral-700 rounded-xl p-4 flex flex-col">
      <img src={card.image} alt="product image" className="w-full aspect-square object-cover rounded-lg" />
      <div className="flex flex-col pt-4">
        <span className="text-xs w-fit bg-yellow-50/10 mb-2 border border-yellow-700 text-yellow-500 px-2 py-1 rounded-lg font-medium">{card.category}</span>
        <h1 className="font-semibold">{card.title}</h1>
        <p className="text-sm text-neutral-400">{card.description}</p>
      </div>
      <button className="self-start bg-blue-500 mt-4 cursor-pointer px-4 py-1 rounded-full">Buy Now</button>
    </div>
  );
}

export default Card;
