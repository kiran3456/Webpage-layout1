import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="box1">HEADER</div>
      <div className="box2">NAVIGATION MENU</div>
      <div className="box3">
        <div className="left">
          {/* CONTENT */}
          <div className="top">Search </div>
          <div className="bottom">Social Media</div>
          <div className="middle">News Letter Signup</div>
        </div>
        <div className="center">MAIN CONTANT</div>
        <div className="right">
          {/* CONTANT */}
          <div className="first">
            <div className="divide">Side nav</div>
            <div className="divide">Side nav</div>
          </div>
          <div className="second">Other Offers</div>
        </div>
      </div>
      <div className="box4">FOOTER</div>
    </div>
  );
}

export default App;
