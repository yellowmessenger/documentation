---
title: EdTech template
sidebar_label : EdTech template
---

## 1. Introduction

Educational firms often get lot of enquiries about their course offerings, course structure, fee details, discounts, registration procedure, or talk to a consultant,

The EdTech template provides a complete chat interface with prebuilt flows that helps Educational Technology firms automate query handling, user acquisition, user communications, and user retention.

With this you can automate handling user inquiries, user support, and lead generation process.

You can completely customize the template according to your business requirement. For example, customize dialogues used in conversations, update courses and their structure, enable OTP based authentication or single sign on options. show course discounts, take elaborative quizzes, add FAQs, and more.


## 2. Prebuilt use cases

The EdTech template covers the most common use cases targeted for students as explained in the following flow diagram:

![](https://lh6.googleusercontent.com/V33lXuF6R8l6LxEK5rR8UF55w3sRejtWKtaQyldFH3NIT5ffMaHxif-QmNsCiXMcMPTRJiAahgmFZwzOXes7gvvkunKLyoKY_y6BveUWfYCohMVB1vt3bi2pQ9fXnTfSkW2RBrWzPqX5o1Or9fLfni1WYQ-p2x6TWaBDBNxFMpDkG_-WbrbojuBOfjVkixKT)

  

### 2.1 Discover courses

You can show the list of courses that you offer and when the user selects a specific course, show the course menu.

  

![](https://lh5.googleusercontent.com/tZm2m6dxTRof8__i8-OfugxyqKet0Aq1PpJvtjH46Nx99pUhrEG2wB_OIRkfCn1q0dJ9T9otOJuYvf0fBiumQ4gapIw3oAe4uBIlfwasJXh9vNUoFqu6Xicn5JKkctB9aOpY-yULfhy_URJSocdGcL0oxEPh2VodpB-6grfQmriZxBxvD4NOTmPyzmnrEQqQ)

  

Let’s see the Discover courses flow in detail:

1.  Triggers the intent *List all courses*.
    

![](https://lh4.googleusercontent.com/WFYhsp4_-ZO0ODEqHB1Jpvr4PVwf8VoyJDXP15oJpsbx6CmASajcaZ4erm8KngowaQjK6RYvhnqKLBzBYjordvs8p5uLi2HbTdlHtKpZ7-UYdzv0a6I3qEGUBf23KnFeVEKhYgKXW75FeRIVuwqBWRS16PMRL_9NJnCnUQOXtAwCpZqDASUB5h6JgpQffiN0)

2.  **Displays courses offered**: Shows the list of courses offered using **Carousel node** and stores the user response in the variable `subjectname`.
    

> * Customize the course names as required. You can add more items or remove existing items as needed.
    

3.  **Validates user input**: Uses the **Condition node** to validate the user selection. If-else logic is applied to trigger the Maths main menu, Science main menu, and History main menu flows based on the user input. Here is the structure for the **Maths main menu flow**,
    

:::note

History and Science main menus also follow the same structure.

:::

4.  **Shows the carousel image with relevant options**: Overview, Fee structure, and Apply now options using the Carousel node and triggers a specific flow based on the user input.
    

![](https://lh5.googleusercontent.com/eb3gJFFBSrEqMTZJbQ-Izg2LaUFQDzka6_vMR7qG5qB2xsG1UUZcSDLiTpY_rR5iaz_tqePjQVOTdnGyOc26ErR_1XjzbMFKTf07Er5PydhDudm2jZ-rAXvrpWTxeH1bUuJ-dZKIpWRHygWocGFexQTFf6iGu7a_1jb8KPHFXjAFSshuYztsIv4grcvlVcKu)

> * Here, you can modify the condition and define your own custom flows.
    

5.  **Maths overview flow**: Uses Image and Text nodes to display course overview and shows Reviews, Fee structure, and Apply now options (**Carousel**).
    

![](https://lh4.googleusercontent.com/nU89cKg8vyO7I42gMw3hzI_rtNnbgHHM7on85yDzq3SKrgY9e27o1sqFztWd6osNY14PN0X5HIsrPuf2sYHMlmSEBsS2zABpBILkgFiM0LTUsi4lCskP8ZLqhwJScJwcI1sLLF2e2HHnRf9aKCt8AEcPFgfrqv2LViHe-q2ZdAXpiEVjUTUK0DE_6NilCiVr)

1.  Validates the user input (Condition node) and triggers the relevant flow.
    
2.  Selecting Reviews shows up the link to the reviews page (Text node) and triggers the Followup flow. The flow has two options linked to the respective flows - [Connect with Counselor](#24-connect-with-support) and Back to Main menu (**Carousel**).
    

> * You can add your own link or perform other actions like trigger a flow, show carousel, show videos etc.
    

3.  Selecting Apply now shows a text node and triggers the Book a demo class flow.
    
4.  Selecting Fee Structure triggers the Fee structure flow. This flow shows information using Text and Image nodes along with the Followup flow.
    

> * There is currently a blank pdf for fee structure. You can either provide your fee structure or use some other actions like trigger flow, provide link etc.
    

### 2.2 Course material

You can show the course material in a file that the user can download to the users who registered for the course.

Let’s see the Course material flow in detail:

1.  Starts with the intent Show me the course material.
    
2.  Captures user identifier: Shows a text message followed by the Phone Prompt node and stores it in the `PhoneNo` variable.
    

![](https://lh5.googleusercontent.com/CR0-By6rlryZk3BE99DHYQ0ppuPWH9WqK9JosdJY1ykkYrMVRZHx_fL_cTWz-iqs2Y3O4ZbhlZe3bPwdl1bAFXQVyFbMU4jniA3kmJ2H7P8h-BxkaOVOKedwtOh3lGpDbXRuxZ6vmgvIiqSnhi15_wdPzAD583AnGW4u06dxTzval5F0XEnxXw92QbpADnxm)

> * You can use email or other prompt nodes to identify the user.
    

3.  Verifies if the identifier is registered: Searches if the specified phone number is registered in the leads table (Database node) and stores the registered user details in the user_validation object variable.
    

Leads is a table created inside the Database module that contains these fields: Name, phone number, email address, course, subscription status (Demo, Active, or Inactive), record inserted date, and record updated date.

> * You can add new columns or remove an existing column according to your requirement.
> * Use APIs to send and receive information from third-party systems.
    

4.  Allows registering new users: If the user is not registered, it shows the Register now option, along with the Main menu and Try  again options (Quick replies node).  
    
   a.Selecting Register now executes the flow [Book a demo class](#23-book-a-demo-class) and updates the leads database.
    
   b. Selecting the Main menu triggers the **Start flow**.

5.  Shows the file for registered users: If the user is registered, it shows the list of courses available (Carousel node), and based on the user input (Condition node) it shows the relevant course material (File node) that the user can download (PDF file).
    

> * Customize the list of courses that you offer and upload the respective course materials.  
> * You can use Document to upload course materials and take advantage of Q&A where the system can extract most relevant answers from the uploaded documents automatically.
    
  

### 2.3 Book a demo class

This is a complete lead generation flow where users can book for a demo class. Post the demo class, you can provide an option to register for the complete course.

Let’s see the Book a demo class flow in detail:

1.  Starts with *Book a demo class* intent.
2.  **Captures user information**: Shows a Text node followed by Name, Phone number, and Email nodes and stores the user’s response in the respective variables.

> * Modify the text that you want to show immediately when the flow starts.
> * Capture more details if required using the relevant nodes. You can skip any prompt (name, phone number, or email) if not required for your use case.
    

4.  **Validates use information**: Shows the details provided by the user, and allows the user to verify if the details are correct with the options Edit name, Edit email, Edit phone number, and No changes (Quick replies node).  
    User can modify the required information if incorrect.

> * This is for user validation and reconfirm if the details provided are correct. Any changes the user makes through edit options will update the values in the database accordingly.
    

5. **Displays list of courses**: Selecting the No changes option sets the variable value for subscription as Demo and shows the list of courses (Quick replies).
6.  **Displays slots**: Shows the slots available for the selected course using the Condition node.
7.  **Updates user information**: Updates the leads database (Database node) with the name, email address, phone number, and subscription status followed by a confirmation text message.
    

### 2.4 Connect with support

You can allow your user to connect to an education counselor if the user has any other queries than listed in the menu.

Let’s see the Connect to a counselor flow in detail:

1.  Triggers the Connect with support agent intent and shows two options - Chat with support and FAQs.  
    ![](https://lh5.googleusercontent.com/SCCTi6WJ-0oL0NGCAPWJ7FFbRzrBK-hFzC-f0AaqaaA6cXzk2WxMKqwQtn9IJQ6vyC4pIKroTOlh7b7kULq2G2Me0fPqKJlYL8DxMeV13UGavPu5-qeYKMuPL3IwGCU_quJjb23OVz684NQiVfNULm8QgiAND_GmlS7NWIs70aOqAM3dMPDk2KH8tpxcWljJ)
    
2.  Here is how the Chat with support flow works
    
   a.  **Collects user information**: Asks for the user’s name, mobile number, and email address using the respective **Prompt nodes**.
> * You can customize the information that you want to capture.
    
   b. **Asks for reason**: Asks the reason to connect with the Counselor - Cancel Membership, Get career related advice, Talk to support specialist.
    

   c.  If the user selects Cancel membership, it triggers the Cancel Membership flow where it captures the reason for cancellation and updates the subscription status in the Database.
    
   d.  **Connects to the support**: If the user selects Get career related advice, or Talk to support specialist, it connects to the live agent.
    
   e.  If the agent is offline, a new ticket is created.
    

3.  **FAQs flow**: It fetches answers quickly from the list of FAQs added through the [FAQs module](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs).
    

![](https://lh3.googleusercontent.com/tlIuytD4CaUBNy2QCONyor4QeBgeeyc1r5GeAkCeafxRgqbuMAxz2LeA7RU6GOSp0G-HnaHzT08mQZklbHoWDLUD4k4YgqInOA6avgir26oPBn5XV5NrUhgSYJb9c3GYiKMgyX8TsuFzvy_87FGV302CUiQkeULMwDeSqsCzPHD1PWKFWh1xx-Iv5oYChSs)

   a.  Shows the list of most frequent questions to show (**Quick replies node**).
    
   b.  Fetches replies based on the selected question.
    

  

> * You can keep the questions open-ended if required. Import FAQs in bulk using the [FAQs module](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#2-add-faqs-in-bulk) and the bot shows up the appropriate answer based on the keywords. You can then connect if he still wishes to contact support.
    

### 2.5 Take a quiz

You can allow the user to select the course that he is interested in, and show questions related to the course. Recommend the course levels according to their current knowledge. For example, recommend the basic course for answering basic questions incorrectly, recommend a basic course, if they answer basic questions correctly, recommend an advanced training course.

Let’s see the Take a quiz flow in detail:

![](https://lh5.googleusercontent.com/fqIMW1qH_HerDw0o8opZ4Xvb0xeLriMVAwVYx84iMeAJ9SXOGl7fCYTydhuqo6r9euHTtiocXTAwpGlsWjmyFDvX461wDHXaGuR-gCquCJSfR3o373WvHp7VUDJ2O-t1oeiF4kUMs_cHpMKkSPtQ-Y1Px7-5zdtiQrATOPlfpere0kXZ-toW8U8h23NTRhFH)

1.  Starts with Take a quiz intent.
2.  **Shows the list of courses**: Shows a text message followed by the list of courses to select from (Quick replies node).
3.  **Displays question**: Shows the relevant question with multiple answers (Quick replies node) for the selected course.
4.  **Recommends course level**: Recommends the course level based on the answer and provides discount codes (Text node).
5.  Provides options *Retake quiz* (if user selects incorrect answer) and *Book a demo* using Quick replies.
6.  Selecting Book a demo triggers Book a demo class flow and Retake quiz.


## 3. Build your own use cases

On top of the prebuilt flows that you can readily use, you can create your own flows for your business specific use cases using Studio and other modules of Yellow.ai.

Here are some examples of different use cases specific to EdTech:

-   **OTP verification for qualifying leads**: You can validate your registered user details through OTP based authentication using the Send OTP and Verify OTP action nodes.

![](https://lh3.googleusercontent.com/KqsweVLDKD2zxTNL_IBpkcdVK1DO-NC63LEmlMFv_Bktj-c88NdfYReLykcYT-ablLUg9bgiglcgo9ApzhpqFb8GD8paT8PJKxUzWUzR0nwu0t_SzLBfSQwrO1QpHe4LoRQBwJeq4JB7MnERFR27ir0ZthMaBr8t7noYuP4b7MCRecT0ztRzjsDNKQLPtAc8)

-   **Send campaigns to promote new courses**: Use the bot as a good lead generation tool. You can send course information, promote new courses, or offer discounts on existing courses to your leads through [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign) or [Workflow campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/workflowCampaign).
    
-   **Take feedback/review on courses**: It’s very important to create engaging courses and understand if those courses are helpful for the learners. Collecting feedback from the learners is the only way out.  
    You can create a flow to capture feedback from users. Provide them an option to select the course, and list down the options for the user to select. Create a database table to store the user response.
    
-   **Single sign on**: When you use the bot on a webpage where the user authentication is enabled, it is redundant to ask them for authentication again through the bot. Make use of the API or Database modules and pass a custom script that can read data from your website and pass it to the bot directly every time the user opens the bot.
    
-   **Provide more study material**: You can use [Documents](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition/) feature available in Studio to upload documents that you have and generate FAQs from them. For example, if a course material is uploaded, when a user asks a question, it searches in uploaded documents and shows the result. It can open the document and navigate to the specific information that the user has searched for.
    
-   **Take elaborate career quizzes**: You can increase the number of questions and complexity in a quiz. You can do assessment post completing the courses.
    

Use APIs to send or receive data: You can also use [APIs](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) to send or receive data according to your preference from third-party systems. With the API feature, you do not need to sync or import the entire data to yellow.ai platform.
