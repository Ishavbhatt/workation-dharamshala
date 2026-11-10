/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (smallest), then WebP, resized per device by next/image.
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async redirects() {
    return [
      // Old packages page was merged into the Dharamshala page (Nov 2026).
      // Permanent redirect passes its Google ranking to the new page.
      {
        source: "/workation-packages",
        destination: "/dharamshala#pricing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
