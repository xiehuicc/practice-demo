package main

import "fmt"

func updateSlice(s []int) {
	s[2] = 100
}
func main() {
	arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	s := arr[2:6]
	fmt.Println("arr[2:6]", s)
	fmt.Println("arr[:6]", arr[:6])
	fmt.Println("arr[2:]", arr[2:])
	fmt.Println("arr[:]", arr[:])
	fmt.Println("After updateSlice")
	updateSlice(arr[2:])
	fmt.Println(arr[2:])
	// slice 重新赋值
	fmt.Println("Extending slice")
	arr[0], arr[4] = 0, 4
	fmt.Println(arr)
	s1 := arr[2:6]
	s2 := s1[3:5]
	fmt.Println("s1 =", s1)
	fmt.Println("s2 =", s2)

	/*
		arr[2:6] [2 3 4 5]
		arr[:6] [0 1 2 3 4 5]
		arr[2:] [2 3 4 5 6 7]
		arr[:] [0 1 2 3 4 5 6 7]
		After updateSlice
		[2 3 100 5 6 7]
		Extending slice
		[0 1 2 3 4 5 6 7]
		s1 = [2 3 4 5]
		s2 = [5 6]
	*/
}
