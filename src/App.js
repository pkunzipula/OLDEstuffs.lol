import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import AddStuffs from "./components/AddStuffs/AddStuffs";
import "./App.css";
import { openDB, deleteDB } from "idb";
import StuffsList from "./components/StuffsList";
import { Router } from "@reach/router";
import Login from "./Login";

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

const initKeys = async () => {
  const [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readonly");
  const keys = tx.objectStore(storeName).getAllKeys();
  await tx.done;
  return keys;
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
  let keys = await initKeys();
  stuffs.forEach((stuff, index) => {
    stuff.key = keys[index];
  });

  stuffs = stuffs.sort((a, b) => {
    // return new Date(b.datetime) - new Date(a.datetime);
    return b.id - a.id;
  });
  console.log(stuffs);
  return stuffs;
};

const deleteStuffs = async key => {
  const [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readwrite");
  const stuffs = tx.objectStore(storeName);
  await stuffs.delete(key);
  await tx.done;
};

function App() {
  const [stuffs, setStuffs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const reloadStuffs = async () => {
    const store = await sortStuffs();
    setStuffs(store);
  };

  useEffect(() => {
    reloadStuffs();
  }, [setStuffs]);

  return (
    <div className="App">
      <Router>
        <Homepage path="/" />

        <AddStuffs
          comingFromHomepage
          storeStuffs={storeStuffs}
          reloadStuffs={reloadStuffs}
          path="start-stuffs"
        />

        <AddStuffs
          storeStuffs={storeStuffs}
          reloadStuffs={reloadStuffs}
          path="add-stuffs"
        />

        <Login path="login" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <StuffsList
          stuffs={stuffs}
          deleteStuffs={deleteStuffs}
          reloadStuffs={reloadStuffs}
          loggedIn={loggedIn}
          path="stuffs/*"
        />
      </Router>
    </div>
  );
}

export default App;
