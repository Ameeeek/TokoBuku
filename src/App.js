// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Beranda from "./components/beranda";
import ManajemenBuku from "./components/manajemenBuku";
import Navbar from "../src/assets/navbar";
import {useState} from "react";

function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", Harga: 80000, stok: 7},
    { _id: 2, judul: "Bumi", pengarang: "Tere Liye", Harga: 85000, stok: 5}
  ]);
  
  function storeData(inputBook){
    console.log(inputBook);
    alert("data telah ditambahkan")
  }
  function updateData(inputBook){
    console.log(inputBook);
    alert("data telah diperbarui")
  }
  function deleteData(book){
    console.log(book)
    alert("data telah dihapus")
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