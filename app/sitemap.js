const siteUrl = "https://hossain-mahmud.me";

export default function sitemap() {
  const routes = ["", "/services", "/resume", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
