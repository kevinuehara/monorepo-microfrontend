import "./App.css";
import { CustomHeader } from "ui";
import { PhotoList } from "photolist/PhotoList";
import { PhotoRandom } from "photorandom/PhotoRandom";

function App() {
  return (
    <CustomHeader title="Photo Home">
      <div
        style={{
          display: "grid",
          gridTemplate: "1fr 1fr",
          gridGap: "1rem",
        }}
      >
        <PhotoList />
        <PhotoRandom />
      </div>
    </CustomHeader>
  );
}

export default App;
