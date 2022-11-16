export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Adarsh Charugundla</h1>
          </div>
          <img
            className='pic'
            src='https://th.bing.com/th/id/R.58881891c204feaa6ae823f3e0b58478?rik=oiHZkqit2Wu9ZA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-NjWQxrIYTpE%2fUmEb3A7iyEI%2fAAAAAAAArzM%2fJ0VSyFkj0e0%2fs1600%2fwaterfall%2bgif.gif&ehk=jbQPg%2fitAFpnrPQmKhBx%2b5zU%2b5oUaCR4jLIrOHeXV0g%3d&risl=&pid=ImgRaw&r=0'
            alt='adarsh charugundla'
          />

          <p className='description'>
            Hello! I am a freshman at CU Boulder who is from Denver Colorado. I am currently majoring in Computer Science and
            have taken a few Computer Science classes in highschool and have built up some skills with Java, Python, and HTML. I am 
            excited to learn about C++ and more in general regarding Computer Science here at CU Boulder. Some of my hobbies are playing
            video game competetivly, playing soccer, and hanging out with my friends. 
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
            height: 450px;
            width: 450px;
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
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}