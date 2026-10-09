// Data source for Cicely's 80th Birthday Celebration Website

const partyInfo = {
  celebrantName: "Cicely",
  title: "Cicely's 80th Birthday Celebration",
  theme: "Dress to Impress in ALL BLACK",
  themeDescription: "We invite all friends and family to join us dressed to impress in your most stylish, elegant all-black attire to celebrate Cicely's milestone 80th birthday in pure luxury.",
  dateDisplay: "Saturday, October 10th, 2026",
  partyTime: "6:30 PM – 10:30 PM",
  targetDate: "2026-10-10T18:30:00",
  venue: {
    name: "The White Room",
    address: "2227 W Park Row Dr, Pantego, TX 76013",
    phone: "(817) 801-9992",
    website: "https://whiteroomtexas.com",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+White+Room+2227+W+Park+Row+Dr+Pantego+TX+76013",
    description: "An intimate and exquisite Tuscan-style reception ballroom featuring glowing chandeliers, warm candlelight, a spacious dance floor, and premier catering."
  },
  familyHub: {
    name: "Cicely's House (Family Gathering Hub)",
    address: "222 Quail Trail Lane, Arlington, TX 76002",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=222+Quail+Trail+Lane+Arlington+TX+76002",
    description: "The primary hospitality and welcome home base for out-of-town family and friends arriving in Arlington."
  },
  itinerary: [
    {
      day: "Friday Evening, Oct 9",
      time: "6:00 PM – 9:00 PM",
      title: "Family Welcome & Meet & Greet",
      location: "Cicely's House • 222 Quail Trail Lane",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      notes: "Casual gathering, welcome cocktails, Texas refreshments, and catching up as out-of-town guests arrive."
    },
    {
      day: "Saturday Evening, Oct 10 (Main Event)",
      time: "6:30 PM – 10:30 PM",
      title: "Cicely's 80th Birthday Celebration",
      location: "The White Room • 2227 W Park Row Dr, Pantego, TX",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      notes: "Dinner, dancing, champagne toasts, tribute speeches, and celebrating Cicely. Attire: Dress to Impress in ALL BLACK."
    },
    {
      day: "Sunday Afternoon, Oct 11",
      time: "4:00 PM",
      title: "Sunday Family Dinner",
      location: "Cicely's House • 222 Quail Trail Lane",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      notes: "Join us for a warm family dinner at Cicely's home to enjoy good food, share laughs and memories, and continue the weekend celebration."
    }
  ],
  gifts: {
    title: "Gift Ideas for Cicely",
    subtitle: "Celebrating 80 Wonderful Years",
    note: "Your presence and love are the greatest gifts! If you would like to honor Cicely with a token of celebration, here are her preferred gift options, electronic registries, and mailing address:",
    mailingAddress: {
      recipient: "Cicely Nedd-Thomas",
      street: "222 Quail Trail Lane",
      cityStateZip: "Arlington, TX 76002",
      fullAddress: "222 Quail Trail Lane, Arlington, TX 76002"
    },
    email: "cthomasesq@aol.com",
    zelle: {
      name: "Cicely Nedd-Thomas",
      registeredAs: "CICELY NEDD-THOMAS",
      phone: "(214) 215-8869",
      phoneRaw: "2142158869"
    },
    cashApp: {
      handle: "$CicelyNeddThomas",
      url: "https://cash.app/$CicelyNeddThomas"
    },
    giftCards: [
      {
        store: "Macy's",
        category: "Department Store & Fashion",
        icon: "star",
        color: "#e11a2b",
        url: "https://www.macys.com",
        description: "Cicely's favorite for classic fashion, beauty & home essentials"
      },
      {
        store: "Dillard's",
        category: "Department Store & Style",
        icon: "gem",
        color: "#c8a45d",
        url: "https://www.dillards.com",
        description: "The Style of Your Life — luxury clothing, accessories & shoes"
      },
      {
        store: "Amazon",
        category: "Online & Home",
        icon: "shopping-cart",
        color: "#ff9900",
        url: "https://www.amazon.com",
        description: "Everything from books and home essentials to everyday favorites"
      }
    ]
  }
};

