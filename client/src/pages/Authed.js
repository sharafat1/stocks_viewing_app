
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import  {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom"
import {Button} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import moment from "moment";

//the token save in the localstorage
const token = sessionStorage.getItem("token");


//the header for authenticated requests
const headers = {
  accept: "aplication/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
}


//the name of the columns for the retrieved table
const columnsDefs = [
    {
        headerName: "Timestamp",
        field: "timestamp",
        width: 200, 
        filter: true,
        sortable: true
    },
    {
        headerName: "Symbol",
        field: "symbol",
        width: 200, 
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
        width: 200, 
        filter: true,
        sortable: true
    },
    {
    headerName: "High",
    field: "high",
    width: 200, 
    filter: true,
    sortable: true
    },
    {
        headerName: "Low",
        field: "low",
        width: 300, 
        filter: true,
        sortable: true
    },
    {
        headerName: "close",
        field: "close",
        width: 200, 
        filter: true,
        sortable: true
    },
    {
        headerName: "Volumes",
        field: "volumes",
        width: 200, 
        filter: true,
        sortable: true
    }
];

/**
 * This is the authentication function which do a authenticated request to the api.
 */
export default function AuthenticatedRequest() {
    let history = useHistory();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  let {symbol} = useParams();
  const [rowData, setRowData] = useState([]); 

  //parameters for the api request
  const params = { headers: headers, symbol: symbol,  from: Date.parse(from),  to: Date.parse(to)};
  
  let url = `https://localhost:443/stocks/auth/${params}`; //This is authentication

  //This fetches the information from the api
  useEffect(() => {
    fetch(url, {params}).
    then((response) => response.json())
    .then(res => {
        return [{close: res.close, high: res.high, 
        industry: res.industry, low: res.low, name: res.name,
         open: res.open, symbol: res.symbol, 
         timestamp: moment(res.timestamp).format("DD/MM/YY"), volumes: res.volumes
        }];
      }).then(rowData => setRowData(rowData))
      .catch(rowData => alert("Something went wrong: "+rowData.message))
  }, [url]); //dependening on url


  
  return (    
      <div className="container" style={{width:"1100px", height: "900px"}} >
          <div
          className ="ag-theme-alpine"
          style = {{height: "700",width: "1000px"
          }}>
            {/* Logout button */}
            <Button onClick={() => {
                sessionStorage.removeItem(token);
                history.push("/App");}}>Logout</Button>
          <h1>Restricted page please login to use this.</h1>
            
          {/* This label and input is for the Authorization, and the From: search */}
          <form onSubmit={AuthenticatedRequest}>
          <label style={{padding: "2px"}}>From:</label>
          <input
          id="from" 
          type="date"  
          key="from" 
          name="from" 
          size="40"  
          onChange={(event) => {
            setFrom(event.target.value);}} />


            {/* This label and input is for the To: search form */}
          <label style={{padding: "2px"}}>To:</label>
          <input 
          size="40"
          type="date" 
          id="to" 
          key="to" 
          name="to" 
          required onChange={event => {
            setTo(event.target.value);
          }}/>
              
          {/* This button is for the submit button */}
          <input 
          style={{color: "red", 
          fontStyle: "bold"}} 
          type="submit" 
          value="Submit" />
         </form>
        
          {/* This div is for the table and its styling and row, columns setup */}
          <div div className="ag-theme-alpine" style={{
          height: "500px",
          width: "1000px",}} >
         <AgGridReact
          columnDefs={columnsDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
        />
        </div>
        </div>
      </div>
    );

}
        


