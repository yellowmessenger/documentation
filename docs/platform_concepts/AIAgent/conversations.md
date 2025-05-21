---
title: Configure AI agent conversations   
sidebar_label: Configure AI agent conversations  
---

An AI agent conversation is a dynamic, natural dialogue between users and your AI agent. It allows users to ask questions, perform tasks, and receive contextual responses without relying on rule-based flows.

With prompt-based configuration, you can build scalable, human-like conversations using simple language and instructions. Add logic only where needed using actions and conditions to support a wide range of real-time scenarios, from basic FAQs to advanced support automation.

### Prompt-based conversational setup

Instead of designing traditional, linear conversation flows, you can create intelligent interactions using a **prompt-based configuration**. This approach enables your AI agent to:

* Understand user intent more effectively
* Respond with contextual relevance
* Eliminate the need for complex scripting or flowchart-like designs


### Key components of the AI Agent conversation

The conversation design is modular and built with flexibility in mind. You can configure the following:

* **Start triggers** – Detect user intent and launch the appropriate conversation.
* **Prompts** – Define how the AI agent interacts, asks questions, and provides answers.
* **Actions** – Collect user inputs, handle fallback scenarios, or trigger backend logic.
* **Variables** – Store user inputs and context to maintain continuity throughout the conversation.
* **Workflows** – Integrate with backend systems to fetch, process, or update data.

## Setup agent conversations

You can set up agent conversations using Start trigger and Prompts, which define how and when the AI agent initiates and responds during a conversation.

To set up agent conversations, follow these steps:

1. Navigate to **Automation** > **Agents** > **+ New agent**.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/newagent.png)
     
2. Click **Edit** icon to rename the agent.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/editagent.png)
    
3. Enter the name of the agnet and click **Save** icon.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/saveagent.png)
    
4. In the **Start trigger** and **Prompts** section, configure how the conversation should begin and how the agent should respond.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/AGENTS.png)

### Start trigger

A Start trigger is the initial message that initiates a conversation between the AI agent and the user. It acts as the entry point that tells the AI agent when to begin a specific conversation.

Start trigger ensures that the right conversation is initiated at the right time. When a user's message matches the trigger (example, a keyword or intent), the configured conversation will be triggered.

Types of inputs that can be used as Start Triggers:

* **Phrases** – Direct user expressions like "I want to book a demo".
* **Intents** – User goals, such as "Loan inquiry" or "Product help".
* **Keywords** – Specific terms such as "support", "pricing", "Loan inquiry", or "Product help", "apply now".

**Examples of start triggers**:

* When the user says they want to apply for a loan, such as: "I want to apply for a loan", "Help me get a loan", "Apply for personal loan", or similar variations.
* When the user wants to cancel a flight ticket, such as: "I want to cancel my flight ticket", "Help me cancel my flight", "Need to cancel my plane ticket", "Cancel my trip booking", or similar variations.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/starttrigger.png)

### Prompts

A prompt is a set of instructions that tells the AI agent what to say or do during a conversation. It guides the conversation flow and helps the agent respond appropriately based on the user’s input

