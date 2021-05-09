import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { getDocBySlug } from '@lib/docs';
import markdownToHtml from '@lib/markdown';
import styles from './styles.module.scss';

function BlogPage() {
  const [content, setContent] = useState('');
  const params: any = useParams();
  const { meta, content: rawContent } = getDocBySlug(params.slug);

  const blogLd = {
    '@context': 'http://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': `https://josteph.github.io/blog/${meta.slug}`,
              name: meta.title,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: `https://josteph.github.io/blog/${meta.slug}`,
        alternateName: 'Joshua Stephen',
        name: meta.title,
        headline: meta.title,
        description: meta.description,
        author: {
          '@type': 'Person',
          name: 'Joshua Stephen',
        },
        publisher: {
          '@type': 'Organization',
          url: 'https://josteph.github.io',
          logo: 'icons/apple-icon.png',
          name: 'Joshua Stephen',
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': 'https://josteph.github.io',
        },
      },
    ],
  };

  useEffect(() => {
    markdownToHtml(rawContent)
      .then((c: string) => setContent(c))
      .catch((e) => e);
  }, [rawContent]);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
        />
      </Helmet>
      <main className="main-container">
        <article
          className={styles.articleContainer}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}

export default BlogPage;
