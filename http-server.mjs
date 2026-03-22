import http from "http";

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url);

  if (req.method == "POST") {
    req.on("data", (data) => {
      console.log(data.toString());
      res.write(`Data yang diterima ${data}`);
      res.end()
    });
    

    //keknya gaguna else nya, soalnya selalu post dari client nya, gatau gmana selain post dari sisi client nya
  }else{
    if(req.url == "/lawak"){
        res.write("tidak post");
        res.end()    
    }
  }


});

server.listen(3000, () => {
  console.log(`server on 3000`);
});
