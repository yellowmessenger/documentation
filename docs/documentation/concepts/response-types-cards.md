---
title: Response types - Action, Logic
sidebar_label: Response types - Cards
---



# Cards

Type of cards

1. Generic Card
2. Status Card
3. Tracker Card
4. Contact Card
5. Receipt

**Status Card**

Can be used to inform the user about transaction result. It can be a payment, ticket creation or an agent assignment, etc

![Screenshot 2021-05-11 at 1.37.39 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/62BE32FE-61BD-4D36-8606-8130D052F8FE_2/Screenshot%202021-05-11%20at%201.37.39%20PM.png)

![Screenshot 2021-05-11 at 1.37.46 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/53285048-1B65-44A6-B509-D7CF11AAC169_2/Screenshot%202021-05-11%20at%201.37.46%20PM.png)

```other
{ grid: true, display: "transactionStatus" }

{
	"title": "Payment success",
	"success": true,
	"text": "Your payment was successfull & your order has been placed.",
	"value": 1500
}
```

**Tracker Card**

![Screenshot 2021-05-11 at 2.23.53 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/4A5575EF-7274-47CA-8C01-DFA097740CC5_2/Screenshot%202021-05-11%20at%202.23.53%20PM.png)

![Screenshot 2021-05-11 at 2.31.55 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/29F7E1F8-4E48-4B7D-8362-8511E7E7DCA6_2/Screenshot%202021-05-11%20at%202.31.55%20PM.png)

```other
{ grid: true, display: "trackerDetailed" }
		
{
	"title": "Track Order",
	"statuses": ["Ordered, "Ready", "Shipped", "In City", "Arrived"]
	"currentStatus": "Shipped",
	"from": { "Title": "Mumbai", "Description": "12/12/2021" },
	"to": { "Title": "Bengaluru", "Description": "14/12/2021" },
	"details": 
		{
			"Order ID": "#444-2445-2442-222",
			"Delivey": "14/12/2021",
			"Total": "₹ 1500",
		}
	"assigneeDetails":
		{
			"Name": "Mahesh Kumar",
			"Image": url,
		}
	"actions":
	[
		{
			title: 
			text:
			value:
		}
	]
}
```

**Contact Card:**

![Screenshot 2021-05-11 at 2.44.55 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/933F5EE2-210A-4A41-83D7-93CE6AE63BFA/B6057518-54FE-4D81-B583-91613F3AAE6E_2/Screenshot%202021-05-11%20at%202.44.55%20PM.png)

```other
{ grid: true, display: "contact" }

{
	"title": "Conatct Info",
	"download": true, //to be downloaded as .vcf
	"options": {
		"image": "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",
		"name": "Shweta Kumari",
		"email": "shw@gmail.com"
		"whatsapp: "8122302392"
		"phone": "8122302392"
	}
}
```

