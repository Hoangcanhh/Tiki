import "./contentdetail.css"

function OrderQuantity({quantity, setQuantity}) {
    return (
        <div className="orderQuantity flex">
            <div className={quantity > 1 
                            ? "orderFewer bg-white w-[30px] h-[30px] rounded-md flex justify-center mr-1 hover:cursor-pointer outline-[#a6a6b0]"
                            : "orderFewer bg-white w-[30px] h-[30px] rounded-md flex justify-center mr-1 outline-[#ededf1]"}
                onClick={() => setQuantity( quantity>1 ? quantity-1 : quantity)}>
                <svg className={quantity > 1 ? "fill-[#787878] w-3" : "fill-[#c9c9c9] w-3"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>
            <div                 
                className="w-[30px] h-[30px] rounded-md flex items-center justify-center outline-[1px] outline outline-[#a6a6b0]">
                {quantity}
            </div>

            <div className="bg-white w-[30px] h-[30px] rounded-md flex justify-center ml-1 hover:cursor-pointer outline-[1px] outline outline-[#a6a6b0]"
                onClick={() => setQuantity(quantity + 1)}>
                <svg className="fill-[#787878] w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </div>
        </div>
    )
}
export default OrderQuantity;