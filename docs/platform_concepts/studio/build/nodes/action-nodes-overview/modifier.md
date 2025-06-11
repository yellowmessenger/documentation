---
title: Modifier node
sidebar_label: Modifier
---

Modifier node allows you to convert user input into a specific format before passing it to a database, an API, or displaying it to the user.

For example, if a user enters "hello" and you want to display or store it in uppercase for consistency, the Modifier node can convert "hello" to "HELLO".

This node is useful when you need to standardize data formats for backend processing or display purposes.

You can transform the input in various ways by selecting options such as:

| Option(s) | Description | Output type | Sample input | Sample output |
|-----------------------|-------------------------------|-------------|--------------|---------------|
| Capitalize 1st letter | Capitalizes the first letter of the input                        | String      | i am aakanksha | I am aakanksha |
| Capitalize 1st char of word | Capitalizes the first character of the input                        | String      | hi aakanksha | Hi Aakanksha |
| Lower case all | Converts all the letters of the input to lower case                        | String      | Hi AakanKsha | hi aakanksha |
| Upper case all | Converts all the letters of the input to upper case                         | String      | Hi AakanKsha | HI AAKANKSHA |
| Clean Input | Cleans the input off extra characters                        | String      | vidyadhār nāgār,jaĭpŭr | vidhyadhar nagar, jaipur |
| Add on both sides | Adds a character on both sides of the input (The length should be lesser than teh defined length) | String | Akku (x = - , y = 6) | -Akku- |
| Add at end | Adds a character at the end of the input (will be added if length is lesser than the defined length) | String | Akku (x = - , y = 6) | Akku-- |
| Add at start | Prefix the input with a character. (will be added if the length is lesser than the defined length) | String | Akku (x = - , y = 6) | --Akku |
| Replace first | Replaces the character entered in find preset with the character in replace preset at the prefix of the input. | String | abc@gmail.com (x=.,y=[dot]) | abc@gmail[dot]com |
| Replace All | Replaces the character entered in find preset with the character in replace preset at any part of the input. | String | abc@gmail.com (x=.,y=[dot]) | abc@gmail[dot]com |
| Remove from both sides | Removes the specified character from both the sides of the input| | -Akku- (x=-) | Akku |
| Remove from start | Removes the specified character from the prefix of the input | String | -Akku- (x=-) | Akku- |
| Remove from end | Removes the specified character from the suffix of the input | String | -Akku- (x=-) | -Akku |
| Limit length | The input length is restricted to the specified number in the length preset, and any additional characters beyond that are substituted with the character defined in the omission preset. | Length limit | Aakanksha Jain (x=12) | Aakanksha Ja... |
| Slice | Provides the input between the set positions | Array | [1,2,3,4,5] (2,4) | 3 |Slice|
|Split by space|Splits the input into arrays|Array|tree house|["tree", "house"]
|Split into words|The input is divided into individual words based on the character specified in the preset.| Array|treehouse ,| ["tree", "house"]|
| Join | Join the input array with the character in preset | String | ["My", "Name", "is", "Aakanksha"] (with = '-') | My-Name-is-Aakanksha |
|Pick by position|Picks the word in the array in the specified position| String | ["My", "Name", "is", "Aakanksha"]  (3)| is
|Get length|Returns an array's length |String | []"My", "Name", "is", "Aakanksha"]| 4|
| For each | Apply modifier options on each element of the array | Select modifier | ["My", "Name", "is", "Aakanksha"] (operation = Upper case all) | ["MY", "NAME", "IS", "AAKANKSHA"] |

## Configure Modifier node

Consider a scenario where you want to collect user feedback through chatbot and store it in a DB table in uppercase.

To configure Modifier node, follow these steps:

1. Drag and drop the Modifier node to the workflow in the flow editor.

    ![](https://imgur.com/p6W90Yy.png)

2. Choose whether you want to modify a direct text input or a variable:
   * If you select Text, enter the text value that needs to be modified.
   * If you select Variable, choose the variable that holds the user's input.

3. In Modify input section, select the modification type based on your requirements (for example, Capitalize 1st char of word, Capitalize 1st letter).

4. Use the Store response in option to choose or create a variable that will store the modified input. 

5. To test how the node works, click the button at the top of the flow editor and enter your input to see the corresponding output.

   ![](https://i.imgur.com/EbhyWqD.png)
      
Refer to the following GIF to see how this node works.

   ![](https://imgur.com/P1TfQG8.gif)