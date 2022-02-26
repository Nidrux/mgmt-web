// Module Imports
import Image from 'next/image';

// Component Imports
import Nav from '../components/Nav';

// Other Imports
import InfoImg from '../public/Info.svg';
import Waves from '../public/Waves.svg';

export default function Home() {
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
        </section>
      </main>
    </div>
  );
}
