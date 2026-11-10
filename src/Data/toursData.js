// Tours & activities. Each entry automatically gets:
//   • its own page at /tours/<slug>
//   • a card on /tours, the homepage and "You may also like"
//   • an entry in the sitemap
// No prices on purpose – customers enquire via the form / WhatsApp.
// Images: originals in images-src/tours → `npm run images` → /public/images/tours/.

const toursData = [
    {
        slug: "dharamshala-sightseeing-taxi",
        title: "Dharamshala Local Sightseeing by Taxi: 1-Day Tour",
        cardTitle: "Dharamshala Sightseeing",
        keyword: "Dharamshala local sightseeing",
        shortName: "sightseeing tour",
        overviewTitle: "Dharamshala local sightseeing by private taxi",
        serviceName: "Sightseeing taxi tour",
        category: "SIGHTSEEING",
        tags: "TEMPLES, MONASTERIES, VIEWS",
        metaTitle: "Dharamshala Local Sightseeing by Taxi | 9 Places in 1 Day",
        metaDescription: "Private taxi for Dharamshala local sightseeing: Dalai Lama Temple, Bhagsu Waterfall, Naddi, HPCA Stadium & more in 1 day. Hotel pickup. Enquire now.",
        image: "/images/tours/dharamshala-sightseeing.webp",
        imageAlt: "McLeodganj town and Dhauladhar hills on a Dharamshala local sightseeing tour",
        summary:
            "See the best of Dharamshala and McLeodganj in a single relaxed day: monasteries, waterfalls, a lakeside church, tea gardens and sunset views of the Dhauladhars, in a private taxi with a local driver.",
        facts: [
            { label: "Duration", value: "Full day (approx. 8–9 hrs)" },
            { label: "Pickup", value: "Your hotel or stay in Dharamshala / McLeodganj" },
            { label: "Vehicle", value: "Alto / Swift Dzire, Innova or Tempo Traveller" },
            { label: "Best for", value: "First-time visitors, families, weekend breaks" },
        ],
        overview: [
            "Dharamshala's sights are spread across lower Dharamshala, McLeodganj and the hills above, with steep, narrow roads in between. A private taxi with a local driver is the easiest way to cover them in one day without worrying about parking, directions or waiting for shared cabs.",
            "Your driver picks you up from your stay, follows the route below at a comfortable pace and waits at every stop. Want to skip a place, spend longer somewhere or add a café stop? Just tell your driver.",
        ],
        itineraryTitle: "Places covered in Dharamshala local sightseeing",
        itinerary: [
            {
                title: "Dalai Lama Temple (Tsuglagkhang)",
                time: "45–60 min",
                description:
                    "The spiritual heart of McLeodganj and residence of His Holiness the Dalai Lama, with a peaceful temple complex and Tibet Museum.",
            },
            {
                title: "Bhagsu Nag Temple & Waterfall",
                time: "60–90 min",
                description:
                    "An ancient Shiva temple with a sacred pool, and a short, scenic walk to the Bhagsu waterfall.",
            },
            {
                title: "St. John in the Wilderness Church",
                time: "20–30 min",
                description:
                    "A 19th-century neo-Gothic church in a quiet deodar forest, known for its Belgian stained-glass windows.",
            },
            {
                title: "Dal Lake",
                time: "20–30 min",
                description:
                    "A small, calm lake surrounded by deodar trees near Naddi, a quiet stop on the way up.",
            },
            {
                title: "Naddi Viewpoint",
                time: "30–45 min",
                description:
                    "One of the best close-up views of the snow-capped Dhauladhar range. Beautiful at sunset.",
            },
            {
                title: "War Memorial",
                time: "20–30 min",
                description:
                    "A landscaped memorial in a pine grove honouring Himachal's soldiers, at the entrance to Dharamshala.",
            },
            {
                title: "HPCA Cricket Stadium",
                time: "30 min",
                description:
                    "One of the world's most scenic cricket grounds, with the Dhauladhars rising right behind the pavilion.",
            },
            {
                title: "Kangra Tea Gardens",
                time: "30–45 min",
                description:
                    "Walk through rolling tea estates and pick up some famous Kangra tea to take home.",
            },
            {
                title: "Norbulingka Institute",
                time: "45–60 min",
                description:
                    "A serene Tibetan arts centre with Japanese-style gardens, workshops and a beautiful temple.",
            },
        ],
        extraSections: [
            {
                heading: "Choose your taxi",
                paragraphs: [
                    "All tours are in a private, clean vehicle with an experienced local driver who knows the hill roads. We match the car to your group size:",
                ],
                list: [
                    { label: "Alto / Swift Dzire", text: "Best for 1–3 people. Compact and easy on narrow McLeodganj roads." },
                    { label: "Toyota Innova", text: "Best for 4–5 people. Extra legroom and luggage space for families." },
                    { label: "Tempo Traveller", text: "Best for bigger groups, friends and team outings." },
                ],
            },
            {
                heading: "Taxi service in Dharamshala",
                paragraphs: [
                    "Besides local sightseeing, we can arrange a private taxi for transfers and day trips from Dharamshala. Mention your route in the enquiry and we'll share the details:",
                ],
                list: [
                    { label: "Airport transfers", text: "Pickup and drop at Kangra (Gaggal) Airport." },
                    { label: "Railway & bus stations", text: "Pathankot railway station and Dharamshala / McLeodganj bus stands." },
                    { label: "Bir Billing day trip", text: "Paragliding, Tibetan monasteries and cafés." },
                    { label: "Palampur & Baijnath", text: "Tea gardens and the ancient Baijnath temple." },
                ],
            },
            {
                heading: "Tips for your sightseeing day",
                list: [
                    { label: "Start early", text: "McLeodganj gets busy after 10 am, and parking near the temples fills up quickly." },
                    { label: "Dress respectfully", text: "Cover shoulders and knees at temples and monasteries." },
                    { label: "Carry some cash", text: "Small entry fees, parking and tea stalls are often cash-only." },
                    { label: "Avoid long weekends", text: "Weekdays are much calmer if your dates are flexible." },
                ],
            },
        ],
        included: [
            "Private taxi for the full day",
            "Experienced local driver",
            "Pickup and drop at your stay",
            "Fuel",
        ],
        notIncluded: [
            "Parking and entry tickets",
            "Meals and personal expenses",
            "Anything not mentioned as included",
        ],
        thingsToCarry: ["Comfortable walking shoes", "Light jacket (evenings get cool)", "Water bottle", "Cash for small entry fees"],
        faqs: [
            {
                question: "Can I change the places or the order of the tour?",
                answer:
                    "Yes. It's a private taxi, so you can skip places, spend longer at a stop or add a café or shopping stop. Just tell us when you enquire or let the driver know on the day.",
            },
            {
                question: "Where do you pick up from?",
                answer:
                    "We pick you up from your hotel, homestay or workation stay anywhere in Dharamshala and McLeodganj, and drop you back in the evening.",
            },
            {
                question: "Which car will I get?",
                answer:
                    "We arrange an Alto or Swift Dzire for 1–3 people, a Toyota Innova for 4–5 people and a Tempo Traveller for bigger groups. Tell us your group size and we'll book the right vehicle.",
            },
            {
                question: "Can you also arrange airport or railway station pickup?",
                answer:
                    "Yes. We can arrange pickups and drops from Kangra (Gaggal) Airport, Pathankot railway station and nearby bus stands. Mention it in your enquiry.",
            },
        ],
    },
    {
        slug: "triund-trek",
        title: "Triund Trek from McLeodganj",
        cardTitle: "Triund Trek",
        keyword: "Triund trek",
        shortName: "Triund trek",
        overviewTitle: "About the Triund trek",
        serviceName: "Triund trek",
        category: "TREKKING",
        tags: "ADVENTURE, THRILL, VIEWS",
        metaTitle: "Triund Trek from McLeodganj | Guided Day & Overnight Trek",
        metaDescription: "Book a guided Triund trek from McLeodganj, Dharamshala. Easy-moderate trail, stunning Dhauladhar views, day trek or overnight camping with a local guide.",
        image: "/images/tours/triund-trek-dharamshala.webp",
        imageAlt: "Dhauladhar range reflected in a mountain pond on the trek above Dharamshala",
        summary:
            "Dharamshala's most loved trek: a steady climb through oak and rhododendron forest to a wide grassy ridge with sweeping views of the Dhauladhar range on one side and the Kangra valley on the other.",
        facts: [
            { label: "Duration", value: "Day trek or overnight" },
            { label: "Difficulty", value: "Easy to moderate" },
            { label: "Starting point", value: "McLeodganj / Dharamkot" },
            { label: "Best season", value: "March – June, September – November" },
        ],
        overview: [
            "Triund sits at around 2,850 m above McLeodganj and is one of the most rewarding short treks in the Himalayas. The trail is well-marked, with chai stalls along the way, which makes it a great first trek for beginners and a perfect weekend reset after a week of work.",
            "Go up and down in a day, or stay overnight at the top to watch sunset and sunrise over the snow peaks. A local guide handles the route, timing and logistics so you can simply enjoy the walk.",
        ],
        itineraryTitle: "Triund trek itinerary",
        itinerary: [
            {
                title: "Meet your guide",
                time: "Morning",
                description: "Meet at McLeodganj or Dharamkot (or get picked up from your stay) and start walking.",
            },
            {
                title: "Forest trail & chai stops",
                time: "3–4 hrs",
                description:
                    "Climb steadily through oak and rhododendron forest, with breaks at Magic View café and other tea stalls.",
            },
            {
                title: "Triund top",
                time: "Midday",
                description:
                    "Relax on the ridge with views of the Dhauladhars and the Kangra valley. Overnight guests set up camp here.",
            },
            {
                title: "Descend to McLeodganj",
                time: "2–3 hrs",
                description: "Walk back down the same trail, or the next morning after sunrise if you're staying overnight.",
            },
        ],
        extraSections: [
            {
                heading: "Triund trek distance, altitude & difficulty",
                list: [
                    { label: "Altitude", text: "Approx. 2,850 m above sea level." },
                    { label: "Distance", text: "Approx. 9 km one way from McLeodganj, or 6–7 km from Gallu Devi temple above Dharamkot." },
                    { label: "Trek time", text: "Around 3–4 hours up and 2–3 hours down at an easy pace." },
                    { label: "Difficulty", text: "Easy to moderate. The last stretch of switchbacks before the top is the steepest part." },
                ],
            },
            {
                heading: "Best time for the Triund trek",
                paragraphs: [
                    "March to June brings pleasant days and long views, and September to November has the clearest skies after the monsoon. Winter (December to February) often brings snow near the top, which is beautiful but needs proper shoes and an experienced guide. During the monsoon (July to August) the trail gets slippery and views are often hidden by clouds, so we'll advise you based on the forecast.",
                ],
            },
        ],
        included: ["Experienced local trek guide", "Route planning and support", "Camping gear for overnight treks"],
        notIncluded: ["Meals and snacks on the trail", "Transport to the start point (can be added)", "Personal expenses"],
        thingsToCarry: [
            "Good trekking or sports shoes",
            "2 litres of water",
            "Warm layer and rain jacket",
            "Snacks, sunscreen and a cap",
        ],
        faqs: [
            {
                question: "Is the Triund trek suitable for beginners?",
                answer:
                    "Yes. It's an easy-to-moderate trek on a well-marked trail. If you're reasonably fit and walk at your own pace, you'll enjoy it. Your guide sets a comfortable pace for the group.",
            },
            {
                question: "Should I do a day trek or stay overnight?",
                answer:
                    "A day trek fits easily into a weekend. Staying overnight lets you see sunset and sunrise from the top, which many people say is the highlight. We can arrange either.",
            },
            {
                question: "When is the best time for Triund?",
                answer:
                    "March to June and September to November usually have the clearest views. Winter brings snow and the monsoon makes the trail slippery, so we'll advise you based on the conditions.",
            },
        ],
    },
    {
        slug: "paragliding-in-dharamshala",
        title: "Paragliding in Dharamshala & Bir Billing",
        cardTitle: "Paragliding",
        keyword: "paragliding in Dharamshala",
        shortName: "paragliding flight",
        overviewTitle: "Tandem paragliding near Dharamshala",
        serviceName: "Paragliding",
        category: "ADVENTURE",
        tags: "ADVENTURE, THRILL, VIEWS",
        metaTitle: "Paragliding in Dharamshala & Bir Billing | Tandem Flights",
        metaDescription: "Book tandem paragliding at Bir Billing, India's paragliding capital, or Indrunag near Dharamshala. Certified pilots, no experience needed. Enquire now.",
        image: "/images/tours/paragliding-bir-billing.webp",
        imageAlt: "Paraglider flying in front of the snow-capped Dhauladhar range near Dharamshala",
        summary:
            "Fly over the Kangra valley with a certified tandem pilot. No experience needed: just run a few steps, lift off and take in the Himalayas from the sky.",
        facts: [
            { label: "Locations", value: "Bir Billing or Indrunag (Dharamshala)" },
            { label: "Flight time", value: "Approx. 15–30 min (tandem)" },
            { label: "Experience", value: "None needed. You fly with a certified pilot" },
            { label: "Best season", value: "March – May, October – November" },
        ],
        overview: [
            "Bir Billing, about 2–2.5 hours from Dharamshala, is often called the paragliding capital of India and has hosted the Paragliding World Cup. You take off from Billing and land in the green fields of Bir. For a quicker option, Indrunag just above Dharamshala offers tandem flights with views over the town and the cricket stadium.",
            "You fly tandem with a certified pilot who handles everything, from take-off to landing. We work with experienced local operators and can combine your flight with a day trip to Bir's cafés and monasteries.",
        ],
        itineraryTitle: "How your paragliding day works",
        itinerary: [
            {
                title: "Pickup & drive",
                time: "Morning",
                description: "Get picked up from your stay and drive to Bir Billing or Indrunag (transport can be arranged).",
            },
            {
                title: "Safety briefing",
                time: "15 min",
                description: "Meet your certified pilot, get kitted up with a harness and helmet, and learn the take-off run.",
            },
            {
                title: "Tandem flight",
                time: "15–30 min",
                description: "Take off and glide over forests, villages and valleys with the Dhauladhars behind you.",
            },
            {
                title: "Landing & explore",
                time: "Afternoon",
                description: "Land in the fields, then relax at Bir's cafés or visit a monastery before heading back.",
            },
        ],
        extraSections: [
            {
                heading: "Bir Billing or Indrunag: where to fly?",
                list: [
                    { label: "Bir Billing", text: "About 2–2.5 hours from Dharamshala. Higher take-off at Billing and longer flights over the Kangra valley. Best as a full-day trip with Bir's cafés and monasteries." },
                    { label: "Indrunag", text: "Close to Dharamshala. Shorter flights with views over the town and the HPCA Stadium. Easy to fit into half a day." },
                ],
            },
            {
                heading: "Best season for paragliding",
                paragraphs: [
                    "October and November usually offer the most stable weather and clearest views, and March to May is also a great time to fly. Flying is usually paused during the monsoon (roughly July to mid-September), and on any day the pilots decide based on wind and weather, so we'll confirm conditions before your flight.",
                ],
            },
        ],
        included: ["Tandem flight with a certified pilot", "Safety gear (harness, helmet)", "Take-off point transfer"],
        notIncluded: [
            "Transport from Dharamshala (can be added)",
            "GoPro photos & videos (optional add-on)",
            "Meals and personal expenses",
        ],
        thingsToCarry: ["Closed shoes with good grip", "Windproof jacket", "Sunglasses with a strap", "Valid photo ID"],
        faqs: [
            {
                question: "Do I need any experience to paraglide?",
                answer:
                    "No. Tandem flights are with a certified pilot who controls the glider. You just follow a short briefing and run a few steps at take-off.",
            },
            {
                question: "Is paragliding safe?",
                answer:
                    "We only work with experienced, certified operators who use proper safety equipment. Flights happen only when weather conditions are suitable, and the pilot always has the final say.",
            },
            {
                question: "Bir Billing or Indrunag: which should I choose?",
                answer:
                    "Bir Billing offers longer, higher flights and is a great full-day trip. Indrunag is close to Dharamshala and quicker to fit into a busy schedule. Tell us your plans and we'll suggest the best fit.",
            },
            {
                question: "Is there a weight or age limit?",
                answer:
                    "Limits depend on the operator and conditions on the day. Share your group details in the enquiry and we'll confirm before you book.",
            },
        ],
    },
    {
        slug: "camping-in-dharamshala",
        title: "Camping in Dharamshala",
        cardTitle: "Camping",
        keyword: "camping in Dharamshala",
        shortName: "camping trip",
        overviewTitle: "Camping near Dharamshala",
        serviceName: "Camping",
        category: "CAMPING",
        tags: "STARS, BONFIRE, MOUNTAINS",
        metaTitle: "Camping in Dharamshala | Overnight Triund & Forest Camps",
        metaDescription: "Overnight camping in Dharamshala: Triund mountain camps and peaceful forest campsites with tents, dinner, breakfast and a local guide. Enquire now.",
        image: "/images/tours/camping-dharamshala.webp",
        imageAlt: "Tents facing the snow-capped Dhauladhar range on a camping trip near Dharamshala",
        summary:
            "Swap your desk for a tent for a night. Fall asleep under a sky full of stars and wake up to the Dhauladhar range glowing in the morning sun.",
        facts: [
            { label: "Duration", value: "1 night (longer on request)" },
            { label: "Options", value: "Mountain camps (Triund) or forest campsites" },
            { label: "Group size", value: "Solo, couples, friends & teams" },
            { label: "Best season", value: "March – June, September – November" },
        ],
        overview: [
            "Camping is the best way to slow down completely after a busy work week. Choose a mountain camp at Triund for big views and a short trek, or a quieter forest campsite near Dharamshala with an easier approach.",
            "We arrange the campsite, tents, sleeping gear and a local guide, so all you need to bring is yourself and a warm jacket. It's also a great option for team offsites and small groups.",
        ],
        itineraryTitle: "Your camping itinerary",
        itinerary: [
            {
                title: "Reach the campsite",
                time: "Afternoon",
                description: "Trek up with your guide or drive to the campsite, depending on the option you choose.",
            },
            {
                title: "Settle in & sunset",
                time: "Evening",
                description: "Set up in your tent, enjoy tea and watch the sunset over the valley.",
            },
            {
                title: "Dinner & stargazing",
                time: "Night",
                description: "Warm dinner, a bonfire where permitted, and clear mountain skies full of stars.",
            },
            {
                title: "Sunrise & return",
                time: "Morning",
                description: "Wake up to the mountains, have breakfast and head back to Dharamshala.",
            },
        ],
        extraSections: [
            {
                heading: "Mountain camp or forest camp?",
                list: [
                    { label: "Triund mountain camp", text: "Trek up for 3–4 hours and camp on the ridge with sunset and sunrise over the Dhauladhars. Best for active travellers." },
                    { label: "Forest campsite", text: "An easier approach with a short walk or drive, surrounded by pine and oak forest. Great for families and first-time campers." },
                ],
            },
            {
                heading: "Camping for teams & groups",
                paragraphs: [
                    "Camping makes a memorable team offsite. We can arrange camps for small teams and groups, and combine them with a workation stay in Dharamshala so your team can work during the week and head into the mountains for the weekend.",
                ],
            },
        ],
        included: ["Tent and sleeping bag", "Dinner and breakfast", "Local guide / camp support"],
        notIncluded: ["Transport to the start point (can be added)", "Personal expenses", "Anything not mentioned as included"],
        thingsToCarry: ["Warm jacket and thermals", "Torch or headlamp", "Comfortable shoes", "Personal medicines"],
        faqs: [
            {
                question: "Is camping safe for solo travellers and women?",
                answer:
                    "Yes. We use established campsites with local guides and camp staff, and many solo travellers and women join our camps. Share any concerns in your enquiry and we'll help.",
            },
            {
                question: "Are washrooms available at the campsite?",
                answer:
                    "Facilities depend on the campsite. Forest campsites usually have basic washrooms, while mountain camps like Triund are more basic. We'll explain the options before you book.",
            },
            {
                question: "Can you arrange camping for a team offsite?",
                answer:
                    "Yes. We can arrange camping for small teams and groups, and combine it with a workation stay. Mention your group size and dates in the enquiry.",
            },
        ],
    },
];

export default toursData;

export const getTour = (slug) => toursData.find((tour) => tour.slug === slug) || null;

export const getOtherTours = (slug) => toursData.filter((tour) => tour.slug !== slug);
