package main

import (
	"golang.org/x/tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
//	return map[string]int{"x": 1}

	var n, ok = 0, false
	res := make(map[string]int)
	for _, v := range strings.Fields(s) {
		n, ok = res[v]
		if ok {
			res[v] = n + 1
		}else{
			res[v] = 1
		}
	}
	
	return res
}

func main() {
	wc.Test(WordCount)
}
