import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ROUTES } from "../app-navigation/routes";
import { MENU } from "../data/menu";
import FoodMenuIcon from "../assets/food-menu-icon.svg";
import BeverageMenuIcon from "../assets/beverage-icon.svg";
import CocktailMenuIcon from "../assets/cocktail-icon.svg";
import MocktailMenuIcon from "../assets/mocktail-icon.svg";
import WineMenuIcon from "../assets/wine-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import FeedbackIcon from "../assets/feedback-icon.svg";

import Curve from "../components/svg/Curve";
import { useState } from "react";
import FeedbackModal from "../components/FeedbackModal";

const Home = () => {
  const categories = [...new Set(MENU.map((item) => item.category))];
  const navigate = useNavigate();
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

  const getIcon = (category: string) => {
    return category === "Food Menu"
      ? FoodMenuIcon
      : category === "Beverages Menu"
      ? BeverageMenuIcon
      : category === "Cocktails Menu"
      ? CocktailMenuIcon
      : category === "Mocktails Menu"
      ? MocktailMenuIcon
      : category === "Wine Menu"
      ? WineMenuIcon
      : "";
  };

  return (
    <>
      <Header />
      <main className="h-[calc(100%-100px)] overflow-auto hide-scroll">
        <section className="py-10 px-6">
          <div className="grid grid-cols-2 justify-items-center gap-x-12 gap-y-6 px-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="max-w-[250px] w-full flex flex-col gap-3 hover:cursor-pointer"
                onClick={() => navigate(`${ROUTES.category}/${category}`)}
              >
                <div className="relative overflow-hidden w-full aspect-square rounded-full bg-sky-700 flex items-center justify-center p-6 min-[375px]:p-8">
                  <img
                    src={getIcon(category)}
                    alt=""
                    className="max-w-[100px] w-full aspect-square object-contain block relative z-[1]"
                  />
                  <Curve />
                </div>
                <p className="text-center font-semibold sm:text-[20px]">
                  {category}
                </p>
              </div>
            ))}
            <a
              href="https://www.instagram.com/theescape.ng/?hl=en"
              target="_blank"
              className="max-w-[250px] w-full flex flex-col gap-3 hover:cursor-pointer"
            >
              <div className="relative overflow-hidden w-full aspect-square rounded-full bg-sky-700 flex items-center justify-center p-6 min-[375px]:p-8">
                <img
                  src={InstagramIcon}
                  alt=""
                  className="max-w-[100px] w-full aspect-square object-contain block relative z-[1]"
                />
                <Curve />
              </div>
              <p className="text-center font-semibold sm:text-[20px]">
                Instagram
              </p>
            </a>
            <div
              className="max-w-[250px] w-full flex flex-col gap-3 hover:cursor-pointer"
              onClick={() => setOpenFeedbackModal(true)}
            >
              <div className="relative overflow-hidden w-full aspect-square rounded-full bg-sky-700 flex items-center justify-center p-6 min-[375px]:p-8">
                <img
                  src={FeedbackIcon}
                  alt=""
                  className="max-w-[100px] w-full aspect-square object-contain block relative z-[1]"
                />
                <Curve />
              </div>
              <p className="text-center font-semibold sm:text-[20px]">
                Feedback
              </p>
            </div>
          </div>
        </section>
      </main>

      <FeedbackModal
        openFeedbackModal={openFeedbackModal}
        setOpenFeedbackModal={setOpenFeedbackModal}
      />
    </>
  );
};

export default Home;
