import { useMemo, useState, useEffect } from "react";
import TableBooks from "./components/TableBooks";
import BOOKS_DATA from "./db/BOOKS_DATA.json";
import HeaderMain from "./components/header/HeaderMain";
import { Spinner} from "react-bootstrap";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import './styles/style.css'
import Footer from "./components/footer/Footer";

function App() {
const [data, setData] = useState([]);
const [error, setError] = useState();
const [isLoading, setIsLoading] = useState(false);

// here we should get the data e.g. by fetching from some url; we should get it either through 'data' property from the url response (database) or from the file itself
useEffect(() => {
  let data_arr;
  
  if(BOOKS_DATA && BOOKS_DATA.data){
    data_arr = BOOKS_DATA.data;
  } else {
    data_arr = BOOKS_DATA;
  } 

  // check if the data is array of objects or only one object - if so put the one object into an array - setTimeout to mock data fetch lag to show spinner
  setIsLoading(true);
  setTimeout(()=>{
  if(Array.isArray(data_arr)){
    setData(data_arr);
  } else if(!Array.isArray(data_arr) && typeof data_arr === 'object' && data_arr !== null){
    let data_arr_new =[]; data_arr_new[0] = data_arr; 
      setData(data_arr_new);
  } else{
    setError("Data from the file is neither array nor object");
  }
  setIsLoading(false);
}, 1000)
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
      <div className="d-flex align-items-center justify-content-center">
      {error ? error :
      isLoading ? (<Spinner animation="border" variant="info" />) :
      <ErrorBoundary>
      <TableBooks data={productsData} columns={columns}/>

      </ErrorBoundary>}
      </div>
      <Footer
        btnTxt1="Home Page"
        btnTxt2="Code info"
        txt1="&copy; 2022 "
        txt2="by"
        txt3="Codencja"
      />
    </div>
  );
}

export default App;