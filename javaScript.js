function operacion(){
	var a= document.f1.a.value;
	var b= document.f1.b.value;
	var c= document.f1.c.value;
	var r1
	var r2
	var r3


	
	r2= (parseFloat(a)* parseFloat(b))/100;
	r1=((parseFloat(a)* parseFloat(c))/100)+ parseFloat(a)+r2;
	
	document.f1.d.value=r2;
	document.f1.e.value=r1;
	
}

function convertir(){
	var converde =parseFloat(document.f2.s1.value);
	var convera = parseFloat(document.f2.s2.value);
	var cantidad =parseFloat(document.f2.cantidad.value);
	resultado =0;
	
	/* byte */
	
	 if( converde==0 && convera ==6){
		 resultado= cantidad/1024;
	 }
	 else if(converde==0 && convera ==7){
			 resultado=cantidad/1048576;
		 }
	 else if(converde==0 && convera ==8){			
		 resultado=cantidad/1073741824;
		}
	else if (converde==0 && convera ==9){
			resultado=cantidad/1099511627776;
			}
	
	
	/* kilobyte */
	else if (converde==1 && convera ==5)
		 {
			resultado=cantidad*1024;
			}
	else if (converde==1 && convera ==7) {
			resultado=cantidad/1024;
			}
	else if (converde==1 && convera ==8) {
			resultado=cantidad/1048576;		 
	}
	else if (converde==1 && convera ==9) {
			resultado=cantidad/1073741824;
	}
	
	/*megabyte*/
	else if (converde==2 && convera ==5) {
			resultado=cantidad*1048576;
	}
	else if (converde==2 && convera ==6) {
			resultado=cantidad*1024;
	}
	else if (converde==2 && convera ==8) {
			resultado=cantidad/1024;
	}
	else if (converde==2 && convera ==9) {
			resultado=cantidad/1048576;
	}
	
	/* gigabyte. */
	else if (converde==3 && convera ==5) {
			resultado=cantidad*1073741824;
	}
	else if (converde==3 && convera ==6) {
			resultado=cantidad*1048576;
	}
	else if (converde==3 && convera ==7) {
			resultado=cantidad*1024;
	}
	else if (converde==3 && convera ==9) {
			resultado=cantidad/1024;
	}
	 
	 /* terabyte */
	 else if (converde==4 && convera ==5) {
			resultado=cantidad*1099511627776;
	}
	else if (converde==4 && convera ==6) {
			resultado=cantidad*1073741824;
	}
	else if (converde==4 && convera ==7) {
			resultado=cantidad*1048576;
	}
	else if (converde==4 && convera ==8) {
			resultado=cantidad*1024;
	}
	 
	 else {
		 resultado=cantidad;
	 }
	 
	 document.f2.res.value=resultado;
}


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 5000);

