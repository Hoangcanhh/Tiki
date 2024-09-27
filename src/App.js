import { Routes, Route } from "react-router-dom"
import { useRef, useState } from "react";
import "./App.css";
import Books from "./books.json"
import Header from "./components/Header/Header";
import ShowNav from "./components/Header/ShowNav";
import ResultPopup from "./components/Header/ResultPopup";
import Result from "./components/ResultPage/Result";
import ContentHome from "./components/ContentHome/ContentHome"
import FilterCol from "./components/ContentHome/FilterCol";
import ContentDetail from "./components/ContentDetail/ContentDetail"
import CartInfo from "./components/Cart/CartInfo";
import ShipInfo from "./components/Cart/ShipInfo";
import Footer from "./components/Footer/Footer";

function App() {
    const [books, setBooks] = useState(Books); // Dùng để lưu những thứ sẽ được render ra nên sẽ thừa thiếu theo trong quá trình sử dụng
    const [nav, setNav] = useState(false); // Dùng để ẩn hiện Navigation khi responsive
    const [popup, setPopup] = useState(false); // Dùng để ẩn hiện Popup tìm kiếm
    const [input, setInput] = useState(""); // Lưu dữ liệu đầu vào khi tìm kiếm
    const result = useRef([]); // Lưu các id của các kết quả tìm được
    const [listResult, setListResult] = useState([]); // Dùng để lưu và hiển thị các đối tượng sách từ kết quả tìm kiếm
    const [filter, setFilter] = useState(2); // Lưu giá trị hiển thị của cột filter khi responsive
    const [cart, setCart] = useState([]); // Lưu các sản phẩm đã được thêm vào giỏ hàng
    const [buy, setBuy] = useState([]); // Lưu các sản phẩm được chọn để mua trong giỏ hàng
    const [bill, setBill] = useState(false); // Dùng để hiển thị hóa đơn khi click mua ngay
    const [priceNow, setPrice] = useState(0); // Lưu số tiền khi mua ngay
    const [index, setIndex] = useState(null); // Dùng để định vị item sách mà người dùng click vào
    const data = Books; // Dùng để lưu dữ liệu gốc dùng để đối chiếu khi tìm kiếm và dùng filter
    
    /*
    const [books, setBooks] = useState(null);
    useEffect( () => {
        fetch(Books)
        fetch("https://h5ltj4-8080.csb.app/books")
            .then(res => res.json())
            .then(books => {
                setBooks(books);
            })
    }, []);*/

    return (
        <div
            className="app">
            <div className="sideHead max-w-full lg:bg-white sm:bg-[#1ba8ff]">
                <Header
                    nav={nav}
                    setNav={setNav}
                    input={input}
                    setInput={setInput}
                    setPopup={setPopup}
                    result={result}
                    data={data}
                    cart={cart}
                />
            </div>
            <ShowNav
                nav={nav}
                setNav={setNav}
            />
            <ResultPopup
                input={input}
                listResult={listResult}
                setListResult={setListResult}
                result={result}
                popup={popup}
                setPopup={setPopup}
                data={data}
                setIndex={setIndex}
            />
            <FilterCol
                filter={filter}
                data={data}
                setBooks={setBooks}
            />
            <div
                className={bill ? "w-full h-full flex justify-center" : "hidden"}>
                <div 
                    className="w-full h-full fixed top-0 bg-[#52565c]/60"
                    onClick={() => setBill(false)}></div>
                <div className={bill
                        ? "bg-[#f5f5fa] p-3 rounded-lg bgShadow fixed top-[120px]"
                        : "hidden"}>
                    <ShipInfo
                        data={data}
                        buy={buy}
                        cart={cart}
                        bill={bill}
                        priceNow={priceNow}
                    />
                </div>
            </div>

            <Routes>
                {data && <Route path="/" element={
                    <ContentHome
                        data={data}
                        books={books}
                        setBooks={setBooks}
                        setIndex={setIndex}
                        filter={filter}
                        setFilter={setFilter}
                        />
                    }/>}
                {data && <Route path="/detail" element={
                    <ContentDetail
                        data={data}
                        i={index}
                        cart={cart}
                        setCart={setCart}
                        setBill={setBill}
                        setPrice={setPrice}
                        />
                    }/>}
                {data && <Route path="/result" element={
                    <Result
                        setPopup={setPopup}
                        data={data}
                        result={result}
                        setIndex={setIndex}
                        />
                    }/>}
                {data && <Route path="/cart" element={
                    <CartInfo
                        data={data}
                        cart={cart}
                        setCart={setCart}
                        buy={buy}
                        setBuy={setBuy}
                        setIndex={setIndex}
                        priceNow={priceNow}
                    />
                    }/>}
            </Routes>

            <div className="max-w-full bg-white">
                <Footer/>
            </div>
        </div>
    );
}

export default App;