import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyTodo from "./components/MyTodo";

function App() {
  return (
    <>
      <Navbar />
      <main className="base-container grow">
        <MyTodo />
      </main>
      <Footer />
    </>
  );
}

export default App;
