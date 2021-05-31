---
title : Razorpay
sidebar_label : Razorpay
---
In this document, we will learn about how to integrate the razor payment gateway into a [YM](https://cloud.yellowmessenger.com) ChatBot.

**Step 1:** Go to Razor Payment Website and create an Account [https://razorpay.com/](https://razorpay.com/).

**Step 2:** Login to your account and Go to the Dashboard of RazorPay.

**Step 3:** By Default, you will be in Test Mode but make sure you are in it. We would be using __Test Mode__ as of now.

NOTE: There are 2 modes in Razor Payment Gateway:

* __Test Mode:__ This mode is for testing and for developers who are just getting started in Razor Payment Integration. Test Mode is completely Free of Charge. No real charges will be made, even if we give our valid card details in the Razor Payment Gateway Page.

* __Live Mode:__ As the name suggests, In the Live Mode, we would be charged for real. In order to work on Live Mode, we have to give our bank account and KYC Details.

![](https://cdn.yellowmessenger.com/IXlfsjfKEZHH1615286695115.png)

**Step 4:** In the Dashboard, Go to __Settings__ and click on __API Keys__ Tab. Generate a New Key. Click on the __Download Key Details__ and save the key details in a safe location. Click Ok.

NOTE:

__Only__ when you generate a new API key for the __first time__, you can see the __Key Secret__ value. So make sure to save the key details in a safe accessible place.

![](https://cdn.yellowmessenger.com/Semips2HoRUp1615286775032.png)

**Step 5:** For the API request of Razorpay Payment, we have to use __Basic Auth Authorization__.

To get the Basic Auth Authorization value, we are gonna use the __POSTMAN__(v8.0.6) application.  

1. Open POSTMAN application, click on __New -> Collection__ and create a collection with a name.

2. Click on __New -> Request__. Give a Request Name and save it to the collection which we created above.

3. Click on __Authorization__ Tab, click __Type__ and select __Basic Auth__.

4. Open the downloaded file which contains your API keys.

5. Give __Key Id in Username__ Textbox and __Key Secret in Password__ Textbox.

![](https://cdn.yellowmessenger.com/sbNOf0vjThpt1615286847630.png)

6. After giving the values in the username and password textboxes, go to __Headers__ tab.

7. If No Headers key value pairs are visible, Click on the hidden eye option and you would see all the key value pairs in the Headers.

8. Click on the __value of the Authorization__ key and Copy it.

![](https://cdn.yellowmessenger.com/of0Z2sYaWqig1615286959513.png)

**Step 6:** Now let's go to the Developer Section of our ChatBot in the YM Platform. 

NOTE:

The Recommended Step to Integrate a Payment Gateway is after the Step in which we get the cart details of the products which users want to buy from us. 

	-> After the Successful Payment, we can store the cart details in our DataBase.

**Step 7:** Let’s create a New Function for the Razor Payment Gateway Integration API Code.

**Step 8:** We are going to use a POST request an API call to the Razor Payment Gateway with the required Details as below :

```js
	let dt = new Date();
	let max = 10000, min = 100;
 
	let totalPrice = 500;
	let botId = app.bot;
	//gives the ID of your bot
 
	let config = {
	   method: 'POST',
	   url: 'https://api.razorpay.com/v1/invoices',
	   headers = {
	       'Authorization': 'Basic cnpwX3Rlc3RfNE4zeGZtTUTJcUkyQk46d3ZKQ3VodkFDa3VFaFlITjFkRnM2R09Q',
	       'Content-Type': 'application/json'
	   },
	   data: {
		"customer": { //optional ; we can sent these details of user in this customer object
			"name":”XYZ”,
			"email":”xyz@xyz.com”,
			"contact": 9678954326
		},
		"type": "link", //MANDATORY
		"view_less": 1, //optional
		"amount": totalPrice, //MANDATORY ; amount value should be in the smallest unit of the given currency value ; For INR, it should be ‘paise’
		"currency": "INR",//MANDATORY
		"description": "YM Restaurant Orders Payment",//MANDATORY
		"receipt": "Receipt No : " + Math.floor(Math.random() * (max - min + 1) + min), //optional; IF PASSED, IT MUST BE UNIQUE FOR EACH TRANSACTION ; to display receipt string in the payment gateway
		"sms_notify": 1, //optional ; 0 - No, 1- Yes ; If you want to send the Payment link via SMS
		"email_notify": 1, //optional ;  0 - No, 1- Yes; If you want to send the Payment Link via EMAIL
		"expire_by": Math.round(dt.getTime() / 1000), //optional; link expiry time ; IF PASSED, EXPIRY TIME MUST BE ATLEAST 16 MINUTES AWAY FROM THE CURRENT TIME !
		"notes": { //MANDATORY ; SENDER,SOURCE AND BOT KEY ARE MANDATORY ! From these 3 keys, we are able to identify whom and from which bot is making the razor payment ! If we want to send any additional information, we use this notes object
			"sender": app.sender,
			"source": app.source,
			"bot": botId
			// "bot": "x5189765732960"
		}
	   }
	};

	let response = await app.axios(config);
	
	//app.log(response.data, "THIS IS POST AXIOS data !");
	//app.log(response.status,"THIS IS POST AXIOS STATUS !");
	//app.log(response.statusText, "THIS IS POST AXIOS statusText !");
	
	if (response.data.short_url) {
	   //app.log(response.data.short_url, "THIS IS response.data.short_url !");
	   await app.sendTextMessage("PAYMENT LINK: ");
	   await app.sendTextMessage(response.data.short_url);
	   return resolve();
	}
	
	return resolve({
	   success: false,
	   question: "THERE ARE SOME TECHNICAL ISSUES ! KINDLY TRY AFTER SOME TIME !"
	});
```

**BRIEF EXPLANATION:**
 
1. We are creating an object with __method type__, __url__, __headers__ and __data__. 
2. Then, We are creating the required key value pairs (i.e) __Authorization Value__ and Content-Type for the __headers__ object.
3. Then, We are passing the required data in the key value pair format to the data object.
4. Then, We are passing that object which contains all the above information to the __app.axios()__ method and we are storing this result in a variable. 

NOTE:
 
> * To know about axios, go through this link : [Axios Blog](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)
> * Our YM Platform __does not support__ Shorthand methods for Axios HTTP requests such as axios.get(), axios.post() etc.

5. Once the above API Call is Successful, we would get some objects in the result variable.
6. If we want to see or access the data in the result variable, we have to use __.data__ along with the result variable.
7. The payment link will be in the key called __short_url__. So, To Access it, we use __.data.short_url__ along with the result variable.
8. We access it and show it to the user using app.sendTextMessage().
9. Now, The User has to click on this short_url. This will take them to the Razor Payment Gateway Page where they can complete the Payment via Debit/Credit Cards, 
Net Banking, UPI etc.

**STEP 9:** We have to configure a Webhook so that upon Successful completion of the Payment, we can save the User’s Order Details in our DataBase and show some response to the user such as ` YOUR ORDER HAS BEEN PLACED SUCCESSFULLY ! `.
 
NOTE:
 
To learn about Webhooks and the difference between them and API, I suggest you go through these medium articles:

[Let’s talk about Webhooks](https://medium.com/@ishmeet1995/lets-talk-about-webhooks-part-1-theory-9fc66bd3413d)
[Webhook vs API: What’s the Difference?](https://medium.com/hackernoon/webhook-vs-api-whats-the-difference-8d41e6661652)

**STEP 10:** We have to configure the Webhook in the [Razor Payment](https://razorpay.com/) Gateway Dashboard. So, Go to Razor Payment and Sign in using your login credentials. Go to the Dashboard page.

**STEP 11:** Click on the Settings option and click on the Webhooks tab. Click on the Add New Webhook button.

**STEP 12:** In the Webhook URL, give the following URL: 
[https://app.yellowmessenger.com/integrations/razorpay](https://app.yellowmessenger.com/integrations/razorpay)

**STEP 13:** For more or added security, you can use a Secret but this is Optional. 

**STEP 14:** In the Alert Email, You can give your email address.

**STEP 15:** In the Active Events, Click on the __Invoice Events checkbox__ so that all the sub events in it get clicked. 

![](https://cdn.yellowmessenger.com/xYrfHt0Aw9Ck1615287138117.png)

**STEP 16:** Click on __Create Webhook__ Button. Once this is Successful, For All the types of Payment Events which were mentioned in the Webhook, an event would get Triggered in our YM Chatbot. 

**STEP 17:** When the Invoice Paid Event gets triggered by the webhook defined in the razor pay dashboard, we want to capture it and then display an appropriate message to the user. To do this, we use the following code in the __main__ function on the developer section of our chatbot : 

```js
	if(app.data && app.data.event){
		//app.log(app.data,"THIS IS APP.DATA INSIDE MAIN FUNCTION !");
		if (app.data.event.code == 'razorpay-payment' && app.data.event.data && app.data.event.data.status == "paid" && ((app.data.event.data.amount_paid / 100) > 0)) {
		   await app.sendTextMessage("🥳 PAYMENT SUCCESSFULL !");
		   //app.log("🥳 PAYMENT SUCCESSFULL !");
		}
	}
```

**BRIEF EXPLANATION:**

1. When the payment is successfully completed, the webhook we created in the razor pay dashboard gets triggered and it sends back the event code __`razorpay-payment`__ to our chatbot.

2. So, If an event code of __`razorpay-payment`__ occurs with the event’s data’s status as __`paid`__ and if the amount paid is greater than 0 INR (since we are using the smallest unit of the given currency i.e __Paise__ for the amount value, we are dividing it with 100 for converting back to INR ), we are sending a Text Message to the user such as ‘Payment is Successful’.

NOTE:

As Mentioned above in the first NOTE, inside this function, we can store the user’s cart details to the DataBase as the Payment is Successfully made.