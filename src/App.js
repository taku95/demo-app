import * as React from "react";
import Items from "./components/Items";
export default function MyApp() {
  return (
    <div>
      <div className="header"></div>
      <div className="items-container">
        <Items />
      </div>
    </div>
  );
}