In conversation design, a prompt can be a question, confirmation, statement, [call to action](#configure-prompt-using-actions) (Get input, call worflow, or call fallback), or [Variables](#variables).

Prompts can be used to:
* Ask the user a question and wait for a reply
* Show information or messages
* Trigger backend tasks (like calling an API or updating a database)
* Validate user inputs and handle errors

A well-written prompt keeps the conversation clear and natural. Key elements include:
* **Tone**: Tone sets the interaction between AI agent and user. Examples:<br/> * **Friendly**: "Hey there! What can I help you with today?"  <br/>* **Professional**: "Please provide your invoice number to proceed".
* **Clarity**: Use simple, direct language. Avoid technical jargon, complex phrases, or ambiguous terms. Clear vs Vague example:
   * When would you like to schedule your appointment? (Clear and actionable)
   * Provide a preferred timeslot. (Vague and robotic)
* **Context**: Give users enough context to understand why you are asking something. This makes the conversation feel logical and purposeful.
Example: "To check your order status, I will need your order ID".

**Best practices**

While writing the prompts, consider the following best practices:
* **Keep it short and conversational**: Use simple, friendly language that feels natural to the user.
* **Handle unexpected inputs**: Always include fallback prompts to guide users back on track if they give incorrect or unclear responses.
* **Validate user input**: Use clear instructions and examples to show users the correct format. Example: Enter a 10-digit phone number with country code (example, +91 9876543210).
* **Use quick replies or buttons**: Help users respond easily and reduce mistakes by offering predefined response options.

Below is a sample screenshot showing how prompts are written:

  <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/promptsample1.png" alt="drawing" width="90%"/>   

## Configure prompt using actions

In the Prompt section, you can configure the conversations by using the following actions:

* **[Get input](#get-input)**: Collects specific information from the user, such as their name, phone number, and email.
* **[Call workflow](#call-workflow)**: Triggers an external process or function, such as retrieving data from a database, calling an API, or executing backend operations, allowing the AI agent to handle complex tasks.
* **[Call a Fallback](#call-a-fallback)**: Triggers predefined fallback action when the AI agent cannot process the user’s request.

:::tip
In the prompt section, you can quickly access the above actions by using the`@` shortcut key.
:::
  <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/getactions.png" alt="drawing" width="80%"/>
<br/>

  
## Get input

Get Input action is used to collect and store user responses in variables, this allows the AI agent to reuse the data in future interactions. It ensures that inputs are validated before storing the input.

For example, if a user provides their name, the bot can use it in future intercations.

**Types of Inputs**

When creating an input, different input types can be selected based on the use case:

* **[Name](#get-name-input)** – Captures the user’s name.
* **Email** – Collects the user’s email address.
* **Phone** – Gets the user’s phone number.
* **Quick Reply** – Provides users with predefined response options.
* **Carousel** – Displays multiple options in a scrollable format.
* **Date** – Allows users to select or input a date.
* **Custom** – Enables a more flexible input type tailored to specific needs.

### Create Input

To create a input, follow these steps:

1. Go to **Agent** > **Prompt** > click on **Actions** > **Get input**.

  ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/getinput.png)

2. Click **+ Create input**.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/createinput.png" alt="drawing" width="50%"/>


3. Select your preferred input type based on the use case.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/chooseinput.png" alt="drawing" width="60%"/>


### Get name input

The Get name input action allows the AI agent to capture and store the user's name during a conversation. This input remains available throughout the session and can be reused by referencing the same input name in the other conversations.

The table below describes the fields available in the Get Name Input action:

Field name | Description
-----------|------------
Input Name (Mandatory) | Defines the name of the input field where the user’s response will be stored. In this case, the field is labeled as **Name**.
Data type | Default data type is displayed. In this case, it is a String, meaning it only accepts text values.
Description | Provide additional details or context about the input field. This helps define how the AI agent will use the captured input.
Validation | Enter the validation rules to ensure the user provides valid input.<br/> Examples: – Allow upto 50 characters.<br/>– Reject names containing numbers.
Others | Enable **Mark User Input as Optional** checkbox:<br/> * If checked, the user is not required to provide their name.<br/> * If unchecked, the bot will prompt the user until a valid name is provided.

![Get input name](/files/getinputname.gif)

### Email

Get Email Input action allows the AI agent to collect and store a user’s email address during a conversation.

The table below describes the fields available in the Get Email input action:

Field name | Description
-----------|------------
Input name (Mandatory)| Specifies the name of the variable where the user’s input will be stored.
Data type |	Default data type is displayed. For email input, it is set as String.
Description (Mandatory) | Provide context about the input field. Example: "Collect user email ID" to inform the AI agent about the purpose of this input.
Validation | Ensures the user input follows the correct format. The current validation rule requires the email to contain exactly one "@" symbol to be considered valid. Additional validation rules can be added.
Example of User Input |	Provide an example of a valid email address, such as "johndoe@gmail.com", to guide users in entering the correct format.
Others | Enable **Mark user input as optional** checkbox:<br/>*	If checked, users are not required to provide an email address.<br/>* If unchecked, the bot will prompt the user until they enter a valid email.

![Email id](/files/emailid.gif)

### Phone

Get phone input action allows the AI agent to collect and store a user’s phone number during a conversation. The collected phone number is stored in a variable. You , such as sending notifications, verifying user identity, or to order details.

The table below describes the fields available in the Get Phone Input action:

Field name | Description
-----------|------------
Variable name (Mandatory) | Define the variable where the user’s phone number will be stored. Example: mobile_Number.
Data type | Specify the type of data expected from the user. For phone input, it is set as Number.
Description	| Allows the user to provide additional details about the purpose of collecting the phone number. This field helps define how the AI agent will use the input.
Examples of expected input | Provides sample responses to help users understand the expected input format. Example: +91 9876543210.
Validation | Ensures the user input follows the correct format. In this case, users must select a country code to ensure proper phone number formatting. Additional validation rules can be added if needed.
Always save number with country code | If this option is enabled, the system will store the phone number with a country code, even if the user does not provide it.
Mark user input as optional | If checked, the user is not required to provide their phone number. If unchecked, the bot will prompt the user until a valid phone number is provided.

![Phone number](/files/phonenumber.gif)

### Quick reply

Quick replies are predefined response options displayed to users during a conversation. This option  allows you to select an answer with a single tap instead of typing.

The table below describes the fields available in the Quick Reply:

Field name | Description
-----------|------------
Input name | Specifies the name of the input field where the selected quick reply will be stored.
Data type | Default data type is displayed. For quick reply input, it is set as String.
Description | Provide additional context or instructions about the quick reply input.
Dynamic options | Toggle this option to generate quick reply choices dynamically using variables. 
Options | Click **+ Add** to create static quick reply choices for users. More options can be added as required.
Others | Enable **Allow users to type input manually** (Checkbox) to protect sensitive information by replacing the characters with symbols to maintain privacy.

Refer to the following GIF to see how the Quick reply input will work:

![Quick reply](/files/quickreply.gif)

### Carousel

A Carousel is a structured response format that displays multiple options as a scrollable set of cards. Each card can contain an image, title, description, and buttons that allow users to select  specific actions. 

The table below describes each field in the carousel configuration:

Field name | Description
-----------|------------
Input name | The variable name where the selected response from the carousel will be stored.
Data type |	Default data type is displayed. For carousel input, it is set as String.
Description	| Enter a brief explanation of the input's purpose to provide clarity on what information is being collected.
Dynamic response | Toggle this option to generate carousel options dynamically using variables instead of static data.
Cards |	The individual items displayed in the carousel, which can include images, text, and buttons.<br/> **Image**: Allows you to upload an image (less than 10MB) to display the visual representation of the carousel item.<br/> **Title**: The main heading for the carousel item, giving a quick overview of the option.<br/> **Description**: Additional details about the carousel item to provide context to users.<br/> **Buttons**: Click **+ Add** button to add interactive buttons for each carousel item, enabling actions such as selecting an option or opening a link.
Others | Enable **Allow users to type input manually** (Checkbox) to enable users to type a response instead of selecting a button in the card.
 <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/staticcarousel.png" alt="drawing" width="60%"/>
 <br/>

 
### Date

Date input is used to collect date-based user input in a structured format. This field supports validation options to ensure the date entered falls within a specified range or follows a required format.

The table below describes each field in the date configuration:

Field name | Description
-----------|------------
Input name	| Enter the name where the user's selected date will be stored.
Data type |	Default data type is displayed. For carousel input, it is set as "Date".
Description | A brief explanation of the purpose of the date input field.
Validation | Ensures that the entered date meets specified constraints.<br/> **Range: Min. / Max:**	Allows setting a minimum and maximum date range to restrict user input within a valid timeframe.<br/> **Custom instructions**: Specifies the format in which the date should be entered or displayed (example, YYYY-MM-DD, MM/DD/YYYY).
Others | Enable **Mark user input as optional** to allow users to skip providing a date if they prefer not to share it.

![Date input](/files/dateinput.gif)

### Custom

A Custom field is used to collect user responses in the expected input format, set validation rules, and capture the user's response into a variable for later use in the conversation.

This field is used for capturing other types of inputs such as order IDs, ZIP codes, or any data that requires custom validation.

The table below describes each field in the custom input configuration:

Field name | Description
-----------|------------
Input name | Enter the name of the custom variable where the user's input will be stored. This variable can be used in the conversation.
Data type |	Select the preferred data type based on the custom input such as String or Number.
Description | Enter a brief explanation of what the field is used for.
Example of user input | Provides a sample input to guide the user toward the correct format. For example: “CUST1234” for a customer ID.
Validation | Ensures that the user input follows specific rules or formats.<br/> **Add custom validation**: You can define specific rules that the user’s input must follow. This ensures that the AI agent collects accurate and correctly formatted data based on your business requirements.
Others | Use the **Mark user input as optional** checkbox to allow users to skip this question if they prefer not to provide the information.

![Custom input](/files/custominput.gif)

## Call workflow

A workflow is a predefined action or process that the AI agent can invoke to perform specific tasks such as retrieving booking details, processing payments, verifying user information, or updating records.

This action allows the AI agent to trigger a workflow during a conversation, pass user inputs as variables, and store the output for use in subsequent steps of the conversation.

**How does the workflow work?**
* **Trigger the workflow**: When the conversation reaches the Call workflow action, the agent activates the linked workflow.
* **Pass input variables**: AI agent sends relevant input data (example, booking ID, user name) collected earlier in the conversation to the workflow.
* **Workflow processing**: The workflow executes its logic to perform dynamic tasks, automate backend operations, and handle complex scenarios. Here are examples of what workflows can do:
    * **Fetch data from APIs or databases**: Retrieve weather updates by calling a weather API using the user's location (example, city or zip code) and return the current temperature and forecast in the response.
    * **Raise a support ticket**: Automatically generate a support request in the system if a user reports a flight cancellation issue.
    * **Connect to a human agent**: Escalate the conversation to a live support agent when the AI agent is unable to resolve the query.
    * **Execute custom functions**: Use a function to calculate baggage charges based on the selected airline and luggage weight.
* **Store output**: The response from the workflow (example, booking status, payment confirmation) is stored in a variable, which can then be used in the next steps of the conversation.

### Output node in Workflows

The Output node in a Workflow defines what data is returned once the workflow has finished executing. This data can be text, variables, or rich media, and it is passed back to the conversation that triggered the workflow. The returned output can then be used in the following steps of the conversation to deliver dynamic responses.

The Output node ensures that results from operations like API calls, database queries, or logic functions are returned in a structured usable form to the AI agent to continue the conversation based on real-time data.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/outputnode1.png" alt="drawing" width="90%"/>

**Types of Output**

You can configure the Output node to return one of the following types:

1. **Static**: Returns a predefined text message when the Workflow completes.<br/> **Use case**: Use this when the output is static and does not depend on dynamic input.<br/> **Example**: "Thank you! Your request has been submitted."
2. **Variable**: Returns dynamic content stored in a variable, such as values fetched from APIs, databases, or functions.<br/> **Use case**: When the workflow depends on user inputs or dynamic data.<br/>  Store the weather temperature fetched from an API and use it later in the conversation.
3. **Rich media**: Returns visually enhanced responses for user engagement. Rich media is supported across web and messaging platforms like WhatsApp. Types of Rich media:
   * **Quick reply** – Displays button-based options for easy user input.
   
      ![Quick reply workflow](/files/quickreplyworkflow.gif)

   * **WhatsApp list** – Displays a structured list of selectable items.

      <gif></gif>

   * **Cards** – Display images, titles, and buttons in a visually engaging format.

      ![Carousel workflow](/files/carouselworkflow.gif)

### Output path

Use the Output path when you set the Output type to Variable. It lets the workflow return specific data from a larger API response.

When the workflow receives a complex or nested response (like JSON), you can extract only the needed data by using dot notation in the Output path field.

By using the Output path, you ensure the workflow sends only the relevant part of the response back to the conversation.

**How to use it**:

Suppose your API response looks like this:

```json
{
  "main": {
    "temp": 27.5,
    "humidity": 80
  },
  "weather": [
    {
      "description": "partly cloudy"
    }
  ]
}
```

You can use the Output path to extract:

**String**
* Temperature: `main.temp`
* Humidity: `main.humidity`

**Array**
* Weather description: `weather[0].description`

These paths will extract specific value from the response and assign it to your selected output variable to use in the next conversation step.

**Best practices:**

* Always preview the structure of your API before defining the path.
* Use an Output path when you want the particular value, not the full response.
* Use array notation ([0], [1]) for accessing items in lists or arrays.

### Create a workflow

To create a worflow, follow these steps:

1. Navigate to **Agents** > **Prompts** > **Actions** > **Call workflow**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/callworkflow.png)
    
2. Click **+ Create workflow**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/createworkflow1.png" alt="drawing" width="40%"/>

3. Provide a **Workflow name** and **Description** to explain the purpose of the workflow.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/workdetails.png" alt="drawing" width="50%"/>
   
4. This will create a new workflow where you can configure with the required input parameters, logic, and output settings.

### Define a workflow

Defining a workflow allows the AI agent to perform automated backend tasks such as retrieving, validating, or storing data based on the user's input during a conversation. 

When defining a workflow, you need to use variables collected during the conversation (such as user name, travel date, or contact number) and pass them into the workflow. These variables drive the logic within the workflow and determine what actions are taken.

**A well-defined workflow helps you to:**

* Automate backend operations like API calls or database updates.
* Use dynamic inputs from the user by mapping variables into the workflow.
* Maintain consistency and reduce duplication across conversation flows.

**Use case**: Fetch and store user booking details

To define a workflow, follow these steps:

1. Use prompts to collect user details for flight booking and store them in input variables.

      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/database.png" alt="drawing" width="80%"/>
      
2. [Create a database](https://docs.yellow.ai/docs/platform_concepts/studio/database#create-database-table) with columns matching the fields you want to store (example, name, phone number, destination).

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/db.png)

3. Go to the workflow that you have created and add a Database node and select the created database. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#insert-new-records-or-values-into-a-database-table).

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/dbserach.png" alt="drawing" width="80%"/>
   
4. Click **Define** and map the input variables to the corresponding database columns.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/definewrok.png" alt="drawing" width="50%"/>
   
5. Link the Database node to the Output node to complete the workflow.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/output.png" alt="drawing" width="80%"/>
  
### Call a workflow in prompt

Once you have defined a workflow, you need to call it from a prompt to trigger it during a conversation. This allows the AI agent to perform backend operations such as fetching or storing data based on user input collected earlier in the conversation.

This connects the user’s interaction to backend logic in real-time to enable actions such as database updates, API calls, or data validation.

**Use cases**

Here are some examples of how workflows can be triggered via prompts:
* **Database**: Store a user’s booking details (example, name, phone, destination).
* **API integration**: Fetch real-time flight status or weather updates.
* **Validation**: Confirm if an entered email is already registered.
* **Service ticket**: Submit a refund or cancellation request and get a reference ID.

Let us consider the below use case:

**Use case:** Book a flight and store booking details

A user provides travel information (example, name, destination, travel date). The AI agent collects this data through prompts and then calls a predefined workflow to store the information in a database.

**How to call a workflow in a prompt?**

To call a workflow in a prompt, follow these steps:

1. Navigate to **Agents** > **Prompts**, and go to the prompt where the workflow should be triggered.

2. Click **Action** and select **Call workflow**, or use the shortcut key `$`.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/callworkflow.png)

3. Choose the workflow you previously created from the drop-down. 

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/traveldb.png" alt="drawing" width="80%"/>
  

4. Click the **Edit** icon next to the selected workflow and map the required input variables (example, user_name, travel_date) that were collected during the conversation.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/mapworkflow.png)

5. Click **Save** to complete the configuration.

* Once configured, the workflow will automatically be triggered when the conversation reaches this prompt. The workflow’s output can be stored in a variable and used in the next steps of the conversation.


### Use case: Fetch weather updates using API via workflow

This use case demonstrates how the AI agent can retrieve and display real-time weather updates based on user-provided location inputs using a backend API workflow.

#### Step 1: Define the Workflow

You need to create a backend workflow that accepts location inputs, calls a weather API, and returns the temperature and weather conditions.


1. Navigate to **Agents** > **Prompts** > **Actions** > **Call workflow** and click **+ Create workflow**. (name workflow GetWeatherUpdate).

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/callworkflow.png)

