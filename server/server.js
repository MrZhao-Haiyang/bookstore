let http= require("http");
let fs=require("fs");
let url=require("url");
function readBooks(callback){
    fs.readFile("./books.json","utf-8",function(err,data){
        if(err || data.length==0) data="[]";
        callback(JSON.parse(data));
    })
}
function writeBooks(data,callback){
    fs.writeFile("./books.json",JSON.stringify(data),callback);
}
http.createServer(function(req,res){
    let {pathname,query}=url.parse(req.url,true);
    if(pathname==="/book"){
        let id=query.id;
        switch(req.method){
            case "GET":
                if(id){
                    readBooks(function(books){
                        var book=books.find(item=>item.id==id);
                        res.end(JSON.stringify(book));
                    });
                }else{
                    readBooks(function(books){
                        res.end(JSON.stringify(books));
                    });
                }
                break;
            case "POST":
                var str="";
                req.on("data",function(data){
                    str+=data;
                });
                req.on("end",function(){
                    var book=JSON.parse(str);
                    readBooks(function(books){
                        book.id=books.length?books[books.length-1].id+1:1;
                        books.push(book);
                        writeBooks(books,function(){
                            res.end(JSON.stringify(book));
                        });
                    })
                });
                break;
            case "PUT":
                var str="";
                req.on("data",function(data){
                    str+=data;
                });
                req.on("end",function(){
                    var book=JSON.parse(str);
                    readBooks(function(books){
                        books=books.map(item=>{
                            if(item.id==id){
                                return book;
                            }else{
                                return item;
                            }
                        });
                        writeBooks(books,function(){
                            res.end(JSON.stringify(books));
                        });
                    })
                })
                break;
            case "DELETE":
                readBooks(function(books){
                    books=books.filter(item=>item.id!=id);
                    writeBooks(books,function(){
                        res.end("");
                    });
                });
                break;
        }
    }else{
        res.statusCode=404;
        res.end("NOT FOUND");
    }
}).listen(3000);