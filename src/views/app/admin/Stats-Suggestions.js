import React, { useEffect, useState } from "react";
import { Suggestions } from "../../../communication/Suggestions";
import CardTable from "../../../components/Cards/CardTable";

export default function SuggestionsStats() {

  const [top5, setTop5] = useState([]);
  const [bottom3, setBottom3] = useState([]);

  let suggestionsClient = new Suggestions();

  useEffect(() => {
    getTotalSuggestions();
  }, []);

  const getTotalSuggestions = async () => {
    const clientResponse = await suggestionsClient.getTop5andBottom3Categories();
    setTop5(clientResponse.data.greaters)
    setBottom3(clientResponse.data.lowers)
  };


  return (
    <>
      <div
        className="flex flex-wrap"
        style={{
          paddingTop: "150px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div className="w-full mb-12 px-4">
          <CardTable
            name="Top 5 clubes más sugeridos"
            data={top5}
          />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable
            name="Top 3 clubes menos sugeridos"
            data={bottom3}
          />
        </div>
      </div>
    </>
  );
}
