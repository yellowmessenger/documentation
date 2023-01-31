---
title: EdTech template
sidebar_label : EdTech template
---

> Explore **Edtech(education) template** [here](https://cloud.yellow.ai/marketplace?industries=Ed-tech).  

## 1. Introduction

Educational firms often get a lot of enquiries about their courses and offerings.

The EdTech template provides a complete chat interface with prebuilt flows that helps Educational Technology firms automate query handling, user acquisition, user communications, and user retention.

With this you can automate handling user inquiries, user support, and lead generation process.

You can completely customize the template according to your business requirement. For example, customize dialogues used in conversations, update courses and their structure, enable OTP-based authentication or single sign-on options. show course discounts, take elaborative quizzes, add FAQs, and more.

:::info
For details on importing and editing the markerplace templates, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro). 
:::



## 2. Prebuilt use cases

The EdTech template covers the most common use cases targeted for students as explained in the following flow diagram:

![](https://i.imgur.com/7QgJTDP.png)

  

### 2.1 Discover courses

You can show the list of courses that you offer and when the user selects a specific course, show the course menu.

  

   ![](https://i.imgur.com/9DN8Ou0.png)

  

Let’s see the **Discover courses** flow in detail:

1.  Starts the flow when the user selects *Discover courses* (intent *List all courses*).
    

   ![](https://i.imgur.com/sGirfSB.png)

2.  **Displays courses offered**: Shows the list of courses offered using the **Carousel node** and stores the user response in the variable `subjectname`.
    

> * Customize the course names as required. You can add more items or remove existing items as needed.
    

3.  **Validates user input**: Uses the **Condition node** to validate the user selection. If-else logic is applied to trigger the *Maths main menu*, *Science main menu, and History main menu* flows based on the user input. 
    

:::note

History, Maths and Science main menus follow the same structure.

:::

4.  **Shows the carousel image with relevant options**: *Overview*, *Fee structure*, and *Apply now* options using the **Carousel** node and triggers a specific flow based on the user input.
    

   ![](https://i.imgur.com/Qdc9CKL.png)

> * Here, you can modify the condition and define your own custom flows.
    

5.  **Maths overview flow**: Uses Image and Text nodes to display course overview and shows *Reviews*, *Fee structure*, and *Apply now* options (**Carousel**).
    

   ![](https://i.imgur.com/gmOz8du.png)

1.  Validates the user input (**Condition**) and triggers the relevant flow.
    
2.  Selecting Reviews shows up the link of the *Reviews* page (Text node) and triggers the **Followup** flow. The flow has two options linked to the respective flows - [Connect with Counselor](#24-connect-with-support) and *Back to Main menu* (**Carousel**).
    

> * You can add your own link or perform other actions like trigger a flow, show carousel, show videos etc.
    

3.  Selecting *Apply now* shows a text node and triggers the **Book a demo class** flow.
    
4.  Selecting *Fee Structure* triggers the **Fee structure** flow. This flow shows information using **Text** and **Image** nodes along with the **Followup flow**.
    

> * There is currently a blank PDF for the fee structure. You can either provide your fee structure or use some other actions like trigger flow, provide link etc.
    

### 2.2 Course material

You can show the course material in a file that the user can download to the users who registered for the course.

Let’s see the **Course material** flow in detail:

1.  **Starts** with the intent `Show me the course material`.
    
2.  **Captures user identifier**: Shows a text message followed by the **Phone Prompt **node and stores it in the `PhoneNo` variable.
    

   ![](https://i.imgur.com/oyp3CUl.png)

> * You can use email or other prompt nodes to identify the user.
    

3.  **Verifies if the identifier is registered**: Searches if the specified phone number is registered in the leads table (Database node) and stores the registered user details in the user_validation object variable.
    

Leads is a table created inside the **Database** module that contains these fields - Name, phone number, email address, course, subscription status (Demo, Active, or Inactive), record inserted date, and record updated date.

> * You can add new columns or remove an existing column according to your requirement.
> * Use APIs to send and receive information from third-party systems.
    

4.  **Allows registering new users**: If the user is not registered, it shows the Register now option, along with the Main menu and Try  again options (Quick replies node).  
    
    a. Selecting Register now executes the flow [Book a demo class](#23-book-a-demo-class) and updates the leads database.
   b. Selecting the Main menu triggers the **Start flow**.

5.  Shows the file for registered users: If the user is registered, it shows the list of courses available (Carousel node), and based on the user input (Condition node) it shows the relevant course material (File node) that the user can download (PDF file).
    

> * Customize the list of courses that you offer and upload the respective course materials.  
> * You can use Document to upload course materials and take advantage of Q&A where the system can extract most relevant answers from the uploaded documents automatically.
    
  

### 2.3 Book a demo class

This is a lead generation flow where users can book for a demo class. Post the demo class, you can provide an option to register for the complete course.

Let’s see the **Book a demo class** flow in detail:

1.  **Starts** with the intent `Book a demo class`.
2.  **Captures user information**: Shows a **Text** node followed by Name, Phone number, and Email nodes and stores the user’s response in the respective variables.

> * Modify the text that you want to show up when the flow starts.
> * Capture more details if required using the relevant nodes. You can skip any prompt (name, phone number, or email) if not required for your use case.
    

4.  **Validates user information**: Shows the details provided by the user. The user can verify the details provided and modify if required information using *Edit name, Edit email, Edit phone number*, and *No changes* (**Quick replies node**).  


   * This flow is to allow users to verify if the details provided are correct. Any changes the user makes through the respective edit options will update the values in the database accordingly.
    

5.  **Displays list of courses**: Selecting the *No changes* option sets the variable value for subscription as Demo and shows the list of courses (**Quick replies**).
6.  **Displays slots**: Shows the slots available for the selected course using the **Condition** node.
7.  **Updates user information**: Updates the leads database (**Database** node) with the name, email address, phone number, and subscription status followed by a confirmation text message.
    

### 2.4 Connect with support

You can allow your users to connect to an education counselor to address their queries.

Let’s see the **Connect to a counselor** flow in detail:

1.  Triggers the Connect with support agent intent and shows two options - Chat with support and FAQs.  

   ![](https://i.imgur.com/kfPe4Lz.png)
    
2.  Here is how the Chat with support flow works:
    
   a.  **Collects user information**: Asks for the user’s name, mobile number, and email address using the respective **Prompt nodes**.
> * You can customize the information that you want to capture.
    
   b. **Asks for reason**: Shows a predefined list of  reasons before connecting to the support - **Cancel Membership**, **Get career related advice**, **Talk to support specialist**.
    

   c.  If the user selects *Cancel membership*, it triggers the **Cancel Membership** flow where it captures the reason for cancellation and updates the subscription status in the **Database**.
    
   d.  **Connects to the support**: If the user selects *Get career related advice*, or *Talk to support specialist*, it [connects to the live agent](#24-connect-with-support).
    
   e.  If the agent is offline, a new ticket is created.
    

3.  **FAQs flow**: It fetches answers quickly from the list of FAQs added through the [FAQs module](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs).
    

   ![](https://i.imgur.com/w718G8Y.png)

   a.  Shows a list of frequently asked questions the user can select (**Quick replies node**).
    
   b.  Fetches replies based on the selected question.
    

  

> * You can keep the questions open-ended if required. Import FAQs in bulk using the [FAQs module](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#2-add-faqs-in-bulk) and the bot shows up the answer based on the keywords. You can then connect if he still wishes to contact support.
    

### 2.5 Take a quiz

You can allow the user to select the course that he is interested in, and show questions related to the course. Recommend the course levels according to their current knowledge. For example, recommend the basic course for answering basic questions incorrectly, recommend a basic course, if they answer basic questions correctly, recommend an advanced training course.

Let’s see the **Take a quiz** flow in detail:

![](https://i.imgur.com/5pSnBWy.png)

1.  Starts with Take a quiz intent.
2.  **Shows the list of courses**: Shows a text message followed by the list of courses to select from (Quick replies node).
3.  **Displays question**: Shows the relevant question with multiple answers (Quick replies node) for the selected course.
4.  **Recommends course level**: Recommends the course level based on the answer and provides discount codes (Text node).
5.  Provides options *Retake quiz* (if user selects incorrect answer) and *Book a demo* using Quick replies.
6.  Selecting *Book a demo* triggers [Book a demo class](#23-book-a-demo-class) flow and *Retake quiz* goes back to step 3.
    

## 3. Build your own use cases

Along with the prebuilt flows, you can create your own flows for your business specific use cases using [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview) and other modules of Yellow.ai.

Here are some EdTech specific templates:

-   **OTP verification for qualifying leads**: You can validate your registered user details through OTP based authentication using the Send OTP and Verify OTP action nodes.

   ![](https://i.imgur.com/lEyZPjC.png)

-   **Send campaigns to promote new courses**: Use the bot as a good lead generation tool. You can send course information, promote new courses, or offer discounts on existing courses to your leads through [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign) or [Workflow campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/workflowCampaign).
    
-   **Take feedback/review on courses**: 
    You can create a flow to capture feedback from users. Provide an option to select the course, and list down the feedback options to select with a text box. Create a database table to store the user response.
    
-   **Single sign-on**: Make use of the API or Database modules and pass a custom script that can read data from your website and pass it to the bot directly every time the user opens the bot.
    
-   **Provide more study material**: You can use [Documents](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition) feature available in Studio to upload your documents and generate FAQs from them. 
   For example, it can open the document and navigate to the specific page and section that the user has searched for.
    
-   **Take elaborate career quizzes**: You can increase the number of questions and complexity in a quiz. You can do assessment post completing the courses.
    
* **Use APIs to send or receive data**: You can also use [APIs](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) to send or receive data according to your preference from third-party systems. With the API feature, you need not sync or import the entire data to yellow.ai platform.
