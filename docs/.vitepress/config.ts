import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Biraj Mainali",
  description:
    "Senior software engineer: intelligent architecture, AI integration, configuration-first design. Good at this, happy to help.",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/biraj-mainali.jpg" }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ["meta", { name: "theme-color", content: "#0d9488" }],
    ["meta", {
      name: "description",
      content: "Biraj Mainali, Senior software engineer. Architecture, AI integration, configuration-first design. Offering what I'm good at.",
    }],
    ["meta", {
      name: "keywords",
      content: "senior software engineer, AI integration, Gen AI, AI agents, software architecture, configuration-first, Biraj Mainali",
    }],
    ["meta", { name: "author", content: "Biraj Mainali" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", {
      property: "og:title",
      content: "Biraj Mainali, Senior Software Engineer",
    }],
    ["meta", {
      property: "og:description",
      content: "Senior software engineer. Good at intelligent systems, AI integration, clear architecture, happy to help.",
    }],
    ["meta", { property: "og:image", content: "https://birajmainali.com.np/dotnet-mentoring-course.png" }],
    ["meta", { property: "og:url", content: "https://birajmainali.com.np/" }],
    ["meta", { property: "og:site_name", content: "Biraj Mainali" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Biraj Mainali, Senior Software Engineer" }],
    ["meta", {
      name: "twitter:description",
      content: "Senior software engineer. Architecture, AI integration, configuration-first design, offering what I'm good at.",
    }],
    ["meta", { name: "twitter:image", content: "https://birajmainali.com.np/dotnet-mentoring-course.png" }],
    ["link", { rel: "canonical", href: "https://birajmainali.com.np/" }],
  ],
  themeConfig: {
    nav: [],
    socialLinks: [
      { icon: "github", link: "https://github.com/birajmainali", ariaLabel: "GitHub" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/birajmainali/", ariaLabel: "LinkedIn" },
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes("github-projects"),
      },
    },
  },
  vite: { plugins: [] },
  cleanUrls: true,
});
