import React from "react";
import { useHistory } from "react-router-dom";
import CardTable from "../../../components/Cards/CardTable";

export default function StudentStats() {
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
          <CardTable name="Estudiantes con más sugerencias"
            data={[{studentName:'juan perez', qty:5},{studentName:'fernando lopez', qty:5}]}/** Aca deberiamos tener un qty aparte para los estudiantes **/
          />
        </div>
      </div>
    </>
  );
}
