import "./footer.css"

function Footer() {
    return (
        <div className="footer mt-[20px] sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
            <div className="col flex justify-between flex-wrap">
                <div className="col1 flex flex-col">
                    <p>Hỗ trợ khách hàng</p>
                    <span>Hotline: <span className="hotline hover:underline hover:cursor-pointer">1900 6035</span></span>
                    <span className="m-0">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                    <a href="https://hotro.tiki.vn/s/?_gl=1*1camtbd*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTc2OTguNTQuMC4w">
                        Câu hỏi thường gặp
                    </a>
                    <a href="https://tiki.vn/lien-he/gui-yeu-cau">
                        Gửi yêu cầu hỗ trợ
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki?_gl=1*1mturo0*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTc5NDQuNjAuMC4w">
                        Hướng dẫn đặt hàng
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/cac-hinh-thuc-giao-hang-tai-tiki?_gl=1*1cwd1sa*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTc5NDQuNjAuMC4w">
                        Phương thức vận chuyển
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham-tai-tiki-nhu-the-nao?_gl=1*1ywtecz*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTgwNDcuNjAuMC4w">
                        Chính sách đổi trả
                    </a>
                    <a href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop">
                        Hướng dẫn trả góp
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai?_gl=1*1v08v7l*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTgwODQuMjMuMC4w">
                        Chính sách hàng nhập khẩu
                    </a>
                    <span>Hỗ trợ khách hàng: hotro@tiki.vn</span>
                    <span>Báo lỗi bảo mật: security@tiki.vn</span>
                </div>

                <div className="col2 flex flex-col">
                    <p>Về Tiki</p>
                    <a href="https://tiki.vn/thong-tin/gioi-thieu-ve-tiki">
                        Giới thiệu Tiki
                    </a>
                    <a href="https://tiki.vn/blog/">
                        Tiki Blog
                    </a>
                    <a href="https://tuyendung.tiki.vn/?_gl=1*77vuxa*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTgyODIuNjAuMC4w">
                        Tuyển dụng
                    </a>
                    <a href="https://tiki.vn/bao-mat-thanh-toan">
                        Chính sách bảo mật thanh toán
                    </a>
                    <a href="https://tiki.vn/bao-mat-thong-tin-ca-nhan">
                        Chính sách bảo mật thông tin cá nhân
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai?_gl=1*1rnssne*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTgzNTAuNjAuMC4w">
                        Chính sách giải quyết khiếu nại
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung?_gl=1*1yijibr*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTgzNTAuNjAuMC4w">
                        Điều khoản sử dụng
                    </a>
                    <a href="https://hotro.tiki.vn/s/article/tiki-xu-la-gi?_gl=1*1yijibr*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTgzNTAuNjAuMC4w">
                        Giới thiệu Tiki Xu
                    </a>
                    <a href="https://tiki.vn/astra-rewards/home">
                        Gói hội viên VIP
                    </a>
                    <a href="https://tiki.vn/khuyen-mai/tiki-tiep-thi-lien-ket">
                        Tiếp thị liên kết cùng Tiki
                    </a>
                    <a href="https://tiki.vn/khuyen-mai/ban-hang-doanh-nghiep">
                        Bán hàng doanh nghiệp
                    </a>
                    <a href="https://www.tikinow.vn/bang-gia">
                        Điều kiện vận chuyển
                    </a>
                </div>

                <div className="col3 flex flex-col">
                    <p>Hợp tác và liên kết</p>
                    <a href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt">Quy chế hoạt động Sàn GDTMĐT</a>
                    <a href="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki">Bán hàng cùng Tiki</a>
                    <p>Chứng nhận bởi</p>
                    <div className="certification flex">
                        <a href="https://hotro.tiki.vn/s/?_gl=1*xkr3ou*_ga*NDg1NTU0NzgzLjE3MDY2OTA2MzI.*_ga_S9GLR1RQFJ*MTcwNzE1NjQ0NS4yMy4xLjE3MDcxNTg1ODYuNDYuMC4w">
                            <img className="inline-block mr-[5px] lg:h-[45px] sm:h-[30px]" src="./assets/logos/bo-cong-thuong-2.png" alt="Bộ Công Thương"/>
                        </a>
                        <a href="http://online.gov.vn/Home/WebDetails/21193?AspxAutoDetectCookieSupport=1">
                            <img className="inline-block mr-[5px] lg:h-[45px] sm:h-[30px]" src="./assets/logos/bo-cong-thuong.svg" alt="Bộ Công Thương" />
                        </a>
                        <a href="https://www.dmca.com/Protection/Status.aspx?ID=388d758c-6722-4245-a2b0-1d2415e70127&refurl=https://tiki.vn/ban-do-p50685547.html?spid=50685549">
                            <img className="inline-block mr-[5px] lg:h-[45px] sm:h-[30px]" src="./assets/logos/dmca_protected_sml_120y.png" alt="DCMA" />
                        </a>
                    </div>
                </div>

                <div className="col4">
                    <p>Phương thức thanh toán</p>
                    <div className="col4_payment flex flex-wrap items-center">
                        <img src="./assets/logos/logoPage.png" alt="Tiki" />
                        <img src="./assets/logos/visa.png" alt="Visa" />
                        <img src="./assets/logos/MasterCard.png" alt="MasterCard" />
                        <img src="./assets/logos/jcb.png" alt="JCB" />
                        <img src="./assets/logos/atm.png" alt="ATM" />
                        <img src="./assets/logos/momo.webp" alt="Momo" />
                        <img src="./assets/logos/ZaloPay.png" alt="ZaloPay" />
                        <img src="./assets/logos/ViettelMoney.jpg" alt="ViettelMoney" />
                        <img src="./assets/logos/VNPAY.png" alt="VNPAY" />
                        <img src="./assets/logos/pay.png" alt="Pay" />
                        <img src="./assets/logos/noPer.png" alt="0 percent" />
                    </div>

                    <p>Dịch vụ giao hàng</p>
                    <a href="https://www.tikinow.vn/?src=footer">
                        <img className="ship lg:w-[150px] sm:w-[100px]" src="./assets/logos/TikiNow.png" alt="TikiNow" />
                    </a>
                </div>

                <div className="col5">
                    <p>Kết nối với chúng tôi</p>
                    <a href="https://www.facebook.com/tiki.vn/">
                        <svg className="mr-[5px] w-[35px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/user/TikiVBlog">
                        <svg className="mr-[5px] w-[35px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                    </a>
                    <a href="https://zalo.me/589673439383195103">
                        <svg className="mr-[5px] w-[35px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                            <path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path><path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path><path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path><path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path><path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path><path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
                        </svg>
                    </a>

                    <p>Tải ứng dụng trên điện thoại</p>
                    <div className="download flex w-max lg:h-[100px] sm:h-[50px]">
                        <img className="download_qrcode mr-[5px]" src="./assets/qrcode.png" alt="qrcode" />
                        <div className="store flex flex-col justify-between">
                            <a href="https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553">
                                <img className="w-max lg:h-[48px] sm:h-[23px]" src="./assets/logos/appstore.png" alt="AppStore" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid&pli=1">
                                <img className="w-max lg:h-[48px] sm:h-[23px]" src="./assets/logos/playstore.png" alt="CH Play" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="border-t-[1px] flex flex-col mt-[25px] pb-[50px]">
                <p>Công ty TNHH TIKI</p>
                <span>Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh</span>
                <span>Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.</span>
                <div>
                    <span>Hotline: </span><span className="hotline hover:underline hover:cursor-pointer">1900 6035</span>
                </div>
            </div>

        </div>
    )
}
export default Footer;