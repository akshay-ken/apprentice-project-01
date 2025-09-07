import heroMobile from "../assets/images/image-hero-mobile.png";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import clientOne from "../assets/images/client-audiophile.svg";
import clientTwo from "../assets/images/client-databiz.svg";
import clientThree from "../assets/images/client-maker.svg";
import clientFour from "../assets/images/client-meet.svg";

export function HeroSection() {
  return (
    <section className="md:px-[10vw] flex flex-col md:grid md: md:grid-cols-2">
      <div className="md:order-2 md:row-span-2 md:ml-33">
        <img src={heroMobile} className="block md:hidden" alt="" />
        <img src={heroDesktop} className="hidden md:block h-[75vh]" alt="" />
      </div>
      <div className="flex flex-col justify-evenly mt-12 items-center gap-y-6 md:order-1">
        <h1 className="text-4xl md:text-7xl md:text-balance font-bold text-Gray-950">
          Make remote work
        </h1>
        <p className="px-6 md:px-0 md:pr-42 text-center md:text-left text-lg font-semibold text-Gray-500">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-Gray-950 md:self-start text-xl font-medium text-Gray-50 px-6 py-4 rounded-3xl">
          Learn more
        </button>
      </div>
      <footer className="flex flex-row h-6 justify-around mt-14 md:order-3 md:items-center md:mt-auto">
        <img src={clientOne} alt="" />
        <img src={clientTwo} alt="" />
        <img src={clientThree} alt="" />
        <img src={clientFour} alt="" />
      </footer>
    </section>
  );
}
