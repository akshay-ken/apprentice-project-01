import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg";
export function HeaderSection() {
  return (
    <header className="px-4 md:px-6 py-6 md:py-8 flex flex-row justify-between md:justify-start items-center">
      <img src={logo} alt="" />
      <img src={menuOpen} className="block md:hidden" alt="" />
      <nav className="hidden md:flex flex-row ml-20 justify-between w-full">
        <ul className="flex flex-row gap-x-10">
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="flex flex-row gap-x-10">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </header>
  );
}
