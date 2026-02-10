import "./menu.css";
import chocolateTart from "../img/chocolate-tart.png";
import raspberry from "../img/r.png";
import cappuccino from "../img/c.png";
import strawberry from "../img/s.png";
import chicken from "../img/chicken-and-mushrooms.png";
import sandwich from "../img/sandwich.png";


export function renderMenu(){
    const contentContainer = document.querySelector("#content");
    contentContainer.textContent = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const items = [
         {
            name: "Chocolate Swirl Tart",
            description: "A crisp tart filled with smooth chocolate cream and topped with a decorative chocolate swirl.",
            price: "$4.50",
            image: chocolateTart,
        },
        {
            name: "Raspberry Jelly Cake",
            description: "Moist sponge cake layered with raspberry jelly, topped with powdered sugar and fresh raspberries.",
            price: "$4.75",
            image: raspberry,
        },
        {
            name: "Classic Cappuccino",
            description: "Rich espresso topped with creamy, frothy milk and a sprinkle of cocoa powder.",
            price: "$3.50",
            image: cappuccino,
        },
        {
            name: "Strawberry Smoothie",
            description: "Fresh strawberries blended with yogurt and honey for a refreshing drink.",
            price: "$4.25",
            image: strawberry,
        },
         {
            name: "Chicken & Mushroom Quiche",
            description: "Flaky pastry filled with creamy egg custard, tender chicken, and fresh mushrooms.",
            price: "$7.50",
            image: chicken,
        },
        {
            name: "Vegetable Panini",
            description: "Grilled sandwich loaded with fresh vegetables, mozzarella cheese, and a hint of pesto.",
            price: "$6.75",
            image: sandwich,
        },
    ];

    items.forEach(item=>{
        const menuInfo = document.createElement("div");
        menuInfo.classList.add("menuInfo");

        const info = document.createElement("div");
        info.classList.add("info");

        const name = document.createElement("h2");
        name.classList.add("menuName");
        name.textContent = item.name;

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent =item.description;

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = item.price;

        info.appendChild(name);
        info.appendChild(description);
        info.appendChild(price);

        const image = document.createElement("img");
        image.src = item.image;
        image.classList.add("menu-photo");

        menuInfo.appendChild(info);
        menuInfo.appendChild(image);
        menu.appendChild(menuInfo);
        contentContainer.appendChild(menu);
    })
}