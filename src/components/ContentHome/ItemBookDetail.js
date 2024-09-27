import price from "../price";
import "./contenthome.css"
import StarRating from "./StarRating";

function ItemBookDetail({data, i, isDetail}) {
    const renderTitle = data[i].name.slice(0, 50) + "...";
    const percentDiscount = Math.round( ( (data[i].original_price - data[i].current_seller.price) / data[i].original_price )*100 );

    return (    
        <div className="bg-white w-full p-[15px] rounded-lg">
            <h2 className="text-[#86868f]">{"authors" in data[i] ? data[i].authors[0].name.toUpperCase() : ""}</h2>
            <h1 className="mb-2">{(data[i].name.length>50 && isDetail===false) ? renderTitle : data[i].name}</h1>

            <div className="flex items-center mb-2">
                <StarRating
                    rate={data[i].rating_average}
                />
                <span className="text-[#8d8d95] border-l-[1px] pl-2 ml-2">{data[i]?.quantity_sold?.text}</span>
            </div>
            <div className="flex">
                <span className="text-xl font-semibold">{price(data[i].current_seller.price)}</span>
                <span className="font-semibold underline">đ</span>
                <span 
                    className={percentDiscount>0 
                    ? "flex items-center justify-center bg-[#f6f6fa] font-semibold ml-2 rounded-sm pt-1 pb-1 pl-2 pr-2" 
                    : "hidden"}>-{percentDiscount}%</span>
            </div>
        </div>
    )
}
export default ItemBookDetail;