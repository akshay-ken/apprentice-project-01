import { createPortal } from "react-dom";
export function MobileMenu() {
  return createPortal(
    <aside>
      <div></div>
    </aside>,
    document.getElementById("menu")
  );
}
