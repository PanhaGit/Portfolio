import img1 from "../../../assets/DataPicProject/1 (1).png";
import img2 from "../../../assets/DataPicProject/1 (2).png";
import img3 from "../../../assets/DataPicProject/1 (3).png";
import img4 from "../../../assets/DataPicProject/4.jpg";
import img5 from "../../../assets/DataPicProject/5.jpg";
import img6 from "../../../assets/DataPicProject/6.jpg";
import img7 from "../../../assets/DataPicProject/7.jpg";
import img8 from "../../../assets/DataPicProject/8.jpg";
import img9 from "../../../assets/DataPicProject/9.jpg";

interface Data {
  id: number;
  img: string;
  skills: string;
  title: string;
  description: string;
}

const dataProject: Data[] = [
  {
    id: 6,
    img: img6,
    skills: "app",
    title: "App Food",
    description: "Mobile App, IOS,Android easy for sale",
  },
  {
    id: 5,
    img: img5,
    skills: "design",
    title: "Poster Design",
    description: "poster about subject programming, Mobile App, IOS,Android",
  },

  {
    id: 3,
    img: img3,
    skills: "web",
    title: "Sale computer",
    description: "Small website for show model to customers at the store",
  },
  {
    id: 7,
    img: img7,
    skills: "web",
    title: "Web sale Drink",
    description: "Small website for show model to customers at the store",
  },
  {
    id: 4,
    img: img4,
    skills: "design",
    title: "Poster Design",
    description: "poster about subject programming, Web and basic programming",
  },
  {
    id: 2,
    img: img2,
    skills: "web",
    title: "Web Appcalition sell Drink",
    description: "Website for small Business",
  },
  {
    id: 1,
    img: img1,
    skills: "web",
    title: "Travel Web Application",
    description: "To book domestic and international tours",
  },
  {
    id: 8,
    img: img8,
    skills: "app",
    title: "App Food Pizza",
    description: "Mobile App, IOS,Android easy for sale Food pizz...",
  },
  {
    id: 9,
    img: img9,
    skills: "design",
    title: "banner",
    description: "Mobile App, IOS,Android easy for sale Food pizz...",
  },
];

export default dataProject;
