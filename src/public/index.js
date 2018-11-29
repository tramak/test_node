export default ({ body, title, initialState }) => {
  return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/apple-icon.png">
        <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
        <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="/css/material-dashboard-react.css?v=1.5.0" type="text/css">
        <title>${title}</title>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
    </head>
    <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${body}</div>
        <script src="/assets/browser.js"></script>
    </body>
</html>`;
};