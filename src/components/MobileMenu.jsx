import iconClose from "../assets/images/icon-close-menu.svg";
import { createPortal } from "react-dom";
export function MobileMenu({
  openState,
  dispatch,
  arrowDown,
  arrowUp,
  iconTodo,
  iconCalendar,
  iconReminders,
  iconPlanning,
}) {
  return createPortal(
    <div className="h-screen absolute bg-Gray-500/50 inset-0">
      <div className="h-screen absolute bg-Gray-50 inset-y-0 right-0 w-[70vw] p-6">
        <div className="flex flex-row h-12 mb-8 justify-end">
          <img
            src={iconClose}
            onClick={() => {
              dispatch({ action: "menu" });
            }}
            alt=""
          />
        </div>
        <nav className="flex flex-col justify-start text-Gray-500 font-medium text-2xl">
          <ul className="flex flex-col gap-y-6 ">
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
              {openState.features.isOpen ? (
                <div className=" flex flex-col items-center gap-4 mt-6">
                  <div className="flex flex-row">
                    <img src={iconTodo} className="size-6 mr-6" alt="" />
                    <p>Todo List</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={iconCalendar} alt="" className="size-6 mr-6" />
                    <p>Calender</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={iconReminders} alt="" className="size-6 mr-6" />
                    <p>Reminder</p>
                  </div>
                  <div className="flex flex-row">
                    <img src={iconPlanning} alt="" className="size-6 mr-6" />
                    <p>Planning</p>
                  </div>
                </div>
              ) : null}
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
              {openState.company.isOpen ? (
                <div className=" bg-Gray-50 shadow-[0_0_10px_1px_black] mt-2 absolute p-4 w-30 rounded-2xl flex flex-col items-start gap-2">
                  <p>History</p>
                  <p>Our Team</p>
                  <p>Blog</p>
                </div>
              ) : null}
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="flex flex-row gap-x-10 font-normal text-base">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </div>
    </div>,
    document.getElementById("menu")
  );
}
