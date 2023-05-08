import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext"
import axios from "axios";

export const Home = () => {
  let [tdata, setTdata] = useState(null)
  let [filter, setFilter] = useState("")
  const [filters, setFilters] = useState(
    {
      global : {value: null, matchMode: FilterMatchMode.CONTAINS},
    }
  )
  useEffect(() => {
    axios.get("https://api.coincap.io/v2/assets").then(response => {
      console.log(response.data.data);
      setTdata(response.data.data);
    }).catch(error => console.log(error));
  },[60]);

  const changeText = (e) => {
    setFilter(e.target.value)
    console.log(filter)
  }

    const header = <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-4 ">
  <span className="fs-2 text-900 font-weight-bold ms-4">CryptoCurrencies</span>
</div>

  return (
    <>
      <div
        className="container text-center d-flex "
        style={{ marginTop: "5vh", justifyContent: "center" }}
      >
        <InputText className="input-group w-50" onInput={(e)=>
          setFilters({
            global : {value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
          })
        } />
      </div>
      <div className="container d-flex justify-content-evenly">
        <DataTable value={tdata} header={header}  stripedRows filters={filters} className="tables">
          <Column field="symbol" header={"Symbol"} className="p-4"/>
          <Column field="name" header={"Name"} sortable className="p-4"/>
          <Column field="rank" header={"Rank"}  sortable className="p-4"/>
          <Column field="marketCapUsd" header={"Price in USD"} sortable className="p-4"/>
          <Column field="changePercent24Hr" header={"Percent change in last 24h"} sortable className="p-4"/>
        </DataTable>
      </div>
    </>
  );
};