const airportRoutes = [
  {
    airportCode: "DFW",
    airportName: "Dallas/Fort Worth International Airport",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1000&q=80",
    approxSummary: "Approximately 20–25 minutes away",
    airportSubtitle: "Primary international airport hub serving all major airlines",
    destinations: [
      {
        to: "Cicely's House",
        address: "222 Quail Trail Lane, Arlington, TX 76002",
        distance: "21.4 miles",
        estTime: "20 – 25 mins",
        primaryRoute: "via TX-360 S",
        mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Dallas/Fort+Worth+International+Airport&destination=222+Quail+Trail+Lane+Arlington+TX+76002",
        uberLink: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=222%20Quail%20Trail%20Lane%2C%20Arlington%2C%20TX%2076002",
        tip: "Fastest route is heading south straight down TX-360 South directly into South Arlington."
      },
      {
        to: "The White Room",
        address: "2227 W Park Row Dr, Pantego, TX 76013",
        distance: "18.2 miles",
        estTime: "20 – 25 mins",
        primaryRoute: "via TX-360 S & W Park Row Dr",
        mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Dallas/Fort+Worth+International+Airport&destination=2227+W+Park+Row+Dr+Pantego+TX+76013",
        uberLink: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=2227%20W%20Park%20Row%20Dr%2C%20Pantego%2C%20TX%2076013",
        tip: "Take TX-360 South to Spur 303 / W Pioneer Pkwy or Park Row Dr exit into Pantego."
      }
    ]
  },
  {
    airportCode: "DAL",
    airportName: "Dallas Love Field Airport",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    approxSummary: "Approximately 35–40 minutes away",
    airportSubtitle: "Southwest Airlines primary hub closer to downtown Dallas",
    destinations: [
      {
        to: "Cicely's House",
        address: "222 Quail Trail Lane, Arlington, TX 76002",
        distance: "28.5 miles",
        estTime: "35 – 40 mins",
        primaryRoute: "via I-30 W & TX-360 S",
        mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Dallas+Love+Field+Airport&destination=222+Quail+Trail+Lane+Arlington+TX+76002",
        uberLink: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=222%20Quail%20Trail%20Lane%2C%20Arlington%2C%20TX%2076002",
        tip: "Take Mockingbird Ln to I-35E S / I-30 W, then connect south onto TX-360."
      },
      {
        to: "The White Room",
        address: "2227 W Park Row Dr, Pantego, TX 76013",
        distance: "26.1 miles",
        estTime: "35 – 40 mins",
        primaryRoute: "via I-30 W & Fielder Rd",
        mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Dallas+Love+Field+Airport&destination=2227+W+Park+Row+Dr+Pantego+TX+76013",
        uberLink: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=2227%20W%20Park%20Row%20Dr%2C%20Pantego%2C%20TX%2076013",
        tip: "Take I-30 West through Dallas to Arlington, exit Fielder Rd and head south to Park Row Dr."
      }
    ]
  }
];

