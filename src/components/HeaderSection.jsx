import logo from "../assets/images/logo.svg";
export function HeaderSection() {
  return (
    <header className="px-4 md:px-6 py-6 md:py-8">
      <img src={logo} alt="" />
      <nav></nav>
    </header>
  );
}
