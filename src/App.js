import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import AddStuffs from "./components/AddStuffs";
import "./App.css";
import { openDB } from "idb";
import StuffsList from "./components/StuffsList";

const initDatabase = async () => {
  const dbName = "stuffs.lol";
  const storeName = "stuffStore";
  const version = 1;

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore(storeName, { autoIncrement: true });
    }
  });
  return [db, storeName];
};

const initStuffs = async () => {
  const [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readonly");
  const stuffs = await tx.objectStore(storeName).getAll();
  await tx.done;
  return stuffs;
};

const storeStuffs = async stuff => {
  const [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readwrite");
  const stuffs = await tx.objectStore(storeName);
  await stuffs.put(stuff);
  await tx.done;
};

function App() {
  const [screen, setScreen] = useState("stuffs");
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    (async () => {
      const stuffs = await initStuffs();
      setStuffs(stuffs);
    })();
  }, []);

  return (
    <div className="App">
      {screen === "homepage" && <Homepage setScreen={setScreen} />}
      {screen === "addStuffs" && (
        <AddStuffs setScreen={setScreen} storeStuffs={storeStuffs} />
      )}
      {screen === "stuffs" && <StuffsList stuffs={stuffs} />}
    </div>
  );
}

export default App;
