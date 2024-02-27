document.addEventListener("DOMContentLoaded", function() {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const portfolioLink = document.getElementById("portfolio-link");
  const contactLink = document.getElementById("contact-link");

  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const portfolioSection = document.getElementById("portfolio");
  const contactSection = document.getElementById("contact");

  showSection(homeSection);

  homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    hideSectionAndShow(homeSection);
  });

  aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    hideSectionAndShow(aboutSection);
  });

  portfolioLink.addEventListener("click", function(event) {
    event.preventDefault();
    hideSectionAndShow(portfolioSection);
  });

  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    hideSectionAndShow(contactSection);
  });

  function hideSectionAndShow(section) {
    const sections = document.querySelectorAll("section");
    sections.forEach(function(sec) {
      sec.classList.remove("show");
    });
    
      section.classList.add("show");
    
  }

  function showSection(section) {
    section.classList.add("show");
  }
});
function fetchData() {
      fetch("https://api.lanyard.rest/v1/users/511031197455876128")
        .then(response => response.json())
        .then(data => {
          const spotifyData = data?.data?.spotify;
 
         document.getElementById("myonlinestatus").textContent=data.data.discord_status;
          if (spotifyData) {
            // Check if the Spotify activity has changed
            if (spotifyData.song !== document.getElementById("activity-name").textContent ||
                spotifyData.artist !== document.getElementById("activity-detail").textContent) {
              
              document.getElementById("playing").textContent = "Listneing to Spotify...";
              document.getElementById("activity-name").textContent = spotifyData.song || "N/A";
              document.getElementById("activity-detail").textContent = spotifyData.artist || "N/A";
              document.getElementById("activity-image").src = spotifyData.album_art_url;
              document.getElementById("notplaying").style.display = 'none';

            }
          }
                 
        })                         
        .catch(error => {
          console.log("Error fetching data:", error);       
        });
    }   


    fetchData();
 
    setInterval(fetchData, 1000);      
window.addEventListener('DOMContentLoaded', () => {
  const locationTimeElement = document.getElementById('location-time');

  function updateLocationTime() {
    const date = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Hong_Kong',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    locationTimeElement.textContent = date;
  }

  setInterval(updateLocationTime, 1000);
  updateLocationTime();
});

window.addEventListener('DOMContentLoaded', () => {
  const timezoneElement = document.getElementById('ur-timezone');
  const timeElement = document.getElementById('ur-time');
  const timezoneOffset = new Date().getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  const offsetMinutes = Math.abs(timezoneOffset % 60);
  const offsetSign = timezoneOffset < 0 ? "+" : "-";
  const formattedOffset = `[GMT${offsetSign}${offsetHours}]`;
  timezoneElement.textContent = formattedOffset;

  function updateTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    timeElement.textContent = formattedTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
});

function calculateCountdown() {
      var currentDate = new Date();
      var birthdayDate = new Date("January 20, " + currentDate.getFullYear() + " 00:00:00 GMT+0800");
      var oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

      if (currentDate.toDateString() === birthdayDate.toDateString()) {
        document.getElementById("birthday-countdown").textContent = "Right Now!";
      } else {
        if (currentDate > birthdayDate) {
          birthdayDate.setFullYear(currentDate.getFullYear() + 1); // Set next year's birthday
        }
        
        var daysRemaining = Math.round((birthdayDate - currentDate) / oneDay);
        var hours = Math.floor((birthdayDate - currentDate) % oneDay / (1000 * 60 * 60));
        var minutes = Math.floor((birthdayDate - currentDate) % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor((birthdayDate - currentDate) % (1000 * 60) / 1000);

        document.getElementById("birthday-countdown").textContent = daysRemaining + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
      }
    }

    setInterval(calculateCountdown, 1000);
