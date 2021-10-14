function beranda({ bookList }) {
        return (
            <div className="container mt-3 w-75">
                <div className="text-center"><h1>Selamat datang di toko Buku</h1></div>
                <div id="katalogBuku" class="mt-5">
                    <h2>Katalog Buku</h2>
                    <hr />
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>judul</th>
                                <th>pengarang</th>
                                <th>harga</th>
                                <th>stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book, index)=>(
                                <tr key={book._id}>
                                    <td>{index+1}</td>
                                    <td>{book.pengarang}</td>
                                    <td>{book.judul}</td>
                                    <td>{book.harga}</td>
                                    <td>{book.stok}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
}
export default beranda;