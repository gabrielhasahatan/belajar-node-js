import https from "http";

// const url = 'https://eosoq2by4yxq1ec.m.pipedream.net'
// const url = "https://hkdk.events/22mt574btrfnhc";
const url = 'http://localhost:3000/lawak'

const req = https.request(
  url,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  },
  //callback ketika datanya ada / incoming message
  //data yang diterima dari server
  (res) => {
    res.addListener("data", (data) => {
      console.log(data.toString());
    });
  }
);

//kita send ke server
const body = JSON.stringify({
  nama: "gabriel",
  kel: "bag",
});

// req.write(body);
req.end();
