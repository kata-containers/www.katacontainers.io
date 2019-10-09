const json = require("../pages.json");
const footer = require("../footer-nav.json");

module.exports = {
  title: "Kata Containers",
  description: "Kata Containers is an open source container runtime, building lightweight virtual machines that seamlessly plug into the containers ecosystem.",
  themeConfig: {
    docsDir: "site",
    nav: json.nav,
    footer: footer
  },
  head: [["link", { rel: "icon", href: "/favicons/favicon.ico" }]],
  ga: "UA-110599884-1"
};
