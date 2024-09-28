import "./App.css";
import Header from "./components/Header";

import WordCard from "./components/WordCard";
import { SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <WordCard />
      </SimpleGrid>
    </div>
  );
}

export default App;
