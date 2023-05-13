import "./App.css";

function App() {
  return (
    <div className="containerV">
      <div className="boxV boxV1">Box 1</div>
      <div className="boxV boxV2">Box 2</div>
      <div className="boxV boxV3">
        <div className="containerH">
          <div className="boxH boxH1">Box 1</div>
          <div className="boxH boxH2">Box 2</div>
          <div className="boxH boxH3">Box 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
