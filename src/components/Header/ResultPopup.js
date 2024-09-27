import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./header.css"
import ItemBook from "../ContentHome/ItemBook"

function ResultPopup({input, listResult, setListResult, result, popup, setPopup, data, setIndex}) {
    useEffect( () => {
        if (result.current.length !== 0) {
            const arr_listResult = [];
            for (let i=0; i<result.current.length; i++)
                arr_listResult.push (
                    <Link 
                        to="/detail"
                        onClick={() => setPopup(false)}>
                        <ItemBook
                            key={i} i={result.current[i]}
                            data={data}
                            isResult={true}
                            handleClick={() => setIndex(result.current[i])}
                        />
                    </Link>
                );
            setListResult(arr_listResult);
        } else {
            setListResult([
                <div className="mb-4 font-semibold">Không có kết quả!</div>
            ]);
        }
    }, [input]);
    
    return (
        <div className={popup ? "flex justify-center" : "hidden"}>
            <div 
                className="bg-[#52565c]/50 w-full h-full fixed top-0"
                onClick={() => setPopup(false)}></div>
            <div 
                className="bg-white overflow-hidden overflow-y-scroll
                absolute rounded-lg pt-5 pr-5 pl-5 h-[80%] mt-2 mb-2 ml-5 mr-5 
                sm:w-[576px] md:w-[768px] lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
                {listResult}
            </div>
        </div>
    )
}
export default ResultPopup;