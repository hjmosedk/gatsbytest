import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p1>Hi there, this is a Gatsby Site</p1>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
