---
title: How to train a bot?
sidebar_label: Train a Bot
---

Model training is required to help the NLP engine understand which [Journey](./journeys) the [utterance](https://www.youtube.com/watch?v=SKkZCFXDy30) belongs
to and trigger the exact Journey.

- Minimum two [Intents](./natural-language-understanding/intents) have to be created. For more, check out [best practices for intents](./studio/natural-language-understanding/intents#utterance--journey-best-practices).

- Model has to trigger a specific Journey/Context to give the appropriate response. In order to do that, NLP model has to be trained on intent we've added earlier.

- To add a new intent; headover to, Studio > Build > NLU > Intent and click on `Add new Intent`. In the Intent popup, provide intent name and utterances. Utterances are the user provided inputs. Checkout this best practices guide on adding [utterances](./studio/natural-language-understanding/intents#utterance--journey-best-practices).

![](https://i.imgur.com/3TIMeld.png)

- Click on `Add another utterance` to add multiple utterances for an intent. Once enough utterances are added click on `Train Intent` on the Intent page. Make sure you've atleast 2 intents before you start the training.

- To test the bot once the training is finished, you can checkout [`Test Your Bot`](./natural-language-understanding/intents#testing-utterances) feature under tools.