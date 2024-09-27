function price(nowPrice) {
    let nowPrice_render = [];
    for (let i=0; i<nowPrice.toString().length; i++) { // Thêm dấu "." vào giá tiền
        nowPrice_render.push(nowPrice.toString()[i]);
        if (nowPrice.toString().length % 3 === 0)
            if (i!==nowPrice.toString().length-1 && (i+1) % 3 === 0)
                nowPrice_render.push(".")
        if (nowPrice.toString().length % 3 === 1)
            if (i!==nowPrice.toString().length-1 && i % 3 === 0)
                nowPrice_render.push(".")
        if (nowPrice.toString().length % 3 === 2)
            if (i!==nowPrice.toString().length-1 && (i+2) % 3 === 0)
                nowPrice_render.push(".")
    }
    return nowPrice_render;
}
export default price;