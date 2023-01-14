import images from './images';

const infoObjs = [
  {
    id: 'info-1',
    topLine: 'Why consider dog training?',
    headline: 'The Many Benefits of Training',
    description:
      'The benefits of dog training are numerous and varied. Training your dog can help to improve your relationship with your furry friend, reduce behaviors that are disruptive or dangerous, and make your life easier.',
    buttonLabel: 'Get Started',
    imgUrl: images.photo01,
    alt: 'dog-1',
    reverse: 'false'
  },
  {
    id: 'info-2',
    topLine: '',
    headline: 'Strengthened Bonding',
    description:
      'One of the most important benefits of dog training is that it helps to strengthen the bond between you and your pup. Training provides an opportunity for you to establish leadership and create a strong trust-based relationship. This can result in your dog being more willing to obey commands, follow directions, and be more reliable in different situations.',
    buttonLabel: 'Learn More',
    imgUrl: images.photo02,
    alt: 'dog-2',
    reverse: 'true'
  },
  {
    id: 'info-3',
    topLine: '',
    headline: 'Reduce Bad Behavior',
    description:
      "In addition to improving the relationship between you and your dog, dog training can also help to reduce or eliminate behaviors that are disruptive or dangerous. By teaching your dog commands such as 'sit', 'stay', and 'leave it', you can help to reduce behaviors such as barking, jumping, or running away. Training can also help to prevent your dog from engaging in other dangerous behaviors, such as chewing on furniture or escaping outdoors.",
    buttonLabel: 'Start Now',
    imgUrl: images.photo03,
    alt: 'dog-3',
    reverse: 'false'
  },
  {
    id: 'info-4',
    topLine: '',
    headline: 'Make Life Easier',
    description:
      "Finally, dog training can make your life easier. After your pup has learned basic commands, daily tasks such as grooming, walking, and playing can become much more enjoyable. Training can also help to make your pup more reliable in different situations.",
    buttonLabel: 'Start Now',
    imgUrl: images.photo04,
    alt: 'dog-4',
    reverse: 'false'
  }
];

const aboutUs = {
  title: 'About Us',
  desc: "North Beach Schuzthund Club is the perfect place for anyone interested in learning how to train their dog. The club provides a supportive and friendly environment for both owners and their dogs. We offer a variety of classes and activities such as basic obedience, agility, tricks, and more. Our trainers are knowledgeable and experienced, and we make sure to tailor the program to meet the individual needs of each dog and owner. We also provide helpful tips and advice on how to best care for your dog and how to develop a strong bond between you and your pet. The NBSC is a great place to start if you are looking to train your pup!"
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

const uscaData = { 
  mainInfo: {
    title: 'USCA SOUTHEAST REGIONAL CHAMPIONSHIP',
    data: [
    'Hosted by: North Beach Schuzthund Club',
    'Judges: Bob Johantgen (stadium) & Nikki Banfield (tracking)',
    'Titles Offered: BH, IGP 1-3, FH (full)',
    'Event Date: March 2-5, 2023'
  ]}, 
  competitors: {
    title: 'Competitors',
    data: [
    'To be determined'
  ]}, 
  trialField: {
    title: 'Trial Field',
    data: [
    'Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527',
    'BH Schedule: Friday March 3 @ 9am - NBSC Field 9170 Hwy 90 Longs, SC 29568',
    'IGP Schedule: Sat/Sun March 4-5 @ 7am start (flights to be updated)'
  ]}, 
  trialFieldImages: [
    images.arial01,
    images.arial02
  ],
  drawNight: {
    title: 'Draw Night',
    data: [
    'Address: Conway Sports & Fitness Center 1515 Mill Pond Rd. Conway, SC 29527',
    'Time: Immediately following general meeting and elections'
  ]},
  helperTryOuts: {
    title: 'Helper Tryouts',
    data: [
    'Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527',
    'Time: Friday March 3, immediately following practice (approx. time will be updated)'
  ]},
  tracking: {
    title: 'Tracking',
    data: [
    'Location and times: to be updated',
    'Surface: dirt or early winter wheat'
  ]},
  hotelLodging: {
    title: 'Hotel Lodging',
    data: [
    'To be updated'
  ]},
  application: {
    title: 'Application',
    onlineURL: 'https://form.jotform.com/223207097316049',
    writtenURL: 'https://www.dropbox.com/s/97odqb1ppkpk3al/Entry%20Form%20SE%20Regionals%202023.pdf?dl=0'
  },
  sponsorsVendors: {
    title: 'Sponsors/Vendors',
    data: [
    'To be updated'
  ]},
  trophies: {
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
  contactInfo: {
    title: 'Contact Information',
    data: [
    'North Beach Schutzhund Club',
    'jrchaires23@gmail.com'
  ]}
}

const data = {
  infoObjs,
  aboutUs,
  events,
  uscaData
};

export default data;
