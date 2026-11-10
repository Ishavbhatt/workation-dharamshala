import blogsData from "@/Data/blogsData.json";

export const SITE_URL = "https://workationdharamshala.in";

/** All blogs, newest first. */
export function getBlogs() {
    return [...blogsData].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

export function getBlog(slug) {
    return blogsData.find((blog) => blog.slug === slug) || null;
}

/** Other blogs to suggest alongside the current one. */
export function getRelatedBlogs(slug, limit = 3) {
    return getBlogs()
        .filter((blog) => blog.slug !== slug)
        .slice(0, limit);
}

/** "2026-01-11" → "11 JAN 2026" (matches the Figma date pill). */
export function formatBlogDate(date) {
    if (!date) return null;
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return null;
    return d
        .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        .toUpperCase();
}

export function readingTime(html = "") {
    const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
}

/** The page renders its own <h1>, so drop the one embedded in the content. */
export function stripLeadingH1(html = "") {
    return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}
