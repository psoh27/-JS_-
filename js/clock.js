const clock = document.querySelector("#clock");

function showClock() {
  const date = new Date();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${month}/${day} 
  ${hours}:${minutes}:${sec}`;
}
showClock();
setInterval(showClock, 1000);