2. Use a Variable node at the start of the workflow to define the input parameters needed for the API. For this use case, define: **latitude** and** longitude**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/variableskill.png)

3. [Add a API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#import-api) to import a weather API and configure it with the following details:
    * **API**: Select the API that you have added.
    * **Name**: Enter the name of the API.
    * **Method**:  Enter the method as GET.
    * **URL**: Enter the URL as `https://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&appid=fab8b859cea632996b45a82f2361b345&units=metric`

     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/APInode.png" alt="drawing" width="80%"/>

4. Store the full API response in a variable.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/storeresponse.png)

5. Define the workflow by mapping the specific fields that you want to use from the API response, like latitude, longitude, or humidity.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/apimap.png)

6. Add an Output node to return the mapped values and set:
    i. **Type of output**: Choose **Variable** as the output type.
    ii. **Select a variable**: Select a variable storing the API response.
    iii. **Path**: Use dot notation (example, main.temp) to extract specific values from the API response. 

* This set up completes the workflow definition. You can now use the workflow in the conversation.

#### Step 2: Call workflow in prompt

Once the workflow is defined, connect it to your conversation using the **Call workflow** action in  the prompt section.

1. Write a prompt that asks the user for their location. Example: "Please share your location or enter latitude and longitude". 

2. **Call workflow** action in the prompt and choose the GetWeatherUpdate workflow from the list.

      ![](https://cdn.yellowmessenger.com/assets/yellow-docs/callworkflowpro.png)

3. Click the **Edit** icon and map the collected latitude and longitude to the workflow inputs and assign the output from the workflow to a variable.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/loading.png)

