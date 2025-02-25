const preferEventHandlerPrefixRule = require("./rules/prefer-event-handler-prefix");
const plugin = { rules: {
  "prefer-event-handler-prefix": preferEventHandlerPrefixRule
} };
module.exports = plugin;
