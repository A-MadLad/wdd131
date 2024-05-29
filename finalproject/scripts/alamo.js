window.addEventListener('load', () => {
    const year = document.getElementById('currentyear');
    year.innerHTML = new Date().getFullYear();
});

window.addEventListener('load', () => {
    const modified = document.getElementById('lastModified');
    modified.innerHTML = document.lastModified;
});

// HAMBURGER BUTTON

const mainnav = document.querySelector(".nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

//THINGS TO DO CARDS

const fun = [
  {
    placeName: "McGinn's PistachioLand",
    imageUrl:
      "./images/pl.webp",
    description: "McGinn's PistachioLand produces many award winning wines, pistachio candies, flavored pistachios and pistashico ice cream.",
    address: "7320 Hwy 54 70, Alamogordo, NM"
  },
  {
    placeName: "White Sands National Park",
    imageUrl: "./images/ws.webp",
    description: "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Park preserves a major portion of this unique dunefield, along with the plants and animals that live here.",
    address: "No specific address. Use a map app to get there."
  },
  {
    placeName: "Museum of Space History",
    imageUrl:
      "./images/sh.webp",
    description: "The New Mexico museum of space history.",
    address: "3198 State Rte 2001, Alamogordo, NM"
  },
  {
    placeName: "Alameda Park Zoo",
    imageUrl:
      "./images/ap.webp",
    description: "It is home to nearly 200 animals representing 90 species. The 12-acre Alameda Park Zoo offers an education center, picnic area, playground, and gift shop that’s perfect for families and visitors of all ages. ",
    address: "1021 N White Sands Blvd, Alamogordo, NM"
  },
  {
    placeName: "Toy Train Depot",
    imageUrl:
      "./images/tt.webp",
    description: "The toy train depot is the most unique train museum you'll find anywhere. There is a little something for everyone; young, old, history buffs, train enthusiasts, south west adventurers, and souvenir seekers.",
    address: "1991 N White Sands Blvd, Alamogordo, NM"
  },
  {
    placeName: "Flickinger Center",
    imageUrl:
      "./images/fc.webp",
    description: "The Flickinger Center for Performing Arts is amongst New Mexico’s most exciting and rapidly diversifying live performance venues. We are first and foremost a space where communities are built, emerging talent is nurtured and lives are enriched through creative connection. As a non-profit performing arts center, we strive to bring a variety of performance, education, and community programs and opportunities to the local, national and international stage. With local roots in the New Mexico art scene and a global reach hosting and collaborating with artists, musicians, and creatives from around the world, Flickinger needs to be the next step in your art journey.",
    address: "1110 N New York Ave, Alamogordo, NM"
  },
];

funCard(fun);

function funCard(fun) {
  fun.forEach(item => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let img = document.createElement("img");
    let des = document.createElement("p");
    let add = document.createElement("p");

    name.textContent = item.placeName;
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", `${item.placeName}`);
    img.setAttribute("loading", "lazy");
    des.textContent = item.description;
    add.innerHTML = `<span class="label">Address:</span> ${item.address}`;

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(des);
    card.appendChild(add);

    document.querySelector(".funGrid").appendChild(card);
  });
}
