import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import { useReducer } from "react";

const initialState = {
  features: {
    isOpen: false,
  },
  company: {
    isOpen: false,
  },
};
function reducerFunction(state, action) {
  if (action.type == "feat") {
    return {
      ...state,
      features: {
        isOpen: !state.features.isOpen,
      },
    };
  }
  if (action.type == "comp") {
    return {
      ...state,
      company: {
        isOpen: !state.company.isOpen,
      },
    };
  }
}
export function HeaderSection() {
  const [openState, dispatch] = useReducer(reducerFunction, initialState);
  console.log(openState);
  return (
    <header className="px-4 md:px-6 py-6 md:py-8 flex flex-row justify-between md:justify-start items-center">
      <img src={logo} alt="" />
      <img src={menuOpen} className="block md:hidden" alt="" />
      <nav className="hidden md:flex flex-row ml-20 justify-between w-full text-Gray-500 font-medium text-base">
        <ul className="flex flex-row gap-x-10 ">
          <li
            className="bg-lime-300"
            onClick={() => {
              dispatch({ type: "feat" });
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              dispatch({ type: "comp" });
            }}
          >
            Company
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="flex flex-row gap-x-10 font-normal text-base">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </header>
  );
}
