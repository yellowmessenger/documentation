---
title: How to Create a Multilingual Bot on Yellow Messenger Platform?
sidebar_label : Multilingual Bot
---

When your users are based out of different locations around the world, it's not suffiecient to just build a bot in english. Here, multilingual bot comes handy because it can cater to people don't speak english.

1. Go to `Configure` and under `Languages` field add langauges in which you want to develop multilingual bot. 

![](https://cdn.yellowmessenger.com/cY6QpVCmHmqA1618473338639.png)

2. Create a new blank journey and add appropriate utterances like `I want to chat in different language` or `change langauge`.

![](https://cdn.yellowmessenger.com/piSGjYmPZjIp1618473345828.png)

![](https://cdn.yellowmessenger.com/5DpKBe4vXrJI1618473354099.png)

3. Add a [`Quick Reply`](https://docs.yellowmessenger.com/docs/documentation/concepts/response-types-message#quick-replies) response. Add multiple languages as button responses here. In the `Advance settings` of quick reply button, add [language ISO code](https://www.loc.gov/standards/iso639-2/php/code_list.php) as reply text. For i.e. ISO code of english is 'en'. Make sure to add ISO code in lower case only.

![](https://cdn.yellowmessenger.com/ZR0U3skgUUyw1618473361800.png)

![](https://cdn.yellowmessenger.com/t8GSYZFraWaA1618473364285.png)

![](https://cdn.yellowmessenger.com/fsu1bdIJJnom1618473374417.png)

4. Now add an `Set Language` action node. From the drop down menu, select quick reply step where language response is stored.

![](https://cdn.yellowmessenger.com/vx46vueVcGfo1618473407898.png)

5. Add a text response to inform user that bot language has been changed.

![](https://cdn.yellowmessenger.com/l8Ir9bl8Abtr1618473416249.png)

6. Open any journey and select any response. You should see localization button as shown below; click on that button to select the language. As you swith the language you can see on the right channel name as well as langauge. However, response for Hindi is empty by default.  If you leave that response empty, Yellow Messenger platform will automatically translates english response to selected language. Let's add hindi response as well. 

Repeat the same process for all steps in all different journeies in your bot.

![](https://cdn.yellowmessenger.com/7IieVINGH4ik1618481155213.png)

![](https://cdn.yellowmessenger.com/m5NVwzSyqc1X1618481159686.png)

7. (OPTIONAL) For better user experiece, it's good to have change langauge option on the welcome prompt also. So your users will know that your bot supports different languages. In the quick reply advance setting, you can invoke `change language` journey.

![](https://cdn.yellowmessenger.com/4EkNbsNF79os1618482110798.png)

![](https://cdn.yellowmessenger.com/pOMNiorMYjKa1618482439679.png)

8. Go try your bot and switch lanaguage. Now if you add utterance in hindi, it'll respond with hindi reponse.

![](http://cdn.yellowmessenger.com/rDoymycmB2Yw1618474244282.gif)