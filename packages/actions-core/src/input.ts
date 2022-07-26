import * as core from '@actions/core';

export default class Input {
  required(key: string): string {
    if (core.getInput(key) === '') {
      throw new Error('Could not get input ' + key);
    }
    return core.getInput(key);
  }

  optional(key: string): string | null {
    if (core.getInput(key) === '') {
      return null;
    }
    return core.getInput(key);
  }
}
