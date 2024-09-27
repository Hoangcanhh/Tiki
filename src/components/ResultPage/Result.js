import { Link } from "react-router-dom";
import ItemBook from "../ContentHome/ItemBook";

function Result({setPopup, data, result, setIndex}) {
    const listItems = [];
    for (let i=0; i<result.current.length; i++) {
        listItems.push (
            <Link 
                to="/detail"
                onClick={() => setPopup(true)}>
                <ItemBook
                    key={i} i={result.current[i]}
                    books={data}
                    isResult={true}
                    handleClick={() => setIndex(result.current[i])}
                />
            </Link>
        );
    }
    return (
        <div className="result mt-5
        sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
            {listItems}
        </div>
    )
}
export default Result;