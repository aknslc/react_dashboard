import MainRouter from "./MainRouter";
// components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";


function App() {


  return (
    <>
      <div className="page-wrapper">


        <Sidebar />

        <main className="content">
          <Topbar />
          <MainRouter />
        </main>



      </div>
    </>
  );
}

export default App;
