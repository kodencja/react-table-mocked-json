import { useMemo, useState, useEffect } from "react";
import TableBooks from "./components/TableBooks";
import BOOKS_DATA from "./db/BOOKS_DATA.json";
import HeaderMain from "./components/header/HeaderMain";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import './styles/style.css'

function App() {
const [data, setData] = useState([]);
const [error, setError] = useState();

// here we should get the data e.g. by fetchin from some url; we should get either data property from the database or if the file itself is our data fetch it all
useEffect(() => {
  let data_arr;
  
  if(BOOKS_DATA.data){
    data_arr = BOOKS_DATA.data;
  } else {
    data_arr = BOOKS_DATA;
  } 

  // check if the data is array of objects or only one object - if so put the one object into an array
  if(Array.isArray(data_arr)){
    setData(data_arr);
  } else if(!Array.isArray(data_arr) && typeof data_arr === 'object' && data_arr !== null){
    let data_arr_new =[]; data_arr_new[0] = data_arr; 
    setData(data_arr_new);
  } else{
    setError("Data from the file is neither array nor object");
  }
}, []);

// memoise productsData as recommended in react-table ||  Array.isArray(data_arr)
const productsData = useMemo(()=> data && Array.isArray(data) ? [...data] : data,[data]);

// memoise columns as recommended in react-table and get columns Headers and accessors dynamically; 
const columns = useMemo(() =>{
    if(data[0]) {
      return Object.keys(data[0]).map((key) => {
        console.log(key)
        return {Header: key, accessor: key}
      })
    } else return [];
  } ,[data]);


  return (
    <div className="mb-2 App">
      <HeaderMain title="Baza książek dla Bystrzaków"/>
      {error ? error :
      <ErrorBoundary>
      <TableBooks data={productsData} columns={columns}/>
      </ErrorBoundary>}
    </div>
  );
}

export default App;