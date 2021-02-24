# Styleguide

## General Style Guides:
- Whenever a platform component is mentioned in any docuement, it should be in a codeblock to make it distinguishable from rest of the text.

Example: Click on `Create Journey` button on the bottom left corner.

- While creating How-to or Cookbooks, list down steps as **Step X** in bold.

## Document Structure
When a new markdown file is added, add following code snippet at the top of the file to maintain the same structure thoughout the all files.

```
---
id: Unique ID of the document (alpha-neumarical)
title: Title of the document (To be displayed on the screen)
description: Description of the document.
featured: true
---
```

## Heading
Docosaurus allows 6 levels of heading. Number of `#` signs added corrusponds to the heading level.

Example

| Syntax | Output |
| ----------- | ----------- |
| `# heading level 1` | <h2>heading level 1</h2> |
| `## heading level 2` | <h2>heading level 2</h2> |
| `### heading level 3` | <h3>heading level 3</h3> |
| `#### heading level 4` | <h4>heading level 4</h4> |


<br >

## Sidebar
Sidebar in Docusaurus only displays content with heading level 1-3. Hence if you want to display a title in the sidebar, make sure to keep it under heading level 1-3.


## Code Snippets

```
{
  "firstName": "Yellow",
  "lastName": "Messenger"
}
``` 

References: 

https://google.github.io/styleguide/docguide/style.html#document-layout

https://www.markdownguide.org/cheat-sheet/