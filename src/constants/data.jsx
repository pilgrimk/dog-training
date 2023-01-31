import images from './images';

const infoObjs = [
  {
    id: 'info-1',
    topLine: 'What is a sports dog club?',
    headline: 'Sports Dog Club',
    description:
      "Sports Dog Clubs are organizations that promote activities for dogs and their owners to participate in together. They often host competitions, such as agility trials and scent work trials, as well as offering classes and other activities. Many of these clubs also provide educational opportunities and support to their members. They are often a great way for dog owners to meet and socialize with other dog owners, as well as learn new skills and have fun with their dogs.",
    buttonLabel: 'Get Started',
    imgUrl: images.photo01,
    alt: 'dog-1',
    reverse: 'false'
  },
  {
    id: 'info-2',
    topLine: '',
    headline: 'Benefit You And Your Dog',
    description:
      "Joining a sports dog club can be beneficial for both you and your dog. It can provide an opportunity for you to learn new skills, make new friends, and stay active. It can also be a great way for you to bond with your dog and teach them new behaviors.",
    buttonLabel: 'Learn More',
    imgUrl: images.photo02,
    alt: 'dog-2',
    reverse: 'true'
  },
  {
    id: 'info-3',
    topLine: '',
    headline: 'Great Exercise For You Both',
    description:
      "Dog sports are a great way to get exercise and fresh air in a fun and exciting way. Many activities involve running, jumping, and agility drills that can be enjoyable for both you and your pup. It can be a great way to stay in shape while having fun with your pup.",
    buttonLabel: 'Start Now',
    imgUrl: images.photo03,
    alt: 'dog-3',
    reverse: 'false'
  },
  {
    id: 'info-4',
    topLine: '',
    headline: 'Socialize Your Pup',
    description:
      "A sports dog club can also be a great way to socialize your pup. It can give them the opportunity to interact and play with other pups in a safe, controlled environment. This can help your pup learn how to play nicely with other pups and give them the confidence to interact with other animals.",
    buttonLabel: 'Start Now',
    imgUrl: images.photo04,
    alt: 'dog-4',
    reverse: 'false'
  }
];

const aboutUs = {
  title: 'About Us',
  desc: "North Beach Schutzhund Club is an incredible organization dedicated to promoting friendly camaraderie, healthy physical activity, and responsible dog ownership. Our members come from all walks of life, but what unites us is our love of dogs and the joy of playing with them. We host a variety of events, from picnics and barbecues to agility and flyball competitions. We also hold workshops and seminars on how to build a strong bond between dog and owner. Whether you're a seasoned pro or new to the sport of dog sports, you'll find something to love here. We strive to create an inclusive and supportive environment where everyone is welcome. So come join us, and let's have a great time!"
}

const events = {
  title: 'Upcoming Events',
  desc: "Here's a table of our upcoming competitions and sponsored events.  We host a number of these events throughout the year so check in regularly to stay informed.",
  data: [
  {
    id: 'event-1',
    title: 'USCA Southeast Regional Championship',
    dates: 'March 2-5, 2023',
    linkURL: '/usca',
    imgURL: images.uscalogo
  }
]};

