// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Beranda from "./components/beranda";
import ManajemenBuku from "./components/manajemenBuku";
import Navbar from "../src/assets/navbar";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios"; 
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);
  function retrieveData() {
    axios.get("http://localhost:4000/book")
    .then((response) =>{
      setBooks(response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  
  function storeData(inputBook){
    // console.log(inputBook);
    // alert("data telah ditambahkan")
    axios 
    .post("http://localhost:4000/book/add",inputBook)
    .then((res)=>{
      setBooks((prevBooks) => [...prevBooks, inputBook]);
      alert("buku telah ditambahkan")
    })
    .catch((error) =>{
      console.log(error.response.data);
    })
  }
  function updateData(inputBook){
    // console.log(inputBook);
    // alert("data telah diperbarui")
    axios
    .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
    .then((res) =>{
      retrieveData(); 
      alert("data telah diperbarui");
    })
    .catch((error)=>{
      console.log(error.response.data);
    });
  }
  function deleteData(book){
    // console.log(book)
    // alert("data telah dihapus")
    axios
    .delete("http://localhost:4000/book/delete/" + book._id)
    .then(() =>{
      retrieveData();
      alert("data telah dihapus");
    })
    .catch((error) =>{
      console.log(error.response.data)
    })
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList = {books} />
          </Route>
        
          <Route path="/manajemen-buku" exact>
            <ManajemenBuku bookList = {books} store={storeData} update={updateData} remove={deleteData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;