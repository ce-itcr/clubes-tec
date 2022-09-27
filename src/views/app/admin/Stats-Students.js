import React, { useEffect, useState } from "react";
import { Suggestions } from "../../../communication/Suggestions";
import CardTable from "../../../components/Cards/CardTable";

export default function StudentStats() {
  const [currentData, setCurrentData] = useState([]);

  let suggestionsClient = new Suggestions();

  useEffect(() => {
    getTotalSuggestions();
  }, []);

  const getTotalSuggestions = async () => {
    const clientResponse = await suggestionsClient.getTOPAdminSuggesters();
    console.log("🚀 ~ file: Stats-Students.js ~ line 16 ~ getTotalSuggestions ~ clientResponse", clientResponse)
    setCurrentData(clientResponse.data);
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
            name="Estudiantes con más sugerencias"
            data={currentData}
          />
        </div>
      </div>
    </>
  );
}
