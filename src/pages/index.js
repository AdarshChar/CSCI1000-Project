import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>The Foreign Web</h1>

        <p className='description'>
          Welcome to our random page...
        </p>
    

        <div className='grid'>
          <a href='/robertoSierra' className='card'>
          <h3>Roberto Sierra &rarr;</h3>
          <p>Click here to check my awesome webpage...</p>
        </a>
        <a href='/aDey' className='card'>
          <h3>The Chatham Snipe &rarr;</h3>
          <p>Click here to find out more about a bird lol</p>
          </a>
          <a href='/AdarshCharugundla' className='card'>
            <h3>Adarsh Charugundla &rarr;</h3>
            <p>Click here to navigate to my page</p>
          </a>
          <a href='/ThomasGhirmatsion' className='card'>
            <h3>Thomas Ghirmatsion &rarr;</h3>
            <p>Click here to see my profile</p>
          </a>
        </div>
      </main>

      <footer>
        <a href='' target='_blank' rel='noopener noreferrer'>
          Copyright CSCI 1000
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .description2 {
          line-height: 1.5;
          font-size: 1.25rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #bfbfbf;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #141414;
          border-color: #141414;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: space grey;
          color: white;
          padding: 0;
          margin: 0;
          font-family: Monocraft;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
