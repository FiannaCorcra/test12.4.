import React, { useState } from "react";
import storeData from "./storeData.json";

function App() {
  const [region, setRegion] = useState("Tohoku"); 

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>店舗情報</h1>
      <label htmlFor="region-select">地方を選んでください:</label>
      <select id="region-select" value={region} onChange={handleRegionChange}>
        {Object.keys(storeData.regions).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <h2>選択した地方: {region}</h2>
      <ul>
        {storeData.regions[region]?.map((store, index) => (
          <li key={index}>
            <strong>{store.storeName}</strong>
            <br />
            {store.address}
            <br />
            電話番号: {store.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
