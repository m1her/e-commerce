
import WarrantySlide from "./WarrantySlide";
import FeaturedSlide from "./FeaturedSlide";
import DiscountOffer from "./DiscountOffer";
import NewsLetter from "./NewsLetter";
import SlideShow from "./SlideShow";


const LandingPage = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/embracing-trendy-fashionable-couple-isolated-white-studio-background-caucasian-woman-man-posing-basic-minimal-stylish-clothes-concept-relations-fashion-beauty-love-copyspace_155003-36673.jpg",
      title: "Clothes",
      description: "Level up your style with our seasoned collections",
    },
    {
      url: "https://i.pinimg.com/564x/7e/2b/8d/7e2b8d36810e2bb3401a5abbfa2efe9e.jpg",
      title: "Furniture",
      description: "Show your designing skills with our new colors",
    },
    {
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7bad8c93546277.5f48a570f12f8.jpg",
      title: "Electronics",
      description: "Fill your need of electronics with our special offers",
    },
    {
      url: "https://incrediblefeets.com/wp-content/uploads/2019/05/air-force-1-banner-resized-800x300.jpg",
      title: "Shoes",
      description: "Obtain your favorite pair of shoes Now",
    },
  ];
  return (
    <div className="flex min-h-screen font-Montserrat flex-col items-center lg:px-24 md:px-14 px-6">
      <SlideShow slides={slides} />
      <WarrantySlide />
      <FeaturedSlide />
      <DiscountOffer />
      <NewsLetter />
      
    </div>
  );
};
export default LandingPage;