4. Click **Save** to complete the configuration.
    
Refer to the following GIF to see the complete process of fetching weather updates using an API via a workflow:

   ![Weather API skill](/files/weatherAPIskill.gif)

## Call a fallback

Use the **Call a fallback** action to handle cases when the AI agent can’t interpret the user’s input or find a match in workflows or the knowledge base. 

Instead of ending the conversation abruptly or leaving the user without direction, the fallback action provides a predefined response to keep the conversation moving.


A fallback action is a predefined message or flow that the AI agent uses when it’s unable to handle a user input effectively. It is triggered in scenarios where the agent:

* Cannot understand or interpret the user’s input.
* Fails to retrieve a relevant response from the Knowledge Base or backend systems.

> **Examples**
> * **Chat support bot**: If the user asks something unrelated like "Tell me a joke" while booking a flight, the fallback could say, "I’m here to help with travel bookings. Would you like to check flights or cancel a ticket?".
> * **E-commerce assistant**: If the user types random characters, the fallback can guide them with suggestions like "Please select a product category to begin".



### How It Works?

When the **Call a fallback action** is triggered, the AI agent:

1. Checks for a configured fallback message or flow.
2. Sends the fallback response to the user.
3. Optionally, redirects the user to a menu, restarts the journey, or escalates the conversation to human support.

