import styles from '../../styles/Pages/Home.module.scss';

export const metadata = {
  title: "About Workation Dharamshala | Remote Work Stays in the Himalayas",
  description:
    "Workation Dharamshala helps remote workers and IT professionals experience work from the Himalayas with reliable WiFi, power backup, and long-stay comfort.",
  alternates: {
    canonical: "https://workationdharamshala.in/about",
  },
  openGraph: {
    title: "About Workation Dharamshala | Remote Work Stays in the Himalayas",
    description:
      "Workation Dharamshala helps remote workers and IT professionals experience work from the Himalayas with reliable WiFi, power backup, and long-stay comfort.",
    url: "https://dharamshalaretreat.com/",
    images: [
      {
        url: "https://workationdharamshala.in/images/workation-dharamshala.JPG",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function About() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.aboutSection}>
        
        <div className={styles.aboutHeader}>
          <h1>About Workation Dharamshala</h1>
          <p className={styles.subTitle}>
            A work-friendly stay experience in the heart of the Himalayas.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <p>
            <strong>Workation Dharamshala</strong> was created to help remote workers,
            freelancers, and IT professionals experience the Himalayas without
            compromising on productivity.
          </p>

          <p>
            Based in Dharamshala, Himachal Pradesh, we work closely with trusted
            local properties to curate work-friendly stays that meet real remote
            work needs — reliable high-speed WiFi, power backup, quiet rooms,
            and comfortable long-stay setups.
          </p>

          <p>
            As remote work becomes the new normal, our goal is to make
            <strong> work from Dharamshala</strong> simple, reliable, and stress-free,
            so you can focus on your work while enjoying a slower, calmer mountain lifestyle.
          </p>
        </div>

      </section>
    </main>
  );
}
