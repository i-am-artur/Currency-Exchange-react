import mustache from 'mustache';
import { AnyObject } from 'typescript/types/common';
export type Translate = (phrase: AnyObject, args?: object) => string;

export function translation(language: string) {
  if (!language) throw 'Translation "language" required';

  const t: Translate = (context, args) => {
    const translation = context[language];

    return mustache.render(translation, args);
  };

  return t;
}
