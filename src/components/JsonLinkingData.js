const JsonLinkingData = () => (
  <>
    {/* <!-- Structured Data for Google Search --> */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Mayank Saini",
            url: "https://mayanksaini.vercel.app/",
            image: "https://github.com/mayanksaini.png",
            sameAs: [
              "https://www.linkedin.com/in/mayank-saini-b91906202/",
              "https://github.com/Mayanksaini1234",
              "https://x.com/MayankS09985836?s=09",
            ],
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. I build responsive web apps with clean UI, secure backends, and modern web technologies.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "BulandShahr",
              addressRegion: "UP",
              addressCountry: "India",
            },
            email: "mayanksaini9389@gmail.com",
            nationality: "Indian",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://mayanksaini.vercel.app",
            },
            hasOccupation: [
              {
                "@type": "Occupation",
                name: "Full Stack Developer",
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: "https://mayanksaini.vercel.app/",
            name: "Mayank Saini Portfolio",
            description: "A portfolio showcasing my full stack development projects.",
            publisher: {
              "@type": "Person",
              name: "Mayank Saini",
            },
          },
        ]),
      }}
    />

    {/* <!-- Font Awesome CDN --> */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </>
);

export default JsonLinkingData;
