---
title: Web Client
sidebar_label: Web Client
---

# Authenticate the Users in the Web Widget from the Parent Interface via Session Tokens


Process:

1. In the script of publish your bot, developer can configure to add session tokens.
2. Based on the session tokens we will receive, we will do a parent interface auth API call.
3. Based on the response from API, we can start the session with the same UID for user.


1. Place the following script at the end of your `</body>` tag

```html
<script type="text/javascript">
window.ymConfig = { bot:’botId’, ymAuthenticationToken: { id:"userPin",lang: "lang_code"} };  (function () {var w=window,ic=w.YellowMessenger;
if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function()
{i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,
e.src="https://app.yellowmessenger.com/widget/main.js";var t=d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,
w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
</script>
```

Don't forget to update the Bot ID and User PIN and Language Code in the given code.

2. Event name 'authenticate' will be received in the bot.

On receiving the event, we need to send back the senderId using the below code:
```js
app.sendEvent({
               code: "verifiedUser",
               data: senderId
           });
```

Sample Code for reference:

```js
if (app.data.event && app.data.event.code === 'authenticate') {
   /**check db for userpin => map the app.sender to the userpin
    *next time when this event is received, check the userpin already has a sender in db,
    *if yes => fetch the sender id and send it in the event
    *else => send app.sender in the event */
   const authenticate = async () => {
       try {
           let payloadData = app.data.event.payload
     /**payload contains the details that were sent in the script using ymAuthenticationToken */
           try {
               payloadData = (typeof payloadData === "string") ? JSON.parse(payloadData) : payloadData;
           } catch (e) { }
           app.log(payloadData, "payloadData")
 
           app.USER_PIN = (payloadData.id) ? payloadData.id : false;
           // let default_language = payloadData.lang;
           let pattern = /\b(en|id)\b/gi;
           let default_language = (payloadData.lang && (payloadData.lang.match(pattern))) ? payloadData.lang.match(pattern)[0] : (payloadData.lang == "id_code") ? "id" : "en"
           let query = {
               "table": "user_pin_sender_id_mapping",
               "body": {
                   "query": {
                       "match": {
                           "user_pin": app.USER_PIN
                       }
                   }
               }
           }
           const dbResult = await app.dataStore.search(query);
           const dbRecords = app._.get(dbResult, 'hits.hits', []);
           let senderId;
           if (dbRecords.length > 0) {
               senderId = dbRecords[0]._source['sender_id'];
               let id = dbRecords[0]._id;
               app.dataStore.update({
                   table: 'user_pin_sender_id_mapping',
                   record: {
                       _id: id,
                       default_language
                   }
               }).then(() => {
                   app.log("UPDATED");
               }).catch(() => {
                   app.log("NOT UPDATED");
               })
           } else {
               // senderId = new Date().getTime();
               senderId = app.USER_PIN;
```

## Share user data from parent interface to bot using data payload

Data payload feature comes handy when data is already present in the parent interface and you want to access it in the bot.

As you can see we've user email and user name present on the webpage. Aim here is to parse it from the web page and use it as variables. 

1. In the webpage, identify elements which contains user data. Here, `username` and `useremail` elements contains the user data.
```html
 <p id = "username">Pratik</p>
 <p id="useremail" name="useremail">community@yellow.ai</p>
```



2. Go to Channels > Chat widget > Deploy and copy the Chatbot code using the copy button.

![](https://i.imgur.com/igpYi18.png)

Chat bot code should look like this:
```js
<script type="text/javascript">
window.ymConfig = {"bot":"YOUR_BOT_ID_HERE","host":"https://cloud.yellowmessenger.com","partiallyOpen":false,"alignLeft":"right"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
</script>
```

3. Under the script, parse elements using `getElementById("element_name")`.
```js
let name = document.getElementById("username").innerText;
let email =  document.getElementById("useremail").innerText;
```

4. Finally, pass the name and email variables using payload to the window.ymConfig.

```js
window.ymConfig = {"bot":"YOUR_BOT_ID_HERE","host":"https://cloud.yellowmessenger.com","payload":{"name": name,"email": email}
```

5. Let's review all the changes needs to be made in the webpage.

```html
<html>
<head>

</head>
<body>
  
 <p id = "username">Pratik</p>
 <p id="useremail" name="useremail">community@yellow.ai</p>

<script type="text/javascript">
    let name = document.getElementById("username").innerText; // parse elements
    let email =  document.getElementById("useremail").innerText;

    console.log("Test data: ", name, email); // pass variables using payload object to window.ymConfig
    window.ymConfig = {"bot":"x1620711877631","host":"https://cloud.yellowmessenger.com","payload":{"name": name,"email": email},"partiallyOpen":false,"alignRight":"right"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
</script>

</body>
</html>
```
