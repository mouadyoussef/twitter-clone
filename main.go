package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"strings"

	messaging "github.com/YoussefMouad/twitter-clone/messaging"
)

var addr = flag.String("addr", ":3000", "http service address")

func serveHome(writer http.ResponseWriter, request *http.Request) {
	//log.Println(request.URL)
	if request.URL.Path == "/gochat" {
		http.ServeFile(writer, request, "home.html")
	}
	if strings.Contains(request.URL.Path, ".js") {
		writer.Header().Add("Content-Type", "application/javascript; charset=utf-8")
		http.ServeFile(writer, request, "ui/dist/ui"+request.URL.Path)
	}
	http.ServeFile(writer, request, "ui/dist/ui/index.html")
}

func main() {
	fmt.Println("Running on : http://localhost" + *addr)
	flag.Parse()
	hub := messaging.NewHub()
	go hub.Run()
	http.HandleFunc("/", serveHome)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		messaging.ServeWs(hub, w, r)
	})
	err := http.ListenAndServe(*addr, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
