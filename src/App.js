import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent
          name="bottone ciccione col bel rickrollone"
          bg="red"
          width="px"
          height="px"
          border="1px solid black"
          radius="10px 10px 10px 10px"
        />
        <ImageComponent
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/PI%C3%91ATA.jpg/450px-PI%C3%91ATA.jpg"
          alt="gattini uh ah"
          width="px"
          height="px"
          border="1px solid black"
          radius="40px 40px 40px 40px"
        />
      </header>
    </div>
  );
}

export default App;
