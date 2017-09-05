package main

import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func (r13 rot13Reader) Read(b []byte) (int, error) {

	in0 := "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	out := "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
	
	m := make(map[byte]byte)	
	for i:=0; i < len(in0); i++ {
		m[in0[i]] = out[i]
	}

	b0 := make( []byte, len(b) )
	n, err := r13.r.Read(b0)
	
	if err == nil {
	
		var (
			outL byte
			ok bool
			)
		for i := 0; i < n; i++ {
//			b[i] = b0[i] + 13
			outL, ok = m[b0[i]]
			if ok {
				b[i] = outL
			}else{
				b[i] = b0[i]
			}
		}
	}
	
	return n, err
}

func main() {
	s := strings.NewReader("Lbh penpxrq gur pbqr!")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
