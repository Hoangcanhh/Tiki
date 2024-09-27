import "./contentdetail.css"

function ContentInfo({data}) {
    let contentInfo = [];
    for (let j=0; j<data.length; j++) {
        contentInfo.push(
            <div className="infoAttribute flex pt-2 pb-2">
                <div className="infoName w-[200px] text-[#808098]">{data[j].name}</div>
                <div>{data[j].value}</div>
            </div>
        )
    }

    return (
        <div className="content_info bg-white mt-5 p-[15px] rounded-lg">
            <p className="font-bold text-xl">Thông tin chi tiết</p>
            {contentInfo}
        </div>
    )
}
export default ContentInfo;