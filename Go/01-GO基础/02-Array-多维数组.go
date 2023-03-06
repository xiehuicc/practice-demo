package main

import (
	"fmt"
)

var arr0 [5][3]int

/*
1 2 3
7 8 9
*/
var arr1 [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}
var arr2 [3][2]int = [3][2]int{{1, 5}, {2, 6}, {3}}

func main() {
	a := [2][3]int{{1, 2, 3}, {4, 5, 6}}
	b := [...][2]int{{1, 1}, {2, 2}, {3, 3}} // 第二维度不能用"..."
	fmt.Println(arr0, arr1)
	fmt.Println(a, b)
}
