let weather ={
    apiKey:"209b7a569f602616d970ed912598cc83",

    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },

    displayWeather:function (data){
        
        const { name } = data;
        const { icon , description } =data.weather[0];
        const { temp,humidity }=data.main;
        const{ speed }=data.wind;
        document.querySelector(".city").innerText=name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity : "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed : "+ speed +" km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search : function(){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
  
};

document.querySelector("button").addEventListener("click",()=>{
    weather.search();
});

// adding enter key in search bar
document.querySelector(".search-bar").addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("kolkata");