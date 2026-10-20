// French section: marks the content as French for browsers, screen readers and search engines.
export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='fr'" }} />
      <div lang="fr">{children}</div>
    </>
  );
}
