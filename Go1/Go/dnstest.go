package main

import (
	"fmt"
	"net"
)

func main() {
	addrs, err := net.LookupHost("gmail.com")

	if err != nil {
		fmt.Println("error")
	}else{
		for _, adr := range addrs {
			fmt.Println("%v", adr)
		}
	}
}