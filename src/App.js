// import logo from './logo.svg';
import "./App.css";
import Test from "./Test.js";

function App() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App">
      {
        /* <Test />
      <p>시발</p> */
        data.map(function (res) {
          return <Test key={res} b={res} />;
        })
      }
    </div>
  );
}

export default App;
