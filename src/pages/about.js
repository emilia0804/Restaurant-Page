import "./about.css";

export function renderAbout(){
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";

    const about = document.createElement("div");
    about.classList.add("about");

    const title = document.createElement("p");
    title.textContent = "Thank you for reaching out! We’re always happy to connect and share a little sweetness.";
    title.classList.add("title");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    const name = document.createElement("p");
    name.textContent = "Name: Cheft";

    const phNo = document.createElement("p");
    phNo.textContent = "Phone Number: 555-555-5554";

    const email = document.createElement("p");
    email.textContent = "Email: biteIntoHappiness@gamil.com";

    about.appendChild(title);
    contact.appendChild(heading);
    contact.appendChild(phNo);
    contact.appendChild(name);
    contact.appendChild(email);
    about.appendChild(contact);
    contentContainer.appendChild(about);

    // Mission
    const mission = document.createElement("div");
    mission.classList.add("mission");

    const headingMission = document.createElement("h2");
    headingMission.textContent = "Mission";

    const para = document.createElement("p");
    para.textContent = "To bring joy through delicious, high-quality food.";


    mission.appendChild(headingMission);
    mission.appendChild(para);
    contentContainer.appendChild(mission);

    // Story
    const story = document.createElement("div");
    story.classList.add("mission");

    const headingStory = document.createElement("h2");
    headingStory.textContent = "Mission";

    const para1 = document.createElement("p");
    para1.textContent = "Born from a love for fresh treats and good coffee, we serve every dish with care and passion, bringing people together one bite at a time.";


    story.appendChild(headingStory);
    story.appendChild(para1);
    contentContainer.appendChild(story);
}