
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
    img: "/images/data-discovery/Datadiscovery3.png",
    overview:
      "An app was needed to allow Anthology users to search for datasets stored within our Data Hub.",
    challenge:
      "It can be time consuming for Product Managers and Data Scientists to discover what data we have available in the Data Hub and how to get access to this data. Different users with different needs needed to be taken in to account with regard to what and how this information was displayed.",
    results:
      "Anthology now has a way to search all datasets housed within the hub and directly contact dataset owners. The amount of time that the process used to take has been greatly reduced.",
    activities: [
      "User Research",
      "User Personas",
      "Task analysis",
      "User interviews",
      "User testing",
    ],
    images: [
      {
        img: "/images/data-discovery/Datadiscovery1.png",
        title: "Wireframes",
      },
      {
        img: "/images/data-discovery/Datadiscovery2.png",
        title: "Initial user feedback",
      },
      {
        img: "/images/data-discovery/Datadiscovery5.png",
        title: "Released design awaiting user feedback",
      },
      {
        img: "/images/data-discovery/Datadiscovery6.png",
        title: "Released design awaiting user feedback",
      },
    ],
  },
  {
    id: "beacon",
    name: "Beacon",
    img: "/images/Beacon/Beacon4.png",
    overview:
      "Anthology Beacon is used on campus to alert faculty to at risk students. A recent redesign of the alert page had received poor user feedback that needed to be addressed.",
    challenge:
      "Users were already frustrated with the initial redesign, time needed to be spent to look at what they needed and include them in the design process. It was determined that we needed to make it easier for faculty and advisors to report and monitor alerts.",
    results: "Based on in app user feedback, 96% of users agreed that the redesign was easier to use",
    activities: [
      "Continous Discovery",
      "User Research",
      "Create Personas",
      "User interviews",
      "User testing",
    ],
    images: [
      { img: "/images/Beacon/Beacon5.png", title: "Initial discovery" },
      { img: "/images/Beacon/User persona beacon.jpg", title: "User persona" },
      { img: "/images/Beacon/Beacon6.png", title: "Decision tree" },
      { img: "/images/Beacon/Beacon7.png", title: "Released design" },
    ],
  },
  {
    id: "insight",
    name: "Insight",
    img: "/images/Insight/Insight5.png",
    overview:
      "Insight brings data together from various solutions (both Anthology and non-Anthology) and helps institutions identify trends to inform decisions. It provides consumable, shareable data and insights to institutional leadership that they are not able to gain from looking at data in a silo.",
    challenge:
      "Through the process of continuous discovery it was determined users needed quicker and easier ways to create visualisations and dashboards. Saving, adding and reusing slices and dimensions was one of the solutions we offered to our users.",
    results:
      "Through in app feedback we determned 100% positive response to the changes we had made.",
    activities: [
      "Continuous Discovery",
      "Task Analysis",
      "User Personas",
      "User Testing",
    ],
    images: [
      { img: "/images/Insight/Tree1.png", title: "Continous discovery" },
      { img: "/images/Insight/Insight2.png", title: "Wire frames" },
      { img: "/images/Insight/Insight1.png", title: "Wire frames" },
      { img: "/images/Insight/Insight3.png", title: "Wire frames" },
      { img: "/images/Insight/Insight4.png", title: "User feedback" },
      { img: "/images/Insight/Insight6.png", title: "Released design" },
    ],
  },
  {
    id: "blackboard",
    name: "Blackboard",
    img: "/images/Blackboard/Bb1.png",
    overview: "Blackboard Ultra is a Learning Management System used on campus by both faculty and students to track courses and course assignments.",
    challenge: "Currently users have to recreate questions every time they want to reuse them in an assignment or test. There are a number of areas within the app that the addidtion of question banks affects and extensive research and testing was needed to deterine what functionality was needed from this feature.",
    results: "Users are satisfied with the feature and it's functionality, In app feedback is still gathering data.",
    activities: [
      "User Research",
      "User Interviews",
      "User Testing",
      "User Feedback",
    ],
    images: [
      { img: "/images/Blackboard/Bb1.png", title: "Wire frames" },
      { img: "/images/Blackboard/Bb2.png", title: "Mock ups" },
      { img: "/images/Blackboard/Bb3.png", title: "Mock ups" },
      { img: "/images/Blackboard/Bb4.png", title: "Mock ups" },
    ],
  },
] as IProject[];
