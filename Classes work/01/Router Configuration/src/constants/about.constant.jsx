import MobileImage from '../assets/images/icon-app.svg'
import WebImage from '../assets/images/icon-dev.svg'
import PhotographyImage from '../assets/images/icon-photo.svg'
import WebDesignImage from '../assets/images/icon-design.svg'
import Logo2 from '../assets/images/logo-2-color.png'
import Logo3 from '../assets/images/logo-3-color.png'
import Logo4 from '../assets/images/logo-4-color.png'
import Logo5 from '../assets/images/logo-5-color.png'
import Logo6 from '../assets/images/logo-6-color.png'
import Avator1 from '../assets/images/avatar-1.png'
import Avator2 from '../assets/images/avatar-2.png'
import Avator3 from '../assets/images/avatar-3.png'
import Avator4 from '../assets/images/avatar-4.png'

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    image: WebImage,
    button: "More"
  },
  {
    id: 2,
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android.",
    image: MobileImage,
    button: "Help"
  },
  {
    id: 3,
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level.",
    image: PhotographyImage,
    button: "Show"
  },
  {
    id: 4,
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level.",
    image: WebDesignImage,
    button: "View"
  }
];

const clientLogos = [
  { id: 1, logo: Logo2 },
  { id: 2, logo: Logo3 },
  { id: 3, logo: Logo4 },
  { id: 4, logo: Logo5 },
  { id: 5, logo: Logo6 }
];

const testimonials = [
  {
    id: 1,
    name: "Daniel lewis",
    avatar: Avator1,
    review: "Richard was hired to create a corporate identity..."
  },
  {
    id: 2,
    name: "Jessica miller",
    avatar: Avator2,
    review: "Richard was hired to create a corporate identity..."
  },
  {
    id: 3,
    name: "Michael davis",
    avatar: Avator3,
    review: "Richard was hired to create a corporate identity..."
  },
  {
    id: 4,
    name: "Steven smith",
    avatar: Avator4,
    review: "Richard was hired to create a corporate identity..."
  }
];


const EducationData = [
  {
    title: 'University school of the arts',
    year: '2007 — 2008',
    description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores etquas molestias exceptur.'
  },
  {
    title: 'New york academy of art',
    year: '2006 — 2007',
    description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda estomnis...'
  },
  {
    title: 'High school of art and design',
    year: '2002 — 2004',
    description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
  },
]


const ExperienceData = [
  {
    title: 'Creative director',
    year: '2015 — Present',
    description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
  },
  {
    title: 'Art director',
    year: '2013 — 2015',
    description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
  },
  {
    title: 'Web designer',
    year: '2010 — 2013',
    description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
  },
]

export { services, clientLogos, testimonials, EducationData, ExperienceData }