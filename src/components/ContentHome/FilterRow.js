import { useState } from "react";
import _ from "lodash"
import "./contenthome.css";

function FilterRow({books, setBooks}) {
    const [show, setShow] = useState(false);
    const [options, setOptions] = useState("Mặc định");
    const [typeArrange, set_typeArrange] = useState(0);

    function arrange() {
        if (typeArrange === "0") {
            setOptions("Hàng mới");
            let temp = [];
            for (let i=0; i<books.length; i++) {
                const date = _.find(books[i]?.specifications[0]?.attributes, {code: "publication_date"});
                if (date) {
                    const arr = date.value;
                    temp.push( [i, ...arr.split(" ")[0].split("-"), ...arr.split(" ")[1].split(":")] );
                }
            }
            const newest = _.sortBy(temp, [1,2,3,4,5,6]).reverse();
            const bookNew = [];
            for (let j=0; j<newest.length; j++)
                for (let i=0; i<books.length; i++)
                    if (newest[j][0] === i)
                        bookNew.push(books[i]); 
            setBooks(bookNew);
        } else if (typeArrange === "1") {
            setOptions("Giá từ cao đến thấp");
            setBooks( books.sort( (x,y) => y?.current_seller?.price - x?.current_seller?.price) );
        } else if (typeArrange === "2") {
            setOptions("Giá từ thấp đến cao");
            setBooks( books.sort( (x,y) => x?.current_seller?.price - y?.current_seller?.price) );
        }
    }

    return (
        <div className="flex items-center mb-2 ml-2">
            <div className="text-[#908aa0]">Sắp xếp</div>
            <div
                className="hover:cursor-pointer hover:outline-[#a6a6b0] flex items-center rounded-full outline-[1px] outline outline-[#dddde3] w-fit ml-2 pt-1 pb-1 pl-4 pr-5"
                onClick={ () => setShow(show ? false : true) }>
                <span className="text-[#515158]">{options}</span>
                <svg className="ml-2 fill-[#515158] w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
            </div>
            <form 
                className={show 
                    ? "flex flex-col overflow-hidden absolute top-[165px] left-[425px] bg-white rounded-lg bgShadow" 
                    : "hidden"}>
                <label className="pt-1 pb-1 pl-5 pr-5 hover:cursor-pointer hover:bg-[#e5e5e5]">
                    <input 
                        type="radio" name="type" value={0}
                        onChange={(e) => set_typeArrange(e.target.value)}
                        onClick={arrange}
                        className="hidden" />
                        <span>Hàng mới</span>
                </label>
                <label className="border-t-[1px] pt-1 pb-1 pl-5 pr-5 hover:cursor-pointer hover:bg-[#e5e5e5]">
                    <input 
                        type="radio" name="type" value={1} 
                        onChange={(e) => set_typeArrange(e.target.value)}
                        onClick={arrange}
                        className="hidden" />                    
                        <span>Giá từ cao đến thấp</span>
                </label>
                <label className="border-t-[1px] pt-1 pb-1 pl-5 pr-5 hover:cursor-pointer hover:bg-[#e5e5e5]">
                    <input 
                        type="radio" name="type" value={2} 
                        onChange={(e) => set_typeArrange(e.target.value)}
                        onClick={arrange}
                        className="hidden" />
                        <span>Giá từ thấp đến cao</span>
                </label>
            </form>
        </div>
    )
}
export default FilterRow;