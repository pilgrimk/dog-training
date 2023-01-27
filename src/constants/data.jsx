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
    'Hosted by: North Beach Schuzthund Club',
    'Judges: Bob Johantgen (stadium) & Nikki Banfield (tracking)',
    'Titles Offered: BH, IGP 1-3, FH (full)',
    'Event Date: March 2-5, 2023'
  ]}, 
  {
    title: 'Competitors',
    data: [
    'To be determined'
  ]}, 
  {
    title: 'Trial Field',
    images: [
      images.arial01,
      images.arial02
    ],
    scrollImages: 'true',   
    data: [
    'Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527',
    'BH Schedule: Friday March 3 @ 9am - NBSC Field 9170 Hwy 90 Longs, SC 29568',
    'IGP Schedule: Sat/Sun March 4-5 @ 7am start (flights to be updated)'
  ]}, 
  {
    title: 'Draw Night',
    data: [
    'Address: Conway Sports & Fitness Center 1515 Mill Pond Rd. Conway, SC 29527',
    'Time: Immediately following general meeting and elections'
  ]},
  {
    title: 'Helper Tryouts',
    data: [
    'Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527',
    'Time: Friday March 3, immediately following practice (approx. time will be updated)'
  ]},
  {
    title: 'Tracking',
    data: [
    'Location and times: to be updated',
    'Surface: dirt or early winter wheat'
  ]},
  {
    title: 'Hotel Lodging',
    data: [
    'To be updated'
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
    'Regional Champion $150',
    'IGP 3 1st place $75',
    'IGP 3 2nd place $60',
    'IGP 3 3rd place $60',
    'IGP 3 4th place $60',
    'IGP 3 5th place $60',
    'FH Champion $75',
    'FH 2nd place $60',
    'FH 3rd place $60',
    'IGP 2 Champion $75',
    'IGP 2 2nd place $60',
    'IGP 2 3rd place $60',
    'IGP 1 Champion $75',
    'IGP 1 2nd place $60',
    'IGP 1 3rd place $60',
    'High Tracking $60',
    'High Obedience $60',
    'High Protection $60',
    'High HOT $60',
    'High BHOT $60',
    'High Scoring Female Dog $60',
    'High Auslander $60',
    'High Breed Survey Dog $60',
    'High Scoring Club $60',
    'Helpers Favorite $60',
    'Sportsmanship Award $60'
  ]},
  {
    title: 'Contact Information',
    data: [
    'North Beach Schutzhund Club',
    'jrchaires23@gmail.com'
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
