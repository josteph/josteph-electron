import log from 'electron-log';
import * as blogs from '../blogs';

export default function markdownToHtml(key: string) {
  try {
    const result = blogs[blogs.ENUM_EXPORT[key]];

    return result;
  } catch (error) {
    log.error(error);

    return null;
  }
}
