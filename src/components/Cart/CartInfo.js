import ShipInfo from "./ShipInfo";
import ItemCart from "./ItemCart";
import "./cartinfo.css"

function CartInfo({data, cart, setCart, buy, setBuy, setIndex, priceNow}) {
    const listCart = () => {
        return cart.map( (item) => (
            <ItemCart
                data={data}
                i={item[0]}
                numCart={item[1]}
                setIndex={setIndex}
                del_itemCart={() => del_itemCart(item[0])}
            />
        ));
    };

    function del_itemCart(i) {
        const newCart = cart.filter( (item) => item[0] !== i);
        setCart(newCart);
    }

    function chooseBook(e) {
        const {value, checked} = e.target;
        if (checked)
            setBuy([...buy, value]);
        else
            setBuy([...buy.filter(result => result!==value)]);
    }

    return (
        <div className="cartInfo 
        sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
            <p className="font-semibold text-xl mt-4 mb-3">GIỎ HÀNG</p>
            <div className="lg:flex">
                <div className="listCart grow lg:mr-3">
                    <div className="bg-white pt-2 pb-2 rounded-lg">
                        <div className="barTitle flex items-center">
                            <input className="checkCol" type="checkbox" value="all" onChange={chooseBook}/>
                            <span className="allCol">Tất cả</span>
                            <span className="priceCol text-[#787878]">Đơn giá</span>
                            <span className="quantityCol text-[#787878]">Số lượng</span>
                            <span className="allPriceCol text-[#787878]">Thành tiền</span>
                            <div
                                className="delCol hover:cursor-pointer"
                                onClick={() => setCart([])}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <form
                        className="listCart bg-white pt-2 pb-2 mt-3 rounded-lg lg:mb-0 sm:mb-3"
                        onChange={chooseBook}>
                        {cart.length!==0 ? listCart() : <div className="flex justify-center">Chưa có sản phẩm</div>}
                    </form>
                </div>
                <div className="cartInfo_ship">
                    <ShipInfo
                        data={data}
                        buy={buy}
                        cart={cart}
                        bill={false}
                        priceNow={priceNow}
                    />
                </div>
            </div>
        </div>
    )
}
export default CartInfo;