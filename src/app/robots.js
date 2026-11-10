export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/sales/"],
    },
    sitemap: "https://workationdharamshala.in/sitemap.xml",
  };
}
