import { WebSocket, WebSocketServer } from "ws";
const port = 3000;
const server = new WebSocketServer({ port: port });

server.on("connection", (socket) => {
  console.log(`Listening ${port}`);
  socket.on("message", (message) => {
    console.log(`Message dari client : ${message}`);

    //kirim message dari orang tadi ke semua pendengar

    server.clients.forEach((client) => {
      //kalau client masih terhubung atau koneksinya tidak ditutup
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Message dari orang lain : ${message}`);
      }
    });
  });
});
