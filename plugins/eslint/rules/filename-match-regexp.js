import path from 'path';

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Requires kebab-case format for file names.'
    },
    schema: [],
    messages: {
      invalidFilename: "Filename '{{ filename }}' does not match the required kebab-case format."
    }
  },
  create(context) {
    const filePath = context.physicalFilename;
    const firstSeparatorIndex = filePath.lastIndexOf(path.sep);
    const slicedPath = firstSeparatorIndex !== -1 ? filePath.slice(firstSeparatorIndex + 1) : filePath;

    // users.component.ts, test-user.scss etc.
    const validFilenameRegex = /^[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+)?\.[a-z0-9]+$/;

    if (!validFilenameRegex.test(slicedPath)) {
      context.report({
        loc: { line: 1, column: 0 },
        messageId: 'invalidFilename',
        data: { filename: slicedPath }
      });
    }

    return {};
  }
};
