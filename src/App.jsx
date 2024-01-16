import "./App.css";
import conf from "./conf/conf";

function App() {
  console.log(conf.appwriteProjectID);
  return (
    <>
      <h1 className="font-bold">The Blog Writing App With Appwrite</h1>
    </>
  );
}

export default App;
