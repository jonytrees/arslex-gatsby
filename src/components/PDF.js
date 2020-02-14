import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PDF = () => {
  const data = useStaticQuery(graphql`
      {
        allFile(filter: { extension: { eq: "pdf" } }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `)

    return(
      <>
      {data.allFile.edges.map((file, index) =>{return(
        <a key={`pdf-${index}`} rel="noopener noreferrer" href={file.node.publicURL} target="_blank">Certificate of Incorporation</a>)})}
      </>
    )
}


export default PDF
