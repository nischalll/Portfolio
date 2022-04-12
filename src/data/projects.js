export default function getProjects() {
  return [
    {
      img:"",
      id: 1,
      image:'portfolio-project.png',
      projectTitle: "Portfolio Website",
      projectInfo:
        "Always wanted a good looking portfolio website but didn't knew        where to start from so i ended up creating this awesome website.Might add some more things in here later.",
      techUsed: ["React", "HTML", "CSS"],
      projectLinkHosted: "https://www.nischal.ml",
      projectLinkGithub: "https://github.com/nischalll/portfolio",
    },
    {
      id: 2,
      projectTitle: "Vidly",
      image:"vidly-project.png",
      projectInfo: "a movie store app to manage movies.",
      techUsed: ["React", "HTML", "CSS"],
      projectLinkHosted: "https://vidlyappbynischal.netlify.app",
      projectLinkGithub: "https://github.com/nischalll/vidly",
    },
    {
      id: 3,
      projectTitle: "Meme Generator",
      image:"meme-generator.png",
      projectInfo:
        "A Meme generator app which consumes different meme templates from meme api and let's you add custom text",
      techUsed: ["React", "HTML", "CSS"],
      projectLinkHosted: "https://memegeneratorbynischal.netlify.app/",
      projectLinkGithub: "https://github.com/nischalll/memegenerator",
    },
    {
      id: 4,
      projectTitle: "Blogpot",
      image:"blogpot.png",
      projectInfo:
        "A simple blog app made in django i created it when i was still learning html and css.",
      techUsed: ["HTML", "CSS", "Django"],
      projectLinkHosted: "https://nsn-blog.herokuapp.com/",
      projectLinkGithub: "https://github.com/nischalll/blog",
    },
  ];
}