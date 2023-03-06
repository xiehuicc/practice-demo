package main

import (
	"fmt"
	"math/rand"
	"time"
)

func sumArr(a [10]int) int {
	var sum int = 0
	for i := 0; i < len(a); i++ {
		sum += a[i]
	}
	return sum
}

func main() {
	//若想要一个真正的随机数，要种子
	// seed() 种子默认是1
	// rand.seed(1)
	rand.Seed(time.Now().Unix())

	var b [10]int
	for i := 0; i < len(b); i++ {
		// 产生一个0-1000的随机数
		b[i] = rand.Intn(1000)
	}
	fmt.Println(b)
	sum := sumArr(b)
	fmt.Printf("sum = %d\n", sum)
}
