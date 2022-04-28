window.onload = function() {
    console.log(1111111)
    let outer = document.getElementById('outer')
    console.log('outer', outer)
    // 获取图片列表
    let imgList = document.getElementsByClassName('img-list')
    // 获取页面中所有的img标签
    let imgArr = document.getElementsByTagName("img");
    console.log('imgArr', imgArr)
    // 设置imgList的宽度
    imgList.style.width = 520 * imgArr.length + 'px'
}