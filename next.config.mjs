/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Projects taken off the site: send old links to the projects list.
  async redirects() {
    return [
      { source: "/projects/odoo-erp-deployment", destination: "/projects", permanent: true },
      { source: "/projects/enterprise-management-platform", destination: "/projects", permanent: true },
      { source: "/headshot.jpg", destination: "/mohamed-merouane.jpg", permanent: true },
      { source: "/headshot.webp", destination: "/mohamed-merouane.webp", permanent: true },
      // Old CV file names, replaced by the cv-*.pdf set.
      { source: "/resume.pdf", destination: "/cv-full-stack-en.pdf", permanent: true },
      { source: "/resume-full-stack-fr.pdf", destination: "/cv-full-stack-fr.pdf", permanent: true },
      { source: "/resume-business-analyst-fr.pdf", destination: "/cv-consultant-si-fr.pdf", permanent: true },
    ];
  },
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
