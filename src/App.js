import Pallete from "./Pallete";
import colors from "./seedColor";

function App() {
  return (
    <div>
      <Pallete colors={colors[5].colors} />
    </div>
  );
}

export default App;
