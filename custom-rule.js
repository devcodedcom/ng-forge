module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Requires event handler method names to start with 'on'.",
    },
    schema: [], // nie potrzebujemy dodatkowej konfiguracji
    messages: {
      missingPrefix: "The method handling the event '{{ methodName }}' should start with 'on'.",
    },
  },
  create(context) {
    return {
      BoundEvent(node) {
        const regexWithArgs = /^on[A-Z]\w*\(.*\)$/;

        if (node.handler.source) {
          if (!regexWithArgs.test(node.handler.source)) {
            console.log('DUPAAAAAA')

            context.report({
              node,
              messageId: "missingPrefix",
              data: { methodName: node.handler.source },
            });
          }
        }
      },
      // https://astexplorer.net/
      // https://fintech.theodo.com/blog-posts/eslint-on-steroids-with-custom-rules
      // https://medium.com/frontendjourney/write-scalable-efficient-custom-eslint-rules-3d12f0570b51
    };
  },
};
