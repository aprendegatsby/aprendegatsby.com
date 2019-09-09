/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export default function Layout({ children }) {
  console.log("TCL: Layout -> children", children)
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log("TCL: Layout -> data", data)
  return (
    <BackgroundImage fluid={data.bg.childImageSharp.fluid} sx={{
      width: '100vw',
      height: '100vh',
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <main
        sx={{
          display: 'flex',
          width: '100vw',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          p: 16
        }}
      >
        {children}
      </main>
    </BackgroundImage>
  );
}
