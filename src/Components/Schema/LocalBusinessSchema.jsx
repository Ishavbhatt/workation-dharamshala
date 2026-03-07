import Script from "next/script";

export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Workation Dharamshala",
        url: "https://workationdharamshala.in",
        description:
            "Workation Dharamshala offers curated remote work stays in the Himalayas with fast WiFi and long-stay friendly accommodations.",
        image: "https://workationdharamshala.in/images/workation-dharamshala.webp",
        telephone: "+918219703715",
        areaServed: "Dharamshala, Himachal Pradesh",
        sameAs: [
            "https://www.instagram.com/workationdharamshala"
        ]
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}