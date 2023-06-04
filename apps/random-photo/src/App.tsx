import React from "react";
import { CustomHeader } from "ui";
import { PhotoRandom } from "./components/PhotoRandom";

function App() {
  return (
    <CustomHeader title="Photos">
      <PhotoRandom />
    </CustomHeader>
  );
}

export default App;
