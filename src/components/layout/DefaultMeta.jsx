import React from 'react';
import { Helmet } from 'react-helmet-async';

const DefaultMeta = ({ title, description }) => {
  const defaultTitle = "Sunny Palace";
  const defaultDescription = "We serve with Passion | Sunny Palace";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default DefaultMeta;
