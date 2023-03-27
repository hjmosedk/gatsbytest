import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p1>Hi there, this is a Gatsby Site</p1>
    </Layout>
  );
};

export const Head = () => <Seo title='About me!' />;

export default AboutPage;
