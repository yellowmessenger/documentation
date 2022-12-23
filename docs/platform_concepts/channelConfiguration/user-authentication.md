---
title : User authentication
sidebar_label : User authentication
---

Authentication is done with the help of a unique token generated for each user that logs into your platform.

Once this token is generated you can conditionally check if a user has been authenticated with the following script.



```java
# Recommended approach for Chatbot authentication

if (userIsAuthenticated) { 

  // replace this with your own auth logic and reload the bot with new info.
	
    window.YellowMessengerPlugin.init({
		ymAuthenticationToken: 'Your_Unique_token'
	});
	window.YellowMessengerPlugin.show(); // display the bot icon
}

```



----- OR -----


```java
if(userIsAuthenticated) { 

// replace this with your own auth logic.
	window.YellowMessengerPlugin.init({
		payload: {
			email: 'ted.lasso@yellow.ai',
			member_id: '1231basd' // you can pass any info you want to be associated with the user based on your use case here. Note that this can be read by the bot using the {{profile.payload.member_id}} variable.
		}
	});
	window.YellowMessengerPlugin.show(); // display the bot icon
}