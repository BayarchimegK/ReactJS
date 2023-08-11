import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./data";


import world from "./images/world.png";
import pointer from "./images/placeholder.png";
function App() {
  const dataset = Data.map(myDataFunction);
  function myDataFunction(elementItems) {
    return <Card point={pointer} details={elementItems} />;
  }
  return (
    <div className="react--app--container">
      <div className="nav--cont--bar">
        <Header img={world} />
      </div>
      <div className="app--container">{dataset}</div>
    </div>
  );
}

export default App;
