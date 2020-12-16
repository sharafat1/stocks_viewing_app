import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import  {useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import logginProcess from "./Login"
import checkingA from "./Login"


const token = localStorage.getItem("token");


//the header for authenticated requests
// const headers = {
//   accept: "aplication/json",
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`
// }


//This is the link to api
const API_KEY = "http://131.181.190.87:3000";
const url = `${API_KEY}/stocks/symbols`;
//This array holds the names of the table's columns 
const columns = [

  {
    headerName: "Name",
    field: "name",
    sortable: true,
    filter: true,
    width: 300, 
    sortable: true,
    filter: true
    
  },
  {
    headerName: "Symbol",
    field: "symbol",
    width: 150, 
    sortable: true, 
    filter: true
  },
  {
    headerName: "Industry",
    field: "industry",
    width: 250,
    sortable: true,
    filter: true
  }
];

/**
 * This function is gets data from the api, then create a table and place that data into the table,
 * This function uses the AgGridReact Table,
 * When the person clicks on any of the rows they will be taken to the next page where there will be
 * the latest row of information available for that particular stock. 
 */
export default function StockList() {
  const history = useHistory();
  const [rowData, setRowData] = useState([]);

  //this is the data fetching part from the api.
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res =>
        res.map(result => {
          return {
            name: result.name,
            symbol: result.symbol,
            industry: result.industry
          };
      }))
      .then(rowData => setRowData(rowData))
      .catch(error => alert("Something went wrong: "+error.message));
  }, []);

  
  return (
    <div className="container" >
      <h3>Stock List</h3>
      <p><b>Click on any row to view that stocks latest and up to date history of pricing information.</b></p>
      <p>
        <p> Please click on any name, symbol, and industry if you want to sort them, if you want to search hover over your mouse over the any of the columns heads such as name, industry and symbol.</p>
        <Badge color="success">{rowData.length}</Badge> Stocks are available in the system now.
      </p>
      <div
        className="ag-theme-alpine"
        style={{
          height: "800px",
          width: "850px", 
          padding: "50px"
          
        }}>
          {/* < SearchBarUncontrolled /> */}

          {/* The table columns and rows and all its data are called here. This also checks if the user is logged in then do appropriate actions */}
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true} 
          paginationPageSize={25}
          onRowClicked={row => { 
            //if there is a token in the storage, go to Authenticated page else go to non-authenticated page
            if(sessionStorage.getItem("token") === token){

              history.push(`/Authed/${row.data.symbol}`);
            }
              history.push(`/stock/${row.data.symbol}/`);}
          }
        />
        
      </div>
    </div>
  );
}


/**
 * This component create a search bar above the table and it also create a button. Theese can be used to search by industry.
 */
function SearchBarUncontrolled(){
  return (
    <form onSubmit={(event) => {event.preventDefault();
    
    console.log("This is the input from the searchBar: "+(`${event.target.industry.value}`))
  
  }}>
    <label htmlFor="industrySearch" style={{padding: "2px"}}>Search by industry:</label>
    <input id="name" name="name" type="text" />
    <button type="submit">Search</button>

    </form>
  );
}

