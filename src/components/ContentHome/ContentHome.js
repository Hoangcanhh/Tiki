import { useState } from "react";
import "./contenthome.css"
import FilterCol from "./FilterCol";
import FilterRow from "./FilterRow";
import ListBook from "./ListBook";
import ListPage from "./ListPage";

function ContentHome({data, books, setBooks, setIndex, filter, setFilter}) {
    const [page, setPage] = useState(1);
    return (
        <div className="contentHome bg-[#f5f5fa]
        sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px] ms-auto me-auto">
            <div className="home_category flex items-center lg:pl-0 sm:pl-[6px] mt-2 mb-2">
                <span>Trang chủ</span>
                <svg className="ml-[10px] mr-[10px] w-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                </svg>
                <span>Nhà Sách Tiki</span>
            </div>

            <div className="home_main sm:block lg:flex">
                <FilterCol
                    filter={3}
                    data={data}
                    setBooks={setBooks}
                />
                <div className="basis-[80%]">
                    <div className="flex items-center">
                        <div
                            className="border-r-[2px] border-r-[#ececf1] pr-2 mb-2 lg:hidden"
                            onClick={() => setFilter(filter===1 ? 2 : filter===2 ? 1 : null)}>
                            <div className="filterRow_options">
                                <svg className="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
                                </svg>
                                <span>Lọc</span>
                            </div>
                        </div>

                        <FilterRow
                            books={data}
                            setBooks={setBooks}
                        />
                    </div>
                    <ListBook
                        books={books}
                        setIndex={setIndex}
                        page={page}
                    />
                    <ListPage
                        books={books}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    )
}
export default ContentHome;