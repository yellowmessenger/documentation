---
title: How to mask sensitive information in your bot? 
sidebar_label : Mask Sensitive Infomation
---

In any chatbot, you can scroll up to see previous chat, but what if you chat contains sensitive information like your credit card number which you've used earlier to order something? In that case, it's good to mask sensitive information in your bot so no one can see that information.

1. Open `Studio` and nevigate to a journey where you're dealing with sensitive information. Open a step in which you're asking for that sensitive information. For example, in the `Verify OTP` step we're asking for an OTP. In that step, open `Step Setting`.

![](http://cdn.yellowmessenger.com/AUNmCa96ct001618467107378.png)

2. In the `Step Setting`, under mask sensitive info click to enable it for User Message. You can also enable it for Bot Message in case your bot is prividing any sensitive information.

![](http://cdn.yellowmessenger.com/mkzXh5nuSDHL1618467122770.png)

3. In the same step, open `Channel options`. Under `Website` tab, click on the button below sensitive information to enable it. Don't forget to click on `Save button`. Here we're setting it up for Website channle only but You can do the same for other channels also.

![](http://cdn.yellowmessenger.com/F5GpPBfxIdTr1618467132878.png)

![](http://cdn.yellowmessenger.com/RZ1XjacLNjsF1618467147659.png)


4. Now open your bot, and try using that journey where you're dealing with sensitive information. When you're typing it, it'll be shown as dotes only. Once the message it sent, it'll be shown as `Sensitive information`.

![](http://cdn.yellowmessenger.com/3IaQrLIYZiMg1618467155005.png)

![](http://cdn.yellowmessenger.com/b3yatBgvE42i1618467169143.png)