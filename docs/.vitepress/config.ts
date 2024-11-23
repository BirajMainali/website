import { defineConfig } from "vitepress";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  title: "Biraj Mainali",
  description: "Full Stack Developer | Tech Enthusiast",
  /* prettier-ignore */
  head: [
    ["link", {
      rel: "icon",
      type: "image/svg+xml",
      href: "/biraj-mainali.jpg",
    }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "Biraj Mainali" }],
    ["meta", { property: "og:site_name", content: "Biraj Mainali" }],
    ["meta", {
      property: "og:image",
      content: "https://birajmainali.com.np/biraj-mainali.png",
    }],
    ["meta", { property: "og:url", content: "https://birajmainali.com.np/" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Courses", link: "/courses" },
      { text: "About", link: "/about" },
      { text: "Projects", link: "/projects" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/birajmainali" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/birajmainali/" },
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
