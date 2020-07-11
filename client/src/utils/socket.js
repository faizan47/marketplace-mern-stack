import openSocket from 'socket.io-client';
const socket = openSocket(process.env.REACT_APP_SOCKET_PORT);

function subscribeToTimer(cb) {
	socket.on('timer', timestamp => cb(null, timestamp));
	socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };
