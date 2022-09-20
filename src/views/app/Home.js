import React from "react";
import { useHistory } from "react-router-dom";
import CardTable from "../../components/Cards/CardTable";

export default function Home() {
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
          <CardTable
            name="Cursos Sugeridos"
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
