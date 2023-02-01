import images from './images';

const infoObjs = [
  {
    id: 'info-1',
    topLine: 'What is a sports dog club?',
    headline: 'Sports Dog Club',
    description:
      "Sports Dog Clubs are organizations that promote activities for dogs and their owners to participate in together. They often host competitions, such as agility trials and scent work trials, as well as offering classes and other activities. Many of these clubs also provide educational opportunities and support to their members. They are often a great way for dog owners to meet and socialize with other dog owners, as well as learn new skills and have fun with their dogs.",
    // buttonLabel: 'Get Started',
    imgUrl: images.gallery13,
    alt: 'dog-1',
    reverse: 'false'
  },
  {
    id: 'info-2',
    topLine: '',
    headline: 'Schutzhund/ IGP',
    description:
      "IGP (stands for 'Internationale Gebrauchshunde Prüfungsordnung', German for 'International Working Dog Trial Regulations') is a three phase dog sport formerly known as Schutzhund/IPO that trials in tracking, obedience & protection. It was originally designed as a breed test for the German Shepherd Dog, but has grown into a popular sport that spans many breeds, as well as continuing to function as a breed test for many reputable German Shepherd breeders. At club training, we work together with our dogs and other members to train and prepare for IGP trials.",
    imgUrl: images.gallery14,
    alt: 'dog-2',
    reverse: 'true'
  },
  {
    id: 'info-3',
    topLine: '',
    headline: 'Benefits of training in IGP',
    description:
      "IGP will demand a great deal of time and money. This is not dog training. This is a commitment you make with your working dog for the majority of your dog’s life. By inquiring to train with us and potentially become a member, it is the club’s expectation that you learn and commit to the training required in the sport, you commit to continued attendance of club training days, and you commit to the finances required to maintain the health and well being of your dog (diet, sport equipment, vet appointments, etc..). By making this commitment, you and your dog will benefit well beyond the ability to trial and title within this sport. The bond you will have with your dog, and the heightened ability to communicate and train with your dog will accompany you in every aspect of your life together. Your dog will be better conditioned, have more agility, power, and endurance, and be more loyal and behaved due to better structure and boundaries. You will be a more confident dog handler, you will understand your dog’s needs better, and you will feel a sense of accomplishment from the hard work and long commitment you put towards this sport and its training.",
    imgUrl: images.gallery15,
    alt: 'dog-3',
    reverse: 'false'
  }
];

const aboutUs = {
  title: 'About Us',
  images: [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
    images.gallery06,
    images.gallery07,
    images.gallery08,
    images.gallery09,
    images.gallery10,
    images.gallery11,
    images.gallery12,
    images.gallery13,
    images.gallery14,
    images.gallery15
  ],
  scrollImages: 'true',
  data: [
    { line_item: "North Beach Schutzhund Club (NBSC) is an all-breed club within the Southeastern Region of the United Schutzhund Clubs of America (USCA). We are dedicated to the sport of Schutzhund (now called IGP), a sport that focuses on the genetics of working dogs, and the testing of temperament and training in 3 different phases, tracking, obedience, and protection." },
    { line_break: " " },
    { line_item: "Please note, we are not a dog training organization. If you are seeking basic dog obedience training, we might be able to refer to you the proper company or trainer depending on your situation." }
  ]
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
  ]
};

