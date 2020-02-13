/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link rel="stylesheet" href="/src/css/style.css" />
  ]);
  setPostBodyComponents([
	<script
         key="pqr"
	  type="text/javascript"
         src="/static/jq-b4999cbb6a73a9b312f635cff75e5a53.js"
        />,
        <script
               key="wer"
      	  type="text/javascript"
               src="/static/main-ac811889ec7f78bc3b4fc4a7f145a3d7.js"
              />,
]);
}
