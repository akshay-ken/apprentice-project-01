import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import iconTodo from "../assets/images/icon-todo.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconPlanning from "../assets/images/icon-planning.svg";
import iconReminders from "../assets/images/icon-reminders.svg";
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
            className="relative"
            onClick={() => {
              dispatch({ type: "feat" });
            }}
          >
            Features
            {openState.features.isOpen ? (
              <img src={arrowUp} className="inline w-4 h-2 ml-2" alt="" />
            ) : (
              <img src={arrowDown} className="inline w-4 h-2 ml-2" alt="" />
            )}
            {/* popover menu */}
            <div className=" bg-Gray-50 shadow-[0_0_10px_1px_black] mt-2 absolute p-4 w-38 -ml-12 rounded-2xl flex flex-col items-center gap-2">
              <div className="flex flex-row">
                <img src={iconTodo} className="size-4 mr-2" alt="" />
                <p>Todo List</p>
              </div>
              <div className="flex flex-row">
                <img src={iconCalendar} alt="" className="size-4 mr-2" />
                <p>Calender</p>
              </div>
              <div className="flex flex-row">
                <img src={iconReminders} alt="" className="size-4 mr-2" />
                <p>Reminder</p>
              </div>
              <div className="flex flex-row">
                <img src={iconPlanning} alt="" className="size-4 mr-2" />
                <p>Planning</p>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              dispatch({ type: "comp" });
            }}
          >
            Company
            {openState.company.isOpen ? (
              <img src={arrowUp} className="inline w-4 h-2 ml-2" alt="" />
            ) : (
              <img src={arrowDown} className="inline w-4 h-2 ml-2" alt="" />
            )}
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
