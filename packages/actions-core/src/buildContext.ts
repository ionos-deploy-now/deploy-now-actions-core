import { Context } from '@actions/github/lib/context';
import * as github from '@actions/github';

export default class BuildContext {
  required(key: keyof Context): string {
    if (github[key] === '') {
      throw new Error('Could not get context value ' + key);
    }
    return typeof github[key] === 'function' ? github[key]() : github[key];
  }

  optional(key: keyof Context): string | null {
    if (github[key] === '') {
      return null;
    }
    return typeof github[key] === 'function' ? github[key]() : github[key];
  }
}
