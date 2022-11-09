export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
  
        <main>
          <div className='underline'>
            <h1 className='title'>Welcome to my page, I am Roberto Sierra!</h1>
          </div>
          <img
            className='pic'
            src='https://media-exp1.licdn.com/dms/image/C4E03AQF1ATR06YqkPQ/profile-displayphoto-shrink_400_400/0/1661224722124?e=1673481600&v=beta&t=4Nvdz4T46CacobTem8eujc914GN8A2J3n3WkTRNlBWM'
            alt='Roberto Sierra'
          />
  
          <p className='description'>
          I am a Freshman from the city of Denver that is exicited to code and see the opportunities Boulder has for me! I am a major in Computer Science and I'm from a Hispanic ethnic background looking to be the first of my family to graduate college, so that I means I will work in a job which none of my family members have worked in before. I hope to graduate by 2026 and start a scholarship to help those future students who are in need of money to get a good education! I love playing video games, listening to music, doing some sports like soccer and basketball. 
  
          </p>
          <a className='button' href='/'>
            <p> Back to Home Page</p>
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
            font-size: 4rem;
          }
  
          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }
  
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
  
          .pic {
            height: auto;
            width: auto;
          }
  
          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
  
          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }
  
          .button p {
            font-size: 1rem;
            font-weight: 600;
          }
  
          code {
            background: #fafafa;
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
            background:#A24857;
            color:#E1D9D1;
            padding: 0;
            margin: 0;
            font-family: Monospace;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }