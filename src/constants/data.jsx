import images from './images';

const infoObjs = [
  {
    id: 'info-1',
    topLine: 'First Section Title',
    headline: 'First Section Headline',
    description:
      'My baby distillery shoreditch vexillologist microdosing artisan mustache, salvia brooklyn williamsburg church-key waistcoat prism pug. Chicharrones kogi actually authentic letterpress, prism vexillologist wolf semiotics small batch freegan photo booth scenester. IPhone artisan mustache schlitz banh mi wolf, waistcoat cloud bread shabby chic fanny pack kale chips vice selvage. Banjo live-edge brooklyn hexagon whatever, yr franzen ennui DSA taxidermy paleo',
    buttonLabel: 'Get Started',
    imgUrl: images.photo01,
    alt: 'dog-1',
    reverse: 'false'
  },
  {
    id: 'info-2',
    topLine: 'Second Section Title',
    headline: 'Second Section Headline',
    description:
      'Farm-to-table raclette tumeric artisan meggings locavore. Hot chicken af tilde, unicorn shabby chic cornhole lomo PBR&B banjo. Banh mi tonx hammock stumptown tousled freegan salvia pickled heirloom photo booth before they sold out cloud bread blue bottle chicharrones church-key. Marfa drinking vinegar farm-to-table cold-pressed gentrify.',
    buttonLabel: 'Learn More',
    imgUrl: images.photo02,
    alt: 'dog-2',
    reverse: 'true'
  },
  {
    id: 'info-3',
    topLine: 'Third Section Title',
    headline: 'Third Section Headline',
    description:
      "Normcore shoreditch roof party, cred kinfolk coloring book direct trade quinoa tote bag keffiyeh keytar. Selfies gastropub yr godard knausgaard vice microdosing celiac organic truffaut portland. Messenger bag fam quinoa biodiesel williamsburg adaptogen. Normcore photo booth drinking vinegar, ramps selvage put a bird on it slow-carb waistcoat sartorial pok pok distillery flexitarian enamel pin mustache. Art party hella vegan pitchfork seitan blue bottle, readymade everyday carry post-ironic tilde pork belly keffiyeh shabby chic narwhal.",
    buttonLabel: 'Start Now',
    imgUrl: images.photo03,
    alt: 'dog-3',
    reverse: 'false'
  }
];

const events = [
  {
    id: 'event-1',
    title: 'USCA Southeast Regional Championship',
    dates: 'March 2-5, 2023',
    linkURL: '/usca',
    imgURL: images.uscalogo
  },
  {
    id: 'event-2',
    title: 'Some Other Upcoming Event',
    dates: 'May 2-5, 2023',
    imgURL: images.defaultImg
  }
];

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
  events,
  uscaData
};

export default data;
