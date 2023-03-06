package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	/* 定义局部变量 */
	var a int = 10
	/* 使用 if 语句判断布尔表达式 */
	if a < 20 {
		/* 如果条件为 true 则执行以下语句 */
		fmt.Printf("a 小于 20\n")
	}
	fmt.Printf("a 的值为 : %d\n", a)

	const fileName = "D:\\Code\\practice-demo\\Go\\02-流程控制\\abc.txt"
	contents, err := ioutil.ReadFile(fileName) // 需要传绝对路径
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("%s\n", contents)
	}
}
