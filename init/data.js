const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views right from your window, take long walks on the private beach, and unwind in the cozy interiors featuring nautical-themed decor. Perfect for couples or small families looking to disconnect and enjoy nature at its best.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the bustling city in this modern and stylish loft apartment. Featuring floor-to-ceiling windows, minimalist furnishings, and a fully equipped kitchen, this space is ideal for digital nomads and urban explorers. Located just steps away from top restaurants, nightlife, and art galleries.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Mountain Retreat",
    description: "Reconnect with nature at this peaceful cabin nestled in the serene mountains of Manali. With panoramic views of snow-capped peaks, a crackling fireplace, and rustic wooden interiors, this retreat is ideal for writers, hikers, or anyone seeking solitude and inspiration in the lap of nature.",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
    price: 900,
    location: "Manali",
    country: "India"
  },
  {
    title: "Tropical Jungle Bungalow",
    description: "Immerse yourself in nature at this eco-friendly bungalow tucked deep in the tropical jungles of Bali. Wake up to the sounds of exotic birds, enjoy open-air showers, and relax in a hammock surrounded by lush greenery. Great for nature lovers and adventure seekers wanting an authentic experience.",
    image: "https://images.unsplash.com/photo-1582719478191-4b3d1f1e0f6b",
    price: 1100,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Desert Oasis Camp",
    description: "Experience the magic of the Thar Desert with this luxury glamping site. Each tent is furnished with king-sized beds, traditional Rajasthani décor, and modern amenities. Evenings are filled with cultural performances and bonfires under the starlit sky, creating unforgettable memories in Jaisalmer.",
    image: "https://images.unsplash.com/photo-1597750157493-ef38c4d93f6b",
    price: 700,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lakeside Wooden Cabin",
    description: "Enjoy tranquility at this charming wooden cabin by the serene lake in Nainital. With a private deck overlooking the water, cozy interiors with vintage décor, and the option for boating and fishing, this cabin is the perfect weekend escape from city life. Ideal for couples and small families.",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    price: 950,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Historic Countryside Villa",
    description: "Step back in time with this beautifully restored countryside villa in Tuscany. Surrounded by rolling vineyards and olive groves, the villa features antique furnishings, terracotta floors, and a private pool. A perfect blend of history, luxury, and comfort, ideal for large families or group getaways.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 1400,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Snowy Alpine Chalet",
    description: "Nestled in the heart of the Alps, this luxurious chalet offers unmatched views of snow-covered mountains. With a hot tub, fireplace, and ski-in/ski-out access, it is a perfect winter paradise for snow sports enthusiasts and relaxation seekers.",
    image: "https://images.unsplash.com/photo-1610285569605-8b10343f3dba",
    price: 1600,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Rustic Vineyard Cottage",
    description: "Stay amidst the grapevines in this rustic yet elegant cottage located on a working vineyard. Enjoy wine tastings, vineyard tours, and evenings on the patio with sunset views and a glass of local wine.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    price: 1000,
    location: "Napa Valley",
    country: "United States"
  },
  {
    title: "Floating River House",
    description: "This unique floating home on the backwaters offers a blend of tranquility and comfort. Enjoy gentle water currents, canoe rides, and fresh seafood in this one-of-a-kind stay.",
    image: "https://images.unsplash.com/photo-1617634667038-8cdbde98a8e6",
    price: 850,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Scandinavian Glass Igloo",
    description: "Experience the Northern Lights in this futuristic glass igloo in the Arctic Circle. Equipped with heated beds and panoramic views of the sky, this is a dream destination for stargazers and adventurers.",
    image: "https://images.unsplash.com/photo-1601836021783-c4658f8327b2",
    price: 1800,
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Urban Luxury Penthouse",
    description: "Overlooking the skyline, this high-rise penthouse features luxury amenities like an infinity pool, a private elevator, and smart-home systems. Ideal for business travelers or weekend getaways in style.",
    image: "https://images.unsplash.com/photo-1542314831-8b7f98c7d37e",
    price: 2000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Colonial Hill Estate",
    description: "Located in the misty hills of Ooty, this colonial-style estate boasts spacious rooms, antique decor, and vast gardens. A peaceful spot for those seeking a mix of heritage and serenity.",
    image: "https://images.unsplash.com/photo-1608889176334-8cdbde98a8e6",
    price: 1050,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Eco Bamboo House",
    description: "Handcrafted entirely from bamboo, this eco-friendly house blends traditional craftsmanship with modern comforts. Located in the lush forests of Ubud, this home offers spiritual retreats, yoga spaces, and organic meals.",
    image: "https://images.unsplash.com/photo-1591744631926-e10e17d87974",
    price: 1150,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Clifftop Ocean Villa",
    description: "Perched atop a cliff with uninterrupted views of the ocean, this villa is luxury redefined. Featuring an infinity pool, private chef, and open-plan living, it’s the perfect setting for honeymoons and celebrations.",
    image: "https://images.unsplash.com/photo-1596991169864-835cd5a0e8d2",
    price: 2200,
    location: "Santorini",
    country: "Greece"
  }
];

module.exports = { data: sampleListings };
