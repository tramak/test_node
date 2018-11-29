export default ({ body, title, initialState }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </head>
    <body>
        <div id="root">${body}</div>
        <script src="/assets/browser.js"></script>
    </body>
    </html>
  `;
};