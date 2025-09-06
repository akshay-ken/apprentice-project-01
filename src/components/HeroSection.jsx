import heroMobile from "../assets/images/image-hero-mobile.png";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import clientOne from "../assets/images/client-audiophile.svg";
import clientTwo from "../assets/images/client-databiz.svg";
import clientThree from "../assets/images/client-maker.svg";
import clientFour from "../assets/images/client-meet.svg";

export function HeroSection() {
  return (
    <section className="md:px-[10vw] flex flex-col md:flex-row">
      <div>
        <img src={heroMobile} className="block md:hidden" alt="" />
        <img src={heroDesktop} className="hidden md:block" alt="" />
      </div>
      <div className="flex flex-col justify-evenly mt-12 items-center gap-y-6">
        <h1 className="text-4xl font-bold text-Gray-950">Make remote work</h1>
        <p className="px-6 text-center text-lg font-semibold text-Gray-500">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-Gray-950 text-xl font-medium text-Gray-50 px-6 py-4 rounded-3xl">
          Learn more
        </button>
      </div>
      <footer className="flex flex-row h-6 justify-around mt-14">
        <img src={clientOne} alt="" />
        <img src={clientTwo} alt="" />
        <img src={clientThree} alt="" />
        <img src={clientFour} alt="" />
      </footer>
    </section>
  );
}
