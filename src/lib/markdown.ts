import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import slug from 'remark-slug';
import toc from 'remark-toc';
import autolink from 'remark-autolink-headings';
import hint from 'remark-hint';
import externalLinks from 'remark-external-links';

export default async function markdownToHtml(markdown: string) {
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

  return result.toString();
}
