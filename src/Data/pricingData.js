// Single source of truth for workation prices shown on the website.
// SELLING prices only (agent rate + commission). Never put agent / net rates here –
// everything in this file is visible to visitors in their browser.
//
// Commission used: 1 week +15% (min ₹1,500) · 2 weeks +12% (min ₹2,000) · 1 month +10% (min ₹3,000),
// rounded UP to the nearest ₹100. Per-day stays are quoted on request.
// Prices are per person, single occupancy.

export const stayOptions = [
    {
        id: "homestay-deluxe",
        name: "Homestay · Deluxe room",
        type: "homestay",
        meals: false,
        prices: { week: 11300, twoWeeks: 20400, month: 30000 },
    },
    {
        id: "premium-deluxe",
        name: "Premium stay · Deluxe room",
        type: "premium",
        meals: true,
        prices: { week: 18400, twoWeeks: 33600, month: 41800 },
    },
    {
        id: "premium-super-deluxe",
        name: "Premium stay · Super Deluxe room",
        type: "premium",
        meals: true,
        prices: { week: 22500, twoWeeks: 39200, month: 49000 },
    },
    {
        id: "premium-premium",
        name: "Premium stay · Premium room",
        type: "premium",
        meals: true,
        prices: { week: 28200, twoWeeks: 50400, month: 59400 },
    },
];

const range = (key) => {
    const values = stayOptions.map((s) => s.prices[key]);
    return { from: Math.min(...values), to: Math.max(...values) };
};

export const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

export const packages = [
    {
        id: "7-day",
        tag: "QUICK REFRESHMENT",
        title: "7-Day workation",
        ...range("week"),
        note: "Ideal for professionals who want to experience remote work from the Himalayas without a long commitment.",
        featured: false,
    },
    {
        id: "14-day",
        tag: "MOST LOVED",
        title: "14-Day workation",
        ...range("twoWeeks"),
        note: "Designed for deep work, slow living, and professionals planning extended remote stays.",
        featured: true,
    },
    {
        id: "1-month",
        tag: "LIVE HERE",
        title: "1-Month workation",
        ...range("month"),
        note: "Perfect for professionals planning remote work stays in Dharamshala with complete work-life balance.",
        featured: false,
    },
];

// Only list what EVERY stay includes, or say clearly where it applies.
export const packageFeatures = [
    "Private room (single occupancy)",
    "High-speed Wi-Fi",
    "Work area for your laptop",
    "3 meals daily at premium stays",
    "Peaceful mountain surroundings",
    "Local support on WhatsApp",
];

export const PRICE_NOTE =
    "*Prices per person, single occupancy. Range covers homestay to premium rooms. Couple & double occupancy on request.";
