---
title: Healthcare template
sidebar_label : Healthcare template
---

> Explore **Banking and finance template** [here](https://cloud.yellow.ai/marketplace/41d196469e2c531ec23971260e070663).  

The **Healthcare** template provides quick and convenient access to information about your healthcare services, appointment scheduling, and patient registration. This article walks you through the features of the template and help you in  enhancing your overall healthcare experience.

:::info
For details on importing and editing the markerplace templates, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro). 
:::

-------------------

## 1. Prebuilt cases

The following are the most common use cases (flows) that are prebuilt in healthcare template:

1. **Start:** This flow offers the options for a new patient to register, book a consultation, view clinics closer to their place, collect medical reports and reach out to support for personalised queries.
2. **New patient registration:** This flow collects the details of a new patient, for example, name, age, contact number, gender, email address and stores it in a database.
3. **Book a consultation:** This flow assists your users in scheduling an appointment with your healthcare centre by collecting the date and time of the doctor you would like to consult. 
4. **Locate Nearby Clinics:** This flow collects the user's location details and shows the clinics closer to their place.
5. **Collect report:** This flow helps your users collect their health reports by accessing their electronic records.
6. **Connect with support:** This flow provides customer support either by answering user questions from the trained FAQs or by connecting the bot user to the support agent to address complex queries.

-------------------

### 1.1 Start - Display the main menu

