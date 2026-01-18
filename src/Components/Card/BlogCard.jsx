import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.scss'

export default function BlogCard({ title, date, image, slug }) {
    return (
        <article className={styles.blogCard}>
            <Link href={`/blogs/${slug}`} className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                />
            </Link>

            <div className={styles.content}>
                <span className={styles.date}>
                    <span className={styles.dot}>●</span>
                    {date}
                </span>

                <h3 className={styles.title}><Link href={`/blogs/${slug}`}>{title}</Link></h3>

                <Link href={`/blogs/${slug}`} className={styles.readMore}>
                    Read More
                </Link>
            </div>
        </article>
    )
}
