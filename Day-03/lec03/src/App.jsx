import "./App.css";
import InputBar from "../components/InputBar";
import Hello from "../components/Hello";
import SayHi from "../components/SayHi";
import Dabba from "../components/Dabba";
function App() {
  return (
    <>
      <div>MOHIT && HITESH</div>
      <Dabba height={"250px"} width={"250px"} color={"gold"} />
      <SayHi name={"Hitesh"} age={21} />
      <InputBar type={"text"} placeHolderText={"Enter password"} />
      <Hello />
    </>
  );
}

export default App;
