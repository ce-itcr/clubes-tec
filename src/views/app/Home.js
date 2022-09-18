import React from "react";
import CardTable from "../../components/Cards/CardTable";

export default function Home() {
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
          <CardTable />
        </div>
      </div>
    </>
  );
}
