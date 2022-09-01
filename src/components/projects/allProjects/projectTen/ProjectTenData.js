const data = [
    {
      "id": 1,
      "title": "Men Jean's",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest.",
      "category": "breakfast",
      "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-drinks ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.1,
        "count": "259"
      }
    },
    {
      "id": 3,
      "title": "Men's Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, .",
      "category": "dinner",
      "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on.",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired .",
      "category": "drink",
      "image": "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange .",
      "category": "drink",
      "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings",
      "category": "dinner",
      "image": "https://images.unsplash.com/photo-1550152472-3a60c1705d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data ",
      "category": "dinner",
      "image": "https://images.unsplash.com/photo-1621291726769-86a0b3fc6357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown",
      "category": "dinner",
      "image": "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxkaW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer",
      "category": "breakfast",
      "image": "https://images.unsplash.com/photo-1553649504-60af7754bf35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere ",
      "category": "breakfast",
      "image": "https://images.unsplash.com/photo-1536974471655-0466120eff7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen.",
      "category": "breakfast",
      "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 14,
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING ",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 15,
      "title": "Men t-drink",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1514460154823-73e3f57f72d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxsdW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER",
      "category": "breakfast",
      "image": "https://media.istockphoto.com/photos/pancakes-with-sweet-syrup-on-a-wooden-background-sweet-flour-dessert-picture-id1209724765?k=20&m=1209724765&s=170667a&w=0&h=At_A2kKRxbdjr0uXergXRZUmIhGsd_TAUsC-YpM7Ndg=",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 17,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1612171371994-64b72aa6b5e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxsdW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "id": 18,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported",
      "category": "dinner",
      "image": "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxkaW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "id": 19,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic",
      "category": "drink",
      "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    },
    {
      "id": 20,
      "title": "DANVOUY Womens T drink Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve",
      "category": "lunch",
      "image": "https://images.unsplash.com/photo-1616645297079-dfaf44a6f977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxsdW5jaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    }
  ]

  export default data;