---
title: Multilingual bot
sidebar_label : Multilingual bot 
---

Enable mulitlingual support for your bot by following these steps,

![](https://i.imgur.com/45CAuGk.png)


1. Go to your flow and click **Language** on the left tile.

![](https://i.imgur.com/zYKGw0d.png)

2. Click **Add language** to add the languages your bot should support.

![](https://i.imgur.com/UUUyPET.png)

3. Go to **Train** and click **Tools**.

![](https://i.imgur.com/0Kk40Dm.png)

4. Set **Auto detect language** to **Yes** under **CONNVERSATION** and click **Save**. This will let your bot automatically detect the end-user's language and enable conversation in the same language.

![](https://i.imgur.com/N9saSaD.png)

5. Add a [Quick Replies node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#6-quick-replies) to your flow and populate the Button values with language options.

![](https://i.imgur.com/fsQyy5B.png)

6. Click **Configure buttons** on the same pop-up and populate the button values with respective language's [ISO codes](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#1-languages-supported). Click **Save all changes** when you're done.

![](https://i.imgur.com/lz4oNEt.png)

7. Store all response to this quick replies node in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes).

![](https://i.imgur.com/GcopfKf.png)

8. Add a [set language node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#31-set-language) to the node that takes ISO input(quick replies in this case). Select the variable in which the previous reply is stored. This language will be permanently set (currently set 2 days of expiry), unless it is being changed by same action node only.

![](https://i.imgur.com/RCNpPes.png)

9. The conversation with the bot after this point will be in the selected language.
