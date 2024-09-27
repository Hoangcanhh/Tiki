import "./contenthome.css"

function ListPage({books, setPage}) {
    function movePage(i) {
        setPage(i);
    }

    const listPage = [];
    for (let i=0; i<Math.ceil(books.length / 16); i++)
        listPage.push(
            <div 
                className="bg-[#e7e7e7] flex justify-center items-center h-[40px] w-[40px] p-2 m-0.5 rounded-md hover:cursor-pointer hover:text-white hover:bg-[#1e6ff5]"
                onClick={() => movePage(i+1)}>
                {i+1}
            </div>
        )

    return (
        <div className="flex justify-center">
            {listPage}
        </div>
    )
}
export default ListPage;