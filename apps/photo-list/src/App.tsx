import React from "react";
import { CustomHeader } from "ui";
import { PhotoList } from "./components/PhotoList";

function App() {
  return (
    <CustomHeader title="Photos List">
      <PhotoList />
    </CustomHeader>
  );
}

export default App;
