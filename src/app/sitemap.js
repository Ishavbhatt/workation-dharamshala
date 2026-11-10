import blogsData from "@/Data/blogsData.json";
import toursData from "@/Data/toursData";

const BASE_URL = "https://workationdharamshala.in";

export default function sitemap() {
  const pages = [
    { path: "", priority: 1 },
    { path: "/dharamshala", priority: 0.9 },
    { path: "/contact-us", priority: 0.9 },
    { path: "/tours", priority: 0.9 },
    { path: "/blogs", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/policies", priority: 0.4 },
  ].map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));

  const blogs = blogsData.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.date ? new Date(blog.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const tours = toursData.map((tour) => ({
    url: `${BASE_URL}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...tours, ...blogs];
}