const lodgingList = [
  {
    id: 1,
    name: "Drury Plaza Hotel Dallas Arlington",
    address: "101 W. Road to Six Flags Street, Arlington, TX 76011",
    phone: "(817) 261-2100",
    avgRate: "$120–$170",
    specialRecognition: "Best Overall Value",
    overallPick: true,
    amenities: ["Free hot breakfast", "Free evening 5:30 Kickback snacks & drinks", "Outdoor pool & whirlpool", "Free parking"],
    highlight: "Top recommended overall pick for value with complimentary daily hot breakfast, evening drinks & snacks."
  },
  {
    id: 2,
    name: "Loews Arlington Hotel",
    address: "888 Nolan Ryan Expressway, Arlington, TX 76011",
    phone: "(682) 318-2810",
    avgRate: "$230–$350",
    specialRecognition: "Best Luxury",
    luxuryPick: true,
    amenities: ["Resort pool & cabanas", "Signature restaurants & lounges", "Full-service spa", "Valet parking & concierge"],
    highlight: "World-class flagship resort in the Arlington Entertainment District for a premier luxury stay."
  },
  {
    id: 3,
    name: "Hilton Garden Inn Dallas/Arlington South",
    address: "521 E Interstate 20, Arlington, TX 76018",
    phone: "(817) 557-8233",
    avgRate: "$100–$150",
    specialRecognition: "Best Convenience",
    amenities: ["On-site restaurant & bar", "Outdoor pool", "Free parking", "Near I-20 & shopping"],
    highlight: "Conveniently located in South Arlington near I-20 with full hotel amenities."
  },
  {
    id: 4,
    name: "La Quinta Inn & Suites Arlington South",
    address: "4001 Scots Legacy Dr, Arlington, TX 76015",
    phone: "(817) 557-5828",
    avgRate: "$80–$130",
    specialRecognition: "Best Budget",
    budgetPick: true,
    amenities: ["Free Bright Side breakfast", "Outdoor pool", "Free parking", "Pet friendly"],
    highlight: "Comfortable and affordable accommodations in South Arlington."
  },
  {
    id: 5,
    name: "Residence Inn Arlington South",
    address: "801 Highlander Blvd, Arlington, TX 76015",
    phone: "(682) 323-9500",
    avgRate: "$120–$180",
    specialRecognition: "Best Extended Stay",
    familyPick: true,
    amenities: ["Full in-room kitchens", "Free hot breakfast", "Outdoor pool & BBQ patio", "Pet friendly"],
    highlight: "Spacious suites featuring full kitchens and complimentary breakfast."
  },
  {
    id: 6,
    name: "Fairfield Inn & Suites Arlington South",
    address: "4251 S Collins St, Arlington, TX 76018",
    phone: "(817) 557-2555",
    avgRate: "$110–$160",
    specialRecognition: "Recommended",
    amenities: ["Free hot breakfast", "Outdoor pool", "Free parking", "Fitness center"],
    highlight: "Reliable Marriott hospitality with great South Arlington location."
  },
  {
    id: 7,
    name: "Courtyard Dallas Arlington South",
    address: "711 Highlander Blvd, Arlington, TX 76015",
    phone: "(817) 557-1467",
    avgRate: "$110–$170",
    specialRecognition: "Recommended",
    amenities: ["The Bistro on-site restaurant & Starbucks", "Outdoor pool", "Fitness center", "Courtyard fire pit"],
    highlight: "Modern and comfortable rooms with lively bistro and courtyard."
  },
  {
    id: 8,
    name: "Aloft Dallas Arlington South",
    address: "4432 S Collins St, Arlington, TX 76018",
    phone: "(817) 785-2001",
    avgRate: "$120–$180",
    specialRecognition: "Recommended",
    amenities: ["Modern chic hotel", "W XYZ lounge & bar", "Outdoor pool", "Pet friendly"],
    highlight: "Trendy, energetic design with great music and social spaces."
  },
  {
    id: 9,
    name: "Home2 Suites by Hilton Arlington West",
    address: "6840 Albrook Blvd, Arlington, TX 76016",
    phone: "(817) 441-5000",
    avgRate: "$110–$170",
    specialRecognition: "Recommended",
    amenities: ["In-suite kitchenettes", "Free breakfast", "Outdoor pool & fire pit", "Pet friendly"],
    highlight: "Suite-style rooms with kitchenettes on the West Arlington / Pantego corridor."
  },
  {
    id: 10,
    name: "SpringHill Suites Dallas Mansfield",
    address: "3126 E Broad St, Mansfield, TX 76063",
    phone: "(817) 435-2500",
    avgRate: "$110–$170",
    specialRecognition: "Recommended",
    amenities: ["Free hot breakfast", "Outdoor pool", "Free parking", "Spacious suites with trundle beds"],
    highlight: "Close to South Arlington and Mansfield dining, perfect for guests staying near Cicely's house."
  }
];

