---
title: Implement New Card in Yellow AI Cloud Platform
sidebar_label : Implement carousel card
tags: whatsapp card, carousel  
---


Follow the steps below to use the **card type** option on the **carousel** node in your flow: 

## 1. Add a new card to the flow

1.  Create a Function and store the variables in the function node as an Array  

> Regarding the code to use in the  function, refer to table Code and Card Mapping for the new card in the next section.
    
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

**Code in Function**
```
return new Promise(resolve => {
    // Your logic goes here
    let arr= [];
    let tracard =
            {
                "title": "Track Order",
                "statuses": ["Ordered", "Ready", "Shipped", "In City", "Arrived"],
                "currentStatus": "Shipped",
                "from": { "Title": "Jakarta", "Description": "12/12/2021" },
                "to": { "Title": "Surabaya", "Description": "14/12/2021" },
                "assigneeDetails": {
                    "key": "Name",
                    "value": 'Novi Andari',
                    "image": "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",
                },
                "details": {
                    "Order ID": "#444-2445-2442-222",
                    "Delivey": "14/12/2021",
                    "Total": "IDR 1500",
                },
                //  "actions": {
                //    title: "View data",
                //  text: "View data"
            };
            arr.push (tracard);
    resolve(arr);
});   
```


**Card Type in Carousel**  

<img src="https://i.imgur.com/u6glp54.png" alt="drawing" width="60%"/>




**Display in chat**  

<img src="https://i.imgur.com/0LiFOcR.png" alt="drawing" width="60%"/>


### 2.2 List Card

**Code in Function**
```
return new Promise(resolve => {
  // Your logic goes here
  let arr = [];
  let listcard1 =
    {
      title: 'COVID-19 Queries',
      options: [{
        title: "Domestic - Covid travel guidelines",
        text: "Domestic - Covid travel guidelines"
      }, {
        title: "International - Travel guideliness",
        text: "International - Travel guideliness"
      }, {
        title: "Mandatory web check in",
        text: "Mandatory web check in"
      }, {
        title: "Fly safe and hassle-free",
        text: "Fly safe and hassle-free"
      }, {
        title: "Interest on credit shell",
        text: "Interest on credit shell"
      }]
    } ;
    let listcard2 =
    {
      title: 'Flight COVID-19 Queries',
      options: [{
        title: "Domestic - Covid travel guidelines",
        text: "Domestic - Covid travel guidelines"
      }, {
        title: "International - Travel guideliness",
        text: "International - Travel guideliness"
      }, {
        title: "Mandatory web check in",
        text: "Mandatory web check in"
      }, {
        title: "Fly safe and hassle-free",
        text: "Fly safe and hassle-free"
      }, {
        title: "Interest on credit shell",
        text: "Interest on credit shell"
      }]
         } ; 
      arr.push(listcard1, listcard2);
  resolve(arr);
});  
```


**Card Type in Carousel**   

<img src="https://i.imgur.com/avq95rt.png" alt="drawing" width="60%"/>




**Display in chat**

