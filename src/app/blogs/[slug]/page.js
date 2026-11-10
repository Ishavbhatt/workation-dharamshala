import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../../styles/Pages/Blogs.module.scss";
import {
    getBlogs,
    getBlog,
    getRelatedBlogs,
    formatBlogDate,
    readingTime,
    stripLeadingH1,
    SITE_URL,
} from "@/lib/blogs";
import CtaBanner from "@/Components/CtaBanner/CtaBanner";
import toursData from "@/Data/toursData";

// Only the slugs in blogsData exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return getBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = getBlog(slug);
    if (!blog) return {};

    const url = `${SITE_URL}/blogs/${blog.slug}`;
    const title = blog.metaTitle || blog.title;
    const description = blog.metaDescription || blog.description;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            title,
            description,
            url,
            publishedTime: blog.date,
            images: [{ url: `${SITE_URL}${blog.featuredImage}`, width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${SITE_URL}${blog.featuredImage}`],
        },
    };
}

export default async function SingleBlog({ params }) {
    const { slug } = await params;
    const blog = getBlog(slug);
    if (!blog) notFound();

    const related = getRelatedBlogs(slug);
    const url = `${SITE_URL}/blogs/${blog.slug}`;
    const minutes = readingTime(blog.content);
    const date = formatBlogDate(blog.date);

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.metaDescription || blog.description,
            image: `${SITE_URL}${blog.featuredImage}`,
            datePublished: blog.date,
            dateModified: blog.date,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "Workation Dharamshala", url: SITE_URL },
            publisher: {
                "@type": "Organization",
                name: "Workation Dharamshala",
                url: SITE_URL,
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/blogs` },
                { "@type": "ListItem", position: 3, name: blog.title, item: url },
            ],
        },
    ];

    return (
        <article className={styles.single_blog}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* HEADER */}
            <header className={styles.blog_header}>
                <div className="container">
                    <nav aria-label="Breadcrumb" className={`font_mono fw_500 body_2 ${styles.breadcrumb}`}>
                        <Link href="/">HOME</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/blogs">GUIDES</Link>
                    </nav>

                    <h1 className={`font_heading fw_400 title_1 ${styles.blog_title}`}>{blog.title}</h1>

                    {blog.description && (
                        <p className={`font_body fw_400 heading_5 ${styles.blog_excerpt}`}>
                            {blog.description}
                        </p>
                    )}

                    <div className={`font_mono fw_500 body_2 ${styles.blog_meta}`}>
                        {date && <time dateTime={blog.date}>{date}</time>}
                        {date && <span aria-hidden="true" className={styles.meta_line}></span>}
                        <span>{minutes} MIN READ</span>
                    </div>

                    <div className={styles.featured_image}>
                        <Image
                            src={blog.featuredImage}
                            alt={blog.title}
                            fill
                            priority
                            sizes="(max-width: 1100px) 100vw, 1100px"
                        />
                    </div>
                </div>
            </header>

            {/* BODY */}
            <section className={styles.blog_body}>
                <div className="container">
                    <div className={styles.blog_layout}>
                        <div className={styles.blog_main}>
                            <div
                                className={styles.blog_content}
                                dangerouslySetInnerHTML={{ __html: stripLeadingH1(blog.content) }}
                            />

                            <CtaBanner
                                className={styles.blog_cta}
                                title="Planning your workation in Dharamshala?"
                            />
                        </div>

                        {related.length > 0 && (
                            <aside className={styles.blog_sidebar}>
                                <div className={styles.sidebar_heading}>
                                    <span className="font_mono fw_500 body_2">MORE GUIDES</span>
                                    <span className={styles.line}></span>
                                </div>

                                <ul className={styles.related_list}>
                                    {related.map((item) => (
                                        <li key={item.slug}>
                                            <Link href={`/blogs/${item.slug}`} className={styles.related_item}>
                                                <span className={styles.related_image}>
                                                    <Image
                                                        src={item.featuredImage}
                                                        alt={item.title}
                                                        fill
                                                        sizes="96px"
                                                    />
                                                </span>
                                                <span className={styles.related_text}>
                                                    <span className={`font_heading fw_400 body_1 ${styles.related_title}`}>
                                                        {item.title}
                                                    </span>
                                                    {item.date && (
                                                        <span className={`font_mono fw_500 ${styles.related_date}`}>
                                                            {formatBlogDate(item.date)}
                                                        </span>
                                                    )}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`${styles.sidebar_heading} ${styles.sidebar_heading_spaced}`}>
                                    <span className="font_mono fw_500 body_2">THINGS TO DO</span>
                                    <span className={styles.line}></span>
                                </div>
                                <ul className={styles.tour_links}>
                                    {toursData.map((tour) => (
                                        <li key={tour.slug}>
                                            <Link href={`/tours/${tour.slug}`} className="font_body fw_400 body_1">
                                                {tour.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        )}
                    </div>
                </div>
            </section>
        </article>
    );
}
