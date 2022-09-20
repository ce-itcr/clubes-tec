import React from "react";
import CardTable from "../../../components/Cards/CardTable";

export default function SuggestionsStats() {
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
            data={[
              { courseName: "ArtesDramaticas", category: "Arte", qty: 10 },
              { courseName: "ArtesLiterarias", category: "Arte", qty: 5 },
            ]}
          />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable
            name="Top 3 clubes menos sugeridos"
            data={[
              { courseName: "ArtesDramaticas", category: "Arte", qty: 10 },
              { courseName: "ArtesLiterarias", category: "Arte", qty: 5 },
            ]}
          />
        </div>
      </div>
    </>
  );
}
