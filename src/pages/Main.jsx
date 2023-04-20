import React from 'react';

export default function Main(props) {
  return (
    <div className="vh-100 w-100 d-flex align-items-center justify-content-between flex-column">
      <header className="header">NAVBAR</header>
      <main className="overflow-auto">{props.children}</main>
      <footer className="footer">FOOTER</footer>
    </div>
  );
}
