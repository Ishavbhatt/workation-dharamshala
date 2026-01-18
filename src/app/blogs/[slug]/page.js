import styles from "../../../styles/Pages/Blogs.module.scss";
import blogsData from '@/Data/blogsData.json'


export default async function SingleBlog({ params }) {
    const { slug } = await params;

    const blog = blogsData.find((item) => item.slug === slug);
    const otherBlogs = blogsData.filter(item => item.slug !== slug);

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <>
            <article className={styles.singleBlog}>

                <section className="common_margin">
                    <div className="container">
                        <div className={styles.single_blog}>
                            <div className={styles.single_blog_left}>
                                <div
                                    className={styles.blog_content}
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                            </div>

                            <div className={styles.single_blog_right}>
                                <h3 className={styles.sidebar_title}>Other Blogs</h3>
                                {otherBlogs?.map((item) => {
                                    return (
                                        <a
                                            key={item.id}
                                            href={`/blogs/${item.slug}`}
                                            className={styles.sidebar_blog_card}
                                        >
                                            <p
                                                className={styles.sidebar_blog_title}
                                            >{item.title}</p>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

            </article>
        </>
    );
}
