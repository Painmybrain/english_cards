import "./App.css";
import Header from "./components/Header";
import Futer from "./components/Futer";
import CardList from "./components/CardsList";
import TableSection from "./components/TableSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <CardList />
        <TableSection />
      </main>
      <Futer />
    </div>
  );
}

export default App;
