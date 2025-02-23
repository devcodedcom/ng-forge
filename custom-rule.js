module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Wymaga, aby nazwy metod obsługujących eventy zaczynały się od 'on'",
    },
    schema: [], // nie potrzebujemy dodatkowej konfiguracji
    messages: {
      missingPrefix: "Metoda obsługująca event '{{ methodName }}' powinna zaczynać się od 'on'.",
    },
  },
  create(context) {
    console.log('siemaaaaaaaa')
    // console.log(context)
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
      // "Attribute[value]"(node) {
      // https://astexplorer.net/
      // https://fintech.theodo.com/blog-posts/eslint-on-steroids-with-custom-rules
      // https://medium.com/frontendjourney/write-scalable-efficient-custom-eslint-rules-3d12f0570b51
      //   console.log('YOOOOOOOOOOOOOOO')
      //   const value = node.value;
      //   const eventPattern = /\((\w+)\)="(\w+)\((.*?)\)"/g; // dopasowanie (event)="method()"
      //   let match;
      //
      //   while ((match = eventPattern.exec(value))) {
      //     const methodName = match[2]; // nazwa metody
      //
      //     if (!methodName.startsWith("on")) {
      //       context.report({
      //         node,
      //         messageId: "missingPrefix",
      //         data: { methodName },
      //       });
      //     }
      //   }
      // },
    };
  },
};
