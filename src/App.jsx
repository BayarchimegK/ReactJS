import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
import "./App.css";
import pointer from "./images/placeholder.png";
function App() {
  //The Map method transforms each object according to the "Card" component.
  //Input of the map method should be a function.
  const dataset = data.map((elementItems, i) => (
    <Card key={i} point={pointer} details={elementItems} />
  ));

  return (
    <div className="container">
      <div className="nav--cont--bar">
        <Header />
      </div>
      <div className="app--container">{dataset}</div>
    </div>
  );
}

export default App;
