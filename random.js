const quotes = [{
    quote: `"Rent-a-Chicken: Allow people to rent chickens for their backyards and enjoy fresh eggs without the long-term commitment."`,
}, {
    quote: `"Pet Rock Training Classes: Offer classes to teach pet rock owners how to interact and train their rocks."`,
}, {
    quote: `"I don't Know You Think"`,
}, {
    quote: `"Virtual Reality Fitness: Create virtual reality games that provide a full-body workout."`,
}, {
    quote: `"Bubble Wrap Popping Therapy: Open a facility where people can relieve stress by popping bubble wrap."`,
}, {
    quote: `"Rent-a-Cuddle: Provide professional cuddlers for those in need of some physical affection."`,
}, {
    quote: `"Professional Line Stander: Hire someone to wait in line for others who don't have the time or patience."`,
}, {
    quote: `"Nap Cafés: Establish cafés where people can pay to take a nap in a comfortable environment."`,
}, {
    quote: `"Worm Farming: Start a business that breeds and sells worms for composting."`,
}, {
    quote: `"Edible Insect Food Truck: Serve insect-based dishes, such as cricket tacos and mealworm burgers."`,
}, {
    quote: `"Rent-a-Plant: Offer a service where people can rent plants to liven up their homes or offices temporarily."`,
}, {
    quote: `"Virtual Personal Shopper: Provide online shopping assistance and recommendations for busy individuals."`,
}, {
    quote: `"Professional Apology Service: Hire someone to apologize on behalf of individuals or businesses."`,
}, {
    quote: `"Indoor Skydiving Center: Create a facility that simulates the experience of skydiving indoors."`,
}, {
    quote: `"Dog Poop Scooping Service: Offer a service to clean up dog waste from people's yards."`,
}, {
    quote: `"Cactus Delivery Service: Deliver potted cacti to customers with care instructions and tips for desert gardening."`,
}, {
    quote: `"Rent-a-Garden: Allow individuals to rent garden plots for growing their own vegetables and flowers."`,
}, {
    quote: `"Professional Hugger: Provide professional hugging services for those in need of physical comfort."`,
}, {
    quote: `"Rent-a-Sloth: Allow people to spend time with and learn about sloths in a controlled environment."`,
}, {
    quote: `"Drone Pizza Delivery: Use drones to deliver pizzas directly to customers' homes."`,
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
}, {
    quote: `"Virtual Reality Dating: Create a virtual reality platform for people to go on dates in a simulated environment."`,
}, {
    quote: `"Rent-a-Swimming Pool: Rent out swimming pools by the hour for private parties or relaxation."`,
}, {
    quote: `"Mobile Meditation Studio: Convert a vehicle into a meditation studio and bring mindfulness practices to different locations."`,
}, {
    quote: `"Indoor Surfing Park: Build an artificial wave pool for surfing enthusiasts to practice their skills indoors."`,
}, {
    quote: `"Mystery Dinner Theater: Combine a traditional dinner with a live interactive theater performance."`,
}, {
    quote: `"Professional Snuggler: Offer professional snuggling services for individuals seeking comfort and relaxation."`,
}, {
    quote: `"Dog-Friendly Movie Theater: Create a movie theater where people can bring their dogs to enjoy films together."`,
}, {
    quote: `"Rent-a-Spouse: Provide temporary spouses for events or activities requiring a partner."`,
}, {
    quote: `"Bubble Tea Spa: Offer spa treatments using bubble tea-inspired ingredients and scents."`,
}, {
    quote: `"Clown Therapy: Use professional clowns to bring joy and laughter to hospitals and healthcare facilities."`,
}, {
    quote: `"Air Guitar Academy: Teach people how to master the art of playing air guitar."`,
}, {
    quote: `"Professional Whistler: Provide whistling performances for events or as background entertainment."`,
}, {
    quote: `"Rent-a-Grandparent: Connect young individuals with elderly individuals who can provide mentorship and companionship."`,
}, {
    quote: `"Duck Tour Agency: Organize guided tours in amphibious vehicles that operate on land and water."`,
}, {
    quote: `"Bedtime Story Hotline: Offer a service where people can call and have someone read them a bedtime story."`,
}, {
    quote: `"Virtual Interior Design: Provide virtual consultations and design services for individuals looking to redecorate their homes."`,
}, {
    quote: `"Fortune Cookie Writing Service: Create personalized fortune cookies with customized messages for special events."`,
}, {
    quote: `"Personal Paparazzi: Hire photographers to follow individuals around and capture their daily lives."`,
}, {
    quote: `"Rent-a-Gong: Rent out gongs for meditation, sound therapy, or special events."`,
}, {
    quote: `"Haunted House Cleanup: Offer professional cleaning services for haunted houses after Halloween."`,
}, {
    quote: `"Professional Mourner: Hire individuals to attend funerals and mourn as part of the service."`,
}, {
    quote: `"Indoor Trampoline Park for Adults: Create a trampoline park exclusively for adults to enjoy bouncing and acrobatics."`,
}, {
    quote: `"Rent-a-Fireplace: Allow people to rent a virtual fireplace video to create a cozy ambiance in their homes."`,
}, {
    quote: `"Professional Thumb Wrestler: Compete professionally in thumb wrestling matches and offer training sessions."`,
}, {
    quote: `"Beekeeping Clothing Fashion: Design fashionable clothing and accessories inspired by beekeeping suits."`,
}, {
    quote: `"Rent-a-Snow: Deliver snow to individuals or businesses during the winter season."`,
}, {
    quote: `"Inflatable Furniture Rental: Rent out inflatable furniture for events or temporary living arrangements."`,
}, {
    quote: `"Pet Psychic: Offer psychic readings and communication services with people's pets."`,
}, {
    quote: `"Personal Branding Consultant for Pets: Help pet owners create online profiles and develop personal brands for their pets."`,
}, {
    quote: `"Snake Charming Lessons: Teach individuals the art of snake charming and the history behind it."`,
}, {
    quote: `"Professional Fake Crowd Member: Hire individuals to attend events and act as enthusiastic audience members."`,
}, {
    quote: `"Rent-a-Zombie: Provide zombie actors for film productions, events, or Halloween parties."`,
}, {
    quote: `"Professional Mermaid/Merman: Perform as a mermaid or merman at events, parties, or in underwater shows."`,
}, {
    quote: `"Rent-a-Superpower: Offer the experience of having superpowers through special effects and interactive scenarios."`,
}, {
    quote: `"Virtual Reality Nature Walks: Create virtual reality experiences that allow people to explore nature from the comfort of their homes."`,
}, {
    quote: `"Sand Sculpture Lessons: Teach individuals how to create elaborate sculptures using sand as the medium."`,
}, {
    quote: `"Human Mannequin Rental: Offer human mannequins for fashion shows or displays in store windows."`,
}, {
    quote: `"Rent-a-Superhero: Allow people to rent superhero characters for special events or parties."`,
}, ]

let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

})
