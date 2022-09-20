import React, { useEffect, useState } from "react";
import { sleep } from "../../assets/utils/Sleep";
import { Suggestions } from "../../communication/Suggestions";
import CardTable from "../../components/Cards/CardTable";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);

  let suggestionsClient = new Suggestions();

  useEffect(() => {
    getSuggestions();
  }, []);

  const getSuggestions = async () => {
    const clientResponse = await suggestionsClient.getAllSuggestions();
    setSuggestions(clientResponse.data);
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
          <CardTable name="Cursos Sugeridos" data={suggestions} />
        </div>
      </div>
    </>
  );
}
