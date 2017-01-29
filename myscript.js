var intervl = 400;

set_listeners();

function set_listeners() {
	arr = document.getElementsByClassName('thumb-link');
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i].addEventListener("mouseover", send_req);
		// arr[i].addEventListener("onmouseleave", stop_anim);
	}
}

function rqpcr() {
	console.log('this',this);
	str = this.response;
	//console.log(str);
	var re = /storyboard_spec\":\"([^"]*)"/;
	res = str.match(re)[1];
	// console.log(res);
	t1 = res.indexOf('|');
	t2 = res.indexOf('|', t1 + 1);
	t3 = res.indexOf('|', t2 + 1);
	fine_res = res.slice(t2 + 1, t3);
	// console.log(fine_res);
	obja = {};
	obja.w = 160;
	temp = fine_res.indexOf('#');
	temp1 = fine_res.indexOf('#', temp + 1);
	temp2 = fine_res.indexOf('#', temp1 + 1);
	temp3 = fine_res.indexOf('#', temp2 + 1);
	temp4 = fine_res.indexOf('#', temp3 + 1);
	// console.log(fine_res.slice(temp + 1, temp1));
	// console.log(fine_res.slice(temp1 + 1, temp2));
	// console.log(fine_res.slice(temp2 + 1, temp3));
	obja.h = parseInt(fine_res.slice(temp + 1, temp1));
	obja.no = parseInt(fine_res.slice(temp1 + 1, temp2));
	obja.strip_h = parseInt(fine_res.slice(temp2 + 1, temp3));
	obja.strip_w = parseInt(fine_res.slice(temp3 + 1, temp4));
	obja.sigh = fine_res.slice(fine_res.lastIndexOf('#') + 1);
	obja.v_id = v_id;
	console.log(obja);
	start()
}

function init(v_id) {
	req = new XMLHttpRequest();
	req.open("GET", "https://www.youtube.com/watch?v=" + v_id);
	req.send();
	req.addEventListener("load", function(obja) {
		//console.log('this',this);
		str = this.response;
		//console.log(str);
		var re = /storyboard_spec\":\"([^"]*)"/;
		res = str.match(re)[1];
		// console.log(res);
		t1 = res.indexOf('|');
		t2 = res.indexOf('|', t1 + 1);
		t3 = res.indexOf('|', t2 + 1);
		fine_res = res.slice(t2 + 1, t3);
		// console.log(fine_res);
		obja = {};
		obja.w = 160;
		temp = fine_res.indexOf('#');
		temp1 = fine_res.indexOf('#', temp + 1);
		temp2 = fine_res.indexOf('#', temp1 + 1);
		temp3 = fine_res.indexOf('#', temp2 + 1);
		temp4 = fine_res.indexOf('#', temp3 + 1);
		// console.log(fine_res.slice(temp + 1, temp1));
		// console.log(fine_res.slice(temp1 + 1, temp2));
		// console.log(fine_res.slice(temp2 + 1, temp3));
		obja.h = parseInt(fine_res.slice(temp + 1, temp1));
		obja.no = parseInt(fine_res.slice(temp1 + 1, temp2));
		obja.strip_h = parseInt(fine_res.slice(temp2 + 1, temp3));
		obja.strip_w = parseInt(fine_res.slice(temp3 + 1, temp4));
		obja.sigh = fine_res.slice(fine_res.lastIndexOf('#') + 1);
		obja.v_id = v_id;
		console.log(obja);
		start_anim(obja);
	});
}	

function send_req() {
	raw_id = this.getAttribute('href');
	id = raw_id.slice(9);
	init(id);
	tst_elem = document.createElement('div');
	tst_elem.id = 'slide_board';
	tst.style.height = 100%;
	tst.style.width = 100%;
	this.parentNode.childNodes.add(tst_elem);
}

function start_anim() {
	
}
