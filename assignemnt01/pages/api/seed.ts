// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   await prisma.table.deleteMany();
  // await prisma.review.deleteMany();
  await prisma.product.deleteMany();

  // await prisma.user.deleteMany();

 

  await prisma.product.createMany({
    data: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
         
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
         
        },
        {
          id: 5,
          title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          
        },
        {
          id: 6,
          title: "Solid Gold Petite Micropave ",
          price: 168,
          description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
         
        },
        {
          id: 7,
          title: "White Gold Plated Princess",
          price: 9.99,
          description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          
        },
        {
          id: 8,
          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          price: 10.99,
          description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
         
        },
        {
          id: 9,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          price: 64,
          description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
         
        },
        {
          id: 10,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 109,
          description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          
        },
        {
          id: 11,
          title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          price: 109,
          description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
          category: "electronics",
          image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
          
        },
        {
          id: 12,
          title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          price: 114,
          description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
          
        },
        {
          id: 13,
          title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          price: 599,
          description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
          category: "electronics",
          image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
          
        },
        {
          id: 14,
          title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
          price: 999.99,
          description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          category: "electronics",
          image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
         
        },
        {
          id: 15,
          title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          price: 56.99,
          description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
          
        },
        {
          id: 16,
          title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          price: 29.95,
          description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
         
        },
        {
          id: 17,
          title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          price: 39.99,
          description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
          
        },
        {
          id: 18,
          title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
          price: 9.85,
          description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          
        },
        {
          id: 19,
          title: "Opna Women's Short Sleeve Moisture",
          price: 7.95,
          description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        
        },
        {
          id: 20,
          title: "DANVOUY Womens T Shirt Casual Cotton Short",
          price: 12.99,
          description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          category: "women's clothing",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          
        }
      ]
  });

  //   const userLaith = await prisma.user.create({
  //     data: {
  //       first_name: "Laith",
  //       last_name: "Harb",
  //       email: "laith@hotmail.com",
  //       city: "ottawa",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userJosh = await prisma.user.create({
  //     data: {
  //       first_name: "Josh",
  //       last_name: "Allen",
  //       email: "josh@hotmail.com",
  //       city: "toronto",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userLebron = await prisma.user.create({
  //     data: {
  //       first_name: "LeBron",
  //       last_name: "James",
  //       email: "lebron@hotmail.com",
  //       city: "niagara",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   const userCassidy = await prisma.user.create({
  //     data: {
  //       first_name: "Cassidy",
  //       last_name: "Marksom",
  //       email: "cassidy@hotmail.com",
  //       city: "toronto",
  //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
  //       phone: "1112223333",
  //     },
  //   });

  //   await prisma.review.createMany({
  //     data: [
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
  //         rating: 5,
  //         restaurant_id: vivaanId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
  //         rating: 5,
  //         restaurant_id: bluRistoranteId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
  //         rating: 5,
  //         restaurant_id: elCatrinId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
  //         rating: 4,
  //         restaurant_id: stelvioId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Extremely disappointing in our experience.",
  //         rating: 2,
  //         restaurant_id: laBartolaId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
  //         rating: 5,
  //         restaurant_id: elCatrinId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
  //         rating: 5,
  //         restaurant_id: kamasutraIndianId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Laith",
  //         last_name: "Harb",
  //         text: "Restaurant was loud and crowded. Food is not worth the price.",
  //         rating: 3,
  //         restaurant_id: eldoradoTacoId,
  //         user_id: userLaith.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
  //         rating: 4,
  //         restaurant_id: vivaanId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
  //         rating: 5,
  //         restaurant_id: sofiaId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
  //         rating: 3,
  //         restaurant_id: curryishTavernId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
  //         rating: 3,
  //         restaurant_id: adrakYorkvilleId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Wonderful food and service.",
  //         rating: 5,
  //         restaurant_id: coconutLagoonId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "Josh",
  //         last_name: "Allen",
  //         text: "Great food, great staff. You can’t ask for much more from a restaurant.",
  //         rating: 5,
  //         restaurant_id: bluRistoranteId,
  //         user_id: userJosh.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
  //         rating: 5,
  //         restaurant_id: RamaKrishnaId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
  //         rating: 4,
  //         restaurant_id: lastTrainToDelhiId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
  //         rating: 4,
  //         restaurant_id: curryishTavernId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
  //         rating: 5,
  //         restaurant_id: pukkaId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "Very nice evening spent with special family.",
  //         rating: 5,
  //         restaurant_id: mariachisId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "LeBron",
  //         last_name: "James",
  //         text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
  //         rating: 4,
  //         restaurant_id: eldoradoTacoId,
  //         user_id: userLebron.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
  //         rating: 5,
  //         restaurant_id: mariachisId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
  //         rating: 4,
  //         restaurant_id: stelvioId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
  //         rating: 5,
  //         restaurant_id: coconutLagoonId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
  //         rating: 4,
  //         restaurant_id: bluRistoranteId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
  //         rating: 3,
  //         restaurant_id: laBartolaId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
  //         rating: 4,
  //         restaurant_id: eldoradoTacoId,
  //         user_id: userCassidy.id,
  //       },
  //       {
  //         first_name: "Cassidy",
  //         last_name: "Mancher",
  //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
  //         rating: 4,
  //         restaurant_id: utsavId,
  //         user_id: userCassidy.id,
  //       },
  //     ],
  //   });

  //   await prisma.table.createMany({
  //     data: [
  //       {
  //         restaurant_id: vivaanId,
  //         seats: 4,
  //       },
  //       {
  //         restaurant_id: vivaanId,
  //         seats: 4,
  //       },
  //       {
  //         restaurant_id: vivaanId,
  //         seats: 2,
  //       },
  //     ],
  //   });

  res.status(200).json({ name: "hello" });
}
