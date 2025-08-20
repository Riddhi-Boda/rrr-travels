// /data/packages.js

export const packageData = [
  {
    destination: "Europe",
    type: "tour",
    packages: [
      {
        id: "eu-tour-1",
        title: "Best Of Switzerland & Italy | Roman Streets To Snowy Alps",
        image: `${import.meta.env.BASE_URL}images/europe-1.jpg`,
        duration: "9 days & 8 nights",
        rating: 4.9,
        reviews: 523,
        price: "INR 1,43,200",
        oldPrice: "INR 2,65,185",
        savings: "Save INR 1,21,985",
        itinerary: ["2D Rome", "1D Florence", "2D Venice", "4D Zurich"]
      },
      {
        id: "eu-tour-2",
        title: "Scandinavian Snow Escape | Northern Lights & Winter Lights",
        image: "/images/europe-2.jpg",
        duration: "9 days & 8 nights",
        rating: 4.8,
        reviews: 240,
        price: "INR 2,91,000",
        oldPrice: "INR 3,87,030",
        savings: "Save INR 96,030",
        itinerary: ["2D Copenhagen", "1D Geilo", "1D Oslo", "3D Stockholm"]
      },
      {
        id: "eu-tour-3",
        title: "Europe Golden Trio | Switzerland, Amsterdam & Paris Tour",
        image: "/images/europe-3.jpg",
        duration: "8 days & 7 nights",
        rating: 4.5,
        reviews: 32,
        price: "INR 1,73,000",
        oldPrice: "INR 2,24,900",
        savings: "Save INR 51,900",
        itinerary: ["2D Amsterdam", "2D Paris", "3D Lucerne", "1D Zurich"]
      },
    ],
  },
  {
    destination: "Europe",
    type: "activity",
    packages: [
      {
        id: "eu-act-1",
        title: "Snowmobiling Adventure in Swiss Alps",
        image: "/images/europe-act-1.jpg",
        duration: "1 day",
        rating: 4.6,
        reviews: 89,
        price: "INR 12,000",
        oldPrice: "INR 14,000",
        savings: "Save INR 2,000",
        itinerary: ["Lucerne Region"]
      }
    ]
  },
  {
    destination: "Maldives",
    type: "tour",
    packages: [
      {
        id: "mv-tour-1",
        title: "Romantic Escape at Sun Siyam Olhuveli",
        image: "/images/maldives1.jpg",
        duration: "5 days & 4 nights",
        rating: 4.8,
        reviews: 432,
        price: "INR 78,500",
        oldPrice: "INR 1,10,000",
        savings: "Save INR 31,500",
        itinerary: ["1D Male", "3D Resort", "1D Leisure"]
      },
      {
        id: "mv-tour-2",
        title: "Maldives Honeymoon Tour with Water Villa",
        image: "/images/maldives2.jpg",
        duration: "4 days & 3 nights",
        rating: 4.9,
        reviews: 385,
        price: "INR 65,000",
        oldPrice: "INR 89,000",
        savings: "Save INR 24,000",
        itinerary: ["2D Resort", "1D Water Villa"]
      },
      {
        id: "mv-tour-3",
        title: "Luxury Beach Villa Maldives Getaway",
        image: "/images/maldives3.jpg",
        duration: "6 days & 5 nights",
        rating: 4.7,
        reviews: 298,
        price: "INR 96,000",
        oldPrice: "INR 1,20,000",
        savings: "Save INR 24,000",
        itinerary: ["3D Beach Villa", "2D Water Villa"]
      },
    ]
  },
  {
    destination: "Maldives",
    type: "activity",
    packages: [
      {
        id: "mv-act-1",
        title: "Snorkeling Safari Adventure",
        image: "/images/maldives-act-1.jpg",
        duration: "1 day",
        rating: 4.6,
        reviews: 75,
        price: "INR 5,000",
        oldPrice: "INR 6,500",
        savings: "Save INR 1,500",
        itinerary: ["Coral Reefs"]
      }
    ]
  },
  {
    destination: "Ladakh",
    type: "tour",
    packages: [
      {
        id: "ld-tour-1",
        title: "Scenic Ladakh Road Trip",
        image: "/images/ladakh1.jpg",
        duration: "7 days & 6 nights",
        rating: 4.9,
        reviews: 220,
        price: "INR 32,000",
        oldPrice: "INR 42,000",
        savings: "Save INR 10,000",
        itinerary: ["2D Leh", "2D Nubra", "2D Pangong"]
      },
      {
        id: "ld-tour-2",
        title: "Ladakh Bike Expedition",
        image: "/images/ladakh2.jpg",
        duration: "9 days & 8 nights",
        rating: 4.8,
        reviews: 198,
        price: "INR 48,000",
        oldPrice: "INR 58,000",
        savings: "Save INR 10,000",
        itinerary: ["Leh", "Khardung La", "Pangong"]
      },
      {
        id: "ld-tour-3",
        title: "Leh to Tso Moriri Adventure Tour",
        image: "/images/ladakh3.jpg",
        duration: "6 days & 5 nights",
        rating: 4.7,
        reviews: 156,
        price: "INR 38,000",
        oldPrice: "INR 45,000",
        savings: "Save INR 7,000",
        itinerary: ["Leh", "Tso Moriri", "Tso Kar"]
      }
    ]
  },
  {
    destination: "Ladakh",
    type: "activity",
    packages: [
      {
        id: "ld-act-1",
        title: "ATV Ride in Nubra Valley",
        image: "/images/ladakh-act-1.jpg",
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        price: "INR 2,000",
        oldPrice: "INR 2,500",
        savings: "Save INR 500",
        itinerary: ["Nubra Sand Dunes"]
      }
    ]
  },
  {
    destination: "Singapore",
    type: "tour",
    packages: [
      {
        id: "sg-tour-1",
        title: "Explore Singapore | Gardens by the Bay to Sentosa Island",
        image: "/images/singapore-1.jpg",
        duration: "5 days & 4 nights",
        rating: 4.8,
        reviews: 132,
        price: "INR 58,999",
        oldPrice: "INR 78,999",
        savings: "Save INR 20,000",
        itinerary: ["1D Sentosa", "1D Universal Studios", "2D Marina Bay", "1D Gardens by the Bay"]
      },
      {
        id: "sg-tour-2",
        title: "Family Special | Singapore with Night Safari & Sentosa",
        image: "/images/singapore-2.jpg",
        duration: "6 days & 5 nights",
        rating: 4.7,
        reviews: 110,
        price: "INR 64,000",
        oldPrice: "INR 84,000",
        savings: "Save INR 20,000",
        itinerary: ["1D Jurong Bird Park", "2D Sentosa", "2D Singapore Zoo", "1D Night Safari"]
      },
      {
        id: "sg-tour-3",
        title: "Romantic Singapore | Cruise & Marina Bay Sands",
        image: "/images/singapore-3.jpg",
        duration: "5 days & 4 nights",
        rating: 4.9,
        reviews: 97,
        price: "INR 76,500",
        oldPrice: "INR 91,000",
        savings: "Save INR 14,500",
        itinerary: ["2D Marina Bay", "1D Cruise", "1D Gardens by the Bay", "1D Chinatown"]
      }
    ]
  },
  {
    destination: "Singapore",
    type: "activity",
    packages: [
      {
        id: "sg-act-1",
        title: "Singapore Night Safari Experience",
        image: "/images/singapore-act-1.jpg",
        duration: "1 day",
        rating: 4.6,
        reviews: 210,
        price: "INR 3,200",
        oldPrice: "INR 4,000",
        savings: "Save INR 800",
        itinerary: ["Singapore Zoo"]
      }
    ]
  },

  // USA Tours
  {
    destination: "USA",
    type: "tour",
    packages: [
      {
        id: "us-tour-1",
        title: "Classic USA Tour | New York to San Francisco",
        image: "/images/usa-1.jpg",
        duration: "10 days & 9 nights",
        rating: 4.7,
        reviews: 320,
        price: "INR 2,15,000",
        oldPrice: "INR 2,65,000",
        savings: "Save INR 50,000",
        itinerary: ["2D New York", "2D Washington", "3D Las Vegas", "3D San Francisco"]
      },
      {
        id: "us-tour-2",
        title: "East Coast USA | New York, Niagara & Washington",
        image: "/images/usa-2.jpg",
        duration: "7 days & 6 nights",
        rating: 4.5,
        reviews: 190,
        price: "INR 1,58,000",
        oldPrice: "INR 1,99,000",
        savings: "Save INR 41,000",
        itinerary: ["2D New York", "2D Washington", "1D Philadelphia", "2D Niagara"]
      },
      {
        id: "us-tour-3",
        title: "West Coast Adventure | Los Angeles & Las Vegas",
        image: "/images/usa-3.jpg",
        duration: "6 days & 5 nights",
        rating: 4.6,
        reviews: 174,
        price: "INR 1,45,000",
        oldPrice: "INR 1,75,000",
        savings: "Save INR 30,000",
        itinerary: ["2D Los Angeles", "2D Las Vegas", "2D Grand Canyon"]
      }
    ]
  },
  {
    destination: "USA",
    type: "activity",
    packages: [
      {
        id: "us-act-1",
        title: "Statue of Liberty & Ellis Island Cruise",
        image: "/images/usa-act-1.jpg",
        duration: "1 day",
        rating: 4.9,
        reviews: 300,
        price: "INR 4,500",
        oldPrice: "INR 5,500",
        savings: "Save INR 1,000",
        itinerary: ["New York"]
      }
    ]
  }
];
  // NOTE: Continue in same format for:
  // Singapore, USA, Thailand, Bali, North East, Dubai

  // If you'd like, I’ll continue the rest of the destinations now – just let me know!
