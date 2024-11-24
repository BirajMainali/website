import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Biraj Mainali",
  description:
    "Learn .NET with Biraj Mainali's expert mentoring course. Master .NET Core, C#, and modern software development practices.",
  /* prettier-ignore */
  head: [
    ["link", {
      rel: "icon",
      type: "image/svg+xml",
      href: "/biraj-mainali.jpg",
    }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", {
      name: "description",
      content:
        "Join Biraj Mainali's .NET mentoring course to master C#, .NET Core, and essential software development skills.",
    }],
    ["meta", {
      name: "keywords",
      content:
        ".NET mentoring course, Biraj Mainali, .NET Core, C#, software development, mentoring",
    }],
    ["meta", { name: "author", content: "Biraj Mainali" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", {
      property: "og:title",
      content: "Biraj Mainali - .NET Mentoring Course & Software Development",
    }],
    ["meta", {
      property: "og:description",
      content:
        "Step up your skills with Biraj Mainali's .NET Mentoring Course. Learn industry-standard practices in .NET, C#, and full-stack development.",
    }],
    ["meta", {
      property: "og:image",
      content: "https://birajmainali.com.np/dotnet-mentoring-course.png",
    }], // Use an engaging course banner here
    ["meta", { property: "og:url", content: "https://birajmainali.com.np/" }],
    ["meta", {
      property: "og:site_name",
      content: "Biraj Mainali - .NET Mentoring",
    }],
    ["meta", { name: "twitter:card", content: "/biraj-mainali.png" }],
    ["meta", {
      name: "twitter:title",
      content: "Learn .NET with Biraj Mainali",
    }],
    ["meta", {
      name: "twitter:description",
      content:
        "Master .NET Core, C#, and full-stack development with Biraj Mainali's mentoring course.",
    }],
    ["meta", {
      name: "twitter:image",
      content: "https://birajmainali.com.np/dotnet-mentoring-course.png",
    }],
    ["link", { rel: "canonical", href: "https://birajmainali.com.np/" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Courses", link: "/courses" }, // Highlight your .NET Mentoring Course here
      { text: "About", link: "/about" },
      { text: "Projects", link: "/projects" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/birajmainali",
        ariaLabel: "GitHub Profile",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/birajmainali/",
        ariaLabel: "LinkedIn Profile",
      },
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
