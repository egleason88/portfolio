export interface IProject {
  id: string;
  name: string;
  img: string;
  overview: string;
  challenge: string;
  results: string;
  activities: string[];
  images: string[];
}

export const Projects = [
  {
    id: "data-discovery",
    name: "Data Discovery",
    img: "/portfolio/images/data-discovery/main.png",
    overview: "My cool overview",
    challenge: "My cool Challenge",
    results: "My crappy results",
    activities: [
      "User Research",
      "User Preparation",
      "User Bulling",
      "User Bribery",
    ],
    images: ["/portfolio/images/data-discovery/main.png"],
  },
  {
    id: "beacon",
    name: "Beacon",
    img: "/portfolio/images/data-discovery/main.png",
    overview: "My cool overview",
    challenge: "My cool Challenge",
    results: "My crappy results",
    activities: [
      "User Research",
      "User Preparation",
      "User Bulling",
      "User Bribery",
    ],
    images: ["/portfolio/images/data-discovery/main.png"],
  },
  {
    id: "insight",
    name: "Insight",
    img: "/portfolio/images/data-discovery/main.png",
    overview: "My cool overview",
    challenge: "My cool Challenge",
    results: "My crappy results",
    activities: [
      "User Research",
      "User Preparation",
      "User Bulling",
      "User Bribery",
    ],
    images: ["/portfolio/images/data-discovery/main.png"],
  },
  {
    id: "blackboard",
    name: "Blackboard",
    img: "/portfolio/images/data-discovery/main.png",
    overview: "My cool overview",
    challenge: "My cool Challenge",
    results: "My crappy results",
    activities: [
      "User Research",
      "User Preparation",
      "User Bulling",
      "User Bribery",
    ],
    images: ["/portfolio/images/data-discovery/main.png"],
  },
] as IProject[];
