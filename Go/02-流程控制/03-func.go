package main

import (
	"fmt"
	"math"
	"reflect"
	"runtime"
)

func eval(a, b int, op string) int {
	switch op {
	case "+":
		return a + b
	case "-":
		return a - b
	case "*":
		return a * b
	case "/":
		return a / b
	default:
		panic("unsupported operation:" + op) // 会中断程序执行
	}
}

func div(a, b int) (q, r int) {
	return a / b, a % b
}

// 函数式编程
func apply(op func(int, int) int, a, b int) int {
	p := reflect.ValueOf(op).Pointer()
	opName := runtime.FuncForPC(p).Name()
	fmt.Printf("calling function %s with args"+"(%d,%d)", opName, a, b)
	return op(a, b)
}

func pow(a, b int) int {
	return int(math.Pow(float64(a), float64(b)))
}

// 可变参数列表
func sum(numbers ...int) int {
	s := 0
	for i := range numbers {
		s += numbers[i]
	}
	return s
}
func main() {
	fmt.Println(
		eval(1, 2, "+"),
		eval(3, 4, "*"),
	)
	q, r := div(13, 4)
	fmt.Println(q, r)
	fmt.Println(apply(pow, 3, 4))
	fmt.Println(sum(1, 2, 3, 4, 5))
}
