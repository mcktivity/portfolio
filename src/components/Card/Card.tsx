import React from "react";

export default ({
  children,
  avatar,
  header,
  open,
}: {
  children: any;
  open: boolean;
  avatar?: string;
  header?: string;
}) => {
  return (
    <main className="card">
      {avatar && <img src={avatar} alt="avatar" className="avatar" />}
      <section className="card-content">
        {header && <h3>{header}</h3>}
        {children}
      </section>
    </main>
  );
};
