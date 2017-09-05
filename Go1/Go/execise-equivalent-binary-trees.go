package main

import "golang.org/x/tour/tree"
import "fmt"

func walk_subtree(t *tree.Tree, ch chan int) {
	if t==nil {
		return
	}
	walk_subtree(t.Left, ch)
	ch <- t.Value
	walk_subtree(t.Right, ch)
}

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {	
	
	walk_subtree(t, ch)
	
	close(ch)
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	ch1 := make(chan int)
	ch2 := make(chan int)
	
	go Walk( t1, ch1 )
	go Walk( t2, ch2 )
	
//	var i2 int
	for i1 := range ch1 {
		i2 :=<- ch2
//		fmt.Println(i1)
		if i1 != i2 {
			return false
		}
	}	
	
	return true
}

func main() {
//	ch := make(chan int)
//	go Walk( tree.New(1), ch )
//	for i := range ch {
//		fmt.Println(i)
//	}

	res1 := Same(tree.New(1), tree.New(1))	
	fmt.Println(res1)
	
	res2 := Same(tree.New(1), tree.New(2))	
	fmt.Println(res2)
}