This ensures that the user receives a meaningful next step even when the AI agent doesn't have a clear answer.

### Add a fallback in prompt

1. Go to **Agents** > **Prompts** > **Go to fallback**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/fallback1.png)
      
2. Select the fallback flow that you have configured.

## Variables

### Pass variables in conversation

Variables are used to store and retrieve user data in the conversations. They help to maintain context across different conversation steps.

You can use the variable to:
* **Store data**: Capture user inputs like names, locations, or preferences for later use.
Example: Save the user’s name as `getInput: user_name`.
* **Retrieve data**: Stored variables can be used to personalize responses, recall previous interactions, or pass information to external systems like APIs or databases.
* **Maintain context**: Variables help AI agents remember details throughout a conversation. This reduces the need for users to repeat information.

**Types of Variables**

* **Session variable**s – Store temporary data throughout a conversation session. Data is lost when the session ends.
  **Example:** Remembering a user’s selected language preference during a chat session.
* **Input variables** – Capture user responses and store them as values for later reference.
  **Example:** If a user enters their name, it can be stored as `getInput: name` and used in responses like: "Hello, getInput: name"
* **Output variables** – Store processed data or results from backend integrations, API calls, or skills.
**Example:** Fetching order status from an API and storing it as `getInput: order_status` to display in the conversation.
* **System varibales**: System variables are pre-defined variables available by default within the platform. These variables store details related to the user session, conversation context, and AI agent configuration.

