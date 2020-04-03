/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import { useState } from "react";
import Layout from "../components/layout";
import Form from "../components/form";

export default function Home() {
  return (
    <Layout>
      <div
        sx={{
          p: [24, 32, 60],
          width: "90vh",
          maxWidth: ["90vh", 500],
          bg: "white",
          borderRadius: 4,
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 20px 30px;",
        }}
      >
        <div sx={{ mb: 4 }}>
          <Styled.p>aprendegatsby.com</Styled.p>
          <Styled.h1 sx={{ maxWidth: 350, my: 0 }}>
            Aprende GatsbyJS en español GRATIS.
          </Styled.h1>
          <div
            sx={{
              color: "white",
              textAlign: "center",
              bg: "accent",
              borderRadius: 4,
              py: 2,
              px: 2,
              my: 3,
            }}
          >
            <Styled.p sx={{ m: 0, p: 0, color: "white" }}>
              Ya lanzamos el curso de Introducci&oacute;n!
            </Styled.p>
            <p sx={{ m: 0, p: 0, color: "white" }}>👇👇👇👇👇👇👇👇👇👇</p>
          </div>

          <div
            sx={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
              iframe: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              },
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PL_Q4x-stM4VJL6n19M4Tyjnwgbk_TrsXS"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Styled.p>
            <strong>Apúntate</strong> para ser un@ de los primer@s en enterarte!{" "}
          </Styled.p>
        </div>
        <div sx={{ mt: 4 }}>
          <Form />
          <Styled.p sx={{ color: "#639", fontSize: [2, 2] }}>
            S&iacute;guenos por twitter:{" "}
            <a href="https://twitter.com/aprendegatsbyjs" alt="twitter link">
              @aprendegatsbyjs
            </a>
          </Styled.p>
        </div>
      </div>
    </Layout>
  );
}
