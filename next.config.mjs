/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Lets phones open the contact card straight in Contacts (iOS / Android).
        source: "/mohamed-merouane.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          { key: "Content-Disposition", value: 'attachment; filename="Mohamed-Merouane.vcf"' },
        ],
      },
    ];
  },
};

export default nextConfig;