### Pass variables between conversation

You need to pass the variables in between conversation for AI agents to remember user inputs throughout a conversation to avoid asking for the same information multiple times.

**Example**: If a user selects a flight in one step, the AI agent can remember it for later:

“You selected flight **getInput: selected_flight**. Do you want to proceed with booking?”

**Use variables in responses**

You can use variables in AI agent to make responses more dynamic and personalized.

**Example:**

Send a confirmation message to the user saying that your flight ticket is booked based on from `{}var: departure_city` to `{}var: destination_city` with a and `{}var: booking_ID`.


### Pass variables in workflows

Variables are used to send and receive data between the conversation and the workflow to enable dynamic and context-aware interactions.

You need to pass the variables in the Workflow to access user inputs or previously stored values to perform logic, fetch data from APIs, or trigger actions. The results can then be passed back to the conversation using output variables.

#### How it works?

**Input to Workflow:**

When a Workflow is triggered during a conversation, you can pass variables (like `user_email `or `order_id`) into the Workflow.

These values are used inside the Workflow, for example, in an API request or Function.

**Processing in Workflow:**

The Workflow performs its tasks using the input variables (example, fetching user details using an email).

It may call APIs, run calculations, or retrieve records from a database.

**Output from Workflow**:

Once the Workflow completes, the Output node returns data as variables.

