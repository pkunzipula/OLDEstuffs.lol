import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import AddStuffs from "./components/AddStuffs/AddStuffs";
import "./App.css";
import { openDB, deleteDB } from "idb";
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
  const stuffs = tx.objectStore(storeName).getAll();
  await tx.done;
  return stuffs;
};

const storeStuffs = async stuff => {
  const [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readwrite");
  const stuffs = tx.objectStore(storeName);
  await stuffs.put(stuff);
  await tx.done;
};

const sortStuffs = async () => {
  let stuffs = await initStuffs();
  // sort the stuffs in DESC order by Date

  stuffs = stuffs.sort((a, b) => {
    return new Date(b.datetime) - new Date(a.datetime);
  });

  return stuffs;
};

function App() {
  const [screen, setScreen] = useState("homepage");
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    (async () => {
      const store = await sortStuffs();
      setStuffs(store);
    })();
  }, [setStuffs]);

  return (
    <div className="App">
      {screen === "homepage" && <Homepage setScreen={setScreen} />}
      {screen === "addStuffsFromHomepage" && (
        <AddStuffs
          comingFromHomepage
          setScreen={setScreen}
          storeStuffs={storeStuffs}
        />
      )}
      {screen === "addStuffs" && (
        <AddStuffs setScreen={setScreen} storeStuffs={storeStuffs} />
      )}
      {screen === "stuffs" && (
        <StuffsList stuffs={stuffs} setScreen={setScreen} />
      )}
    </div>
  );
}

export default App;