const uscaData = [
  {
    title: 'USCA SOUTHEAST REGIONAL CHAMPIONSHIP',
    images: [
      images.uscalogo
    ],
    data: [
      { line_item: "Hosted by: North Beach Schuzthund Club" },
      { line_item: "Judges: Bob Johantgen (stadium) & Nikki Banfield (tracking)" },
      { line_item: "Titles Offered: BH, IGP 1-3, FH (full)" },
      { line_item: "Event Date: March 2-5, 2023" }
    ]
  },
  {
    title: 'Competitors',
    data: [
      { data_subtitle: "IGP3" },
      { line_item: "Tom Kimball w. Jordan vom Tapferen Krieger" },
      { line_item: "Megan Kersey w. Dirk vom Nordecker Hof" },
      { line_item: "Gina Bishop w. Oreo vom Eisernen Kreuz" },
      { line_item: "Jim Hill w. Perseus od Hradcanskeho Rybnika" },
      { line_item: "Joe Galan w. Nicodemus von der Falsentadt" },
      { line_item: "Benjamin Maez w. Yyatt vom Geistwasser" },
      { line_item: "Sean Keeler w. Hondo von der Felsenstadt" },
      { line_item: "Anne Dunton w. Bellatrix Athena Josephine von Duntonhaus" },
      { line_item: "Robbie Dunton w. Red Barron von Duntonhaus" },
      { line_item: "Rachel Taiclet w. X'Cayde von Fieldshaus" },
      { line_item: "Brent Eckler w. Y' Maximus von Hanrahaus" },
      { line_item: "Anna Duke w. Grim Reaper van het Bos" },
      { line_item: "Tony Mcghee w. Oskar Leistung V Bora" },
      { line_item: "Veit Bachmann w. Desert Eagle von der Feldweise" },
      { line_item: "Kim Accashian w. Zuko von Zobelhond" },
      { line_item: "Julie Lininger w. Gonso von Hugelblick" },
      { line_break: " " },
      { data_subtitle: "IGP2" },
      { line_item: "William Viebahn w. J'Kaios vom Quellwasser" },
      { line_break: " " },
      { data_subtitle: "FH" },
      { line_item: "Felicia Richardson w. Isabelle vom Haus Schair" },
      { line_item: "JaQuasia Thompson w. Gigi von der Herzen Haus" },
      { line_item: "Stanley Craddok w. Hamlyn von der Bosen Hoyle" },
      { line_item: "Sue Birch" },
      { line_item: "Rick Schair w. Ira vom Scwarzen Bar" },
      { line_item: "Chris Bettin w. Ace von Schweizer" },
      { line_item: "Allison Bentley w. Ethelwulf From The Southland" },
      { line_item: "Cynthia DeSantis w. Skye" },
      { line_item: "Jackie Camp w. Yankee von Kaltwasser" },
      { line_item: "Karen Groh w. Falu vom Schloss Gymnich" }
    ]
  },
  {
    title: 'Trial Field',
    images: [
      images.arial01,
      images.arial02
    ],
    scrollImages: 'true',
    data: [
      { line_item: "Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527" },
      { line_item: "BH Schedule: Friday March 3 @ 9am - NBSC Field 9170 Hwy 90 Longs, SC 29568" },
      { line_item: "IGP Schedule: Sat/Sun March 4-5 @ 7am start (flights to be updated)" }
    ]
  },
  {
    title: 'Draw Night',
    data: [
      { line_item: "Address: Conway Sports & Fitness Center 1515 Mill Pond Rd. Conway, SC 29527" },
      { line_item: "Time: Immediately following general meeting and elections" }
    ]
  },
  {
    title: 'Helper Tryouts',
    data: [
      { line_item: "Address: Conway Parks & Rec Fields 1717 Mill Pond Rd. Conway, SC 29527" },
      { line_item: "Time: Friday March 3, immediately following practice (approx. time will be updated)" }
    ]
  },
  {
    title: 'Tracking',
    images: [
      images.tracking01,
      images.tracking02,
      images.tracking03
    ],
    scrollImages: 'true',
    data: [
      { line_item: "IGP and FH tracking will be on winter rye. There are no official tracking practice fields in the area. We very much appreciate the generosity of the farming property owner, he is allowing us to have ample acreage of this amazing condition to accommodate our trial." }
    ]
  },
  {
    title: 'Hotel Lodging',
    data: [
      { line_item: "Unfortunately there are not any pet friendly hotels in Conway. However, all the hotels listed confirmed it was ok to have dogs in cars/trailers in the parking lot. As always, please pick up after your dog. If you see someone missed picking up after theirs and you have an extra bag, do the right thing." },
      { line_break: " " },
      { line_break: " " },
      { data_subtitle: "HOST HOTEL:" },
      { line_break: "" },
      { line_item: "Comfort Suites at the University" },
      { line_item: "2480 Hwy 501 E" },
      { line_item: "Conway, SC" },
      { line_item: "A block of rooms has been set aside for $99 a night" },
      { line_item: "Book rooms under 'Southeast Regional'" },
      { line_item: "11 minutes from the venue (No dogs in rooms)" },
      { line_break: " " },
      { line_break: " " },
      { data_subtitle: "OTHER NEARBY HOTELS:" },
      { line_break: "" },
      { line_item: "SureStay Hotel by Best Western" },
      { line_item: "1004 Waccamaw Dr" },
      { line_item: "Conway, SC" },
      { line_item: "6 minutes from venue (parking lot is smaller, may be difficult for those pulling trailers)" },
      { line_break: " " },
      { line_item: "Quality Inn" },
      { line_item: "3345 US-501" },
      { line_item: "Conway, SC" },
      { line_item: "6 minutes from venue" },
      { line_break: " " },
      { line_item: "Econo Lodge at the University" },
      { line_item: "2376 US-501 Building B" },
      { line_item: "Conway, SC" },
      { line_item: "10 minutes from venue" },
      { line_break: " " },
      { line_item: "Econo Lodge at Church St." },
      { line_item: "1101 Church St. #501" },
      { line_item: "Conway, SC" },
      { line_break: " " },
      { line_item: "NOTE: Econo Lodge on Church St states that it is pet friendly. However, when we inquired, they stated that it had to be dogs under 35 lbs and their policy did not allow dogs to be in cars. So we would caution anyone from booking there." },
      { line_break: " " },
      { line_break: " " },
      { data_subtitle: "HOTEL ALTERNATIVES:" },
      { line_item: "RV / Travel Trailers:" },
      { line_item: "Carolina Pines RV Resort" },
      { line_item: "5800 SC-90" },
      { line_item: "Conway, SC" },
      { line_item: "It is a very nice resort and has great amenities. 21 minutes from the venue." },
      { line_break: " " },
      { line_break: " " },
      { data_subtitle: "AIR BNB:" },
      { line_item: "If you’re interested in AirBnB options then we recommend searching within Conway, SC. North Myrtle Beach, SC is about 35-40 minutes away from the venue and is a nice place to stay especially if you’re making this a beach vacation!" }
    ]
  },
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
    images: [
      images.sponsor01,
      images.sponsor02,
      images.sponsor03
    ],
    scrollImages: 'true',
    data: [
      { data_subtitle: "Vendors:" },
      { line_item: "Sorenhaus K9 Supply" },
      { line_item: "Black Dawg Studio" },
      { line_item: "The K9 Development Center" }
    ]
  },
  {
    title: 'Trophies (and sponsorship pricing)',
    data: [
      { line_item: "Trophies (and sponsorship pricing). Please email jrchaires23@gmail.com to sponsor any open trophy (specify which trophy you’d like to sponsor)" },
      { line_break: " " },
      { line_item: "Regional Champion $150" },
      { line_item: "IGP 3 1st place $75" },
      { line_item: "IGP 3 2nd place $60" },
      { line_item: "IGP 3 3rd place $60" },
      { line_item: "IGP 3 4th place $60" },
      { line_item: "IGP 3 5th place $60" },
      { line_item: "FH Champion $75" },
      { line_item: "FH 2nd place $60" },
      { line_item: "FH 3rd place $60" },
      { line_item: "IGP 2 Champion $75" },
      { line_item: "IGP 2 2nd place $60" },
      { line_item: "IGP 2 3rd place $60" },
      { line_item: "IGP 1 Champion $75" },
      { line_item: "IGP 1 2nd place $60" },
      { line_item: "IGP 1 3rd place $60" },
      { line_item: "High Tracking $60" },
      { line_item: "High Obedience $60" },
      { line_item: "High Protection $60" },
      { line_item: "High HOT $60" },
      { line_item: "High BHOT $60" },
      { line_item: "High Scoring Female Dog $60 – Sandy Reeves" },
      { line_item: "High Auslander $60" },
      { line_item: "High Breed Survey Dog $60" },
      { line_item: "High Scoring Club $60" },
      { line_item: "Helpers Favorite $60 – Sommerfeld German Shepherds" },
      { line_item: "Sportsmanship Award $60 – Blackfoot K9" }
    ]
  },
  {
    title: 'Contact Information',
    data: [
      { line_item: "North Beach Schutzhund Club" },
      { line_item: "jrchaires23@gmail.com" }
    ]
  }
];

