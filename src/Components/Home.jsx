import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

export const Home = () => {
  let data;
  if(data===undefined){
      axios.get("https://api.coincap.io/v2/assets").then((response) => {
          console.log(response.request.response);
          data = response.request.response;
        });
    }
        return (
    <>
      <div
        className="container text-center d-flex "
        style={{ marginTop: "5vh", justifyContent: "center" }}
      >
        <input type="text" className="input-group w-50  " />
      </div>
      <div className="container my-3 border">
        {/* <DataTable >
            <Column field="name" header="Currency Name" />
            <Column field="symbol" header="Symbbol" />
            $<Column field="priceUsd" header="Price (in $)" />
            <Column field="supply" header="Supply" />
        </DataTable> */}
      </div>
    </>
  );
};
