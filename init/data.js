const allProducts = [
  {
    name: "Samsung Galaxy S21",
    description:
      "Samsung's flagship smartphone with advanced camera features and powerful performance.",
    price: 999,
    category: "electronics",
    type: "mobile",
    brand: "samsung",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70&crop=false",
    features: ["Advanced camera", "Powerful performance"],
    offer_discount: "10% off",
  },
  {
    name: "Apple iPhone 13",
    description:
      "Latest iPhone model featuring A15 Bionic chip, dual-camera system, and Super Retina XDR display.",
    price: 1099,
    category: "electronics",
    type: "mobile",
    brand: "apple",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70&crop=false",
    features: [
      "A15 Bionic chip",
      "Dual-camera system",
      "Super Retina XDR display",
    ],
    offer_discount: "15% off",
  },
  {
    name: "Sony WH-1000XM4 Wireless Headphones",
    description:
      "Premium wireless headphones with industry-leading noise cancellation technology.",
    price: 349,
    category: "electronics",
    type: "headphone",
    brand: "sony",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/l1dwknk0/headphone/8/m/r/wh-1000xm4-sony-original-imagcywfzfwjmvbr.jpeg?q=70&crop=false",
    features: ["Industry-leading noise cancellation technology"],
    offer_discount: "5% off",
  },
  {
    name: "Adidas Ultraboost Running Shoes",
    description:
      "High-performance running shoes with Boost cushioning and Primeknit upper.",
    price: 180,
    category: "footwear",
    type: "shoe",
    brand: "adidas",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/g/h/11-if5258-11-adidas-silgrn-silgrn-goldmt-original-imagvjj4mxt8ydmz.jpeg?q=70&crop=false",
    features: ["Boost cushioning", "Primeknit upper"],
    offer_discount: "20% off",
  },
  {
    name: "Nike Air Max 270 Sneakers",
    description:
      "Iconic sneakers with Max Air cushioning for all-day comfort and style.",
    price: 150,
    category: "footwear",
    type: "shoe",
    brand: "nike",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/n/p/-original-imagx8gvjqshtysm.jpeg?q=70&crop=true",
    features: ["Max Air cushioning"],
    offer_discount: "10% off",
  },
  {
    name: "Levi's 501 Original Fit Jeans",
    description:
      "Classic straight-leg jeans crafted from durable denim with a button fly.",
    price: 59,
    category: "clothing",
    type: "jeans",
    brand: "levis",
    imageUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/o/2/w/-original-imaggmuce2harhxh.jpeg?q=70",
    features: ["Classic straight-leg fit", "Durable denim"],
    offer_discount: "5% off",
  },
  {
    name: "Under Armour HeatGear Compression Shirt",
    description:
      "Moisture-wicking compression shirt for superior comfort during workouts.",
    price: 30,
    category: "clothing",
    type: "shirt",
    brand: "underarmour",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/l4x2rgw0/shirt/6/7/u/44-otsh-94525-1001-f-sf-turtle-original-imagfph9p5y3zq4w.jpeg?q=70&crop=false",
    features: ["Moisture-wicking fabric"],
    offer_discount: "15% off",
  },
  {
    name: "Apple Watch Series 7",
    description:
      "Advanced smartwatch with larger Retina display, new health features, and faster charging.",
    price: 399,
    category: "smartwatches",
    type: "watch",
    brand: "apple",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/ku8pbbk0/smartwatch/w/3/e/ios-mkl33hn-a-apple-yes-original-imag7erwrmg9mpzz.jpeg?q=70&crop=falsehttps://example.com/product_images/apple_watch_series_7.jpg",
    features: [
      "Larger Retina display",
      "New health features",
      "Faster charging",
    ],
    offer_discount: "10% off",
  },
  {
    name: "Fitbit Charge 5 Fitness Tracker",
    description:
      "Advanced fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking features.",
    price: 179,
    category: "smartwatches",
    type: "watch",
    brand: "fitbit",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/smart-band-tag/j/m/v/charge-2-small-fitbit-original-imaepyzpgbvfnwhu.jpeg?q=70&crop=false",
    features: ["Built-in GPS", "Heart rate monitoring", "Sleep tracking"],
    offer_discount: "5% off",
  },
  {
    name: "Yonex Nanoray 10 Badminton Racket",
    description:
      "Lightweight and durable badminton racket for intermediate players.",
    price: 60,
    category: "sports & fitness",
    type: "sports",
    brand: "yonex",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/racquet/a/t/p/g4-8-25-cm-strung-nanoray-boys-girls-men-women-1-nanoray-95-original-imagxw3hejzmrj2z.jpeg?q=70&crop=false",
    features: ["Lightweight and durable"],
    offer_discount: "20% off",
  },
  {
    name: "Gaiam Essentials Yoga Mat",
    description:
      "Extra-thick yoga mat with non-slip surface for comfortable and stable yoga practice.",
    price: 25,
    category: "sports & fitness",
    type: "fitness",
    brand: "gaiam",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kw3v0cw0/sport-mat/e/3/x/yoga-mat-4mm-size-sd-009-4-80-s-d-sports-160-original-imag8up8jskzeawg.jpeg?q=70&crop=false",
    features: ["Extra-thick", "Non-slip surface"],
    offer_discount: "10% off",
  },
  {
    name: "Oral-B Pro 1000 Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with CrossAction brush head for superior plaque removal.",
    price: 40,
    category: "personal care",
    type: "toothbrush",
    brand: "oralb",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/electric-toothbrush/e/q/j/-original-imagny55zqa2kxhz.jpeg?q=70&crop=false",
    features: ["Rechargeable", "CrossAction brush head"],
    offer_discount: "5% off",
  },
  {
    name: "Panasonic Arc5 Electric Shaver",
    description:
      "Premium electric shaver with 5-blade shaving system and advanced shaving sensors.",
    price: 199,
    category: "personal care",
    type: "shaver",
    brand: "panasonic",
    imageUrl: "https://example.com/product_images/panasonic_arc5_shaver.jpg",
    features: ["5-blade shaving system", "Advanced shaving sensors"],
    offer_discount: "15% off",
  },
  {
    name: 'Samsung 55" QLED 4K Smart TV',
    description:
      "Immersive QLED TV with Quantum Dot technology and smart features.",
    price: 1499,
    category: "electronics",
    type: "tv",
    brand: "samsung",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/f/2/b/qa55qn95baklxl-samsung-original-imagg9pacg6e7utx.jpeg?q=70&crop=false",
    features: ["QLED display", "Quantum Dot technology", "Smart features"],
    offer_discount: "10% off",
  },
  {
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    description:
      "Multi-functional electric pressure cooker with 14 smart programs for easy cooking.",
    price: 89,
    category: "home & kitchen",
    type: "cooker",
    brand: "nd",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/jwpa8i80/electric-cooker/b/a/m/luddite-rice-cooker-portable-low-power-multi-function-mini-original-imafhbtbanthemsx.jpeg?q=70&crop=false",
    features: ["7-in-1 multi-functionality", "14 smart programs"],
    offer_discount: "5% off",
  },
  {
    name: "Amazon Echo Dot (4th Gen)",
    description:
      "Smart speaker with Alexa voice control, compact design, and improved sound quality.",
    price: 49,
    category: "electronics",
    type: "speaker",
    brand: "amazon",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile-skin/q/i/0/aug22-1993-yes-mudshi-original-imagh6k5taeeszux.jpeg?q=70&crop=false",
    features: [
      "Alexa voice control",
      "Compact design",
      "Improved sound quality",
    ],
    offer_discount: "5% off",
  },
  {
    name: "Fitbit Charge 5 Fitness Tracker",
    description:
      "Advanced fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking features.",
    price: 179,
    category: "smartwatches",
    type: "watch",
    brand: "fitbit",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kf1fo280/smart-band-tag/k/j/d/no-yes-fb417byby-android-ios-fitbit-yes-original-imafvhyfzkvnzgtu.jpeg?q=70&crop=false",
    features: ["Built-in GPS", "Heart rate monitoring", "Sleep tracking"],
    offer_discount: "5% off",
  },
  {
    name: "Anker PowerCore 10000 Portable Charger",
    description:
      "Compact and high-speed portable charger with 10000mAh capacity.",
    price: 2999,
    category: "electronics",
    type: "charger",
    brand: "anker",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/kx9as280/laptop-adapter/v/i/u/65w-ac-charger-adapter-4-5mm-for-pavilion-black-with-power-cable-original-imag9ry2bzvydgc2.jpeg?q=70&crop=false",
    features: ["10000mAh capacity", "Compact design", "High-speed charging"],
    offer_discount: "10% off",
  },
  {
    name: "Nike Air Zoom Pegasus 38 Running Shoes",
    description:
      "Versatile running shoes with responsive cushioning and breathable mesh upper.",
    price: 120,
    category: "footwear",
    type: "shoe",
    brand: "nike",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/h/2/p/-original-imagr7vg6rz2kkhx.jpeg?q=70&crop=false",
    features: ["Responsive cushioning", "Breathable mesh upper"],
    offer_discount: "15% off",
  },
  {
    name: "Adidas Originals Trefoil Hoodie",
    description:
      "Classic hoodie with embroidered Trefoil logo for a sporty streetwear look.",
    price: 65,
    category: "clothing",
    type: "hoodie",
    brand: "adidas",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/z/s/7/m-ib8689-adidas-originals-original-imaguy4ny6xwhpkb.jpeg?q=70&crop=false",
    features: ["Embroidered Trefoil logo"],
    offer_discount: "5% off",
  },
  {
    name: "Garmin Forerunner 945 GPS Running Watch",
    description:
      "Advanced GPS running watch with performance monitoring and training features.",
    price: 599,
    category: "smartwatches",
    type: "watch",
    brand: "garmin",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/1/v/t/-original-imagzbgg7gjbh4sb.jpeg?q=70&crop=false",
    features: ["GPS", "Performance monitoring", "Training features"],
    offer_discount: "10% off",
  },
  {
    name: "Under Armour Men's Tech 2.0 Short Sleeve T-Shirt",
    description: "Quick-drying and ultra-soft workout shirt for men.",
    price: 25,
    category: "clothing",
    type: "t-shirt",
    brand: "underarmour",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/i/a/-original-imagm6zgcbfngygq.jpeg?q=70&crop=false",
    features: ["Quick-drying", "Ultra-soft fabric"],
    offer_discount: "5% off",
  },
  {
    name: "Bose SoundSport Wireless Earbuds",
    description:
      "Wireless earbuds with StayHear tips for comfort and stability during workouts.",
    price: 129,
    category: "electronics",
    type: "earphone",
    brand: "bose",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/n/m/neckband-hi-bass-wireless-bluetooth-headphone-with-mic-earphone-original-imagy225ze3fvhsr.jpeg?q=70&crop=false",
    features: ["StayHear tips", "Wireless design"],
    offer_discount: "5% off",
  },
  {
    name: "Wilson NFL Super Grip Football",
    description:
      "Official NFL football with high-quality composite leather for improved grip and durability.",
    price: 20,
    category: "sports& fitness",
    type: "football",
    brand: "wilson",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/sport-glove/s/q/t/na-l-mh001-soccer-gloves-with-excellent-grip-control-latex-original-imagtfg4xjstg9he.jpeg?q=70&crop=false",
    features: ["High-quality composite leather", "Improved grip"],
    offer_discount: "10% off",
  },
  {
    name: "Philips Sonicare ProtectiveClean 6100 Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with pressure sensor and multiple cleaning modes.",
    price: 119,
    category: "personal Care",
    type: "toothbrush",
    brand: "philips",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/electric-toothbrush/c/g/l/hx3214-11-pack-of-2-sonicare-cleancare-philips-original-imagneffqhxjcrky.jpeg?q=70&crop=false",
    features: ["Rechargeable", "Pressure sensor", "Multiple cleaning modes"],
    offer_discount: "15% off",
  },
  {
    name: "Fitbit Versa 3 Smartwatch",
    description:
      "Health and fitness smartwatch with built-in GPS, heart rate monitoring, and sleep tracking features.",
    price: 229,
    category: "smartwatches",
    type: "watch",
    brand: "fitbit",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/ko0d6kw0/smartwatch/r/m/a/1-59-fb511glpk-android-ios-fitbit-original-imag2kfgsfyq6ec6.jpeg?q=70&crop=false",
    features: ["Built-in GPS", "Heart rate monitoring", "Sleep tracking"],
    offer_discount: "10% off",
  },
  {
    name: "Nike Men's Dry Academy Soccer Shorts",
    description: "Breathable and moisture-wicking soccer shorts for men.",
    price: 25,
    category: "clothing",
    type: "shorts",
    brand: "nike",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/short/k/3/h/s-dv9743-010-nike-original-imagqz6bfqhsqgph.jpeg?q=70&crop=true",
    features: ["Breathable", "Moisture-wicking"],
    offer_discount: "5% off",
  },
  {
    name: "Braun Series 9 Electric Shaver",
    description:
      "Premium electric shaver with 5 synchronized shaving elements for a close and gentle shave.",
    price: 299,
    category: "personal Care",
    type: "shaver",
    brand: "braun",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/shaver/0/h/h/-original-imagptybmed4z93z.jpeg?q=70&crop=false",
    features: ["5 synchronized shaving elements"],
    offer_discount: "10% off",
  },
  {
    name: "Garmin Venu 2 GPS Smartwatch",
    description:
      "Advanced GPS smartwatch with AMOLED display, health monitoring, and fitness tracking features.",
    price: 399,
    category: "smartwatches",
    type: "watch",
    brand: "garmin",
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/j/c/f/-original-imagzbfaycxejjey.jpeg?q=70&crop=false",
    features: ["AMOLED display", "Health monitoring", "Fitness tracking"],
    offer_discount: "15% off",
  },
  {
    name: "New Balance Fresh Foam 1080v11 Running Shoes",
    description:
      "Cushioned running shoes with Fresh Foam midsole for a plush and responsive ride.",
    price: 150,
    category: "footwear",
    type: "shoe",
    brand: "normal",
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/v/5/-original-imagqtz389mxu6ca.jpeg?q=70&crop=true",
    features: ["Fresh Foam midsole", "Plush and responsive ride"],
    offer_discount: "10% off",
  },
];

module.exports = { data: allProducts };