const restaurants = [
  // --- ARLINGTON: BREAKFAST ---
  {
    city: "Arlington",
    meal: "Breakfast",
    name: "Bay34th Street Diner",
    type: "Breakfast / American",
    estFor4: "$45–$70",
    address: "3330 Matlock Rd #100, Arlington, TX",
    phone: "817-375-5998",
    notes: "Classic hearty diner favorites, pancakes, omelets, and friendly breakfast service."
  },
  {
    city: "Arlington",
    meal: "Breakfast",
    name: "Breakfast Brothers",
    type: "Southern breakfast / brunch",
    estFor4: "$50–$75",
    address: "130 E Bardin Rd Ste 128, Arlington, TX",
    phone: "682-371-3376",
    notes: "Famous Southern-style breakfast, chicken & waffles, fried fish & grits, and soul food flavors."
  },
  {
    city: "Arlington",
    meal: "Breakfast",
    name: "Pioneer Restaurant",
    type: "Southern diner",
    estFor4: "$40–$65",
    address: "306 109th St, Arlington, TX",
    phone: "817-633-4433",
    notes: "Longstanding beloved Arlington staple for homestyle Southern breakfasts and biscuits."
  },
  {
    city: "Arlington",
    meal: "Breakfast",
    name: "Division Street Diner",
    type: "Classic American breakfast",
    estFor4: "$40–$65",
    address: "1800 W Division St, Arlington, TX",
    phone: "817-274-1606",
    notes: "Old-school nostalgic diner serving big breakfast platters and fresh coffee."
  },
  {
    city: "Arlington",
    meal: "Breakfast",
    name: "Huckleberry’s Breakfast & Lunch",
    type: "Louisiana / Bayou-inspired",
    estFor4: "$45–$70",
    address: "209 N Pecan St Ste 101, Arlington, TX",
    phone: "817-557-0098",
    notes: "Southern cooking with a California twist, beignets, stuffed French toast, and skillet scrambles."
  },

  // --- ARLINGTON: BRUNCH ---
  {
    city: "Arlington",
    meal: "Brunch",
    name: "The Social House",
    type: "American / brunch",
    estFor4: "$80–$130",
    address: "Champions Park, Arlington, TX",
    phone: "817-274-1232",
    notes: "Vibrant weekend brunch, mimosa carafes, avocado toast, chicken & waffles, and great patio."
  },
  {
    city: "Arlington",
    meal: "Brunch",
    name: "The Tipsy Oak",
    type: "American / brunch",
    estFor4: "$75–$120",
    address: "301 E Front St, Arlington, TX",
    phone: "817-962-0664",
    notes: "Charming Urban Union gastropub with a huge shaded patio, craft cocktails, and brunch plates."
  },
  {
    city: "Arlington",
    meal: "Brunch",
    name: "Cane Rosso",
    type: "Italian / pizza brunch",
    estFor4: "$70–$110",
    address: "200 N East St, Arlington, TX",
    phone: "817-533-3120",
    notes: "Neapolitan wood-fired pizzas, brunch pizzas with sunny eggs, breakfast calzones, and bloody marys."
  },

  // --- ARLINGTON: LUNCH ---
  {
    city: "Arlington",
    meal: "Lunch",
    name: "Cane Rosso",
    type: "Italian / pizza",
    estFor4: "$60–$100",
    address: "200 N East St, Arlington, TX",
    phone: "817-533-3120",
    notes: "Authentic wood-fired Neapolitan pizza, fresh salads, pastas, and burrata."
  },
  {
    city: "Arlington",
    meal: "Lunch",
    name: "J. Gilligan’s Bar & Grill",
    type: "Irish-American / pub",
    estFor4: "$55–$90",
    address: "400 E Abram St, Arlington, TX",
    phone: "817-274-8561",
    notes: "Legendary Arlington spot world-famous for its Irish Nachos, burgers, and classic pub hospitality."
  },
  {
    city: "Arlington",
    meal: "Lunch",
    name: "Babe’s Chicken Dinner House",
    type: "Southern / chicken",
    estFor4: "$60–$100",
    address: "230 N Center St, Arlington, TX",
    phone: "817-801-0850",
    notes: "Iconic Texas family-style fried chicken, chicken fried steak, buttermilk biscuits, and cream corn."
  },
  {
    city: "Arlington",
    meal: "Lunch",
    name: "Pappadeaux Seafood Kitchen",
    type: "Seafood / Cajun",
    estFor4: "$90–$150",
    address: "1304 E Copeland Rd, Arlington, TX",
    phone: "817-543-0544",
    notes: "Famous Louisiana-style seafood platters, fried shrimp, crawfish étouffée, and decadent desserts."
  },
  {
    city: "Arlington",
    meal: "Lunch",
    name: "Mariano’s Hacienda Ranch",
    type: "Tex-Mex",
    estFor4: "$65–$110",
    address: "2614 Majesty Dr, Arlington, TX",
    phone: "817-640-5118",
    notes: "Home of the original frozen margarita machine! Sizzling fajitas, mesquite-grilled steaks, and queso."
  },

  // --- ARLINGTON: DINNER ---
  {
    city: "Arlington",
    meal: "Dinner",
    name: "The Tipsy Oak",
    type: "American / upscale casual",
    estFor4: "$70–$120",
    address: "301 E Front St, Arlington, TX",
    phone: "817-962-0664",
    notes: "Upscale comfort food, craft beer wall, gourmet burgers, brisket poutine, and live weekend patio music."
  },
  {
    city: "Arlington",
    meal: "Dinner",
    name: "Cut & Bourbon",
    type: "Steakhouse / Luxury",
    estFor4: "$180–$300+",
    address: "1600 E Randol Mill Rd (inside Live! by Loews), Arlington, TX",
    phone: "682-277-4900",
    notes: "High-end contemporary steakhouse inside Live! by Loews featuring prime cuts and bourbon flights."
  },
  {
    city: "Arlington",
    meal: "Dinner",
    name: "VB Steakhouse",
    type: "Brazilian steakhouse",
    estFor4: "$150–$250+",
    address: "2009 E Copeland Rd, Arlington, TX",
    phone: "817-801-1441",
    notes: "All-you-can-eat authentic Churrascaria with rodizio grilled meats sliced tableside and gourmet salad bar."
  },
  {
    city: "Arlington",
    meal: "Dinner",
    name: "Saltgrass Steak House",
    type: "Steakhouse",
    estFor4: "$100–$160",
    address: "1024 I-20, Arlington, TX",
    phone: "817-465-9898",
    notes: "Texas-style steaks seasoned with 7-spice rub, bread baked fresh every 20 minutes, and ribs."
  },

  // --- ARLINGTON: HAPPY HOUR ---
  {
    city: "Arlington",
    meal: "Happy Hour",
    name: "Cane Rosso",
    type: "Mon–Fri, 3–6 PM; drinks & food specials",
    estFor4: "$40–$65",
    address: "200 N East St, Arlington, TX",
    phone: "817-533-3120",
    notes: "Discounted house pizzas, spritzes, local craft drafts, and appetizers."
  },
  {
    city: "Arlington",
    meal: "Happy Hour",
    name: "J. Gilligan’s Bar & Grill",
    type: "Daily, 11 AM–7 PM",
    estFor4: "$35–$60",
    address: "400 E Abram St, Arlington, TX",
    phone: "817-274-8561",
    notes: "Generous all-day drink specials, draft beers, and discounted appetizers in a lively pub setting."
  },
  {
    city: "Arlington",
    meal: "Happy Hour",
    name: "Texas Live!",
    type: "Multiple venues / weekday specials",
    estFor4: "$40–$70",
    address: "1650 E Randol Mill Rd, Arlington, TX",
    phone: "817-852-6688",
    notes: "Multi-level entertainment & dining complex with Troy's, Lockhart Smokehouse, and massive 100-ft LED screen."
  },

  // --- ARLINGTON: AFTER HOURS ---
  {
    city: "Arlington",
    meal: "Late Night / 24-Hr",
    name: "Tacos El 24",
    type: "Mexican / tacos — 24 hours",
    estFor4: "$35–$60",
    address: "1000 E Abram St, Arlington, TX",
    phone: "682-330-6040",
    notes: "Open 24/7 for authentic street tacos, quesadillas, horchata, and late-night Mexican cravings."
  },
  {
    city: "Arlington",
    meal: "Late Night / 24-Hr",
    name: "Taqueria Taxco",
    type: "Mexican / tacos — 24 hours",
    estFor4: "$35–$60",
    address: "4133 S Cooper St #307, Arlington, TX",
    phone: "682-248-3812",
    notes: "24-hour taqueria serving fresh trompo pastor tacos, breakfast tacos, and hot sauces."
  },
  {
    city: "Arlington",
    meal: "Late Night / 24-Hr",
    name: "Zio Al’s Pizza & Pasta (UTA)",
    type: "Pizza / Italian — until about 3 AM",
    estFor4: "$40–$70",
    address: "200 E Abram St #110, Arlington, TX",
    phone: "682-284-0877",
    notes: "Late night hot pizza slices, calzones, garlic knots, and wings right near UT Arlington."
  },

  // --- MANSFIELD: BREAKFAST & BRUNCH ---
  {
    city: "Mansfield",
    meal: "Breakfast",
    name: "Our Place Restaurant",
    type: "Homestyle Southern",
    estFor4: "$40–$65",
    address: "915 W Debbie Ln, Mansfield, TX",
    phone: "817-473-9996",
    notes: "Famous for fluffy giant pancakes, cinnamon rolls, Southern skillet breakfasts, and cozy charm."
  },
  {
    city: "Mansfield",
    meal: "Breakfast",
    name: "The Mill",
    type: "Southern-inspired",
    estFor4: "$50–$75",
    address: "3030 E Broad St Ste 100, Mansfield, TX",
    phone: "817-225-2236",
    notes: "Upscale rustic breakfast & coffee house with artisanal biscuits and farm fresh eggs."
  },
  {
    city: "Mansfield",
    meal: "Breakfast",
    name: "Eggsquisite Cafe",
    type: "Breakfast / brunch",
    estFor4: "$50–$75",
    address: "1530 E Debbie Ln, Mansfield, TX",
    phone: "817-592-3315",
    notes: "Gourmet omelets, eggs benedict variations, crepes, and specialty coffee drinks."
  },
  {
    city: "Mansfield",
    meal: "Breakfast",
    name: "First Watch (Mansfield)",
    type: "Breakfast / brunch",
    estFor4: "$50–$75",
    address: "1695 E Broad St Ste 111, Mansfield, TX",
    phone: "817-383-4036",
    notes: "Health-minded breakfast favorites, fresh pressed juices, avocado toast, and lemon ricotta pancakes."
  },
  {
    city: "Mansfield",
    meal: "Brunch",
    name: "360 Brunch House",
    type: "Brunch / full bar",
    estFor4: "$60–$95",
    address: "3550 E Broad St Ste 120, Mansfield, TX",
    phone: "682-422-3381",
    notes: "Modern brunch bar featuring flight mimosas, breakfast tacos, decadent waffles, and patio seating."
  },

  // --- MANSFIELD: LUNCH & DINNER ---
  {
    city: "Mansfield",
    meal: "Lunch",
    name: "Fish City Grill",
    type: "Seafood",
    estFor4: "$65–$100",
    address: "581 W Debbie Ln, Mansfield, TX",
    phone: "817-225-2094",
    notes: "Fresh seafood, famous oyster bar, clam chowder, fish tacos, and chalkboard daily specials."
  },
  {
    city: "Mansfield",
    meal: "Lunch",
    name: "54th Street Restaurant & Drafthouse",
    type: "American / bar & grill",
    estFor4: "$60–$95",
    address: "600 Hwy 287 N, Mansfield, TX",
    phone: "682-719-5410",
    notes: "From-scratch American cooking, 50+ craft beers on draft, gourmet burgers, and steaks."
  },
  {
    city: "Mansfield",
    meal: "Dinner",
    name: "Vault Seafood & Steakhouse",
    type: "Seafood / steak",
    estFor4: "$140–$230",
    address: "Mansfield Historic District, Mansfield, TX",
    phone: "817-453-2287",
    notes: "Upscale fine dining set in a historic bank building with prime steaks and fresh oysters."
  },
  {
    city: "Mansfield",
    meal: "Dinner",
    name: "Meehan’s Chophouse",
    type: "Steakhouse / Fine Dining",
    estFor4: "$180–$300+",
    address: "101 S Main St, Mansfield, TX",
    phone: "817-473-8880",
    notes: "Mansfield's premier luxury steakhouse serving prime dry-aged steaks, seafood, and extensive wine cellar."
  },

  // --- GRAND PRAIRIE: LUNCH & DINNER ---
  {
    city: "Grand Prairie",
    meal: "Breakfast",
    name: "Keke’s Breakfast Cafe",
    type: "Breakfast / brunch",
    estFor4: "$45–$70",
    address: "1020 Mayfield Rd Ste 630, Grand Prairie, TX",
    phone: "214-278-6980",
    notes: "Fresh-made Belgian waffles, stuffed French toast, poached egg creations, and coffee."
  },
  {
    city: "Grand Prairie",
    meal: "Lunch",
    name: "Zavala’s Barbecue",
    type: "Texas barbecue (Top 50 TX Monthly)",
    estFor4: "$55–$90",
    address: "421 W Main St, Grand Prairie, TX",
    phone: "817-330-9061",
    notes: "Nationally renowned Texas craft barbecue, legendary smoked brisket, brisket tacos, and ribs."
  },
  {
    city: "Grand Prairie",
    meal: "Lunch",
    name: "FireHouse Gastro Park",
    type: "Food hall / American & coffee",
    estFor4: "$55–$90",
    address: "321 W Main St, Grand Prairie, TX",
    phone: "469-909-4111",
    notes: "Restored historic fire station with artisanal coffee, hot chicken, smash burgers, and secret garden."
  },
  {
    city: "Grand Prairie",
    meal: "Dinner",
    name: "The Finch",
    type: "Upscale American / brunch & dinner",
    estFor4: "$80–$140",
    address: "EpicCentral, 2955 S State Hwy 161, Grand Prairie, TX",
    phone: "469-899-4464",
    notes: "Chic modern American eatery at EpicCentral with raw bar, eggs benedict, and mimosa carafes."
  },
  {
    city: "Grand Prairie",
    meal: "Dinner",
    name: "Vidorra",
    type: "Mexican / Latin Upscale",
    estFor4: "$80–$130",
    address: "EpicCentral, 2959 S State Hwy 161, Grand Prairie, TX",
    phone: "972-358-6920",
    notes: "Vibrant Mexican dining overlooking the EpicCentral illuminated water fountain shows."
  },
  {
    city: "Grand Prairie",
    meal: "Late Night / 24-Hr",
    name: "Tacos El 24 (Grand Prairie)",
    type: "Mexican / tacos — 24 hours",
    estFor4: "$35–$60",
    address: "3824 S Carrier Pkwy Ste 400, Grand Prairie, TX",
    phone: "214-412-2816",
    notes: "Open 24 hours for authentic street tacos, quesadillas, and Mexican sodas."
  }
];

