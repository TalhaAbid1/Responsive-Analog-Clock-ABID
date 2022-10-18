const setBg = () => {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = "#" + randomColor;
	color.innerHTML = "#" + randomColor;
}  

setInterval(()=>{

	d = new Date();
	htime=d.getHours();
	mtime=d.getMinutes();
	stime=d.getSeconds();

	hRotation = 30*htime + mtime/2;
	mRotation = 6*mtime;
	sRotation = 6*stime;

	hours.style.transform = `rotate(${hRotation}deg)`;
	minutes.style.transform = `rotate(${mRotation}deg)`;
	seconds.style.transform = `rotate(${sRotation}deg)`;

},1000);