**![](https://lh4.googleusercontent.com/llWIH43nPoCp08gIifTBRr9L_7U1BfZQ9qKPXXFDwCAXHeETmLfRAL4yBYJXhk6tBPssgzwFQGLDIGIuaToeJs-CFVhgCfKYZqou7PyNMNZgjHsZTjarZ0wbw5_JJxpiVaexIdGCbUVGzgKbnZqrdMV0EfvYORXLkwc-5l_ETGJVN70EHThcmF3wtzTicpzvGc3Qkg)**

 

### 2.3 Status card

**Code in Function**
```
return new Promise(resolve => {
      // Your logic goes here
         let arr= [];
         let stacard =     {
            "title": "Payment success",
            "success": true, //In case of failed pass false
            "text": "Your payment was successfull & your order has been placed.",
            "value": "IDR 15000"
        };
         arr.push (stacard);
      resolve(arr);
  });      
```
**Card Type in Carousel**   

**![](https://lh6.googleusercontent.com/XYabBrzuqGil3LGyI4Jh8VT4jhiG133OBaMj3LszSqhUzXnbW5ActJIlDo0T7f9lRktagBReqdPlil7endagu-oZJeNGh49o19ryV6W9-TfTAUJRpXcFANv0uqsBkijokF0XzzCb33tV7VBJhpIIh7ZL8wnvNGDl_1rvj2s0o5XHx4WR7m6P8c_7DrIWcs_OgrCy-Q)**  

**Display in chat**  
 
**![](https://lh4.googleusercontent.com/kdiPR0SFsryQIsp30d90i7TymakTNeSc0EnJSlkNT5wFbljSxP_sua8SbeRtXexv7ajBrD1WIR_a3fVaSEQT5kL2kT0PveBfTU4EOsnks07xVAD6e73qkfbceOSiR9fAcriN5ja1ur1JzNveiu3MBNG4mW7DW30oaHrfAPwhA8bDtHx0cM0qNCXS4ggXH67EkYrSdg)**  

### 2.4 Contact Card

**Code in Function**
```
return new Promise(resolve => {
   // Your logic goes here
   let arr = [];
   let contcard =
   {
      "title": "Contact Info",
      "download": true,
      "options": {
         "image": "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",
         "key": "Name",
         "value": "Shweta Kumari"
      },
      "actions": [{
         "title": "email",
         "text": "s@gmail.com",
         "icon_class": 'ri-mail-fill'
      }, {
         "title": "Phone",
                 "url": "9876543210",
         "icon_class": 'ri-phone-fill'
      }, {
         "title": "whatsapp",
         "url": "9876543210",
         "icon_class": 'ri-whatsapp-fill'
      }]
   };
 
   arr.push(contcard);
   resolve(arr);
});     
```  

**Card Type in Carousel**  

**![](https://lh5.googleusercontent.com/YSHSSps-jhnshg032xqx6FItENy31im6MBHi56B8PZH-2B7XbDt_zbLwuDLHqD7SmBByTDMBqlO5NI4E5ie-gn_YC2aPWR7n7VAjULwQcJ4DYBy8jqxn_V18yFkOZAR8Nx_bsfg_Av5hIqmOVXM9DRTmHsc5DZ5460pJOArQyL0H2JZ9-RKRF7EbS21rrSd30KaXJA)**  

**Display in chat**  

**![](https://lh3.googleusercontent.com/yp8ShI5YTbkdO4zsk4efZr0q7oY3GF1Vxg4wX1NAY7Wx4_zfYbtidnTZuQfpdSYy7cLtm7XLxz24LFhtzuH_SYzhxrAftevto-xapfvnKVYuRUD2RkRPNWzjUHdmiwXvWh0XuzqxLBduXceDvfcZWh2EE_Za5poxS24jONLpLVpq9kA8NrilET0XW9JNVJNVGo0yUA)**  


### 2.5 Receipt card

**Code in Function**
```
return new Promise(resolve => {
    // Your logic goes here
    let arr = [];
    //let result = JSON.parse(data.variables.searchroomorder);
    let rececard = {
        "title": "Payment receipt",
        "titleHeader": { "Transaction ID": "#444-2445-2442-222" },
        "download": false,
        "item": { "items": "7 Rendang" },
        "options": [{
            'key': "With a value of",
            'value': "IDR 70000"
        }, {
            'key': "On date",
            'value': "14 Feb 2022"
        }],
       // "action": {
         //   title: "View all items",
           // text: "View all items"
       // }
    };
    arr.push(rececard);
    resolve(arr);
    });
```
**Card Type in Carousel**  

**![](https://lh6.googleusercontent.com/je_wRsbKYejZaTqzPzwxh9Kn2iCkrMEjqrHNz6zmyq-Lev46N7rqw5d5eAfY8WNfapeAqW-kDeuahGEtkynjCGRGL67cdnb7pIhmKLr0BYShc24wWwcqrzgOCbv0LQShVSqKzG_JcLk_sIGC5MgTiLjmg9Q75QF_aFzwduNOm2tt_9Yw2d_OcQM6vdni7SC9WtZ_dw)**  


**Display in chat**  

**![](https://lh5.googleusercontent.com/zQwIv-FZSJHiw-zuo8tg4lWnGtCnv2RjsqROwo-E4bq3n_2zd8riCYua044X2-p_V4YDZXpheyJ0XHd0DqFOHn0W8E5ufLf3mxxJkQzpLZ2AEFDf7_NRrsls5IDLs1BOjIgOqIXrdYiGObmtF9RJhHEDHBWhQxtwGZyp2gak3a1ZvcblLeJmqmSZP0scdr68eIk8vQ)**

### 2.6 PDF preview card

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
**Card Type in Carousel**  

**![](https://lh5.googleusercontent.com/PYbE7pUVEKMZ7OFyXsPwJxuOIRmqtaAiig1F5TjUvog_ghmdcBV1UH6M5GzITpO3DkWlGvqDRrV6m7M-Hko46fyj8cEqchMIYvKrndC28Y3YXqcLFtHmiwcU-sdjZE-nRlQogyE9BHDq2FRvv8SPL-FirBx4n56g7orsKklMYvm0u9rX96oj3ACfWouEdHFQsu_yyQ)**  

**Display in chat**

**![](https://lh3.googleusercontent.com/HorDL6FIXM-Uo6Vi1NJdJgD9Fm8nmFPicCH0oXW8BmRjktEnd_q-IzxAUUzobnurki_FafBEFjkIUBv4TixpfG09ihoOrMOfhE7iTUC21TG7rWFKJIsb_th1R0jd4b9uJAibWbZtqFjcFPnleQv02VmoVOYXO-wFFGjctzVZUd3SGVH2uc_GuONM6IG7K6Wa5j8SCQ)**
