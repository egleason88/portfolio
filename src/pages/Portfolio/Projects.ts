export interface IProject {
  id: string;
  name: string;
  img: string;
  overview: string;
  challenge: string;
  results: string;
  activities: string[];
  images: { title: string; img: string }[];
}

export const Projects = [
  {
    id: "data-discovery",
    name: "Data Discovery",
    img: "/portfolio/images/data-discovery/Datadiscovery3.png",
    overview:
      "The Data Discovery app allows users to search for datasets housed within our Data Hub",
    challenge:
      "It can be time consuming for Product Managers and Data Scientists to discover what data we have available in the Data Hub and how to access this data",
    results:
      "Anthology now has a way to search all datasets housed within the hub, directly contact dataset owners and the amount of time that the process used to take has been greatly reduced",
    activities: [
      "User Research",
      "User Personas",
      "Task analysis",
      "User interviews",
      "User testing",
    ],
    images: [
      {
        img: "/portfolio/images/data-discovery/Datadiscovery1.png",
        title: "Test",
      },
      {
        img: "/portfolio/images/data-discovery/Datadiscovery2.png",
        title: "Test",
      },
      {
        img: "/portfolio/images/data-discovery/Datadiscovery5.png",
        title: "Test",
      },
      {
        img: "/portfolio/images/data-discovery/Datadiscovery6.png",
        title: "Test",
      },
    ],
  },
  {
    id: "beacon",
    name: "Beacon",
    img: "/portfolio/images/Beacon/Beacon4.png",
    overview:
      "Anthology Beacon is used on campus to alert faculty to at risk students. A recent redesign of the alert page had received poor user feedback that needed to be addressed",
    challenge:
      "We needed to make it easier for faculty and advisors to report and monitor alerts",
    results: "96% of users agreed that the redesign was easier to use",
    activities: [
      "Continous Discovery",
      "User Research",
      "Create Personas",
      "User interviews",
      "User testing",
    ],
    images: [
      { img: "/portfolio/images/Beacon/Beacon5.png", title: "Test" },
      { img: "/portfolio/images/Beacon/Beacon6.png", title: "Test" },
      { img: "/portfolio/images/Beacon/Beacon7.png", title: "Test" },
    ],
  },
  {
    id: "insight",
    name: "Insight",
    img: "/portfolio/images/Insight/Insight5.png",
    overview:
      "Insight brings togethter data froma number of differentat apps and provides a way to dig deeper in to that data an= to gaina better understanding of things that are happening on campus",
    challenge:
      "Thorught hre process of continusu discvoery it was detemeined useres needed quicker ways to create visualisatins and saving, adding and reusing slices and dimenssions was one of them.",
    results:
      "Through in app feedback we determned 100% positive respponse to the changes we had made",
    activities: [
      "Continuous Discovery",
      "Task Analysis",
      "User Personas",
      "User Testing",
    ],
    images: [
      { img: "/portfolio/images/Insight/Insight1.png", title: "Test" },
      { img: "/portfolio/images/Insight/Insight2.png", title: "Test" },
      { img: "/portfolio/images/Insight/Insight3.png", title: "Test" },
      { img: "/portfolio/images/Insight/Insight4.png", title: "Test" },
      { img: "/portfolio/images/Insight/Insight6.png", title: "Test" },
    ],
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
    images: [{ img: "/portfolio/images/Insight/Insight1.png", title: "test" }],
  },
] as IProject[];
