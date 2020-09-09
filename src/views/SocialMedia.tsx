import React from "react";

export default () => {
  const data = [
    {
      title: "linkedIn profile",
      image:
        "https://icon-library.net//images/linked-in-icon-small/linked-in-icon-small-17.jpg",
      link: "https://www.linkedin.com/in/mcklien-ross/",
      width: "50px",
    },
    {
      title: "facebook profile",
      image:
        "https://icon-library.net//images/high-resolution-facebook-icon/high-resolution-facebook-icon-8.jpg",
      link: "https://www.facebook.com/mcklienRoss/",
      width: "65px",
    },
    {
      title: "github profile",
      image:
        "https://icon-library.net//images/github-social-media-icon/github-social-media-icon-22.jpg",
      link: "https://github.com/mcktivity",
      width: "50px",
    },
  ];

  return (
    <main className="social-media">
      <header>ta kontakt:</header>

      <p>
        E-post: mronoya@hotmail.com
        <br />
        Tlf. nr: +47 40 64 41 92
        <br />
        Vestaveien 13, 1476 Rasta, Akershus
      </p>

      <section>
        {data.map((data) => (
          <a
            key={data.title}
            href={data.link}
            title={data.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.image} width={data.width} alt={`${data.title} icon`} />
          </a>
        ))}
      </section>
    </main>
  );
};
