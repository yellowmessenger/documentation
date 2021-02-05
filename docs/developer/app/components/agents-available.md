---
title: app.agentsAvailable
sidebar_label: app.agentsAvailable
---

app.agentsAvailable() is used to a list of online agents.
​
## Output Parameters
Array of objects, with all the details of the online agents.
​
## Example Usage

```javascript
app.agentsAvailable().then((agents) => {
                app.log(agents, "agentsAvailable")
            });
```
## Example Output:
```javascript
 agentsAvailable {
		     "email": "xyz@gmail.com",
		     "username": "xyz",
		     "name": "xyz",
		     "call_enabled": false,
		     "voip_call_enabled": false,
		     "voip_password": null,
		     "webrtc_username": null,
		     "xmppUsername": "user_1602478055017",
		     "user_id": 84799,
		     "status": "available",
		     "agentProfile": {
		         "email": "xyz@gmail.com",
		         "id": 1234,
		         "owner": "x1************7",
		         "username": "xyz",
		         "user_id": 2345,
		         "name": "xyz",
		         "profile_picture": "https://cdn.yellowmessenger.com/pic3.png",
		         "description": "xyz",
		         "max_conn_tickets": 50,
		         "call_enabled": 0,
		         "voip_call_enabled": 0,
		         "voip_password": null,
		         "webrtc_username": null,
		         "xmpp_username": "xyz"
		     },
		     "xmpp": "xyz",
		     "currentHandlingTicketsCount": 13
		 }
```