These output variables (example, `account_balance` or `weather_description`) can then be used in follow-up responses in the conversation.

**Use case**: A user wants to check their order status.

**Conversation step**:

> **AI agent asks**: "Please enter your order ID".
  **User replies**: #12345
  
→ Input variable `order_id` is stored.

**Workflow step**:

The variable `order_id` is passed to the Workflow.

The Workflow calls an API using `order_id` to fetch order status.

The API response is mapped to an output variable like `order_status`.

**Follow-up bot message**:

Your order status is "order_status".

**Best practices for using variables in workflows**

* Always define input variables in the conversation and map them when triggering a Workflow.
* Use output variables from the Workflow to display dynamic information in later steps.
* Make sure variable names are unique and descriptive, and to avoid confusion (example, user_email, selected_flight, weather_info).
* If using APIs inside workflows, map response fields to output variables so they can be reused in the conversation.









<!-- On the **Conversations** page, you can design the bot's interactions with users by writing prompts that define workflows (dynamic flows). These prompts, along with fine-tuned responses, enable the bot to understand user inputs and provide appropriate outputs, eliminating the need for traditional NLP training.

With **OrchLLM**, intent is identified, allowing for context-based conversations and seamless flow switching. A well-designed bot should manage multiple conversations, such as a banking bot handling loan applications, checking account balances, or creating bank accounts. Structuring these distinct flows ensures the bot can deliver accurate, context-aware responses for various requests.

-----

## Create new conversations

To create new conversations, follow these steps:

