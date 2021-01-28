// const {listPaths,listDeprecatedPaths} = require('./src/plugins/components');
//
// let inputs_docs = listPaths("inputs");
// let processors_docs = listPaths("processors");
// let outputs_docs = listPaths("outputs");
// let caches_docs = listPaths("caches");
// let rate_limits_docs = listPaths("rate_limits");
// let buffers_docs = listPaths("buffers");
// let metrics_docs = listPaths("metrics");
// let tracers_docs = listPaths("tracers");

module.exports = {
  bumblebee: ['bumblebee/introduction'],
  canary: ['canary/introduction'],
  developer: [
    'developer/overview',
    {
      type: 'category',
      label: 'Function reference',
      collapsed: false,
      items: [
        'developer/app/overview',
      ],
    },
  ],
  documentation: [
    'documentation/overview',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'documentation/concepts/bots',
      ],
    },
  ],
};
