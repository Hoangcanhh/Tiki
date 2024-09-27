import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function SearchBar({data, input, setInput, setPopup, result}) {
    useEffect( () => {
        // Xóa đi kết quả cũ / tránh trùng lặp kết quả
        result.current = [];

        // Đẩy vào các kết quả mới:
        let checkInput = input.split(" ");
        for (let i=0; i<data.length; i++) {
            // Bỏ qua các kết quả đã có trong mảng:
            if (result.current.includes(i))
                continue;

            // Tìm kiếm cả cụm:
            if (data[i].name.toLowerCase().includes(input)) {
                result.current.push(i);
                continue;
            }

            // Tìm kiếm rời rạc:
            for (let j=0; j<checkInput.length;  j++)
                if (data[i].name.includes(checkInput[j])) {
                    result.current.push(i);
                    break;
                }
        }
    }, [input]);

    return (
        <div className="bg-white flex items-center rounded-lg mt-3 mb-3 pl-3 grow border-[1px]">
            <div
                className='flex justify-center'>
                <svg className='inline w-5 mr-3 fill-[#808089]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </div>

            <input
                type='text'
                className='w-full grow outline-0 border-r-[1px] placeholder:text-[#808089]'
                placeholder="Free Ship đến 30K"
                onClick={ () => setPopup(true) }
                onChange={ (e) => setInput( e.target.value.toLowerCase() ) }
            />

            <Link
                to={input ? "/result" : ""}
                className='flex justify-center w-[100px] p-2 text-[#0a68ff] hover:bg-[#cee1ff]'
                onClick={() => setPopup(false)}>
                <div>
                    Tìm kiếm
                </div>
            </Link>
        </div>
    )
}

export default SearchBar;