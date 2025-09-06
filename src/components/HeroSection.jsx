import heroMobile from "../assets/images/image-hero-mobile.png";
import heroDeskto from "../assets/images/image-hero-desktop.png";

export function HeroSection() {
  return (
    <section className="md:px-[10vw] flex flex-col md:flex-row">
      <div>
        <img src={heroMobile} className="block md:hidden" alt="" />
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
    </section>
  );
}
