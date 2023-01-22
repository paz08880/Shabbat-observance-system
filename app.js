//Two ways to build a shabbat observance system

//Number one

window.addEventListener('load', () => {
  const test = document.getElementById("test");
  const api_url = "https://www.hebcal.com/shabbat/?cfg=json&lg=h&geonameid=293397";

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    calculate(data.items[1].date, data.items[3].date);
  }


function calculate(shabatIn, shabatOut) {
  const date = new Date();
  if(date >= shabatIn && date <= shabatOut){
    console.log("האתר סגור")
    webStatus(false);
  }else{
    webStatus(true)
    console.log("האתר פתוח")
  }

}

function webStatus(status){
  if(status == false){
    test.innerHTML = "האתר סגור";
  }else{
    test.innerHTML = "האתר פתוח";
  }
}

getapi(api_url);

//Way Two
/*
	var d = new Date();
	var dayFriday = 5; 
	var daySaturday = 6;
	var hours = d.getHours();

			//שישי
		if(d.getDay() === dayFriday){
			if(hours >= 16){ // ניכנס שבת
				test.innerHTML = "האתר סגור";
				}else{

				}
		}
		
			//שבת
		if(d.getDay() === daySaturday){
			if(hours <= 17){ //יציאת שבת
        test.innerHTML = "האתר סגור";
			}else{

			}
		}
*/
});

