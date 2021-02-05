---
title : app.getAgents
sidebar_label : app.getAgents
---

app.getAgents() is used to a list of agents that have signed up in the 'Support' portal.

## Output Parameters
Array of objects, with all the details of all the signed up agents.

## Example Usage

```javascript
app.getAgents().then((agents) => {
    app.log(agents, "allAgentsData")
});
```
## Example Output:
```javascript
agents {
		     "success": true,
		     "message": "",
		     "data": [
		         {
		             "email": "abcd@gmail.com",
		             "id": 12345,
		             "owner": "x1***********7",
		             "username": "abcd",
		             "user_id": 7890,
		             "name": "abcd xyz",
		             "profile_picture": "https://cdn.yellowmessenger.com/pic1.png",
		             "description": "xyz",
		             "max_conn_tickets": 50,
		             "call_enabled": 0,
		             "voip_call_enabled": 0,
		             "voip_password": null,
		             "webrtc_username": null,
		             "xmpp_username": "xyz",
		             "avalability": {
		                 "currentHandlingTicketsCount": 0,
		                 "status": "offline"
		             }
		         },
		         {
		             "email": "xyz@ym.com",
		             "id": 7890,
		             "owner": "x1**********7",
		             "username": "xyz",
		             "user_id": 1234,
		             "name": "xyz",
		             "profile_picture": "https://cdn.yellowmessenger.com/pic2.png",
		             "description": "abc",
		             "max_conn_tickets": 50,
		             "call_enabled": 0,
		             "voip_call_enabled": 0,
		             "voip_password": null,
		             "webrtc_username": null,
		             "xmpp_username": "abc",
		             "avalability": {
		                 "currentHandlingTicketsCount": 5,
		                 "status": "offline"
		             }
		         },
		     ]
		 }
```