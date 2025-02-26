import filenameMatchRegexpRule from './rules/filename-match-regexp.js';
import preferEventHandlerPrefixRule from './rules/prefer-event-handler-prefix.js';

const plugin = {
  rules: {
    'filename-match-regexp': filenameMatchRegexpRule,
    'prefer-event-handler-prefix': preferEventHandlerPrefixRule
  }
};

export default plugin;