1. Click **+New conversation**.  

   ![image](https://imgur.com/5OcY2GO.png)

2. **Add basic introduction**:
    - **What does the user say to start this goal?**: Add the keywords or messages (separated by commas) that will trigger this conversation. For example, if the user wants to apply for a loan, keywords like "needs a loan" or "financial needs" should trigger the goal.
    - **Start message**: Write the message that will be displayed once the conversation is triggered, within 200 words. For example: "I'm glad you decided to take the first step towards your financial needs. What can I call you?"  

   ![image](https://imgur.com/rt2nTRw.png)

3. **Goal setup**: Define how the conversation will proceed and what the bot must do.
    - **Steps to follow to achieve the goal**: In 2000 words, describe how the conversation should flow. For instance, in a loan application conversation:
      ```
      1. After the user shares their name, ask for their mobile number (mandatory for loan processing).
      2. Check if there's an existing loan associated with the phone number. If so, show loan details and ask the user to contact support@yellow.ai for further assistance, as only one loan is allowed per user.
      3. If no loan exists, ask for the loan amount and repayment tenure. The tenure must be between 6 months and 5 years. Provide 5 options for both the amount and the tenure.
      ```
    - **Rules to follow during the conversation**: Define rules for the bot to follow, such as addressing the user by name. You can add rules by clicking **+ Add rule** and remove them by clicking the delete icon.  

   ![image](https://imgur.com/q1jeIa9.png)

4. **Handle user queries**: Set instructions on how the bot should handle user responses.
    - **Custom instructions**: Enable custom instructions if you want the bot to recognize specific user questions and provide predefined responses. You can list these custom instructions within 500 words. For example: When asked about interest rates, respond that they are competitive, based on credit score, loan amount, and term.
    - **Handling out-of-scope queries**: Provide guidelines (within 500 words) on how the bot should respond when the user asks questions outside the scope of the conversation. 

   ![image](https://imgur.com/ImuxdFX.png)


-------

## Configure conversations 

### Add inputs 

To capture and store user input in memory, you can configure the Agent. This is useful when you want to reuse the data later or apply it to other functions. For example, if the user's name is collected, the bot can use it in future interactions, personalizing the conversation and adding a human touch.

To configure input storage, follow these steps:

1. On the **Configure** tab, click **+Add Input** to add a new input field.

   ![image](https://imgur.com/QhaeHmB.png)

2. Provide the following details:
   - **Input description**: Describe what needs to be captured. For example, if you're collecting a user’s name, you can enter *User name*.
   - **Store response in**: Select the variable where the captured input will be stored. You can create or use an existing global variable to store this response.
   - **Validation instructions**: Provide instructions for validating the input. For example, if capturing a name, specify that only the first part should be stored as the first name.

   ![image](https://imgur.com/kSR96sT.png)

3. To delete an input, click the **Delete** icon.

   ![image](https://imgur.com/iVSyOQz.png)

4. To configure additional settings, click the **Settings** icon for that input. You can define:
   - **Mark as optional**: This marks the input as optional, meaning the agent won’t prompt the user again if they skip it.
   - **Mask input**: If enabled, the input will be masked for privacy (e.g., confidential information like credit card numbers). The data won’t be visible to the agent or stored in the database.
   - **Regex for validation**: If specific patterns (like an email address) are expected, provide the required regex pattern.
   - **Examples of expected input**: Add sample input examples that the agent should expect based on the regex.

   ![image](https://imgur.com/jYFlB3R.png)

> Inputs not marked as optional are considered mandatory.

--------


### Add workflows 

Workflows are background processes built with Action or Logic nodes that enhance the bot by performing tasks like calling functions, executing APIs, and managing databases. They can be linked to categories and triggered within conversations.

To add a new workflow:

1. Click **Add workflow**.  
   ![image](https://imgur.com/ltfEGht.png)

2. Follow the steps to create a workflow from the flows page: [Create a Workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-skill). 

3. Select the workflow you want to add from the dropdown.  
   ![image](https://imgur.com/jZYtsNC.png)

4. Describe when this workflow should be triggered. For example, "This workflow checks if the user has existing loans with Yellow Loans and fetches the details."

5. **Input to workflow**: Select the variables that will pass inputs from the conversation to the workflow.

6. **Output from workflow**: Choose the variables to store outputs/responses generated by the workflow.

7. Add the response to be displayed after the workflow completes. You can add multiple text responses, and one will be picked randomly.  
   ![image](https://imgur.com/pUDmvtk.png)

8. Click the delete icon to remove a workflow.


------

## Failure settings

When a user provides an unexpected input and the bot cannot comprehend it, this is considered a failure. In such cases, specific actions must be taken. Configure the failure settings for the conversation as follows:
1. **Enable retries**: Allow users to retry if they input a value that is not as expected by the bot. Enabling this feature prompts users to input the correct value again.
2. **Failure message**: Enter a message to display when a failure occurs. You can click **+Add message** to add up to two messages. Use the delete icon to remove any entered message. 
3. **Configure timeout**: Set a timeout value in seconds. If the bot is expecting a response and no input is received within the configured time, it will trigger a timeout.
4. **Max conversation limit**: Enter a limit for how many attempts a user can make. Once this limit is reached and the conversation is still incomplete, the node will exit into the failure branch.
5. **Restrict ill-formatted responses**: If enabled, the bot will handle cases where the LLM sends improperly formatted responses (e.g., containing unwanted JSON) by pushing them to the failure branch. Disabling this option allows these responses to be displayed to the user, but may result in increased failures.

![Failure settings](https://imgur.com/b01cZ26.png)

----------

## Manage conversations

1. **Delete a conversation**: Click the ellipsis menu and select **Delete**.  

   ![Delete conversation](https://imgur.com/tQXE8Q6.png)

2. **Modify workflow name**: Click the existing workflow name to edit it. 

   ![Modify workflow name](https://imgur.com/T9m2CSb.png)

3. **Preview**: Click the preview icon to test the bot for the selected conversation. You can adjust the rules and goals based on how the bot functions during the test. 

   ![Preview conversation](https://imgur.com/rXInEHW.png)

4. **Save workflow**: Click **Save** to apply changes made to the workflow.  

   ![Save workflow](https://imgur.com/ZEz45zt.png) -->


