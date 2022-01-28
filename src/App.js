import { useStateValue } from "./Context/StateProvider";
import "./index.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#231F20]">
      <div className=" h-12 w-full flex items-center px-4 underline text-white">
        <span>MinterERC</span>
      </div>
      <div className="flex items-center justify-center p-4 flex-grow w-full text-white">
        <butto>Server> Hello, No0bDev3l0per#3031</butto>
      </div>
      <div className="flex items-center p-4 h-12 w-full text-white text-sm">
        <span>©2022 Developed by Twitter@0xreeko | Curated by {"<anon>"}</span>
      </div>
    </div>
  );
}

export default App;
