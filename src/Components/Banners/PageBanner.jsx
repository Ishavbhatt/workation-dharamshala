"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Banners.module.scss";
import { MdChevronRight } from "react-icons/md";

const PageBanner = ({ title, description }) => {
    const pathname = usePathname() || "/";

    const segments = pathname
        .split("/")
        .filter((seg) => seg !== "");

    const crumbs = segments.map((seg, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");
        const label = seg
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

        return { href, label };
    });

    return (
        <div className={styles.page_banner} role="region" aria-label={title || "Page banner"}>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            <nav
                className={styles.breadcrumbs}
                aria-label="Breadcrumb"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                <ol>
                    <li
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        <Link
                            href="/"
                            itemProp="item"
                            aria-current={segments.length === 0 ? "page" : undefined}
                            className={styles.breadcrumbLink}
                        >
                            <span itemProp="name">Home</span>
                        </Link>
                        <meta itemProp="position" content="1" />
                    </li>

                    {crumbs.map((c, i) => {
                        const pos = i + 2;
                        const isLast = i === crumbs.length - 1;

                        return (
                            <li
                                key={c.href}
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                                className={styles.breadcrumbItem}
                            >
                                <MdChevronRight className={styles.chev} aria-hidden />
                                {isLast ? (
                                    <span
                                        itemProp="item"
                                        itemScope
                                        itemType="https://schema.org/Thing"
                                        aria-current="page"
                                        className={styles.breadcrumbCurrent}
                                    >
                                        <span itemProp="name">{c.label}</span>
                                    </span>
                                ) : (
                                    <Link href={c.href} itemProp="item" className={styles.breadcrumbLink}>
                                        <span itemProp="name">{c.label}</span>
                                    </Link>
                                )}

                                <meta itemProp="position" content={String(pos)} />
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default PageBanner;
