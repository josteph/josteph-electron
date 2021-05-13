import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import slug from 'remark-slug';
import toc from 'remark-toc';
import autolink from 'remark-autolink-headings';
import hint from 'remark-hint';
import externalLinks from 'remark-external-links';

const markdownCache = new Map();

export default async function markdownToHtml(key: string, markdown: string) {
  if (markdownCache.has(key)) {
    return markdownCache.get(key);
  }

  const result = await remark()
    .use(slug)
    .use(toc)
    .use(autolink, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'span',
        properties: { className: ['icon', 'icon-link'] },
        children: [{ type: 'text', value: '🔗' }],
      },
    })
    .use(hint)
    .use(externalLinks)
    .use(html)
    .use(prism)
    .process(markdown);

  const finalStr = result.toString();

  if (finalStr) {
    markdownCache.set(key, finalStr);
  }

  return finalStr;
}
