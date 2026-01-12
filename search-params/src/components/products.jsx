import { FaAndroid, FaApple, FaTablet } from "react-icons/fa";
import Card from "./card.jsx";
import { cardsData } from "../constants/cardsData.js";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParam] = useSearchParams();
  const category = searchParams.get("category");

  const filteredCards = category
    ? cardsData.filter(
        (card) => card.category.toLowerCase() === category.toLowerCase()
      )
    : cardsData;

  const filterButtons = [
    { btnText: "All", searchCategory: {} },
    {
      btnText: "Android",
      btnIcon: <FaAndroid />,
      searchCategory: { category: "android" },
    },
    {
      btnText: "Apple",
      btnIcon: <FaApple />,
      searchCategory: { category: "ios" },
    },
    {
      btnText: "Tablets",
      btnIcon: <FaTablet />,
      searchCategory: { category: "tablet" },
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center items-center p-6 bg-[#121212]/10 rounded-lg backdrop-blur-[5px] gap-2 fixed top-0 z-20 ">
        {filterButtons.map((btn, idx) => (
          <button
          onClick={() => setSearchParam(btn.searchCategory)}
            key={btn.btnText + idx}
            className="px-4 py-2 rounded-lg text-white bg-neutral-900 border border-neutral-700 cursor-pointer flex items-center gap-2"
          >
            {btn.btnIcon} {btn.btnText}
          </button>
        ))}
      </div>
      <div className="max-w-3xl mx-auto py-2 relative">
        {cardsData.length !== 0 ? (
          <div className="grid grid-cols-3 w-full gap-5 pt-30">
            {filteredCards.map((card) => (
              <Card card={card} key={card.id + card.title} />
            ))}
          </div>
        ) : (
          <h1 className="text-2xl text-white font-bold">No products found</h1>
        )}
      </div>
    </>
  );
}

export default Products;
