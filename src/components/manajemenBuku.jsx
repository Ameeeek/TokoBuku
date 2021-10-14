import { useState } from "react";
function ManajemenBuku({bookList, store, update, remove}) {
    // data
    // event handling 
    const [inputBook, setInputBook] = useState();
    const [form, setForm] = useState();
    function showCreate(){
        setForm("create");
    }
    function handleJudul(event){
        setInputBook ({...inputBook, judul: event.target.value});
    }
    function handlePengarang(event){
        setInputBook ({...inputBook, pengarang: event.target.value});
    }
    function handleHarga(event){
        setInputBook ({...inputBook, harga: event.target.value});
    }
    function handleStok(event){
        setInputBook ({...inputBook, stok: event.target.value});
    }
    function submitAdd(event){
        event.preventDefault();
        store(inputBook);
    }
    function showEdit(book){
        setInputBook(book);
        setForm("edit");
    }
    function submitChange(event){
        event.preventDefault();
        update(inputBook);
        setForm("");
    }
    function deleteBook(book){
        remove(book);
    }
    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>
            <div id="formTambah"></div>
            <div id="formUbah"></div>
            <div id="daftarBuku"></div>
    
            <div id="daftarBuku">
            <h2 className="mt-3">Daftar Buku</h2>
    
            <hr />
            {form === "create" && (
                <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Buku</button>
            )}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>judul</th>
                        <th>pengarang</th>
                        <th>Harga</th>
                        <th>stok</th>
                        <th>aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, index)=>
                        <tr key={index}>
                            <td> {index + 1}</td>
                            <td> {book.judul}</td>
                            <td> {book.pengarang}</td>
                            <td> {book.harga}</td>
                            <td> {book.stok}</td>
                            <td>
                                <button className="btn btn-info mr-3" onClick={() => showEdit(book)}> Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteBook(book)}> Hapus</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    
            <div id="formTambah">
                <h5>Tambah buku</h5>
                <hr />
                <form className="form-row" onSubmit={submitAdd}>
                    <div className="col-3">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="judul" onChange={handleJudul}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="pengarang"  onChange={handlePengarang}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="harga" className="form-control mx-2" placeholder="harga" onChange={handleHarga}/>
                    </div>
                    <div className="col-2">
                        <input type="number" name="stok" className="form-control mx-2" placeholder="stok" onChange={handleStok}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="form-control mx-2" Value="simpan"/>
                    </div>
                </form>
            </div>
            {form === "edit" &&(
                
            <div id="formUbah">
                <h5>Ubah Buku</h5>
                <hr />
                <form class="form-row" onSubmit={submitChange} >
                    <div className="col-3">
                        <input type="text" name="judul" className="form-control mx-2" placeholder="judul" onChange={handleJudul} value={inputBook.judul}/>
                    </div>
                    <div className="col-3">
                        <input type="text" name="pengarang" className="form-control mx-2" placeholder="pengarang" onChange={handlePengarang} value={inputBook.pengarang}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="harga" className="form-control mx-2" placeholder="harga" onChange={handleHarga} value={inputBook.harga}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="stok" className="form-control mx-2" placeholder="stok" onChange={handleStok} value={inputBook.stok}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" class="btn btn-warning ml-2" value="ubah"/>
                    </div>
                </form>
            </div>
            )}
        </div>
    );
}



    
                        

export default ManajemenBuku;