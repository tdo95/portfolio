export const portfolio = {
    personal: {
        name: 'Tee O.',
        links: {
            github: 'https://github.com/tdo95',
            linkedin: 'https://www.linkedin.com/in/tee-o/',
            email: 'mailto:tdopress@gmail.com',
        },

    },
    projects: [
        {
            title: 'DiscoList',
            description: 'A music browsing web application that integrates the Spotify API. Look up the discography of all your favorite artists.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'Spotify API'],
            githubLink: 'https://github.com/tdo95/discolist',
            demoLink: 'https://discolist.cyclic.app/',
            image: 'discolistthumb.png',

        },
        {
            title: 'Travlr',
            description: 'A CRUD application that allows users to keep track of all thier future travel destinations. Create a running log of the location and travel time, along with any notes.',
            tech: ['HTML', 'EJS', 'CSS', 'JavaScript', 'Node', 'Express', 'Unsplash API', 'Roadgoat API'],
            githubLink: 'https://github.com/tdo95/travlr',
            demoLink: 'https://travlr.onrender.com/',
            image: 'travlr_thumbnail.png',

        },
        {
            title: 'Countries of the World',
            description: 'An API that serves social and geographical information about all of the soverign countries in the world.',
            tech: ['HTML', 'EJS', 'CSS', 'JavaScript', 'Node', 'Express', 'Axios', 'Cheerio'],
            githubLink: 'https://github.com/tdo95/countries-of-the-world-api',
            demoLink: 'https://countries-of-the-world.cyclic.app/',
            image: 'countries_thumb.png',

        },

    ],
    articles: [
        {
            title: 'JavaScript Event Loop: Explained Simply',
            description: 'An overview of the Event Loop, convering the fundamentals of task queues, call stacks, and the JS Engine',
            link: 'https://dev.to/tdo95/javascript-event-loop-everything-you-need-to-know-explained-in-simple-terms-fg0',
            type: 'Article'
        },
        {
            title: 'Model View Controller',
            description: 'A presentation guide to the most popular architectural style used to struture web applications.',
            link: 'https://docs.google.com/presentation/d/15PcugDQhC84xCn_pqKAopiH2XAu-6Iv37qdHqwCRDjo/edit?usp=sharing',
            type: 'Presentation',
        }

    ],
    skills: [
        {
            categoryName: 'Programming Languages',
            values: ['JavaScript', 'C/C++', 'Python']
        },
        {
            categoryName: 'Technical Skills',
            values: ['React.js', 'Node.js', 'MongoDB', 'Django','Flask', 'jQuery', 'Vue', 'Mongoose','Git','NPM','HTML','CSS']
        },
        {
            categoryName: 'Misc.',
            values: ['Object Oriented Programming','Web Accessibility', 'RESTful APIs']
        }
    ]
}