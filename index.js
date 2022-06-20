import { peerSocket } from "messaging";
peerSocket.onopen = () =>{
if (peerSocket.readyState === peerSocket.OPEN) {
   peerSocket.send("Hello World");
}
}
peerSocket.onerror = (err) => {
  console.log(`Connection error: ${err.code} - ${err.message}`);
}