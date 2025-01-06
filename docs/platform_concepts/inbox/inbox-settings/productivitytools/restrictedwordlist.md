---
title: Restricted word list 
sidebar_label: Restricted word list 
---

The **Restricted word list** is a feature designed to ensure professionalism, maintain a respectful tone, and foster trust in customer communications. It consists of words and phrases that agents are strictly prohibited from using when interacting with customers. This helps avoid any language that could be offensive, disrespectful, dismissive, or harmful to the customer experience or the company’s reputation.

**Inbox Admins** can configure this list to prevent **Agents** from sending messages containing restricted words to customers.

## Configuration 

To add restricted words, follow these steps:

1. Open **Settings > Inbox > Productivity tools > Restricted word list**.

   ![Restricted word list settings](https://imgur.com/2HW3r2N.png)

2. Click **+ Add words**. Enter one or more words or substrings to restrict, separated by commas. Then click **+ Add**.

   ![Adding restricted words](https://imgur.com/2E89QJT.png)

3. To delete words from the list:
   - **Single word**: Click the delete icon next to the word.
     
     ![Delete single word](https://imgur.com/bzXUO4I.png)
   - **Multiple words**: Check the boxes next to the words and click **Delete selected**.
     
     ![Delete multiple words](https://imgur.com/Jzp1URD.png)
   - **All words**: Check the box next to **Words** and click **Delete selected**.
     
     ![Delete all words](https://imgur.com/2bNhEci.png)

## Usage 

When an **agent** attempts to send a message containing any restricted word, the message will be blocked and not sent to the customer. A warning message will appear:  
**"Message not sent. Please review and try again."** The specific restricted word used in the message will also be highlighted.

![Restricted word usage warning](https://imgur.com/gS43ecC.gif)

> Any sentence or word containing a restricted substring will also be blocked. For example, if "dumb" is a restricted word, a term like "initdumb" will also be banned, and the agent will be unable to send the message.
