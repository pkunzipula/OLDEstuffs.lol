import React, { useState } from "react";
import Homepage from "./components/Homepage";
import AddStuffs from "./components/AddStuffs";
import "./App.css";
import { openDB } from "idb";

const storeStuffs = async activity => {
  // console.log(title, description);

  const dbName = "stuffs.lol";
  const storeName = "stuffs";
  const version = 1;

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      db.createObjectStore(storeName, { autoIncrement: true });
    }
  });

  const tx = await db.transaction(storeName, "readwrite");
  const store = await tx.objectStore(storeName);
  await store.put(activity);
  await tx.done;
};

function App() {
  const [screen, setScreen] = useState("addStuffs");

  return (
    <div className="App">
      {screen === "homepage" && <Homepage setScreen={setScreen} />}
      {screen === "addStuffs" && <AddStuffs storeStuffs={storeStuffs} />}
    </div>
  );
}

export default App;
