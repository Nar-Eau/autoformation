let fakefooter = document.querySelector('#fake-footer')
let footer = document.querySelector('footer')
let boite = document.querySelector('.boite-wrapper')

let condi1 = false; // il faut ne pas voir la boite
let condi2 = false; // il faut ne pas voir la boite

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		let element = entry.target;

		if (element === boite) {
			condi1 = !entry.isIntersecting
		}

		if (element === footer) {
			condi2 = !entry.isIntersecting
		}

		fakefooter.classList.toggle('active', condi1 && condi2)


	});
};

let options = {
	threshold: .5,
};


let observer = new IntersectionObserver(callback, options);
let target = document.querySelector(".boite-wrapper");

[footer, boite].forEach(el => {
	observer.observe(el);
})

function redbox(entries) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.style.border = "thick solid #0000FF";
			console.log('yes')
		} else {
			entry.target.style.border = "none";
			console.log('no')
		}
	});
}

let regarder = new IntersectionObserver(redbox);

let menu = document.querySelector("header")

regarder.observe(menu);



