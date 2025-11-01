import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryNow=""
        learnMore=""
        playStore="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imageURL="media/images/products-console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryNow=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryNow=""
        learnMore=""
        playStore="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imageURL="media/images/landing.svg"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryNow=""
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryNow=""
        learnMore=""
        playStore="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <Universe />
    </>
  );
}
