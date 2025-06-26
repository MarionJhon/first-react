import mountFujiImg from '../assets/ChallengeThree/mount-fuji.jpg'; 
import sydneyOH from '../assets/ChallengeThree/SydneyOH.webp';
import geirangerfjord from '../assets/ChallengeThree/Geirangerfjord.jpg';

export default [
  {
    id: 1,
    img: {
      src: mountFujiImg,
      alt: "Mount Fuji",
    },
    title: "Mount Fuji",
    country: "Japan",
    googleMapsLink:
      "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    id: 2,
    img: {
      src: sydneyOH,
      alt: "Sydney Opera House",
    },
    title: "Sydney Opera House",
    country: "Australia",
    googleMapsLink: "https://maps.app.goo.gl/Zr17SCrsJeCEKMd36",
    date: "27 May, 2021 - 8 Jun, 2021",
    text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
  },
  {
    id: 3,
    img: {
      src: geirangerfjord,
      alt: "Geirangerfjord",
    },
    title: "Geirangerfjord",
    country: "Norway",
    googleMapsLink:
      "https://www.google.com/maps/place/Geirangerfjord/@62.104167,7.207222,15z/data=!3m1!4b1!4m6!3m5!1s0x4611c8f2d9e8f5a7:0x4c2b6d8f8e9c5a0!8m2!3d62.104167!4d7.207222!16zL20vMGNrczA?entry=ttu",
    date: "1 Aug, 2021 - 14 Aug, 2021",
    text: "Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality and is one of the most visited tourist sites in Norway.",
  },
];
