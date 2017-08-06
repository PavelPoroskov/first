package main

import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
//	var res[][]uint8
//	res := make([][]uint8, dy, dx)	
//	res := make([][]uint8, dy*dx)	
	
	res := make([][]uint8, dy )	
	
	for iy :=0; iy < dy; iy++ {
		res[iy] = make([]uint8, dx )	
		
		for ix :=0; ix < dx; ix++ {
//			res[iy][ix] = uint8(ix*iy)
//			res[iy][ix] = uint8((ix+iy)/2)
			res[iy][ix] = uint8(ix^iy)
		}
	}
	
	return res
}

func main() {
	pic.Show(Pic)
}
