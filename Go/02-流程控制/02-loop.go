package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func convertToBinary(n int) string {
	result := ""
	for ; n > 0; n /= 2 {
		lsb := n % 2
		result = strconv.Itoa(lsb) + result // 对2取模后的只需要倒过来才是最终值，所以这里可以把取模后的值加在前面
	}
	return result
}

func printFile(filename string) {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	scanner := bufio.NewScanner(file)
	for scanner.Scan() { // 没有起始条件和递增条件，相当于使用while，go中没有while
		fmt.Println(scanner.Text())
	}
}

func main() {
	fmt.Println(
		convertToBinary(5),  // 101
		convertToBinary(13), // 1101
	)
	printFile("D:\\Code\\practice-demo\\Go\\02-流程控制\\abc.txt")
}
