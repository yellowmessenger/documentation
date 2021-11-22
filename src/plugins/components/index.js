const path = require('path');
const fs = require('fs');
const {parseMarkdownString} = require('@docusaurus/utils');

// function methods() {
//   let components = [];
//   let dir = path.join(__dirname, '../../../docs/platform_concepts/studio');
  
//   fs.readdirSync(dir).forEach(function (file) {
//     if ( !/about\.mdx?/.test(file) ) {
//       let name = file.split('.').slice(0, -1).join('.');
//       let data = fs.readFileSync(path.join(dir, file));
//       const {frontMatter} = parseMarkdownString(data);
//       frontMatter["name"] = name;
//       components.push(frontMatter);
//     }
//   });
//   return components;
// }

// function listPaths() {
//   let paths = [];

//   let components = methods();

//   components
//     .forEach(function (info) {
//       paths.push(`developer/app/components/${info.name}`);
//     });


//   return paths;
// }

// module.exports = {
//   methods: methods,
//   listPaths: listPaths,
// };
