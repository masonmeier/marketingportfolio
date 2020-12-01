import Mock from "../mock";

const database = {
  information: {
    name: 'Mason',
    aboutContent: "I am a marketing manager. I can provide targeted growth campaigns, comprehensive business practice analysis and excellent customer conversion rates.",
    age: 25,
    nationality: 'American',
    language: 'English',
    email: 'digitalmasonry2020@gmail.com',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/mason-meier-30a7b2178/',
      dribbble: '',
      github: 'https://github.com/masonmeier'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/mason-meier.pdf'
  },
  services: [
    {
      title: "Client Interaction",
      icon: 'briefcase',
      details: "I can provide targeted client interactions and develop partnerships to grow your business."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "I can create and manage application functionality utilising Javascript and React."
    },
    {
      title: "Business Modernization",
      icon: 'baloon',
      details: "Increases productivity and client interaction by producing clean, easy to use applications."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "Marketing/Sales",
      value: 100
    },
    {
      title: "Partnership Development",
      value: 100
    },
    {
      title: "Market Research",
      value: 100
    },
    {
      title: "Professional Branding",
      value: 90
    },
    {
      title: "Cost/Benefit Analysis",
      value: 80
    },
    {
      title: "HTML5",
      value: 90
    },
    {
      title: "CSS4",
      value: 70
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 60
    },
    {
      title: "ReactJS",
      value: 70
    },
    {
      title: "Bash",
      value: 70
    },
    {
      title: "AWS",
      value: 60
    },
    {
      title: "Photoshop",
      value: 65
    },
    {
      title: "Linux",
      value: 70
    },
    {
      title: "MySQL",
      value: 70
    },
    {
      title: "Redux",
      value: 70
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Where-to",
      subtitle: "An application that helps the user determine what nation in the world most closely aligns with their " +
        "personal values.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://where-to.world'
    },
    {
      id: 2,
      title: "Fitguard Inc",
      subtitle: "A proposed landing page put together for Fitguard Inc.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lrg.jpg",
        "/images/portfolio-image-4-lrg.jpg"
      ],
      url: 'http://fitguard.us'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2017-2020",
        position: "Marketing Director",
        company: "Fitguard Inc.",
        details: "Established a regional monopoly over all Northern California territories by building and leveraging client relationships and creating cyclical growth practices. " +
          "Secured long term state and federal level government contracts. Worked directly with Fortune 500 companies. Generated an expansive network of contacts throughout multiple" +
          " sectors of California's industries."
      },
      {
        id: 2,
        year: "2014 - 2017",
        position: "Installation Team Lead",
        company: "Fitguard Inc.",
        details: "Organized and managed multiple sets of on site machine installation teams. Handled all customer facing interactions for both the installation teams and sales representatives."
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "Self Taught",
        university: "Thinkful Full Stack Software Engineering Boot Camp +",
        details: "Began learning software engineering to assist in modernizing Fitguard Inc. Worked directly with multiple mentors developing skills and projects in: HTML5, CSS4, Javascript, jQuery, React," +
          "AWS and Linux."
      },
      {
        id: 2,
        year: "2009 - 2013",
        graduation: "High School Graduate",
        university: "Natomas Charter School's Performing and Fine Arts Academy",
        details: "Graduated with digital arts accolades. Recognized by the school district for perfect scores on California Standardized Testing. Team lead on background animation for Source production. " +
          "Created installation galleries and stop motion productions. Worked tinting black and white frames for A Trip To the Moon."
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'National Football League',
      featuredImage: '/images/NFL.png',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'National Basketball Association',
      featuredImage: '/images/NBA.png',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'National Hockey League',
      featuredImage: '/images/NHL.png',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Cal Fire',
      featuredImage: '/images/calfire.png',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'California Teachers Association',
      featuredImage: '/images/CTA.png',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'NASA Ames Research Center',
      featuredImage: '/images/nasa.png',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Sony Interactive',
      featuredImage: '/images/sony.png',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Pixar',
      featuredImage: '/images/pixar.png',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: '2K Games',
      featuredImage: '/images/2k.png',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Big Belly',
      featuredImage: '/images/bigbelly.png',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'Seagate',
      featuredImage: '/images/seagate.png',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'Amazon Corporate Housing',
      featuredImage: '/images/amazon.png',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'University of California',
      featuredImage: '/images/uc.png',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'United States Armed Forces',
      featuredImage: '/images/USArmedF.png',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'PG&E',
      featuredImage: '/images/PG&E.png',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['9168127103'],
    emailAddress: ['digitalmasonry2020@gmail.com'],
    address: "Sacramento, Ca"
  }
};


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});