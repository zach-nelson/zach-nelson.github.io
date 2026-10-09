// Timeline and knowledge graph data for Zach Nelson's site
// Edit this file to update the timeline, interests, connections, and future paths

const siteData = {
  // Timeline events: when interests began
  timeline: [
    { year: 1977, label: "Origin point", description: "Voyager launches", isOrigin: true },
    { year: 1994, label: "Physics & calculus", description: "Community college courses while in high school" },
    { year: 1996, label: "Biochemistry", description: "Started undergraduate work" },
    { year: 2000, label: "Wildlife", description: "Degree completed; wildlife work begins" },
    { year: 2001, label: "Geospatial", description: "GIS and spatial analysis" },
    { year: 2002, label: "Remote sensing & mapping", description: "Wildlife–habitat relationships" },
    { year: 2004, label: "Python & R", description: "GIS scripting; statistics" },
    { year: 2008, label: "Modeling", description: "Grid-based and simulation modeling" },
    { year: 2008, label: "Economics & social systems", description: "Macroeconomics, sovereign currency systems, economic models and policy, history, and sociology" },
    { year: 2012, label: "Data science & decision support", description: "R tidyverse (early adopter); decision support tools" },
    { year: 2012, label: "Learning & child development", description: "Learning processes and child development" },
    { year: 2015, label: "Reproducible research", description: "Grew from data compliance burden—automated methods to get unburied" }
  ],

  // Nodes for the knowledge graph: ideas and their connections
  // Each node shows up in the graph when its startYear arrives
  nodes: [
    { id: "voyager", label: "Voyager", startYear: 1977, category: "baseline" },
    { id: "physics", label: "Physics", startYear: 1994, category: "science" },
    { id: "calculus", label: "Calculus", startYear: 1994, category: "science" },
    { id: "biochem", label: "Biochemistry", startYear: 1996, category: "science" },
    { id: "wildlife", label: "Wildlife ecology", startYear: 2000, category: "ecology" },
    { id: "geospatial", label: "Geospatial analysis", startYear: 2001, category: "technical" },
    { id: "remote-sensing", label: "Remote sensing", startYear: 2002, category: "technical" },
    { id: "mapping", label: "Mapping", startYear: 2002, category: "technical" },
    { id: "habitat", label: "Wildlife–habitat relationships", startYear: 2002, category: "ecology" },
    { id: "python", label: "Python", startYear: 2004, category: "technical" },
    { id: "r-lang", label: "R", startYear: 2004, category: "technical" },
    { id: "statistics", label: "Statistics", startYear: 2004, category: "science" },
    { id: "gis-scripting", label: "GIS scripting", startYear: 2004, category: "technical" },
    { id: "grid-models", label: "Grid-based models", startYear: 2008, category: "modeling" },
    { id: "simulation", label: "Simulation modeling", startYear: 2008, category: "modeling" },
    { id: "macroeconomics", label: "Macroeconomics", startYear: 2008, category: "social" },
    { id: "currencies", label: "Currency systems", startYear: 2008, category: "social" },
    { id: "economic-models", label: "Economic models", startYear: 2008, category: "social" },
    { id: "policy", label: "Policy", startYear: 2008, category: "social" },
    { id: "history", label: "History", startYear: 2008, category: "social" },
    { id: "sociology", label: "Sociology", startYear: 2008, category: "social" },
    { id: "tidyverse", label: "Tidyverse", startYear: 2012, category: "technical" },
    { id: "data-science", label: "Data science", startYear: 2012, category: "technical" },
    { id: "decision-support", label: "Decision support", startYear: 2012, category: "application" },
    { id: "learning-dev", label: "Learning & development", startYear: 2012, category: "science" },
    { id: "child-development", label: "Child development", startYear: 2012, category: "science" },
    { id: "reproducible", label: "Reproducible research", startYear: 2015, category: "practice" },
    { id: "automation", label: "Automation", startYear: 2015, category: "practice" },
    { id: "pipelines", label: "Data pipelines", startYear: 2015, category: "technical" },
    { id: "reporting", label: "Automated reporting", startYear: 2015, category: "application" },
    { id: "efficiency", label: "Practical efficiency", startYear: 2015, category: "practice" }
  ],

  // Links between nodes: how ideas connect
  // These show the web of relationships in the knowledge graph
  links: [
    { source: "physics", target: "calculus" },
    { source: "calculus", target: "statistics" },
    { source: "physics", target: "biochem" },
    { source: "biochem", target: "wildlife" },
    { source: "wildlife", target: "habitat" },
    { source: "wildlife", target: "geospatial" },
    { source: "geospatial", target: "mapping" },
    { source: "geospatial", target: "remote-sensing" },
    { source: "habitat", target: "remote-sensing" },
    { source: "geospatial", target: "gis-scripting" },
    { source: "gis-scripting", target: "python" },
    { source: "gis-scripting", target: "r-lang" },
    { source: "statistics", target: "r-lang" },
    { source: "r-lang", target: "grid-models" },
    { source: "python", target: "grid-models" },
    { source: "grid-models", target: "simulation" },
    { source: "habitat", target: "grid-models" },
    { source: "r-lang", target: "tidyverse" },
    { source: "tidyverse", target: "data-science" },
    { source: "statistics", target: "data-science" },
    { source: "data-science", target: "decision-support" },
    { source: "mapping", target: "decision-support" },
    { source: "decision-support", target: "reproducible" },
    { source: "data-science", target: "reproducible" },
    { source: "reproducible", target: "automation" },
    { source: "automation", target: "pipelines" },
    { source: "pipelines", target: "reporting" },
    { source: "automation", target: "efficiency" },
    { source: "efficiency", target: "reporting" },
    
    // Economics & social systems cluster (interconnected)
    { source: "macroeconomics", target: "currencies" },
    { source: "macroeconomics", target: "economic-models" },
    { source: "economic-models", target: "policy" },
    { source: "macroeconomics", target: "history" },
    { source: "economic-models", target: "history" },
    { source: "policy", target: "sociology" },
    { source: "history", target: "sociology" },
    { source: "currencies", target: "economic-models" },
    
    // Learning & child development connections
    { source: "learning-dev", target: "child-development" },
    { source: "child-development", target: "statistics" },
    { source: "learning-dev", target: "data-science" }
  ],

  // Narrative text explaining the journey
  narrative: {
    intro: "I've followed curiosity from biochemistry through wildlife ecology into geospatial science and data systems. Most of the engineering grew from practical needs: saddled with monotonous data compliance, I built automated methods to get unburied. Building those systems is now fun and useful, and quicker than ever.",
    current: "Right now I work on groundwater-dependent ecosystems, helping answer questions with data, models, and reproducible tools."
  },

  // Future paths: possible directions (keep these open-ended and modest)
  // These appear as faint, dashed branches at the present end of the timeline
  futurePaths: [
    "Faster tool-building with AI assistance",
    "More simulation and spatial modeling",
    "Better decision support systems"
  ],

  // Contact info
  contact: {
    email: "zjnelson2010@gmail.com",
    github: "zach-nelson",
    location: "Bishop, California",
    county: "inyowater.org/contact-us"
  }
};
