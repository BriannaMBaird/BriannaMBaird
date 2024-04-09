// gitprofile.config.js

const config = {
  github: {
    username: 'BriannaMBaird', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'BriannaBaird',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://arifszn.com',
    phone: '###-###-0843',
    email: 'bairdb15@students.ecu.edu',
  },
  resume: {
    fileUrl:'C:/Users/baird/OneDrive/Documents/Desktop/brianna%20resume.pdf', 
    // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Database Normalization',
    'JavaScript',
    'HTML',
    'CSS',
    'MYSQL',
    'Data Analysis',
    'GitHub',
    'AWS',
  ],
  experiences: [
    {
      company: 'Olive garden',
      position: 'Kitchen Professional',
      from: 'September 2021',
      to: 'October 2023',
      // companyLink: 'https://example.com',
    },
   
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelors of Arts in Management Information Systems',
      //from: '2015',
      to: '2024',
    },
  
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Vested CVs',
      description:
        'A site where you can personalize your CV and provide a custom link for your prospective employers',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://vestedcv.com',
    },
    {
      title: 'VestedSocials',
      description:
        'A new social media site that will give users the ability to customize their online experience.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://vestedsocials.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#F8F2FF',
      secondary: '#FBF8FF',
      accent: '#9584AA',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
 
};

export default config;
