const io = require("socket.io")();

io.on("connection", client => {
    client.on("subscribeToTimer", interval => {
        console.log("client is subscribing to timer with interval ", interval);
        setInterval(() => {
            client.emit("timer", `HELLO ${Math.random()}`);
        }, interval);
    });
});
const port = process.env.PORT || 8000;
io.listen(port);
console.log("listening on port ", port);
