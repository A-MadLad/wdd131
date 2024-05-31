const unique = [
    {
      placeName: "Old Apple Barn",
      imageUrl:
        "./images/ab.jpg",
      description: "The Historic Old Apple Barn was built in 1941 in Mountain Park, New Mexico. The Cloud-Climbing Railroad stopped at the barn to load apples grown on the spring-fed orchards of this beautiful area. Today, you can take a walk back in time and experience a Vintage Emporium, Gift Shop and Fudge Factory. Enjoy the mountain view and mountain air on their seventy-foot deck.",
      address: "949 US-82, High Rolls, NM"
    },
    {
        placeName: "Roadrunner Galleria",
        imageUrl:
          "./images/rr.jpg",
        description: "Shop here for awesome handmade crafts, wall art, and home décor items.",
        address: "928 N New York Ave, Alamogordo, NM"
    },
    {
      placeName: "Zia Comics",
      imageUrl: "./images/zc.jpg",
      description: "Zia Comics is here to serve all your Nerdy Needs in Alamogordo. From comics to board games to miniatures, we have you covered.",
      address: "909 N New York Ave, Alamogordo, NM"
    }
  ];
  
  uniqueCard(unique);
  
  function uniqueCard(shop) {
    shop.forEach(item => {
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
      card.appendChild(des);
      card.appendChild(add);
      card.appendChild(img);
      
  
      document.querySelector(".uniqueGrid").appendChild(card);
    });
  }