package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
//	const delta = 0.0001
	const delta = 0.00000001
	
//	z := x/2
//	z := 1.0
	z := math.Sqrt(x)
	for z_prev := z + 10*delta; delta < math.Abs(z_prev - z); z_prev = z {
//		z := z - (z*z - x)/2*z
		z -= (z*z - x)/(2*z)
	} 
	
	return z
}

func Verbose( x float64 ) {
	var s, sm, r float64
	s = Sqrt(x)
	sm = math.Sqrt(x);
	r = s - sm
	fmt.Println("%v %v %v %v", x, s, sm, r )	
}

func main() {
//	fmt.Println(Sqrt(2))
//	fmt.Println(Sqrt(4))

	Verbose(2)
	Verbose(5)
	Verbose(9)
	Verbose(10)
	Verbose(100)
}
package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
//	const delta = 0.0001
	const delta = 0.00000001
	
//	z := x/2
//	z := 1.0
	z := math.Sqrt(x)
	for z_prev := z + 10*delta; delta < math.Abs(z_prev - z); z_prev = z {
//		z := z - (z*z - x)/2*z
		z -= (z*z - x)/(2*z)
	} 
	
	return z
}

func Verbose( x float64 ) {
	var s, sm, r float64
	s = Sqrt(x)
	sm = math.Sqrt(x);
	r = s - sm
	fmt.Println("%v %v %v %v", x, s, sm, r )	
}

func main() {
//	fmt.Println(Sqrt(2))
//	fmt.Println(Sqrt(4))

	Verbose(2)
	Verbose(5)
	Verbose(9)
	Verbose(10)
	Verbose(100)
}
