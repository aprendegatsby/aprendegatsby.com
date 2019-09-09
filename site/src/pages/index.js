/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui';
import { useState } from 'react';
import Layout from '../components/layout';
import Form from '../components/form'

export default function Home() {
  return (
    <Layout>
      <div
        sx={{
          p: [16, 32, 60],
          width: "90vh",
          maxWidth: ["90vh", 500],
          bg: 'white',
          borderRadius: 4,
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 20px 30px;'
        }}
      >
        <div sx={{ mb: 4 }}>
          <Styled.p>aprendegatsby.com</Styled.p>
          <Styled.h1 sx={{ maxWidth: 350, my: 0 }}>Aprende GatsbyJS en español GRATIS.</Styled.h1>
          <Styled.p>
            <strong>Apúntate</strong> para ser un@ de los primer@s en enterarte!{' '}
          </Styled.p>
        </div>
        <div sx={{ mt: 4 }}>
          <Form />
        </div>
      </div>
    </Layout>
  );
}
