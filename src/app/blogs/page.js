import styles from "../../styles/Pages/Blogs.module.scss";
import { getBlogs, SITE_URL } from "@/lib/blogs";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import GuideCard from "@/Components/Card/GuideCard";
import CtaBanner from "@/Components/CtaBanner/CtaBanner";

const pageTitle = "Workation Guides | Remote Work & Travel Tips for Dharamshala";
const pageDescription =
    "Guides for remote workers planning a workation in Dharamshala: costs, best areas, WiFi, co-working, long stays and travel tips for working from the Himalayas.";

export const metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: `${SITE_URL}/blogs`,
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `${SITE_URL}/blogs`,
        images: [
            {
                url: `${SITE_URL}/images/workation-dharamshala.webp`,
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function BlogsPage() {
    const blogs = getBlogs();

    return (
        <>
            <section className={styles.blog_listing_section}>
                <div className="container">
                    <SectionHeading
                        as="h1"
                        titleSize="title_1"
                        label="WORKATION & TRAVEL GUIDES"
                        title="Co-working, co-living & travel guides"
                        description="Everything you need to plan a productive, peaceful workation in Dharamshala, from costs and best areas to WiFi, co-working and weekend escapes."
                    />

                    <div className={styles.blog_grid}>
                        {blogs.map((blog) => (
                            <GuideCard
                                key={blog.slug}
                                title={blog.title}
                                slug={blog.slug}
                                image={blog.featuredImage}
                                date={blog.date}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.blog_cta_section}>
                <div className="container">
                    <CtaBanner />
                </div>
            </section>
        </>
    );
}
