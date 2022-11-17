export default function examplePage() {
    return (
      <div className='container'>
        <title>Chatham Snipe</title>
        <link rel='icon' href='/favicon.ico' />
  
        <main>
          <div className='underline'>
            <h1 className='title'>The Chatham Snipe</h1>
            <h3 className='subTitle'><i>Coenocorypha pusilla</i></h3>
          </div>
          <img
            className='pic'
            src='https://i0.wp.com/www.waderquest.net/wp-content/uploads/2018/04/Chatham-Island-Snipe-1-%C2%A9-Dave-Boyle-1.jpg'
            alt='Sam Dey'
          />
  
          <p className='description'>
          The <b>Coenocorypha pusilla</b>, better known vernacularly as the <i>Chatham Snipe</i> is a species of wader living on the island of Chatham Islands,
          off the coast of the main New Zealand island. While it's population trend is stable, it is still considered a vulnerable species due to it's lack of ability
          to fend off predators because of the predatorless Chatham Islands. There are only about 2000 of these animals alive, further supporting their vulnerable status.

          <br></br>
          <br></br>
          
          The Chatham Snipe frequently feeds on worms, amphipods, insects, and larva it finds on the ground of it's native habitat of the temperate forests and grasslands
          common to the Chatham Islands.
          </p>
          <h5 className='kudos'>by Sam Dey</h5>
          <a className='button' href='/'>
            <p>Home</p>
          </a>
        </main>
  
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }
  
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
          }

          .subTitle {
            margin: 0;
            line-height: 1;
            font-size: 1rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center
          }
  
          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }
  
          .description {
            line-height: 1.5;
            font-size: 1rem;
          }

          .description2 {
            line-height: 1.5;
            font-size: 1rem;
          }
  
          .pic {
            height: 300px;
            width: 450px;
          }
  
          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #0c0321;
            border-radius: 2000px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
  
          .button:hover,
          .button:focus,
          .button:active {
            color: #ff8924;
            border-color: #ff8924;
          }
  
          .button p {
            font-size: 1rem;
            font-weight: 600;
          }
  
          code {
            background: #230d30;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            background:#ffc28c;
            color:#361900;
            padding: 0;
            margin: 0;
            font-family: fangsong;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }