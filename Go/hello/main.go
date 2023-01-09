package main // 声明 main 包，表明当前是一个可执行程序

import "fmt" // 导入内置 fmt 包

func main() { // main函数，是程序执行的入口
	var age int = 12

	var a string = "aaa"
	fmt.Println(a, age)
	_, numb, strs := numbers() //只获取函数返回值的后两个
	fmt.Println(numb, strs)
	fmt.Println("Hello World!") // 在终端打印 Hello World!
}

func numbers() (int, int, string) {
	a, b, c := 1, 2, "str"
	return a, b, c
}
