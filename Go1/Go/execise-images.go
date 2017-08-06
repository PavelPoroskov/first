package main

import "golang.org/x/tour/pic"
import "image"
import "image/color"

type Image struct{}

func (m Image) ColorModel() color.Model {
	return color.RGBAModel
}
func (m Image) Bounds() image.Rectangle {
	return image.Rect(0,0,160,100)
}

func (m Image) At(x, y int) color.Color {
//	return color.RGBA{0,0,255,255}
	return color.RGBA{uint8(x),uint8(y),255,255}
}

func main() {
	m := Image{}
	pic.ShowImage(m)
}
