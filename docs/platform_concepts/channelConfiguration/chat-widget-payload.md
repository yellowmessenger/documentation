---
title : Chat widget payload 
sidebar_label : Chat widget payload
---

A payload is used to pass the information to the bot.  

Consider that you have a requirement to pass the data of the user who is using the chat widget. In such cases, you can use payload to pass data from your website to the bot. For example, payload passes the data such as account IDs, customer identifiers like names, email addresses, and phone numbers, or other metadata associated with a user from your website to the bot. 

In the payload, you need to create a string that is a key-value pair consisting of data and its value (in lower case). The data must have string-to-string key-value pairs. Payload is passed in JSON format. An error is displayed when data other than key-value is passed in the JSON code. 


:::note **payload security**
Payload is securely passed in HTTPS post request to secure the information passed in it.
:::

In this article, you will learn:

* [How to pass the payload data](#data)

## 1. Pass values from the web client to the bot

To pass values from your parent interface to the bot, you can make use of **payload data**, which needs to be configured in the bot script and init function.

### 1.1 Pass payload data via bot script

To pass the payload data via script, paste the bot script at the end of the `</body>` tag

**Following is a sample bot script:**

```c
<script type="text/javascript">
window.ymConfig = {"bot":"x1657623696077","host":"https://cloud.yellow.ai"};
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function() {
                i.c(arguments)
            };

        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        i.q = [], i.c = function(e) {
            i.q.push(e)
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```
Add the payload data in the following bot script:

```c
<script type="text/javascript">
window.ymConfig = {"bot":"x1657623696077","host":"https://cloud.yellow.ai", "payload": {
                "name": "YellowDemo1",             // Add payload data here
                "phoneNumber": "08123546465",      // The values can be dynamic
                "email": "YellowDemo1@mail.com",
            },};
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function() {
                i.c(arguments)
            };

        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        i.q = [], i.c = function(e) {
            i.q.push(e)
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```

The bot is initilized when the page loads. Once the bot loads, you can assign these values to variables using [Variables node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#variables).


Variable format is ```{{{profile.payload.Your_Field_Name}}```


![](https://i.imgur.com/3Np2ozp.png)

<!-- 
## Authenticating users
We make use of session tokens to authenticate all our users and maintain their chat history

```
Sample code block that's formatted well
``` -->

### 1.2 Pass payload data via init function

You can also pass the payload data via the init function. If you want to reinitialize the bot with a new payload, you can use the below script: 

```c
	window.YellowMessengerPlugin.init({
		payload: {
			email: 'ted.lasso@yellow.ai',
			member_id: '1231basd' // you can pass any info you want to be associated with the user based on your use case here. Note that this can be read by the bot using the {{profile.payload.member_id}} variable.
		}
	});
```
```
