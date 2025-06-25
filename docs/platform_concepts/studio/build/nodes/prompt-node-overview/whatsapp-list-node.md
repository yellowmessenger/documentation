---
title: WhatsApp list node
sidebar_label: WhatsApp list
---

WhatsApp list node allows you to display organized lists of options to users via the WhatsApp channel. By leveraging the WhatsApp Business API, this feature enables efficient communication within the 24-hour messaging window, offering a more structured and user-friendly way for customers to select from various options.

You can use WhatsApp list:

* **Product or service selection**: You can present a list of products, services, or categories to allow the users to browse and select.
* **Appointment booking**: Display available time slots or service locations for users to choose from.
* **Customer support**: To offer different support options like technical issues or general inquiries.

**Configure WhatsApp list node**

To configure WhatsApp list node, follow these steps:

1. Drag and drop the WhatsApp list node in the flow editor.

2. Define the fields **Message body**, **Title** and **Row**.

3. To provide row details, click a row and populate the fields **Title**, **Value** and **Description**.
   
    ![](https://i.imgur.com/vmDdimd.png)
    
4. Enable **Advanced settings** to enter the list Header and Footer.

    <img  src="https://i.imgur.com/iaxGxXi.png"  alt="drawing"  width="40%"/>
     
### Configure dynamic WhatsApp list options

To configure the dynamic WhatsApp list node, follow these steps:

1. Go to the WhatsApp list node and click the highlighted icon to copy the sample variable.

      <img src="https://i.imgur.com/GJ44k7Z.png"  alt="drawing" width="60%"/>
      
2. Go to the **Functions** section and paste the sample variable into the **Resolve** section.
     
   ![](https://i.imgur.com/iShsC1J.png)
     
3. In the flow builder section, add a **Function** node and select the function name you created in the previous step.
      ![](https://i.imgur.com/jIiqY7V.png)

4. Create a variable of type object and select it to store the function’s response.

    ![](https://i.imgur.com/CxVMV9I.png)
    
5. Add a WhatsApp list node and select the variable created in the previous step

    ![](https://i.imgur.com/0YO4NV6.png) 
    
6. [Test](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/test-wa-bot) the flow to view the dynamic WhatsApp list.

   <img  src="https://i.imgur.com/t78xhFv.png"  alt="drawing"  width="40%"/>