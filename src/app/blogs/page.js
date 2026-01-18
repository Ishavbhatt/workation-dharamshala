import styles from "../../styles/Pages/Blogs.module.scss";
import blogsData from '@/Data/blogsData.json'
import BlogCard from "@/Components/Card/BlogCard";
import PageBanner from "@/Components/Banners/PageBanner";

export const metadata = {
    title: "Workation Blog | Travel Tips for Remote Workers & Digital Nomads",
    description:
        "Read our workation blog with travel guides, remote work tips, and destination ideas for developers, freelancers, and digital nomads working while traveling.",
    alternates: {
        canonical: "https://workationdharamshala.in//blogs",
    },
    openGraph: {
        title: "Workation Blog | Travel Tips for Remote Workers & Digital Nomads",
        description:
            "Read our workation blog with travel guides, remote work tips, and destination ideas for developers, freelancers, and digital nomads working while traveling.",
        url: "https://workationdharamshala.in//blogs",
        images: [
            {
                url: "https://workationdharamshala.in//images/workation-dharamshala.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default async function BlogsPage() {

    return (
        <>
            <PageBanner imageUrl="/images/blogs/blogs-banner.jpeg" title="Blogs" />

            <section className={`${styles.blogListingSec} common_margin`}>
                <div className="container">
                    <div className={styles.blogListing}>
                        {blogsData?.length > 0 &&
                            blogsData.map((blog, index) => (
                                <div className={styles.blogListingCard} key={index}>
                                    <BlogCard
                                        key={blog.id}
                                        title={blog.title}
                                        date={blog.date}
                                        image={blog.featuredImage}
                                        slug={blog.slug}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
