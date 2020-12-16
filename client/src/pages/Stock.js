import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory, useParams,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import moment from "moment";

//the qut api
const API_KEY = "https://localhost:443";
//the name of the columns for the retrieved table
const columnsDefs = [
  {
    headerName: "Timestamp",
    field: "timestamp",
    width: 150, 
    filter: true,
    sortable: true
  },
  {
    headerName: "Symbol",
    field: "symbol",
    width: 100, 
    filter: true,
    sortable: true
  },
  {
    headerName: "Name",
    field: "name",
    width: 200, 
    filter: true,
    sortable: true
  },
  {
    headerName: "Industry",
    field: "industry",
    width: 200, 
    filter: true,
    sortable: true
  },
  {
    headerName: "Open",
    field: "open",
    width: 100, 
    filter: true,
    sortable: true
  },
  {
    headerName: "High",
    field: "high",
    width: 100, 
    filter: true,
    sortable: true
  },
  {
    headerName: "Low",
    field: "low",
    width: 100, 
    filter: true,
    sortable: true
  },
  {
    headerName: "close",
    field: "close",
    width: 100, 
    filter: true,
    sortable: true
  },
  {
    headerName: "Volumes",
    field: "volumes",
    width: 160, 
    filter: true,
    sortable: true
  }
];


/**
 * This is the main function for the stock page. This function gets the symbol from the stocklist
 * When user click on any stock they will be taken to this page. The symbol of that stock will be used to 
 * request to the api that we need information for the clicked stock.
 */
export default function Stock() {
  const { symbol } = useParams();
  const [rowData, setRowData] = useState([]);

  // Used to retrieve symbol from path param
  useEffect(() => {

    const url = `${API_KEY}/stocks/${symbol}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {return [{close: res.close, high: res.high, 
      industry: res.industry, low: res.low, name: res.name,
       open: res.open, symbol: res.symbol, 
       timestamp: moment(res.timestamp).format("DD/MM/YY"), volumes: res.volumes}]
    })
    .then(stocks => setRowData(stocks))
      .catch(error => (console.log("Something went wrong Please try again"+error)))
  }, [symbol]); //depending on symbol

  return (
    <div className="x" style={{padding: "50px"}}>
      <p>Please click <Link to="/login">here</Link> login to to see the full pricing history of this stock!</p>     
      <div className="ag-theme-alpine" style={{
          height: "600px",
          width: "1200px",}} >

             {/*The table and its columns and rows  */}
        <AgGridReact
          columnDefs={columnsDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
        />
       </div>
    </div>
  );
}
