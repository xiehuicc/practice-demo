package main

import (
	"fmt"
)

/*
	值拷贝行为会造成性能问题，通常会建议使用 slice，或数组指针。
*/

func test(x [2]int) {
	fmt.Printf("x: %p\n", &x)
	x[1] = 1000

}

/*
数组拷贝
*/
func ArrayCopy(arr *[5]int) {
	arr[0] = 10

}

/*
数组拷贝和传参
*/
func ArraycopyAndparams(arr *[5]int) {
	arr[0] = 10
	for i, v := range arr {
		fmt.Println(i, v)
	}
}

func main() {
	a := [2]int{}
	fmt.Printf("a: %p\n", &a)

	test(a)
	fmt.Println(a)
	//内置函数 len 和 cap 都返回数组长度 (元素数量)。
	println(len(a), cap(a))

	// 多维数组遍历
	var f [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}

	for k1, v1 := range f {
		for k2, v2 := range v1 {
			fmt.Printf("(%d, %d)=%d \n", k1, k2, v2)
		}
	}

	// 数组拷贝和传参
	var arr1 [5]int
	ArraycopyAndparams(&arr1)
	arr2 := [...]int{2, 4, 6, 8, 10}
	ArraycopyAndparams(&arr2)
	fmt.Printf("数组拷贝和传参：%d\n", arr2)
}
