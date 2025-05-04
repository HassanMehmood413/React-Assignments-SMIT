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

export { services, clientLogos, testimonials}