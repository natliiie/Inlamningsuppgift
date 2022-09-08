import "./App.css";
import { Navbar, Form } from "./Components";

function App() {
  return (
    <div>
      <header>My header</header>
      <Navbar />
      <div>This is me</div>
      {/* här vill jag ha info */}
      {/* här vill jag ha min form */}
      <Form />
      {/* här vill jag ha en div med de olika posterna */}
    </div>
  );
}

export default App;
