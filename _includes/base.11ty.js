exports.render = (data) => {
  return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CONGRATS TO FAC20!!!</title>
            <link href="/assets/style.css" rel="stylesheet" />
            <script src="/assets/confetti.min.js"></script>
        </head>
        <body>
            <nav>
            <a href="/">HOME</a>
            <a href="/mentors">MENTORS</a>
            <a href="/cohort">COHORT</a>
            </nav>
            <main class="main">
            ${data.content}
            </main>
            <footer>
            <marquee><p>bye 2020</p></marquee>
            </footer>
        </body>
        <script>confetti.start()</script>
        </html>
    `;
};
