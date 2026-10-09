// Timeline and knowledge graph data for Zach Nelson's site
// Edit this file to update the timeline, interests, connections, and future paths

const siteData = {
  // Timeline events: when interests began
  timeline: [
    { year: 1977, label: "Origin point", description: "Voyager launches", isOrigin: true },
    { year: 1994, label: "Physics & calculus", description: "Community college courses while in high school" },
    { year: 1996, label: "Biochemistry", description: "Started undergraduate work" },
    { year: 2000, label: "Wildlife biology", description: "Degree completed; field work begins" },
    { year: 2000, label: "Rats, mongoose, and birds, Hawaii", description: "" },
    { year: 2001, label: "Birds, Mexico", description: "" },
    { year: 2001, label: "Birds, San Clemente Island", description: "" },
    { year: 2001, label: "Geospatial", description: "GIS and spatial analysis" },
    { year: 2002, label: "Birds, Texas", description: "" },
    { year: 2002, label: "Island fox, Santa Cruz Island", description: "2002 to fall 2003" },
    { year: 2004, label: "Island fox, Santa Cruz Island (return)", description: "Spring 2004" },
    { year: 2002, label: "Mobile GIS", description: "Constant theme from 2002 to present" },
    { year: 2002, label: "Remote sensing & mapping", description: "Wildlife–habitat relationships" },
    { year: 2004, label: "Snowy plover, Arcata, CA", description: "" },
    { year: 2004, label: "Python & R", description: "GIS scripting; statistics" },
    { year: 2006, label: "Birds, South Carolina", description: "" },
    { year: 2006, label: "Birds, Idaho", description: "Through summer 2007" },
    { year: 2007, label: "Sagebrush fire research", description: "" },
    { year: 2008, label: "Modeling", description: "Grid-based and simulation modeling" },
    { year: 2008, label: "Economics & social systems", description: "Macroeconomics, sovereign currency systems, economic models and policy, history, and sociology" },
    { year: 2012, label: "Data science & decision support", description: "R tidyverse (early adopter); decision support tools" },
    { year: 2012, label: "Learning & child development", description: "Learning processes and child development" },
    { year: 2013, label: "Scientist, Bishop, CA", description: "" },
    { year: 2013, label: "Reproducible research", description: "Sweave and LaTeX-style literate documents, then Markdown, then R Markdown. Grew from data compliance burden—automated methods to get unburied" }
  ],

  // Nodes for the knowledge graph: ideas and their connections
  // Each node shows up in the graph when its startYear arrives
  nodes: [
    { id: "voyager", label: "Voyager", startYear: 1977, category: "baseline" },
    { id: "physics", label: "Physics", startYear: 1994, category: "science" },
    { id: "calculus", label: "Calculus", startYear: 1994, category: "science" },
    { id: "biochem", label: "Biochemistry", startYear: 1996, category: "science" },
    { id: "wildlife", label: "Wildlife ecology", startYear: 2000, category: "ecology" },
    { id: "wildlife-bio", label: "Wildlife biology", startYear: 2000, category: "ecology" },
    { id: "hawaii-field", label: "Rats, mongoose, birds (HI)", startYear: 2000, category: "fieldwork" },
    { id: "mexico-field", label: "Birds (Mexico)", startYear: 2001, category: "fieldwork" },
    { id: "sanclemente-field", label: "Birds (San Clemente)", startYear: 2001, category: "fieldwork" },
    { id: "geospatial", label: "Geospatial analysis", startYear: 2001, category: "technical" },
    { id: "texas-field", label: "Birds (Texas)", startYear: 2002, category: "fieldwork" },
    { id: "islandfox-field-1", label: "Island fox (Santa Cruz)", startYear: 2002, category: "fieldwork" },
    { id: "islandfox-field-2", label: "Island fox return (Santa Cruz)", startYear: 2004, category: "fieldwork" },
    { id: "mobile-gis", label: "Mobile GIS", startYear: 2002, category: "technical" },
    { id: "remote-sensing", label: "Remote sensing", startYear: 2002, category: "technical" },
    { id: "mapping", label: "Mapping", startYear: 2002, category: "technical" },
    { id: "habitat", label: "Wildlife–habitat relationships", startYear: 2002, category: "ecology" },
    { id: "python", label: "Python", startYear: 2004, category: "technical" },
    { id: "r-lang", label: "R", startYear: 2004, category: "technical" },
    { id: "statistics", label: "Statistics", startYear: 2004, category: "science" },
    { id: "gis-scripting", label: "GIS scripting", startYear: 2004, category: "technical" },
    { id: "plover-field", label: "Snowy plover (Arcata)", startYear: 2004, category: "fieldwork" },
    { id: "sc-field", label: "Birds (South Carolina)", startYear: 2006, category: "fieldwork" },
    { id: "idaho-field", label: "Birds (Idaho)", startYear: 2006, category: "fieldwork" },
    { id: "sagebrush-field", label: "Sagebrush fire research", startYear: 2007, category: "fieldwork" },
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
    { id: "bishop-scientist", label: "Scientist, Bishop CA", startYear: 2013, category: "fieldwork" },
    { id: "sweave-latex", label: "Sweave / LaTeX", startYear: 2013, category: "practice" },
    { id: "markdown", label: "Markdown", startYear: 2013, category: "practice" },
    { id: "r-markdown", label: "R Markdown", startYear: 2013, category: "practice" },
    { id: "reproducible", label: "Reproducible research", startYear: 2013, category: "practice" },
    { id: "automation", label: "Automation", startYear: 2013, category: "practice" },
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
    
    // Field work path
    { source: "wildlife", target: "wildlife-bio" },
    { source: "wildlife-bio", target: "hawaii-field" },
    { source: "hawaii-field", target: "mexico-field" },
    { source: "mexico-field", target: "sanclemente-field" },
    { source: "sanclemente-field", target: "texas-field" },
    { source: "texas-field", target: "islandfox-field-1" },
    // Gap in field work (fall 2003 - spring 2004)
    { source: "islandfox-field-2", target: "plover-field" },
    { source: "plover-field", target: "sc-field" },
    { source: "sc-field", target: "idaho-field" },
    { source: "idaho-field", target: "sagebrush-field" },
    { source: "sagebrush-field", target: "bishop-scientist" },
    
    // Field work connections to other domains
    { source: "wildlife-bio", target: "habitat" },
    { source: "islandfox-field-1", target: "habitat" },
    { source: "islandfox-field-2", target: "habitat" },
    { source: "plover-field", target: "remote-sensing" },
    { source: "sagebrush-field", target: "grid-models" },
    { source: "sagebrush-field", target: "simulation" },
    { source: "bishop-scientist", target: "decision-support" },
    { source: "bishop-scientist", target: "reproducible" },
    
    // Mobile GIS thread (constant theme from 2002-present)
    { source: "mobile-gis", target: "texas-field" },
    { source: "mobile-gis", target: "islandfox-field-1" },
    { source: "mobile-gis", target: "islandfox-field-2" },
    { source: "mobile-gis", target: "plover-field" },
    { source: "mobile-gis", target: "sc-field" },
    { source: "mobile-gis", target: "idaho-field" },
    { source: "mobile-gis", target: "sagebrush-field" },
    { source: "mobile-gis", target: "bishop-scientist" },
    { source: "geospatial", target: "mapping" },
    { source: "geospatial", target: "remote-sensing" },
    { source: "geospatial", target: "mobile-gis" },
    { source: "habitat", target: "remote-sensing" },
    { source: "geospatial", target: "gis-scripting" },
    { source: "mobile-gis", target: "mapping" },
    { source: "gis-scripting", target: "mobile-gis" },
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
    
    // Literate programming lineage
    { source: "r-lang", target: "sweave-latex" },
    { source: "sweave-latex", target: "markdown" },
    { source: "markdown", target: "r-markdown" },
    { source: "r-markdown", target: "reproducible" },
    { source: "tidyverse", target: "r-markdown" },
    
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
