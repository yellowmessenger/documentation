---
title: Implement New Card in Yellow AI Cloud Platform
sidebar_label : Implement carousel card
tags:
  - whatsapp card
  - carousel 
---


Follow the steps below to use the **card type** option on the **carousel** node in your flow: 

## 1. Add a new card to the flow

1.  Create a Function and store the variables in the function node as an Array. Our cards utilize the data from this variable to dynamically display it on the UI. If your card data is not dynamic, you may skip this step and directly add the data in the card node for non-dynamic cases.
> Regarding the code to use in the  function, refer to table Code and Card Mapping for the new card in the next section.

:::note
This step is optional if you do not want to use dynamic data. 
:::
    
<img src="https://i.imgur.com/Wyoinwg.png" alt="drawing"/>


<img src="https://lh4.googleusercontent.com/XiWHgdyJ2ehSRK0AIbbScfomr_ILze1UpkMAAiTd2_rqT6t2K6FgVwI51MyuthDCjTRsajNGKkFmagtbOpRHY07ifWEKuTia839WPWaoUx7ymMcp1p22mVZ-hQGlFErr_AsmeQO1WCujhCTMdveGpTt-oeumlLKnUmGjmvXumfvoAq6rf9dMJoy-DaEC7d4rKqTO-A" alt="drawing" width="80%"/>


