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
    const fileExtensionDotIndex = slicedPath.lastIndexOf('.');
    const slicedFileExtension = fileExtensionDotIndex !== -1 ? slicedPath.slice(fileExtensionDotIndex + 1) : false;

    if (!slicedFileExtension) {
      return {};
    }

    let validRegexp;

    if (slicedFileExtension === 'ts') {
      const tsFileRegex =
        /^[a-z0-9]+(-[a-z0-9]+)*(\.component|\.service|\.directive|\.interceptor|\.module|\.util|\.pipe|\.class|\.guard|\.config|\.interface|\.type|\.enum)?(\.spec|\.d)?\.ts$/;
      validRegexp = tsFileRegex;
    } else if (slicedFileExtension === 'html') {
      const htmlFileRegex = /^[a-z0-9]+(-[a-z0-9]+)*(\.component)?\.html$/;
      validRegexp = htmlFileRegex;
    } else {
      const anyFileRegex = /^[a-z0-9]+(-[a-z0-9]+)*\.[a-z0-9]+$/;
      validRegexp = anyFileRegex;
    }

    if (!validRegexp.test(slicedPath)) {
      context.report({
        loc: { line: 1, column: 0 },
        messageId: 'invalidFilename',
        data: { filename: slicedPath }
      });
    }

    return {};
  }
};
