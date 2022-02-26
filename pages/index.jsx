// Module Imports
import Image from 'next/image';
import { useState } from 'react';

// Component Imports
import Nav from '../components/Nav';

// Other Imports
import InfoImg from '../public/Info.svg';
import Waves from '../public/Waves.svg';

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState('');

  return (
    <div>
      <Nav />

      <main>
        <section id='landing'>
          <div>
            <h1>It's not just any Management</h1>
            <h1>
              It's <span>Mezo Management</span>
            </h1>
          </div>
        </section>

        <section id='info'>
          <h2>
            Info<span>.</span>
          </h2>
          <div className='content'>
            <div className='text'>
              <p>
                Here at Mezo Management, we've created a platform that links
                content creators and companies. We are a company that uses the
                power of social media to provide creators for you and your
                company.
              </p>
              <p>
                We worked with a variety of creators in the past, providing them
                great deals with our partnered company Salad Technologies.
              </p>
            </div>
            <div className='image'>
              <Image width={300} height={300} src={InfoImg} />
            </div>
          </div>
          <div className='waves'>
            <Image width={1920} height={400} src={Waves} />
          </div>
        </section>

        <section id='faq'>
          <h2>
            FAQ<span>.</span>
          </h2>
          <div className='faq-container'>
            <div
              className={`faq-question ${activeFAQ === 'faq1' ? 'active' : ''}`}
              onClick={() =>
                activeFAQ === 'faq1' ? setActiveFAQ('') : setActiveFAQ('faq1')
              }
            >
              <div className='faq-q-head'>
                <i className='bx bx-chevron-right'></i>
                <h3>What is Mezo Management?</h3>
              </div>
              <div className='faq-q-content'>
                At Mezo Management, we bridge the gap between brands and content
                creators and help brands and creators alike find quality
                partnerships.
              </div>
            </div>
            <div
              className={`faq-question ${activeFAQ === 'faq2' ? 'active' : ''}`}
              onClick={() =>
                activeFAQ === 'faq2' ? setActiveFAQ('') : setActiveFAQ('faq2')
              }
            >
              <div className='faq-q-head'>
                <i className='bx bx-chevron-right'></i>
                <h3>Why Mezo Management?</h3>
              </div>
              <div className='faq-q-content'>
                At Mezo Management we only partner with creators and companies
                that we ourselves have verified and are 100% legitimate. We
                always deliver quality over quantity. We only promote products
                with creators we believe in as a brand.
              </div>
            </div>
            <div
              className={`faq-question ${activeFAQ === 'faq3' ? 'active' : ''}`}
              onClick={() =>
                activeFAQ === 'faq3' ? setActiveFAQ('') : setActiveFAQ('faq3')
              }
            >
              <div className='faq-q-head'>
                <i className='bx bx-chevron-right'></i>
                <h3>Can you trust us?</h3>
              </div>
              <div className='faq-q-content'>
                Yes, you can. If you dont trust us check out our reviews down
                below!
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
