import React from "react";
import { useHistory } from "react-router-dom";
import CardTable from "../../../components/Cards/CardTable";

export default function SuggestionsStats() {
  let history = useHistory();
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
          <CardTable name="Top 5 clubes más sugeridos"/>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable name="Top 3 clubesmenos sugeridos"/>
        </div>
      </div>
    </>
  );
}
