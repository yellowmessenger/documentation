---
title : Enable Cloud features in the App Platform using App functions
sidebar_label : Enable cloud Integration in the App platform
---

# Use-cases

Now App’s developer can use the below function to execute cloud integration action node.

###  Execute action node

The ```executeIntegrationAction``` function enables you to execute the action node of cloud’s Integration.

#### Sample code

```
app.executeIntegrationAction({
    "integrationName": "payu-payment-gateway",
    "action": "Generate Payment Link",
    "dynamicParams": {
        "amount": "1",
        "productInfo": "testProduct",
        "customerFirstName": "Test Customer",
        "customerEmail": "test@test.com",
        "customerMobileNumber": "9999999999",
        "txnid": "123456789"
    }
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})
```

|Params’ Name|Required|Description|Example|
|--- |--- |--- |--- |
|integrationName|Mandatory|To get this value, Go to cloud.yellow.ai-> Integration -> search for require integration ->connect it using your creds-> Go to flow -> add flow for integration ->Click on integration action node -> Copy the integration name from the card-> replace first caps letter to small.|payu-payment-gateway|
|action|Mandatory|Go to flow -> click on integration card -> copy the action name from drop down|Generate Payment Link|
|dynamicParams|Mandatory|Select the action from integration card -> copy the field name as key(replace first caps letter in small) and value you can take from the user.|<code> {"amount":"1","productInfo":"testProduct","customerFirstName":”Test Customer","customerEmail":"test@test.com","customerMobileNumber":"9999999999","txnid": "123456789"}</code>|

#### Success Response
```
{
  "Transaction Id": "abaac3332",
  "Email Id": "test@test.com",
  "Phone": "9900000000",
  "Status": "Success",
  "URL": "https://test.payu.in/processInvoice?invoiceId=9eec02a9e2efc335bdda2d7486121e03de24c2fa7d32d17462ad5a6a9058db"
}
```

#### Failure Response

```
{
   “success”: false,
    “error”:  “Error processing Generate Payment Link”,
    “data”:{
     	“success”: false,
        “error”:  “Error In executing action node”,
        “apiResponseBody”:{
            “message”:”Invalid amount”
        }
    }
}

```

## Configuration

1. Go to Growth then click on Data Explore, It will open cloud.yellow.ai site.
![alt_text](https://cdn.yellowmessenger.com/mQiAoXUIu5gk1663827293370.png "image_tooltip")

2. Go to Integration section in cloud.yellow.ai then search for your integration and connect by using your credentials.
![alt_text](https://cdn.yellowmessenger.com/W3U4XqVBIwGe1663827444396.png "image_tooltip")



