import React from "react";
import animations from "../../assets/js/animations";

const Page = ({ title, navbar, footer, script, _relativeURL, _ID, main }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
        <title>{title}</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

        

      </head>
      <body>
        {navbar}
        <div className="app-wrapper">
          {main}
          {script != undefined ? (
            <script
              type="module"
              src={generateUrl(`/assets/js/${script}.js`)}
            />
          ) : null}
        </div>
        {footer}
      
      </body>
    </html>
  );
};
export default Page;
