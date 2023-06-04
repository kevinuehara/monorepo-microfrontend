import { CustomHeader } from "ui";
import { PhotoList } from "./components/PhotoList";

function App() {
  return (
    <CustomHeader title="Photos Header">
      <PhotoList />
    </CustomHeader>
  );
}

export default App;
