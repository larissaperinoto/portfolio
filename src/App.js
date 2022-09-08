import React from 'react';
import { About, Contact, Footer, Header, Projects } from './components';
import './css/app.css';

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
