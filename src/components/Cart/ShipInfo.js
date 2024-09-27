import { useEffect, useState } from "react";
import price from "../price";
import "./cartinfo.css"

function ShipInfo({data, buy, cart, bill, priceNow}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [addr, setAddr] = useState("");
    const [cost, setCost] = useState(0);

    useEffect( () => {
        let tempCost = 0;
        if (bill===false) {
            for (let i=0; i<cart.length; i++)
                for (let j=0; j<buy.length; j++) {
                    if (buy.includes('all')) {
                        tempCost += (data[cart[i][0]].current_seller.price * cart[i][1]);
                        continue;
                    }
                    if (cart[i][0].toString() === buy[j])
                        tempCost += (data[buy[j]].current_seller.price * cart[i][1]);
                }
            setCost(tempCost);
        }
    }, [buy]);

    function buyNow() {
        if (name === "" || phone === "" || addr === "")
            alert('Hãy điền đủ thông tin');
        else
            alert('Đặt mua thành công!');
    }

    return (
        <div className="shipInfo">
            <div className="shipTo bg-white p-[15px] mb-3 rounded-lg">
                <p className="text-xl">Giao tới</p>
                <form className="flex flex-col">
                    <label className="flex items-center mt-2">
                        <span className="grow">Họ tên người nhận: </span>
                        <input type="text"  onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="flex items-center mt-2">
                        <span className="grow">Số điện thoại: </span>
                        <input type="text"  onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                    <label className="flex items-center mt-2">
                        <span className="grow">Địa chỉ: </span>
                        <input type="text" onChange={(e) => setAddr(e.target.value)}/>
                    </label>
                </form>
            </div>
            <div className="bill bg-white mb-3 p-[15px] rounded-lg">
                <div className="flex items-end">
                    <p className="text-lg grow">Tạm tính</p>
                    <div className="flex items-start">
                        <span className="itemBook_priceDiscount font-semibold">{price(bill ? priceNow : cost)}</span>
                        <span className="itemBook_vnd font-semibold underline">đ</span>
                    </div>
                </div>
                <div className="flex items-end mt-1 mb-1">
                    <p className="text-lg grow">Giảm giá</p>
                    <div className="flex items-start">
                        <span className="font-semibold">{0}</span>
                        <span className="font-semibold underline">đ</span>
                    </div>
                </div>
                <div className="flex items-end border-t-[1px] mt-3 pt-3">
                    <p className="text-lg grow">Tổng tiền</p>
                    <div className="flex items-start">
                        <span className="font-semibold">{price(bill ? priceNow : cost)}</span>
                        <span className="font-semibold underline">đ</span>
                    </div>
                </div>
            </div>

            <div 
                className="text-white rounded-md flex justify-center pt-3 pb-3 bg-[#ff424e] hover:bg-[#fd6670] hover:cursor-pointer"
                onClick={buyNow}>
                Mua ngay
            </div>
        </div>
    )
}
export default ShipInfo;