const entertainmentList = [
  {
    category: "Theme & Water Parks",
    name: "Six Flags Over Texas",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80",
    phone: "817-640-8900",
    address: "2201 Road to Six Flags, Arlington, TX 76011",
    website: "https://www.sixflags.com/overtexas",
    notes: "The iconic original Six Flags park with world-class roller coasters, family rides, Looney Tunes kid area, and entertainment."
  },
  {
    category: "Sports Stadiums & Tours",
    name: "AT&T Stadium / Dallas Cowboys",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80",
    phone: "817-892-4626",
    address: "One AT&T Way, Arlington, TX 76011",
    website: "https://attstadium.com/tours/",
    notes: "One of the most impressive stadiums in the world! Self-guided and VIP guided tours allow fans to step onto the 50-yard line and locker rooms."
  },
  {
    category: "Sports Stadiums & Tours",
    name: "Globe Life Field / Texas Rangers",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    phone: "817-533-1833",
    address: "734 Stadium Dr, Arlington, TX 76011",
    website: "https://www.mlb.com/rangers/ballpark/tours",
    notes: "Home of the Texas Rangers with a retractable roof. Behind-the-scenes stadium tours include dugout, batting cages, and luxury suites."
  },
  {
    category: "Museums & Culture",
    name: "National Medal of Honor Museum",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80",
    phone: "817-274-1861",
    address: "1861 AT&T Way, Arlington, TX 76011",
    website: "https://mohmuseum.org/",
    notes: "Brand new national museum honoring recipients of the United States' highest military decoration with inspiring interactive exhibits."
  },
  {
    category: "Nature & Parks",
    name: "River Legacy Living Science Center & Parks",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    phone: "817-860-6752",
    address: "703 NW Green Oaks Blvd, Arlington, TX 76006",
    website: "https://riverlegacy.org/",
    notes: "1,300-acre hardwood forest park along the Trinity River featuring interactive wildlife exhibits, discovery rooms, and miles of paved trails."
  },
  {
    category: "Science & Space",
    name: "UTA Planetarium & Observatory",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    phone: "817-272-2011",
    address: "701 S Nedderman Dr, Arlington, TX 76019",
    website: "https://www.uta.edu/planetarium/",
    notes: "60-foot domed theater providing breathtaking journeys through the cosmos, stars, and black holes with weekly family public shows."
  },
  {
    category: "Indoor Fun & Arcades",
    name: "Alley Cats Entertainment",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80",
    phone: "817-784-2695",
    address: "2008 W Pleasant Ridge Rd, Arlington, TX 76015",
    website: "https://alleycatsarcade.com/",
    notes: "Huge family fun center with 24 bowling lanes, two-story laser tag arena, mini golf course, batting cages, and massive arcade."
  },
  {
    category: "Indoor Fun & Arcades",
    name: "Round1 Bowling & Arcade (The Parks Mall)",
    ages: "All Ages",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=800&q=80",
    phone: "817-855-4941",
    address: "3811 S Cooper St Ste 6004, Arlington, TX 76015",
    website: "https://www.round1usa.com/",
    notes: "Japanese arcade imports, UFO claw catchers, karaoke party rooms, bowling lanes, and billiards located inside The Parks Mall."
  },
  {
    category: "Indoor Fun & Arcades",
    name: "Cidercade Arlington",
    ages: "All Ages during daytime",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    phone: "682-206-3918",
    address: "500 E Division St, Arlington, TX 76011",
    website: "https://www.cidercade.com/arlington/",
    notes: "Over 275+ unlimited retro and modern arcade games, pinball machines, driving sims, and pizza for a single low admission entry."
  }
];