1. **Start trigger**: It is triggered immediately after the welcome message. 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) - ```Main menu options```. 
2. **Identify the channel**: A logic node ([channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter)) is used to identify the channel in which the bot conversation is happening. Nodes used in the further flow will be based on the channel.
3. **Quick reply buttons to display menu options**: Six menu options (**New Registration, Book a consultation, Locate nearby clinics, Collect reports, and Connect with support**) are displayed. For WhatsApp, these are shown as Quick reply buttons using the [WhatsApp list](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) node, and for other channels, these are shown as menu options using the [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node.

   ![](https://i.imgur.com/KI8snQG.png)


#### :pushpin: Tips 

- You can add multiple [channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) to your bot to reach out to your users through any mode.
- If you have varied menu options, you can add (or delete) the quick reply buttons and customize what can be displayed in the main menu.

-------------------

### 1.2 New patient registration

1. **Start trigger:** This flow is triggered when the bot user selects the **New patient registration** button when menu options are displayed (start flow).
It can also be triggered at any point of the conversation when the bot user types a sentence that matches the intent - ```New patient registration```.
2. **Fetch name, age, gender, email ID, and phone number**: Using prompt nodes - [name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name), [question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question), [email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email), [phone number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone), and [gender](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) are fetched and stored in the respective variables - ```name, selectedAge, selectedGender, phoneNo, email```.

    ![](https://i.imgur.com/Fhg8YN6.png)


3. **Verify patient details:** The [quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node displays all retrieved information, such as name, age, gender, email, and phone number, and allows users to modify it. If you select **No change** option, then your data will be stored in the database.

    <img src="https://i.imgur.com/PalQaNC.png" alt="drawing" width="80%"/>

4. **Storing new patient details in the database:** After the details are modified, the [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node is used to store the entered details in the table - ```Patient details```. Once the records are added, a success message is displayed using text node .

    <img src="https://i.imgur.com/WhEECsW.png" alt="drawing" width="80%"/>  

#### :pushpin: Tips 

- You can collect more details - previous medical details and upload files.
- Using [execute flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow) and [QR nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) you can display the next options available for the patient aft registration.       
   
----------

### 1.3 Book a consultant

1. **Start trigger:** This flow is triggered when the bot user selects the **Book a consultant** button when menu options are displayed.
It can also be triggered at any point of the conversation when the bot user types a sentence that matches the intent- ```Book an appointment```.
    ![](https://i.imgur.com/DEuA4Qu.png)
2. **Capture email ID of the patient:**
   - Using a [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, **email ID** is obtained and stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```emailId```. 
    <img src="https://i.imgur.com/MCtQVrz.png" alt="drawing" width="80%"/>
3. **Fetch the branch details from the database:** 
   - [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) - From the doctor details table, the database node will fetch unique branch names, which are stored in a  [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```branch```. 
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - branch function is used to display the branch names, which are stored in the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```branch_qr```.
    - [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to fetch a list of branch names from the ```branch_qr``` variable and display the branch names in the form of quick reply buttons. 
![](https://i.imgur.com/1QHyybF.png)
4. **Fetch the doctor's specialization from the database:**
   - [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) - From the doctor details table, the database node will fetch all the details of doctors from the previously selected branch, which are stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```doctor```. These records are sent to the function.
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - ```speciality``` function is used to display the doctor's specialization, which is stored in the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)- ```speciality_qr``` in the form of quick reply buttons. 
    - [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to fetch a doctor's specialization from the ```speciality_qr``` variable and display the branch names in the form of quick reply buttons. 
    <img src="https://i.imgur.com/C12XIL9.png" alt="drawing" width="80%"/>
5. **Fetch the doctor's details from the database:**
    - [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) - From the doctor details table, the database node will fetch all the details of doctors from the previously selected branch and doctor specialization, which are stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```doctor```. These records are sent to the function.
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - doctor function is used to display the doctor's name, which is stored in the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```doctor_qr``` in the form of quick reply buttons. 
    - [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to fetch a doctor's name from the ```doctor_qr``` variable and display the branch names in the form of quick reply buttons. 
    <img src="https://i.imgur.com/zuW1TM7.png" alt="drawing" width="80%"/>

6. **Display date and time slot for appointment:**
   -  [Date](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-date) node is used to select a single date and store it in the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)```dt```.
   -  [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node, is used to select a morning or evening slot for the users.
   -  [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - timeslot function is used to display morning or evening timeslots, for example- 9 AM - 10 AM. 
   
    ![](https://i.imgur.com/IHKld6z.png)

7. **Store details in database and confirm booking:** After all the details are fetched, a booking ID is generated - ```bookappointresponse``` function. 
   - A [database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node is used to store the entered details in the table -```Booking details```. Once the record is added, your appointment booking is successfully created.

    <img src="https://i.imgur.com/0uox17m.png" alt="drawing" width="80%"/> 

-------------------

### 1.4 Locate nearby clinics

   ![](https://i.imgur.com/fcnNIEf.png)

1. **Start Trigger:** This flow is triggered when the bot user selects the **Locate nearby clinics** button when menu options are displayed (start flow).

   - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) - ```Locate nearby clinics```
2. **Collect location:** User location is collected using the [location](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-location) node. This information is stored in a variable named **location**.
3. **Nearby clinics:** A search happens in the [database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) that contains the location details of all the clinics. A flash message 'Please wait while we fetch the nearest branch.' is displayed using the [text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) node before showning nearby clinics.

   - If there is a clinic closer to the user location, the flow moves to the **success** branch.
   - If there's no clinic in or closer to the user location, the flow moves to the **fallback** and conveys this in a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text).

    ![](https://i.imgur.com/r2tHPOX.png)
4. **Clinic details:** The success branch is connected to a [function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function) which executes the function **nearbyClinics** and stores the clinic details in the variable **fiveNearbyDealers**.
5. **Display the clinic details:** The [function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function) is then connected to a [variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables) which is connected to a [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition) and [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text). At this step, the list of clinics will be displayed to the end user.

---------------

### 1.5 Collect reports

1. **Start trigger:** This flow is triggered when the bot user selects the **Collect report** button when menu options are displayed.
It can also be triggered at any point of the conversation when the bot user types a sentence that matches the intent: "collect healthcare reports."
2. **Displays relavant options to collect report:** Shows the MRN and Phone number options to collect report using the [carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node. 
    ![](https://i.imgur.com/DPaxpMM.png)
3. **Identify the selected option and display details to collect report:** The selected option from the Carousel node is identified by the [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition).
   - If MRN option is selected, [question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node is used to obtain the MRN number.
   - [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node is used to fetch MRN.
   - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - ```generateDynamicLink``` function is used to fetch the report from the ```record health``` database, which is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)- ```test_report``` and it converts the report into PDF format.
    ![](https://i.imgur.com/P6PVLqp.png) 
    - Similarly, if phone number option is selected, [phone number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) node is used to get the phone number of the patient.
	- [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node is used to fetch phone number.
   - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - ```generateDynamicLink``` function is used to fetch the report from the ```record health``` database, which is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)- ```test_report``` and it converts the report into PDF format.
    ![](https://i.imgur.com/ISyRRgD.png)

-------------

### 1.6 Connect with support

[Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) are used to fetch the bot user's information such as ```phone number```, ```name```, and ```query```. These details are stored in the [respective variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes) and passed into the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) action node, this will connect the user to the support agent.  

   ![](https://i.imgur.com/7yl13Mx.png)

> Inbox must be set up to connect the bot user to a live support agent. A support agent must be available (online) when the support request is raised. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox) to learn about Inbox. 

   ![](https://i.imgur.com/9nZR7wo.png)



#### :pushpin: Tips 

- Add/ Delete the number of FAQs listed on the Quick reply node. 
- Add [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs) based on your industry. 

    ![](https://i.imgur.com/GAmjyQ7.png)

- **Name** and **Query** are the mandatory fields to use a **Raise ticket** node. You can reduce the prompt nodes to avoid collecting details from the users prior or you can add more prompt nodes to collect other details before connecting to the agent.
- As per requirements, you can fetch user details (name, email address, number) using **Prompt** nodes even if the user selects FAQs. This data can be used later for acquisition or monitoring purposes.

