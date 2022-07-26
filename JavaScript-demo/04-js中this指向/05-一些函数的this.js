// 1. setTimout 
function hySetTimeout (fn,druation) {
    fn()
}
hySetTimeout(function(){

},2000)

// setTimeout中如何调用function, 箭头函数不绑定this
setTimeout(function () {
    console.log(this); // window ，独立调用（ function() ）
},2000)

// 2. 数组的forEach/map/filter
var Kname = ['abc','cba','nba']
Kname.forEach(function(item){
    // 独立调用function()
    console.log(item,this); //不传 ‘abc’情况下， 指向window
},'abc'); // 接收第二个参数，可以改变this指向 'abc'

Kname.map(function(item){
    console.log(item,this); // window
});



// 3. 监听div 的点击
const boxDiv = document.querySelector('.box')
console.log(boxDiv)
boxDiv.onclick  = function () {
    console.log('onclick',this) // this指向boxDiv  
}
boxDiv.addEventListener('click', function() {
    // fn.call(boxDiv)  其内部调用，通过call改变this指向
    console.log(this) // this指向boxDiv
})