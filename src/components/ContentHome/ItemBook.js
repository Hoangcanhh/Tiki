import "./contenthome.css"
import ItemBookDetail from "./ItemBookDetail";

function ItemBook({i, data, isResult, handleClick}) {
    return (
        <div
            className={isResult 
                ? "itemBook flex flex-row h-[200px] mb-4 border border-[#ebebf0] bg-white overflow-hidden rounded-lg" 
                : "itemBook flex flex-col mr-2 mb-4 ml-2 h-[95%] max-h-[340px] bg-white overflow-hidden rounded-lg"}
            onClick={handleClick}>
            <div 
                className={isResult 
                    ? "pl-3 flex justify-center h-[180px]" 
                    : "flex justify-center h-[180px]"}>
                <img
                    className="h-full w-auto"
                    src={data[i].images[0].large_url}
                    alt=""/>
            </div>
            <ItemBookDetail
                data={data}
                i={i}
                isDetail={false}
                />
        </div>
    )
}
export default ItemBook;