import { useState } from "react";
import price from "../price";
import parse from 'html-react-parser';
import "./contentdetail.css"
import ItemBookDetail from "../ContentHome/ItemBookDetail";
import ContentInfo from "./ContentInfo";
import OrderQuantity from "./OrderQuantity"

function ContentDetail({data, i, cart, setCart, setBill, setPrice}) {
    const [img, setImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Bắt sự kiện chuyển ảnh mỗi khi click vào một item preview:
    let listImg_class = [];
    for (let j=0; j<data[i].images.length; j++)
        listImg_class.push("preview_itemImg--notChoose");

    const [choose, setChoose] = useState(listImg_class);
    function moveImg(j) {
        for (let j=0; j<data[i].images.length; j++)
            listImg_class.push("preview_itemImg--notChoose");
        listImg_class[j] = "preview_itemImg--isChoose";
        setChoose(listImg_class);
        setImg(j);
    }

    // Hiển thị list ảnh preview:
    const listImg = [];
    for (let j=0; j<data[i].images.length; j++)
        listImg.push (
            <div 
                className = { choose[j] }
                onClick={() => moveImg(j)}>
                <img
                    src={data[i].images[j].small_url}
                    alt="" />
            </div>
        );

    // Xử lý link ảnh brand không đầy đủ:
    let imgBrand;
    if (data[i].current_seller.logo.indexOf("https://vcdn.tikicdn.com/ts/seller/") !== -1)
        imgBrand = data[i].current_seller.logo;
    else
        imgBrand = "https://vcdn.tikicdn.com/ts/seller/" + data[i].current_seller.logo;

    // Thêm vào giỏ hàng:
    function addCart() {
        const newArr = cart.filter( (e) => e[0] !== i);
        newArr.push([i, quantity]);
        setCart(newArr);
        alert(`Bạn đã thêm ${quantity>1 ? `${quantity} ` : ""}sản phẩm "${data[i].name}" vào giỏ hàng!`);
    }

    // Tính số tiền mua ngay:
    function renderPrice() {
        setBill(true);
        setPrice(data[i].current_seller.price * quantity);
    }
    
    return (
        <div className="contentdetail lg:flex sm:block
        sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
            <div className="content_preview bg-white mt-5 p-5 h-fit basis-1/4 rounded-lg">
                <div className="preview_img flex justify-center rounded-lg mb-2 h-[300px] box-border">
                    <img className="h-full" src={data[i].images[img].medium_url} alt="" />
                </div>
                <div className="preview_listImg flex w-full">
                    {listImg}
                </div>
            </div>

            <div className="content_detail lg:ml-5 lg:mr-5 mt-5 basis-1/2">
                <ItemBookDetail
                    data={data}
                    i={i}
                    isDetail={true}
                    />
                <ContentInfo
                    data={data[i].specifications[0].attributes}
                />
                <div className="detailDescribe bg-white rounded-lg mt-5 p-[15px]">
                    <p className="font-bold text-xl">Mô tả sản phẩm</p>
                    <div className="pt-2">{parse(data[i].description)}</div>
                </div>
            </div>

            <div className="bg-white h-fit p-3 rounded-md basis-1/5 mt-5">
                <div className="flex items-center pb-2 border-b-[1px]">
                    <div className="w-[40px] mr-3">
                        <img 
                            className="rounded-full"
                            src={imgBrand}
                            alt="" />
                    </div>
                    <span className="brand_name font-semibold">{data[i].current_seller.name}</span>
                </div>

                <p className="font-semibold mt-5 mb-2">Số Lượng</p>
                <OrderQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                    />


                <p className="font-semibold mt-5">Tạm tính</p>
                <div className="flex items-top">
                    <span className="font-bold text-[30px]">{price(data[i].current_seller.price * quantity)}</span>
                    <span className="ml-1 text-xl font-bold underline">đ</span>
                </div>
                <div 
                    className="text-white rounded-md flex justify-center pt-3 pb-3 mt-3 bg-[#ff424e] hover:bg-[#fd6670] hover:cursor-pointer"
                    onClick={renderPrice}>
                    Mua ngay
                </div>
                <div className="text-[#1871ff] border-[1px] border-[#1871ff] rounded-md flex justify-center pt-3 pb-3 mt-3 hover:bg-[#f5f5fa] hover:cursor-pointer"
                    onClick={addCart}>
                    Thêm vào giỏ
                </div>
                <div className="text-[#1871ff] border-[1px] border-[#1871ff] rounded-md flex justify-center pt-3 pb-3 mt-3 hover:bg-[#f5f5fa] hover:cursor-pointer">
                    Mua trước trả sau
                </div>
            </div>
        </div>
    )
}
export default ContentDetail;