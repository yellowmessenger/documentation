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

```
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
```
app.sendEvent({
               code: "verifiedUser",
               data: senderId
           });
```

Sample Code for reference:

```
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