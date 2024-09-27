import { useEffect, useState } from "react";
import _ from "lodash";
import "./contenthome.css"
import StarRating from "./StarRating";

function FilterCol({filter, data, setBooks}) {
    const [change, setChange] = useState(false);

    // =============================================================================================================
    // Lấy ra list các danh mục có trong dữ liệu: ----------------------------------------------------
    const getCate = [], getSupplier = [];
    for (let i=0; i<data.length; i++) {
        // Lấy ra các danh mục:
        if (getCate.indexOf(data[i].categories.name) === -1)
            getCate.push(data[i].categories.name);
        // Lấy ra các nhà cung cấp:
        if (getSupplier.indexOf(data[i].current_seller.name) === -1)
            getSupplier.push(data[i].current_seller.name);
    }
    // Tạo các element checkbox từ các mảng trên: -----------------------------------------------------
    const listCate=[], listSupplier=[], listRate=[];
    for (let i=0; i<getCate.length; i++) {
        listCate.push(
            <label className="flex items-center mb-1 hover:cursor-pointer">
                <input type="checkbox" value={getCate[i]} className="mr-2"/>
                <span>{getCate[i]}</span>
            </label>
        );
    }
    for (let i=0; i<getCate.length; i++) {
        listSupplier.push(
            <label className="flex items-center mb-1 hover:cursor-pointer">
                <input type="checkbox" value={getSupplier[i]} className="mr-2"/>
                <span>{getSupplier[i]}</span>
            </label>
        );
    }
    for (let i=3; i<6; i++) {
        listRate.push(
            <label className="flex items-center mb-1 hover:cursor-pointer">
                <input type="checkbox" value={i} className="mr-2"/>
                <div className="inline-block">
                    <StarRating rate={i}/>
                </div>
                <span className="inline-block ml-2">từ {i} sao</span>
            </label>
        );
    }

    // Đẩy các giá trị được chọn vào một mảng, filter sẽ dựa vào mảng đó để lọc ra các kết quả: -----------------
    const [cate, setCate] = useState([]);
    function chooseCate(e) {
        setChange(change ? false : true);
        const {value, checked} = e.target;
        if (checked)// Nếu cái nào được tick thì được đẩy vào mảng arr, arr sẽ được setCate
            setCate([...cate, value]); // Đẩy thêm một giá trị mới vào mảng cate, sau đó setCate cho mảng mới này
        else // Nếu bỏ tick
            setCate([...cate.filter(result => result!==value)]);
    }
    const [supplier, setSupplier] = useState([]);
    function chooseSupplier(e) {
        setChange(change ? false : true);
        const {value, checked} = e.target;
        if (checked)
            setSupplier([...supplier, value]);
        else
            setSupplier([...supplier.filter(result => result!==value)]);
    }
    const [rate, setRate] = useState([]);
    function chooseRate(e) {
        setChange(change ? false : true);
        const {value, checked} = e.target;
        if (checked)
            setRate([...rate, value]);
        else
            setRate([...rate.filter(result => result!==value)]);
    }

    // ========================================================================================================================
    // Cập nhật danh sách Sách từ việc đối chiếu với filter: -------------------------------------------------
    function filterBooks() {
        if (cate.length === 0 && supplier.length === 0 && rate.length === 0)
            return data; // Nếu không filter nào được chọn thì sẽ trả về toàn bộ sách
        else
            return data.filter( (e) => { // Filter trả về một mảng mới dựa trên điều kiện ta đặt ra
                return ((cate.length===0 ? true : cate.includes(e.categories.name)) && // Nếu mảng đó có phần tử thì sẽ đc mang ra lọc, còn ko sẽ trả về true
                        (supplier.length===0 ? true : supplier.includes(e.current_seller.name)) &&
                        (rate.length===0 ? true : _.max(rate) <= e.rating_average) ); // Chỉ so sánh với phần tử lớn nhất của rate thôi, so sánh với các phần tử khác sẽ lỗi
            });
    }
    useEffect(() => { // Sử dụng useEffect với dependency là [change] để mỗi khi change thay đổi thì book sẽ đc cập nhật qua setBook, tránh bất đồng bộ
        setBooks(filterBooks);
    }, [change]);

    return (
        <div className={
                filter===1 ? "filter bg-white sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto" : 
                filter===2 ? "hidden" :
                filter===3 ? "bg-white w-full h-fit basis-1/5 rounded-lg mr-5 p-5 sm:hidden lg:block" : null}>
            <p className="text-lg mb-2">Khám Phá Theo Danh Mục</p>
            <form onChange={chooseCate}>
                {listCate}
            </form>

            <p className="text-lg mb-2 mt-5">Theo Nhà Cung Cấp</p>
            <form onChange={chooseSupplier}>
                {listSupplier}
            </form>

            <p className="text-lg mb-2 mt-5">Theo Đánh Giá</p>
            <form onChange={chooseRate}>
                {listRate}
            </form>
        </div>
    )
} 
export default FilterCol;