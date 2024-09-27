import { Link } from "react-router-dom";
import "./contenthome.css"
import ItemBook from "./ItemBook";

function ListBook({books, setIndex, page}) {
    const listBook = [];
    // Render danh sách sách theo số trang:
    for (let i=16*(page-1); i < Math.min(16*page, books.length); i++) {
        listBook.push (
            <Link to="/detail">
                <ItemBook
                    key={i} i={i}
                    data={books}
                    isResult={false}
                    handleClick={() => setIndex(i)}
                />
            </Link>
        )
    }

    return (
        <div className="listBook grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listBook}
        </div>
    )
}
export default ListBook;