import  "./home.css";
import logoImage from "../img/logo.png";

export function renderHome(){
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";

    const intro = document.createElement("div");
    intro.classList.add("intro");

    const introText = document.createElement("div");
    introText.classList.add("intro-text");

    const shopName = document.createElement("h1");
    shopName.textContent = "Bite into Happiness";

    const para = document.createElement("p");
    para.textContent = "We combine quality ingredients with homemade recipes to bring you delicious treats and warm service.";

    const logo = document.createElement("img");
    logo.src = logoImage;
    logo.classList = "logo";
    logo.alt = "cookie";

    introText.appendChild(shopName);
    introText.appendChild(para);
    intro.appendChild(introText);
    intro.appendChild(logo);
    contentContainer.appendChild(intro);

    // hours
    const hours = document.createElement("div");
    hours.classList.add("hours");

    const hoursInner = document.createElement("div");
    hoursInner.classList.add("hours-inner");

    const title = document.createElement("h1");
    title.textContent = "Hours";

    hoursInner.appendChild(title);

    const times = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm",
    ]

    times.forEach((time) => {
        const p = document.createElement("p");
        p.textContent = time;
        hoursInner.appendChild(p);
    });

    hours.appendChild(hoursInner);
    contentContainer.appendChild(hours);

    // Location
    const location = document.createElement("div");
    location.classList.add("location");

    const locationInner = document.createElement("div");
    locationInner.classList.add("location-inner");

    const locationPara = document.createElement("p");
    locationPara.textContent = "123 Forest Drive, Forestville, Maine";

    locationInner.appendChild(locationPara);
    location.appendChild(locationInner);
    contentContainer.appendChild(location);
}