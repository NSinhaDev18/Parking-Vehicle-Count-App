// Create handlers to increase and decrease vehicle count here
let btnRef1_i = React.createRef();
let btnRef1_d = React.createRef();
let btnRef2_i = React.createRef();
let btnRef2_d = React.createRef();
let btnRef3_i = React.createRef();
let btnRef3_d = React.createRef();
let btnRef4_i = React.createRef();
let btnRef4_d = React.createRef();

let carCount = 0;
let bikeCount = 0;
let scootyCount = 0;
let bicycleCount = 0;
const handleCount = (btnRef) => {
  // console.log(btnRef);
  // btnRef === btnRef1_i ? carCount++ : carCount > 0 ? carCount-- : "";
  switch (btnRef) {
    case btnRef1_i:
      carCount++;
      rootElement.render(<App />);
      break;
    case btnRef1_d:
      carCount > 0 ? carCount-- : "";
      rootElement.render(<App />);
      break;

    case btnRef2_i:
      bikeCount++;
      rootElement.render(<App />);
      break;
    case btnRef2_d:
      bikeCount > 0 ? bikeCount-- : "";
      rootElement.render(<App />);
      break;
    case btnRef3_i:
      scootyCount++;
      rootElement.render(<App />);
      break;
    case btnRef3_d:
      scootyCount > 0 ? scootyCount-- : "";
      rootElement.render(<App />);
      break;
    case btnRef4_i:
      bicycleCount++;
      rootElement.render(<App />);
      break;
    case btnRef4_d:
      bicycleCount > 0 ? bicycleCount-- : "";
      rootElement.render(<App />);
      break;
  }
  rootElement.render(<App />);
};
const App = () => (
  <>
    <p>List of all the vehicles count in the parking.</p>
    <ol>
      <li>
        <p>
          <b>Car: {carCount}</b> &emsp;
          <button ref={btnRef1_i} onClick={() => handleCount(btnRef1_i)}>
            Increase
          </button>
          &emsp;
          <button ref={btnRef1_d} onClick={() => handleCount(btnRef1_d)}>
            Decrease
          </button>
          {/* Add increase and decrease count buttons here */}
        </p>
      </li>
      <li>
        <p>
          <b>Bike: {bikeCount}</b> &emsp;
          {/* Add increase and decrease count buttons here */}
          <button ref={btnRef2_i} onClick={() => handleCount(btnRef2_i)}>
            Increase
          </button>
          &emsp;
          <button ref={btnRef2_d} onClick={() => handleCount(btnRef2_d)}>
            Decrease
          </button>
        </p>
      </li>
      <li>
        <p>
          <b>Scooty: {scootyCount}</b> &emsp;
          {/* Add increase and decrease count buttons here */}
          <button ref={btnRef3_i} onClick={() => handleCount(btnRef3_i)}>
            Increase
          </button>
          &emsp;
          <button ref={btnRef3_d} onClick={() => handleCount(btnRef3_d)}>
            Decrease
          </button>
        </p>
      </li>
      <li>
        <p>
          <b>Bicycle: {bicycleCount}</b> &emsp;
          {/* Add increase and decrease count buttons here */}
          <button ref={btnRef4_i} onClick={() => handleCount(btnRef4_i)}>
            Increase
          </button>
          &emsp;
          <button ref={btnRef4_d} onClick={() => handleCount(btnRef4_d)}>
            Decrease
          </button>
        </p>
      </li>
    </ol>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