2.  Add another node in the carousel.
    - Delete the default carousel.
    - Select fetch from the variables that have been set in step 1.   
    ![](https://i.imgur.com/YEX71jL.png)
    - Edit the carousel setting based on the new card type. To edit the card type to use, you can hover the cursor to the right side and then click it.  

     ![](https://i.imgur.com/NcUvtFR.png)  
    
     ![](https://i.imgur.com/RApulNU.png)

> Regarding the Card type to use, refer to Code and Card Mapping for the new card below.  


## 2. Code and Card Mapping for New Card



### 2.1 Tracker card

**Card Type in Carousel**  

<img src="https://i.imgur.com/u6glp54.png" alt="drawing" width="60%"/>

**Display in chat**  

<img src="https://i.imgur.com/gO0zj9o.png" alt="drawing" width="40%"/>

**Code in Function**
```js
[
    {
        "title": "Track Order",
        "statuses": [
            "Ordered",
            "Ready",
            "Shipped",
            "In City",
            "Arrived"
        ],
        "currentStatus": "Arrived",
        "from": {
            "Title": "Mumbai",
            "Description": "12/12/2021"
        },
        "to": {
            "Title": "Bengaluru",
            "Description": "14/12/2021"
        },
        "assigneeDetails": {
            "key": "Name",
            "value": "Purush",
            "image": "https://cdn.yellowmessenger.com/PQuTgjPG7NxY1611996274269.png"
        },
        "details": {
            "Order ID": "#444-2445-2442-222",
            "Delivey": "14/12/2021",
            "Total": "₹ 1500"
        },
        "actions": {
            "title": "View data",
            "text": "View data"
        }
    }
] 
```


### 2.2 List Card

**Card Type in Carousel**   

<img src="https://i.imgur.com/avq95rt.png" alt="drawing" width="40%"/>


**Display in chat**

<img src="https://i.imgur.com/hiBPxx0.png" alt="drawing" width="60%"/>

**Code in Function**
```js
[
	{
		"title": "COVID-19 Queries",
		"options": [
			{
				"title": "Domestic - Covid travel guidelines",
				"text": "Domestic - Covid travel guidelines",
				"url": "https://yellow.ai"
			},
			{
				"title": "International - Travel guideliness",
				"text": "International - Travel guideliness"
			},
			{
				"title": "Mandatory web check in",
				"text": "Mandatory web check in"
			},
			{
				"title": "Fly safe and hassle-free",
				"text": "Fly safe and hassle-free"
			},
			{
				"title": "Interest on credit shell",
				"text": "Interest on credit shell"
			}
		]
	},
	{
      "title": "Flight COVID-19 Queries",
      "options": [
			{
        "title": "Domestic - Covid travel guidelines",
        "text": "Domestic - Covid travel guidelines"
			},
			{
        "title": "International - Travel guideliness",
        "text": "International - Travel guideliness"
			},
			{
        "title": "Mandatory web check in",
        "text": "Mandatory web check in"
			},
			{
        "title": "Fly safe and hassle-free",
        "text": "Fly safe and hassle-free"
			},
			{
        "title": "Interest on credit shell",
        "text": "Interest on credit shell"
			}
		]
	}
]
```

### 2.3 Transaction status card

#### Transaction status card (Payment success)

**Card Type in Carousel**   

**![](https://lh6.googleusercontent.com/XYabBrzuqGil3LGyI4Jh8VT4jhiG133OBaMj3LszSqhUzXnbW5ActJIlDo0T7f9lRktagBReqdPlil7endagu-oZJeNGh49o19ryV6W9-TfTAUJRpXcFANv0uqsBkijokF0XzzCb33tV7VBJhpIIh7ZL8wnvNGDl_1rvj2s0o5XHx4WR7m6P8c_7DrIWcs_OgrCy-Q)**  

**Display in chat**  
 
<img src="https://i.imgur.com/SrQxE6Z.png)" alt="drawing" width="40%"/>

**Code in Function**
```js
[{
	"title": "Payment success",
	"success": true,
	"text": "Your payment was successful & your order has been placed.",
	"value": 1500
}
]
```

#### Transaction status card (Payment failed)

**Card Type in Carousel**   

**![](https://lh6.googleusercontent.com/XYabBrzuqGil3LGyI4Jh8VT4jhiG133OBaMj3LszSqhUzXnbW5ActJIlDo0T7f9lRktagBReqdPlil7endagu-oZJeNGh49o19ryV6W9-TfTAUJRpXcFANv0uqsBkijokF0XzzCb33tV7VBJhpIIh7ZL8wnvNGDl_1rvj2s0o5XHx4WR7m6P8c_7DrIWcs_OgrCy-Q)**  

**Display in chat**  

<img src="https://i.imgur.com/QUUbKcL.png)" alt="drawing" width="40%"/>

**Code in Function**
```js
[
  {
	"title": "Payment failed",
	"success": false,
	"text": "Your payment was failed & your order is not placed.",
	"value": 1500
}
]
```

### 2.4 Contact Card

**Card Type in Carousel**  

**![](https://i.imgur.com/3gB7q7Y.png)** 

**Display in chat**  

<img src="https://i.imgur.com/HVUfu8y.png" alt="drawing" width="40%"/>  

**Code in Function**
```js
[
    {
        "title": "Contact Info",
        "download": "https://cdn.yellowmessenger.com/KpvHzrKBodtw1648483057986.jpg",
        "options": {
            "image": "https://cdn.yellowmessenger.com/PQuTgjPG7NxY1611996274269.png",
            "key": "Name",
            "value": "Purush"
        },
        "actions": [
            {
                "title": "email",
                "text": "purushottam.yadav@yellow.ai",
                "icon_class": "ri-mail-fill",
               "url":"mailto:sankalp.gupta@gmail.com"
            },
            {
                "title": "Phone",
                 "text": "Phone",
                "icon_class": "ri-phone-fill",
               "url":"tel:9810272341"
            },
            {
                "title": "whatsapp",
                 "text": "whatsapp",
                "icon_class": "ri-whatsapp-fill",
               "url":"whatsapp://send?phone=+919810272341"
            }
        ]
    }
]
```


### 2.5 Receipt card

**Card Type in Carousel**  

**![](https://lh6.googleusercontent.com/je_wRsbKYejZaTqzPzwxh9Kn2iCkrMEjqrHNz6zmyq-Lev46N7rqw5d5eAfY8WNfapeAqW-kDeuahGEtkynjCGRGL67cdnb7pIhmKLr0BYShc24wWwcqrzgOCbv0LQShVSqKzG_JcLk_sIGC5MgTiLjmg9Q75QF_aFzwduNOm2tt_9Yw2d_OcQM6vdni7SC9WtZ_dw)**  


**Display in chat**  

<img src="https://i.imgur.com/LJeO5AF.png" alt="drawing" width="40%"/> 

**Code in Function**
```js
[
    {
        "title": "Payment receipt",
        "titleHeader": {
            "Transaction Number": "#444-2445-2442-222",
            "Transaction ID": "#444-2445-2442-222"
        },
        "download": "https://yellow.ai",
        "item": {
            "items": "7 Rendang"
        },
        "options": [
            {
                "key": "With a value of",
                "value": "IDR 70000"
            },
            {
                "key": "date",
                "value": "Feb 2022"
            },
            {
                "key": "Cost in rupees",
                "value": "70000"
            },
            {
                "key": "yyyy-mm-dd",
                "value": "2022-02-02 "
            },
            {
                "key": "On date",
                "value": "14 Feb 2022"
            }
        ],
        "action": {
            "title": "View all items",
            "url": "https://www.yellow.ai"
        }
    }
]
```

### 2.6 PDF preview card

**Card Type in Carousel**  

**![](https://lh5.googleusercontent.com/PYbE7pUVEKMZ7OFyXsPwJxuOIRmqtaAiig1F5TjUvog_ghmdcBV1UH6M5GzITpO3DkWlGvqDRrV6m7M-Hko46fyj8cEqchMIYvKrndC28Y3YXqcLFtHmiwcU-sdjZE-nRlQogyE9BHDq2FRvv8SPL-FirBx4n56g7orsKklMYvm0u9rX96oj3ACfWouEdHFQsu_yyQ)**  

**Display in chat**

**![](https://lh3.googleusercontent.com/HorDL6FIXM-Uo6Vi1NJdJgD9Fm8nmFPicCH0oXW8BmRjktEnd_q-IzxAUUzobnurki_FafBEFjkIUBv4TixpfG09ihoOrMOfhE7iTUC21TG7rWFKJIsb_th1R0jd4b9uJAibWbZtqFjcFPnleQv02VmoVOYXO-wFFGjctzVZUd3SGVH2uc_GuONM6IG7K6Wa5j8SCQ)**

**Code in Function**
```
return new Promise(resolve => {
  // Your logic goes here
  // console.log(data.profile, "profile zuhud");
  let arr = [];
  let pdfcard = {
  "title": "Lorem Ipsum",
  "text" : "lorem ipsum dolor amet",
  "image" : "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",
  "actions": [{
    "title": "Preview",
    "preview": "http://www.africau.edu/images/default/sample.pdf",
      //  "feedback": JSON.stringify({filename:'pdf-test.pdf'}) //optional
  }, {
        "title": "Download",
        "buttonDefault": "url",
        //"analytics": "analytics",
        "url": "http://www.africau.edu/images/default/sample.pdf",
       // "postback": "post-back"
      } ]
};
    arr.push(pdfcard);
    resolve(arr);
  });   
```

### 2.7 Multi select transaction card

**Display in chat**

<img src="https://i.imgur.com/OAToVqQ.png)" alt="drawing" width="50%"/>

**Code in Function**

```js
[
            {
                id: ‘1b23-0zdc’,
                title: “Pertam Kedua Ketiga”,
                type: “Debit”,
                image: “https://cdn.yellowmessenger.com/boXfK6e5d6LK1675079020492.png”,
                status: “Success”,
                amount: 10000,
                accountName: “DCA”,
                currency: “IDR”,
                time: “2022-09-12T00:00:00.000Z”,
                accountNumber: `${cardId}`,
                additionalInfo: [
                    “Transfer to bank”,
                    “Destination : BCA”
                ]
            },
            {
                id: “23bc-123x”,
                title: “Pertam Kedua Ketiga”,
                type: “Debit”,
                status: “Success”,
                amount: 10000,
                accountName: “DCA”,
                currency: “IDR”,
                time: “2022-09-12T00:00:00.000Z”,
                accountNumber: “xxxx-5678”,
                additionalInfo: [
                    “Transfer to bank”,
                    “Destination : BCA”
                ]
            }
	]
```

### 2.8 Product card

**Display in chat**

<img src="https://i.imgur.com/pzQW3vv.png" alt="drawing" width="40%"/>

**Code in Function**

```js
[
  {
    "title": "New Apple iPhone 12 (128GB)",
    "text": "The iPhone 12 and iPhone 12 mini are part of Apple's latest generation of smartphones, offering OLED displays, 5G connectivity, the A14 chip for better performance, improved cameras, and MagSafe, all in a new, squared-off design.",
    "value": [
      "₹ 80,900",
      "₹ 82,900",
      "You save ₹ 2,900"
    ],
    "input": true,
    "image": [
      "https://cdn.yellowmessenger.com/ZglWKNRsESKb1623145034869.jpeg"
    ],
    "titleHeader": {
      "₹ 82,900": "You save ₹ 2,900"
    },
    "options": {
      "key": "Description",
      "value": "The iPhone 12 and iPhone 12 mini are part of Apple's latest generation of smartphones, offering OLED displays, 5G connectivity, the A14 chip for better performance, improved cameras, and MagSafe, all in a new, squared-off design."
    },
    "actions": [
      {
        "title": "Purchase",
        "text": "Purchase"
      },
      {
        "title": "Know More",
        "text": "Know More"
      },
      {
        "title": "More",
        "text": "More"
      },
      {
        "title": "Visit Site",
        "url": "https://www.yellow.ai"
      }
    ]
  },
{
    "title": "New Apple iPhone 12 (128GB)",
    "text": "The iPhone 12 and iPhone 12 mini are part of Apple's latest generation of smartphones, offering OLED displays, 5G connectivity, the A14 chip for better performance, improved cameras, and MagSafe, all in a new, squared-off design.",
    "value": [
      "₹ 80,900",
      "₹ 82,900",
      "You save ₹ 2,900"
    ],
    "input": true,
    "image": [
      "https://cdn.yellowmessenger.com/ZglWKNRsESKb1623145034869.jpeg"
    ],
    "titleHeader": {
      "₹ 82,900": "You save ₹ 2,900"
    },
    "options": {
      "key": "Description",
      "value": "The iPhone 12 and iPhone 12 mini are part of Apple's latest generation of smartphones, offering OLED displays, 5G connectivity, the A14 chip for better performance, improved cameras, and MagSafe, all in a new, squared-off design."
    },
    "actions": [
      {
        "title": "Purchase",
        "text": "Purchase"
      },
      {
        "title": "Know More",
        "text": "Know More"
      },
      {
        "title": "More",
        "text": "More"
      },
      {
        "title": "Visit Site",
        "url": "https://www.yellow.ai"
      }
    ]
  }
]
```

### 2.9 Slider card

**Display in chat**

<img src="https://i.imgur.com/l3xsbQJ.png" alt="drawing" width="40%"/>

**Code in Function**

```js
[
	{
		"title": "Loan Amount",
		"slider": {
			"step": 1000000,
			"min": 1000000,
			"max": 25000000,
			"val": 0,
			"min_content": "10 L",
			"max_content": "25 Cr"
		}
	}
]
```

### 2.10 Single select transaction card

**Display in chat**

 <img src="https://i.imgur.com/xdNmlNi.png" alt="drawing" width="60%"/>

**Code in Function**

```js
[
            {
                id: ‘1b23-0zdc’,
                title: “Pertam Kedua Ketiga”,
                type: “Debit”,
                image: “https://cdn.yellowmessenger.com/boXfK6e5d6LK1675079020492.png”,
                status: “Success”,
                amount: 10000,
                accountName: “DCA”,
                currency: “IDR”,
                time: “2022-09-12T00:00:00.000Z”,
                accountNumber: `${cardId}`,
                additionalInfo: [
                    “Transfer to bank”,
                    “Destination : BCA”
                ]
            },
            {
                id: “23bc-123x”,
                title: “Pertam Kedua Ketiga”,
                type: “Debit”,
                status: “Success”,
                amount: 10000,
                accountName: “DCA”,
                currency: “IDR”,
                time: “2022-09-12T00:00:00.000Z”,
                accountNumber: “xxxx-5678”,
                additionalInfo: [
                    “Transfer to bank”,
                    “Destination : BCA”
                ]
            }
	]
```