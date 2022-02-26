import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mezo Management</title>
        <meta name='description' content='Mezo Management' />
        <link rel='icon' href='/Logo.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
