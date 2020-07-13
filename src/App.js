import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import spiner from "./spiner.gif";
// import Card from "./components/Card";
import Cardlist from "./components/Cardlist";
import Search from "./components/Search";
function App() {
  const [load, setLoad] = useState(true);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchitem = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(response.data);
      console.log(items);
      setLoad(false);
    };
    fetchitem();
  }, [load, items]);
  return (
    <div className="App">
      {load ? (
        <div className='spiner'>
          <img alt="" src={spiner} />
        </div>
      ) : (
        <div>
          <Header />
          <Search handle={(q) => setQuery(q)} />
          <Cardlist items={items} />
        </div>
      )}
    </div>
  );
}

export default App;