const uscaData = [ 
  {
    title: 'USCA SOUTHEAST REGIONAL CHAMPIONSHIP',
    images: [
      images.uscalogo
    ], 
    data: [
      {line_item: "Hosted by: North Beach Schuzthund Club"},
      {line_item: "Judges: Bob Johantgen (stadium) & Nikki Banfield (tracking)"},
      {line_item: "Titles Offered: BH, IGP 1-3, FH (full)"},
      {line_item: "Event Date: March 2-5, 2023"}
  ]}, 
  {
    title: 'Competitors',
    data: [
      {data_subtitle: "IGP3"},
      {line_item: "Tom Kimball w. Jordan vom Tapferen Krieger"},
      {line_item: "Megan Kersey w. Dirk vom Nordecker Hof"},
      {line_item: "Gina Bishop w. Oreo vom Eisernen Kreuz"},
      {line_item: "Jim Hill w. Perseus od Hradcanskeho Rybnika"},
      {line_item: "Joe Galan w. Nicodemus von der Falsentadt"},
      {line_item: "Benjamin Maez w. Yyatt vom Geistwasser"},
      {line_item: "Sean Keeler w. Hondo von der Felsenstadt"},
      {line_item: "Anne Dunton w. Bellatrix Athena Josephine von Duntonhaus"},
      {line_item: "Robbie Dunton w. Red Barron von Duntonhaus"},
      {line_item: "Rachel Taiclet w. X'Cayde von Fieldshaus"},
      {line_item: "Brent Eckler w. Y' Maximus von Hanrahaus"},
      {line_item: "Anna Duke w. Grim Reaper van het Bos"},
      {line_item: "Tony Mcghee w. Oskar Leistung V Bora"},
      {line_item: "Veit Bachmann w. Desert Eagle von der Feldweise"},
      {line_item: "Kim Accashian w. Zuko von Zobelhond"},
      {line_item: "Julie Lininger w. Gonso von Hugelblick"},
      {line_break: " "},
      {data_subtitle: "IGP2"},
      {line_item: "William Viebahn w. J'Kaios vom Quellwasser"},
      {line_break: " "},
      {data_subtitle: "FH"},
      {line_item: "Felicia Richardson w. Isabelle vom Haus Schair"},
      {line_item: "JaQuasia Thompson w. Gigi von der Herzen Haus"},
      {line_item: "Stanley Craddok w. Hamlyn von der Bosen Hoyle"},
      {line_item: "Sue Birch"},
      {line_item: "Rick Schair w. Ira vom Scwarzen Bar"},
      {line_item: "Chris Bettin w. Ace von Schweizer"},
      {line_item: "Allison Bentley w. Ethelwulf From The Southland"},
      {line_item: "Cynthia DeSantis w. Skye"},
      {line_item: "Jackie Camp w. Yankee von Kaltwasser"},
      {line_item: "Karen Groh w. Falu vom Schloss Gymnich"}
  ]}, 
  {
    title: 'Trial Field',
    images: [
      images.arial01,
      images.arial02
    ],
    scrollImages: 'true',   
    data: [
      {line_item: "Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527"},
      {line_item: "BH Schedule: Friday March 3 @ 9am - NBSC Field 9170 Hwy 90 Longs, SC 29568"},
      {line_item: "IGP Schedule: Sat/Sun March 4-5 @ 7am start (flights to be updated)"}
  ]}, 
  {
    title: 'Draw Night',
    data: [
      {line_item: "Address: Conway Sports & Fitness Center 1515 Mill Pond Rd. Conway, SC 29527"},
      {line_item: "Time: Immediately following general meeting and elections"}
  ]},
  {
    title: 'Helper Tryouts',
    data: [
      {line_item: "Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527"},
      {line_item: "Time: Friday March 3, immediately following practice (approx. time will be updated)"}
  ]},
  {
    title: 'Tracking',
    images: [
      images.tracking01,
      images.tracking02,
      images.tracking03
    ], 
    scrollImages: 'true',     
    data: [
      {line_item: "IGP and FH tracking will be on winter rye. There are no official tracking practice fields in the area. We very much appreciate the generosity of the farming property owner, he is allowing us to have ample acreage of this amazing condition to accommodate our trial."}
  ]},
  {
    title: 'Hotel Lodging',
    data: [
      {line_item: "Unfortunately there are not any pet friendly hotels in Conway. However, all the hotels listed confirmed it was ok to have dogs in cars/trailers in the parking lot. As always, please pick up after your dog. If you see someone missed picking up after theirs and you have an extra bag, do the right thing."},
      {line_break: " "},
      {line_break: " "},
      {data_subtitle: "HOST HOTEL:"},
      {line_break: ""},
      {line_item: "Comfort Suites at the University"},
      {line_item: "2480 Hwy 501 E"},
      {line_item: "Conway, SC"},
      {line_item: "A block of rooms has been set aside for $99 a night"},
      {line_item: "Book rooms under 'Southeast Regional'"},
      {line_item: "11 minutes from the venue (No dogs in rooms)"},
      {line_break: " "},
      {line_break: " "},
      {data_subtitle: "OTHER NEARBY HOTELS:"},
      {line_break: ""},
      {line_item: "SureStay Hotel by Best Western"},
      {line_item: "1004 Waccamaw Dr"},
      {line_item: "Conway, SC"},
      {line_item: "6 minutes from venue (parking lot is smaller, may be difficult for those pulling trailers)"},
      {line_break: " "},
      {line_item: "Quality Inn"},
      {line_item: "3345 US-501"},
      {line_item: "Conway, SC"},
      {line_item: "6 minutes from venue"},
      {line_break: " "},
      {line_item: "Econo Lodge at the University"},
      {line_item: "2376 US-501 Building B"},
      {line_item: "Conway, SC"},
      {line_item: "10 minutes from venue"},
      {line_break: " "},
      {line_item: "Econo Lodge at Church St."},
      {line_item: "1101 Church St. #501"},
      {line_item: "Conway, SC"},
      {line_break: " "},
      {line_item: "NOTE: Econo Lodge on Church St states that it is pet friendly. However, when we inquired, they stated that it had to be dogs under 35 lbs and their policy did not allow dogs to be in cars. So we would caution anyone from booking there."},
      {line_break: " "},
      {line_break: " "},
      {data_subtitle: "HOTEL ALTERNATIVES:"},
       {line_item: "RV / Travel Trailers:"},
      {line_item: "Carolina Pines RV Resort"},
      {line_item: "5800 SC-90"},
      {line_item: "Conway, SC"},
      {line_item: "It is a very nice resort and has great amenities. 21 minutes from the venue."},
      {line_break: " "},
      {line_break: " "},
      {data_subtitle: "AIR BNB:"},
      {line_item: "If you’re interested in AirBnB options then we recommend searching within Conway, SC. North Myrtle Beach, SC is about 35-40 minutes away from the venue and is a nice place to stay especially if you’re making this a beach vacation!"}
  ]},
  {
    title: 'Application',
    links: [
      {
        text: 'Online',
        desc: 'Click the following link to complete the online application: ',
        href: 'https://form.jotform.com/223207097316049',
        rel: 'noreferrer',
        target: '_blank'
      },
      {
        text: 'Written',
        desc: 'Click the following link to complete the written application: ',
        href: 'https://www.dropbox.com/s/97odqb1ppkpk3al/Entry%20Form%20SE%20Regionals%202023.pdf?dl=0',
        rel: 'noreferrer',
        target: '_blank'
      }      
    ],
},
  {
    title: 'Sponsors/Vendors',
    data: [
    'To be updated'
  ]},
  {
    title: 'Trophies (and sponsorship pricing)',
    data: [
      {line_item: "Regional Champion $150"},
      {line_item: "IGP 3 1st place $75"},
      {line_item: "IGP 3 2nd place $60"},
      {line_item: "IGP 3 3rd place $60"},
      {line_item: "IGP 3 4th place $60"},
      {line_item: "IGP 3 5th place $60"},
      {line_item: "FH Champion $75"},
      {line_item: "FH 2nd place $60"},
      {line_item: "FH 3rd place $60"},
      {line_item: "IGP 2 Champion $75"},
      {line_item: "IGP 2 2nd place $60"},
      {line_item: "IGP 2 3rd place $60"},
      {line_item: "IGP 1 Champion $75"},
      {line_item: "IGP 1 2nd place $60"},
      {line_item: "IGP 1 3rd place $60"},
      {line_item: "High Tracking $60"},
      {line_item: "High Obedience $60"},
      {line_item: "High Protection $60"},
      {line_item: "High HOT $60"},
      {line_item: "High BHOT $60"},
      {line_item: "High Scoring Female Dog $60"},
      {line_item: "High Auslander $60"},
      {line_item: "High Breed Survey Dog $60"},
      {line_item: "High Scoring Club $60"},
      {line_item: "Helpers Favorite $60"},
      {line_item: "Sportsmanship Award $60"}	
  ]},
  {
    title: 'Contact Information',
    data: [
      {line_item: "North Beach Schutzhund Club"},
      {line_item: "jrchaires23@gmail.com"}
  ]}
];

const contactUs = {
  title_cu: 'Contact Us',
  name_long: 'North Beach Schuzthund Club',
  name_short: 'NBSC',
  addr: "123 Main Street",
  city: 'Yourtown',
  state_long: 'South Carolina',
  state_short: 'SC',
  postal_code: '12345',
  country: 'USA',
  phone_1: '212-345-6478',
  phone_2: '212-456-7890',
  title_wh: 'Working Hours',
  days_1: 'Monday-Friday:',
  hours_1: '08:00 am - 12:00 am',
  days_2: 'Saturday-Sunday:',
  hours_2: '07:00 am - 11:00 pm',
  social_media: [
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/northbeachschutzhundclub/'
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/northbeachschutzhundclub/'
    }
]
};

const data = {
  infoObjs,
  aboutUs,
  events,
  uscaData,
  contactUs
};

export default data;
