package main

import (
	"fmt"
	"sync"
	"time"
)

type SafeMap struct {
	v   map[string]bool
	mux sync.Mutex
}

// Inc increments the counter for the given key.
func (c *SafeMap) Set(key string) {
	c.mux.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	c.v[key] = true
	c.mux.Unlock()
}

// Value returns the current value of the counter for the given key.
func (c *SafeMap) Get(key string) bool {
	c.mux.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	defer c.mux.Unlock()
	
	_, ok := c.v[key]
	return ok
}


type Fetcher interface {
	// Fetch returns the body of URL and
	// a slice of URLs found on that page.
	Fetch(url string) (body string, urls []string, err error)
}

// Crawl uses fetcher to recursively crawl
// pages starting with url, to a maximum of depth.
func Crawl(url string, depth int, fetcher Fetcher, sMap *SafeMap) {
	// TODO: Fetch URLs in parallel.
	// TODO: Don't fetch the same URL twice.
	// This implementation doesn't do either:
//	fmt.Println("begin(%v)", url)
	if depth <= 0 {
		return
	}
//	fmt.Println("fetcher.Fetch(%v)", url)
	if sMap.Get(url) {
		return
	}
	body, urls, err := fetcher.Fetch(url)
//	fmt.Println("before sMap.Set(%v)", url)
	sMap.Set(url)
	//time.Sleep(100 * time.Millisecond)		
//	fmt.Println("after sMap.Set(%v)", url)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("found: %s %q\n", url, body)
	for _, u := range urls {
		fmt.Println(u)
//		if sMap.Get(u) {
//			continue
//		}
//		fmt.Println("22")
//		time.Sleep(100 * time.Millisecond)		
		go Crawl(u, depth-1, fetcher, sMap)
//		time.Sleep(100 * time.Millisecond)		
//		fmt.Println("33")
	}
	time.Sleep(time.Second)
	return
}

func main() {
	sMap := &SafeMap{v: make(map[string]bool, 1000)}
	Crawl("http://golang.org/", 4, fetcher, sMap)
	
	res := sMap.Get("http://golang.org/pkg/fmt/")
	fmt.Println(res)
	
	res = sMap.Get("http://golang.org/")
	fmt.Println(res)
	
	res = sMap.Get("http://golang.org/pkg/")
	fmt.Println(res)
}

// fakeFetcher is Fetcher that returns canned results.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
	body string
	urls []string
}

func (f fakeFetcher) Fetch(url string) (string, []string, error) {
	if res, ok := f[url]; ok {
		return res.body, res.urls, nil
	}
	return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher is a populated fakeFetcher.
var fetcher = fakeFetcher{
	"http://golang.org/": &fakeResult{
		"The Go Programming Language",
		[]string{
			"http://golang.org/pkg/",
			"http://golang.org/cmd/",
		},
	},
	"http://golang.org/pkg/": &fakeResult{
		"Packages",
		[]string{
			"http://golang.org/",
			"http://golang.org/cmd/",
			"http://golang.org/pkg/fmt/",
			"http://golang.org/pkg/os/",
		},
	},
	"http://golang.org/pkg/fmt/": &fakeResult{
		"Package fmt",
		[]string{
			"http://golang.org/",
			"http://golang.org/pkg/",
		},
	},
	"http://golang.org/pkg/os/": &fakeResult{
		"Package os",
		[]string{
			"http://golang.org/",
			"http://golang.org/pkg/",
		},
	},
}