const familyDayPlans = [
  {
    title: "Scenic & Nature Exploration",
    bestFor: "Relaxed daytime strolls & nature lovers",
    icon: "compass",
    stops: ["River Legacy Living Science Center", "River Legacy Park Nature Walk", "Picnic & Playground", "Afternoon Coffee & Treats in Downtown Arlington"]
  },
  {
    title: "Big Adventure & Thrills",
    bestFor: "Thrill-seekers & amusement park fans",
    icon: "flame",
    stops: ["Six Flags Over Texas morning rides", "Lunch in the Entertainment District", "Go Ape Zipline Course", "Evening Dinner at Texas Live!"]
  },
  {
    title: "Sports Fan Ultimate Tour",
    bestFor: "Cowboys, Rangers & sports enthusiasts",
    icon: "trophy",
    stops: ["AT&T Stadium VIP Tour", "Globe Life Field Texas Rangers Tour", "National Medal of Honor Museum", "Dinner at Cut & Bourbon"]
  }
];

const shoppingCenters = [
  {
    city: "Arlington",
    name: "The Parks Mall at Arlington",
    type: "Enclosed Regional Mall",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/The_Parks_Mall_at_Arlington_December_2020.jpg/1200px-The_Parks_Mall_at_Arlington_December_2020.jpg",
    address: "3811 S Cooper St, Arlington, TX 76015",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Parks+Mall+at+Arlington+TX",
    website: "https://www.theparksmallatarlington.com/",
    storesCount: "170+ Stores",
    anchorStores: "Nordstrom Rack, Macy's, Dillard's, JCPenney, Dick's Sporting Goods, AMC Theatres, Ice Rink, Round1",
    description: "Premier South Arlington shopping destination with two levels of top fashion brands, an indoor ice skating rink, and food court."
  },
  {
    city: "Arlington",
    name: "Arlington Highlands",
    type: "Open-Air Lifestyle & Shopping Center",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    address: "I-20 & Matlock Rd, Arlington, TX 76018",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Arlington+Highlands+TX",
    website: "https://www.arlingtonhighlands.com/",
    storesCount: "80+ Stores & Restaurants",
    anchorStores: "Chico's, Sephora, Bath & Body Works, Ulta, Studio Movie Grill, World Market, P.F. Chang's",
    description: "Expansive outdoor shopping village located off I-20 near Matlock Rd, filled with fashion boutiques and dining."
  },
  {
    city: "Grand Prairie",
    name: "Grand Prairie Premium Outlets",
    type: "Designer Outlet Center",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    address: "2950 W Interstate 20, Grand Prairie, TX 75052",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Prairie+Premium+Outlets+TX",
    website: "https://www.premiumoutlets.com/outlet/grand-prairie",
    storesCount: "100+ Designer Brands",
    anchorStores: "Coach, Michael Kors, Nike Factory Store, Polo Ralph Lauren, Kate Spade, Tory Burch, Tommy Hilfiger",
    description: "The top outlet destination in DFW with huge savings of 25% to 65% every day on designer labels."
  },
  {
    city: "Grand Prairie",
    name: "EpicCentral & IKEA District",
    type: "Entertainment, Retail & Dining District",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    address: "State Hwy 161 & Mayfield Rd, Grand Prairie, TX 75052",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=EpicCentral+Grand+Prairie+TX",
    website: "https://epiccentral.com/",
    storesCount: "Major Retail + Mega Stores",
    anchorStores: "IKEA Mega Store, Living Spaces, Main Event, Epic Waters, lakeside restaurants",
    description: "Fast-growing lifestyle destination centered around illumination lakes, entertainment, and shopping."
  },
  {
    city: "Mansfield",
    name: "Mansfield Town Center & Historic Downtown",
    type: "Shopping District & Boutiques",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    address: "Hwy 287 & E Broad St, Mansfield, TX 76063",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mansfield+Town+Center+Mansfield+TX",
    website: "https://www.visitmansfieldtexas.com/",
    storesCount: "60+ Stores & Boutiques",
    anchorStores: "Target, Best Buy, HomeGoods, Kohl's, TJ Maxx, local artisan boutiques on Historic Main St",
    description: "Convenient shopping along Broad St with major favorites and quaint mom-and-pop boutiques."
  },
  {
    city: "Dallas",
    name: "NorthPark Center (Dallas)",
    type: "World-Class Luxury & Fashion Mall",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    address: "8687 N Central Expy, Dallas, TX 75225",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=NorthPark+Center+Dallas+TX",
    website: "https://www.northparkcenter.com/",
    storesCount: "200+ Luxury & Premier Retailers",
    anchorStores: "Neiman Marcus, Nordstrom, Macy's, Dillard's, Gucci, Louis Vuitton, Apple, Tiffany & Co.",
    description: "Ranked among the top luxury shopping destinations in the nation with museum sculptures and luxury brands."
  },
  {
    city: "Fort Worth",
    name: "The Shops at Clearfork",
    type: "Open-Air Luxury Shopping & Dining",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80",
    address: "5188 Monahans Ave, Fort Worth, TX 76109",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Shops+at+Clearfork+Fort+Worth+TX",
    website: "https://www.simon.com/mall/the-shops-at-clearfork",
    storesCount: "60+ Luxury Stores & Eateries",
    anchorStores: "Neiman Marcus, Tiffany & Co., Burberry, Kendra Scott, AMC Dine-In, Cru Wine Bar",
    description: "Fort Worth's premier luxury open-air destination featuring high-end retail and upscale dining."
  },
  {
    city: "Fort Worth",
    name: "Fort Worth Stockyards Historic District (Mule Alley)",
    type: "Historic Western & Artisan Shopping",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fort_Worth_Stockyards_sign_and_entrance.jpg/1200px-Fort_Worth_Stockyards_sign_and_entrance.jpg",
    address: "131 E Exchange Ave, Fort Worth, TX 76164",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fort+Worth+Stockyards+Mule+Alley+TX",
    website: "https://www.fortworthstockyards.com/",
    storesCount: "40+ Western Outfitters & Boutiques",
    anchorStores: "Lucchese Bootmaker, King Ranch Saddle Shop, Proper Supply Co., Flea Style, Wrangler",
    description: "Legendary historic district where out-of-town guests can shop authentic Texas boots, hats, and leather."
  }
];

// Export to global window object
window.siteData = {
  partyInfo,
  airportRoutes,
  lodgingList,
  restaurants,
  entertainmentList,
  familyDayPlans,
  shoppingCenters
};