const faqs = {
  title: "Freqently Asked Questions",
  data: [
    {
      question: "What days do you train?",
      responses: [
        { line_item: "We currently train on Wednesday evenings and Saturday mornings. Anyone who has not attended before must inquire with the club first to see if attending a training session is the correct fit for you." },
      ]
    },
    {
      question: "Where do you train",
      responses: [
        { line_item: "Our training field is in Longs, SC. If it’s determined by both sides that your needs or interests are a good match with the club, we will update you on that week’s training schedule. "}
      ]
    },
    {
      question: "Do I need to become a member or notify anyone in advance before coming to train?",
      responses: [
        { line_item: "Training in this sport is a commitment, one that we as a club expect all members to maintain. If it’s determined by both sides after an initial assessment that your training needs and interests are a good fit, you will be required to become a member of United Schutzhund Clubs of America, and North Beach Schutzhund Club. Both require annual dues. Before coming out the first time, please inquire with the club to ensure it’s a good fit for both sides. We want to ensure everyone’s time, including yours, is maximized."}
      ]
    },
    {
      question: "I do not have any prior training experience, and/or have not trained my dog before this. Do I need to learn anything or train my dog on anything before coming out?",
      responses: [
        { line_item: "No prior training is required. In many ways, if you are not familiar with the sport, it’s actually better to have done nothing with your dog beforehand, to give you and your dog a “clean slate” with our trainer to start the foundation work just right. But no matter where you are with your training, you can always start learning the sport. You will need to be ready and willing to learn, and commit to the training every day. This sport is not a class. It’s a lifestyle."}
      ]
    },
    {
      question: "I want to train with my dog but I’m not really sure if I want to participate in the actual sport. Is that an issue?",
      responses: [
        { line_item: "Long term, yes it is. The club has a singular purpose, which is for all members to trial within the sport of IGP. If your interest lies with casual training, we may be able to refer you to a trainer in the area."}
      ]
    },
    {
      question: "Can we visit and observe before committing to training?",
      responses: [
        { line_item: "Please contact the club so we can help you asses if this might be the right fit for your needs and interests. If it seems to be a potentially good fit, we welcome you to come out and observe before getting started."}
      ]
    },
    {
      question: "Does my dog have to pass a “test” to be able to train in the sport?",
      responses: [
        { line_item: "No behavioral testing is required to start training (although if your dog is truly aggressive or dangerous, we may need to assess the situation with you. The safety of all the dogs and handlers who train at our field is our main priority). If your dog has natural behaviors and drives that gear towards the sport, you will have an easier time with your training. If your dog does not have those traits, or has them in low amounts, you can definitely still train with us. We will work with you on finding things that help your training methods. Each dog and each owner present a different dynamic."}
      ]
    },
    {
      question: "Is there an age requirement for a dog to train with the club?",
      responses: [
        { line_item: "A puppy should be 8 weeks old and have all of their initial shots from the breeder (it’s rare for a breeder or shelter to give a puppy to a new owner before 8 weeks anyways, due to the weening process from the mom, and also vaccinations). There is no age limitation beyond that, any puppy older than 8 weeks is welcome. This includes older dogs that may not have trained as a puppy but you want to get them into something now. We’ll start training the dog where they are at, including their age and any prior training (or none). We may have you not train protection when your puppy is teething, but will assess."}
      ]
    },
    {
      question: "What are your training and equipment requirements?",
      responses: [
        { line_item: "To begin in obedience, you will need bite size training treats, a flat collar or fur saver, a toy, and a 4-5 ft leash. To begin in protection, you will need a body harness for your dog that has an o-ring your leash or line can clip to between the shoulder blades or on the back, and an 6-10ft line. For any training, you will need to have your dog in a crate, either in our outside of your car. You may NOT have your dog loose in the car. Your dog must remain in the crate when other dogs are working on the field, before or after your turn."},
        { line_break: " " },
        { line_item: "They cannot stay with you while you observe (unless you have been instructed to keep them with you for a specific training purpose), and they cannot be loose in your car. Your dog should also NEVER be off leash, unless it is a specific part of your training during your turn. Losing control of your dog when it was preventable is grounds for immediate dismissal. All dogs should be crated, and should only be out (leashed) when going potty with you, or when it’s your turn to go on to the field."}
      ]
    },
    {
      question: "I want a protection dog. Is this the right training for that?",
      responses: [
        { line_item: "No it’s not. We do not train protection dogs, that is a different type of training that we don’t specialize in. All of our protection work is geared solely for the sport and it’s rules/requirements."}
      ]
    }
  ]
};

const contactUs = {
  title_cu: 'Contact Us',
  name_long: 'North Beach Schuzthund Club',
  name_short: 'NBSC',
  addr: "",
  city: 'Longs',
  state_long: 'South Carolina',
  state_short: 'SC',
  postal_code: '',
  country: 'USA',
  phone_1: '212-345-6478',
  phone_2: '212-456-7890',
  email_1: 'northbeachschutzhundclub@gmail.com',
  email_2: 'jrchaires23@gmail.com',
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
  faqs,
  contactUs
};

export default data;
