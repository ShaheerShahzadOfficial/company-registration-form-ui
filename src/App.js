import "./App.css";
import Steps from "./Components/Steps";

function App() {
  return (
    <div className="App">
      <div className="Form">
        <h3>Thank you for visiting</h3>
        <h1>
          Company <span>Title</span>
        </h1>
        <h4>We need some information to get started</h4>
        <Steps />

        <div className="LEGAL_ENTITYS">
          <h1>LEGAL ENTITYS</h1>
          <h3>Please fill in the following</h3>
          <h3>Field marked with * are required</h3>

          <input type="text" placeholder=" * Company's Legal Name" />
          <input type="text" placeholder=" * Address where the company is incorporated"/>
          <input type="text" placeholder=" * Website of the Company" />

          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
