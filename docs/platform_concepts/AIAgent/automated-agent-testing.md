---
title: Automated AI agent Testing  AI agent
sidebar_label: Automated AI agent testing
---

Automated AI agent testing (Agentic testing) allows you to validate the functionality, performance, and accuracy of your AI agents built on the agentic platform without relying on manual testing. 

With Automated testing, you can:

- Generate test cases from your Knowledge base
- Replay saved Copilot sessions 
- Retest past user conversations (Comming soon)
- Simulate end-to-end flows with scenario-based testing (Comming soon)

It helps bot developers, QA engineers, conversation designers, and product owners who need to validate AI agent performance with every change or deployment across different environments.

Manual testing whether through preview windows or live sessions is time consuming. It requires creating test cases, checking each step, and revalidating after every change. Automated testing simplifies this by enabling you to create, run, and review test cases with ease, saving time and ensuring reliability.


### Key capabilities of Agentic AI testing

* **Test from multiple sources**: Generates QnAs (Test cases) from Knowledge Base articles, Copilot sessions, past conversations, or custom scenarios.
* **Smart response evaluation**: Use configurable thresholds for accuracy and empathy to validate if responses are relevant and context-aware.
* **Goal-based scenario simulation**: Simulate realistic conversations using user rules and intents to test how the AI agent performs in complex, end-to-end flows.
* **Cross-environment validation**: Run tests across environments—like sandbox and production—to detect issues before they impact users.
* **Automated regression checks**: Revalidates existing test cases to ensure that updates to prompts, workflows, or configurations do not break previously functioning interactions.

**Limitation**

* You can run up to 200 test cases in a single execution. Each test is evaluated based on configurable thresholds such as Accuracy and Empathy with optional support for custom evaluation rules.

### Types of test cases

Automated AI agent testing supports four test case types, each designed to validate different aspects of an agent's performance to ensure consistent behavior across updates and environments.

1. **Knowledge base test case**: Knowledge Base (KB) test case helps you verify if the AI agent is responding accurately based on the documents uploaded in the Knowledge Base. It ensures the agent retrieves the correct information from those files when answering questions. This is especially useful when handling large volumes of content like PDFs, website links (URLs), or data from APIs.

   In the KB test case section, you can view the list of documents uploaded to the Knowledge Base. For each document, a question and answer pair (FAQ) is generated. You can generate FAQs for up to 100 documents at a time. When you run the test, the AI agent is asked these questions to check whether it responds with the expected answers to validate that it understands and uses the document content correctly.
2. **Copilot saved session**: Copilot saved session test case allows you to capture and save user-agent interactions during a conversation within the AI Copilot. These saved sessions are useful for testing and debugging purposes. When a session is saved, it records the complete conversation between the user and the AI agent, including prompts, responses, and conversation context.

    Once a session is saved in the Copilot Saved Session test case, it can be tested to evaluate how the AI agent performs based on that specific conversation.
3. **Past conversation**: This allows you to select actual conversations from production or other environments and retest them across different environments like sandbox and production to identify inconsistencies.  It is particularly useful for debugging failed conversations or comparing performance across sandbox and production. It helps you compare performance, identify discrepancies, and confirm whether recent fixes have resolved previous issues. 
4. **Scenario-based testing**: Scenario tests simulate complete, goal-driven user journeys, such as booking a ticket or raising a refund request. You can define user attributes like name, location, preferences, or intent to set up the context. Based on the goal and context, the test agent emulates a user persona and engages in a conversation with the AI agent to check if it handles real conversations.
  
### Test case settings

Automated testing provides two modes **Evaluation** and **Simulation** to help you measure how well your AI agent is performing.

1. **Evaluation**

    Evaluation checks whether your AI agent is giving the right answers and responding in the right tone. Use this mode when you want to test if the AI agent is giving correct responses after making updates to your knowledge base, prompts, or workflows. You need to define two key metrics before running the tests:
      * **Accuracy**: Measures how correct and relevant the agent’s response is to the user’s query. **Suggested threshold**: 75 for optimal accuracy.
      * **Empathy**: Measures the tone of the response whether it is polite, helpful, or formal based on your brand guidelines. **Suggested threshold**: 75 for optimal empathy.
    * **Rules**: You can also define what rules need to be followed by agent while running a test case, such as:
       * Avoid casual language or jokes
       * Use specific phrases or keywords
       * Follow a defined tone (example, professional or friendly)

    **How it works:**
     - Set thresholds for both accuracy and empathy (example, 80% accuracy and 90% empathy).
     - If a response falls below either threshold, the test case is marked as failed.

      ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/seteval.png)
  

2. **Simulation**<br/>

    Simulation mode is used when you want to test how the AI agent handles more complex, realistic conversations. It is especially useful for testing full user journeys like booking a flight, troubleshooting a product, or gathering customer information where the agent needs to maintain context across multiple steps.
    
   In this mode, you test a user by setting up attributes such as Name, Location, Preferences, and Intent (what the user wants to do) by defining the rules. This helps test how well your agent performs in real-time scenarios where it needs to understand context and ask follow-up questions.

     ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/simulationset.png)
     
### Reports

After configuring Evaluation and Simulation settings for automated AI agent testing, you can run test cases to generate detailed reports.

Each test case is marked as either Success (✔️) or Failure (❌) based on whether it meets the predefined thresholds for key performance metrics.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/reports.png)

#### Performance metrics

1. **Accuracy score**: Measures how well the agent understood the user's question and responded with a correct and relevant answer.
    * **High value** (example, 100%): Agent fully understood and correctly resolved the query.
    * **Low value** (< threshold): Indicates misinterpretation or incorrect/missing information.
2. **Empathy score**: Evaluates whether the response uses an appropriate tone, empathetic, professional, or friendly depending on your use case.
     * **High value** (example, 90%): The bot responded with a suitable tone.
     * **Low value**: Response may sound robotic or indifferent.
3. **Clear communication**: How clearly and concisely the agent conveyed its response.
    * **High value** (example, 95%): Well-structured, easy-to-understand replies.
    * **Low value**: Confusing, verbose, or poorly formatted answers.
4. **Hallucination**: Indicates if the agent generated made-up or incorrect information not present in the knowledge base.
   * 0% is ideal, showing no false content.
   * Higher value (>0%): The agent introduced misleading or fabricated information.
5. **Follow-up handling**: Evaluates how well the agent managed ongoing conversations and retained context.
    * 100% indicates excellent context handling.
    * Lower scores suggest poor continuity, requiring users to repeat themselves.

#### Summary

Provides a overview of the test case outcome and scores. It consist of three parts:

1. **Reason**: Describes how the agent's response aligned with the user's intent and the expected answer. Example: The agent responded with accurate, policy-based information and maintained relevance to the query.
2. **Strengths**: Highlights the positive aspects of the response. Examples include:
   * Accurate answers
   * Helpful added context
   * Polite tone and further assistance offered
3. **Areas for improvement**: Suggests where the response could be optimized. For example:
   * Make responses more concise
   * Avoid unnecessary repetition of policy details
   * Balance added context with clarity 

## Exceute test case

### Knowledge base

To test knowledge base, follow these steps:

1. Navigate to **Automation** > **Test suites**.
  
    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/testsuite.png)

3.  Select **Knowledge base** > click **+ Add document**.

      ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/kbdoc.png)
      
* This will navigate you to the Kownledge base module.

4. Click **Add file**.
 
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/addfile.png" alt="drawing" width="90%"/>
     
5. Click **Upload files**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/uploadfileskb.png" alt="drawing" width="70%"/>
   
6. Select the file type that you want to upload and click **Next**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/fileuplaodkb.png" alt="drawing" width="70%"/>
   
7. Upload the file and click **Add document**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/uploadfileadd.png" alt="drawing" width="70%"/>

* The document will be uploaded successfully.

8. Go to **Test suites** and click **Generate QnA**.

      ![](https://cdn.yellowmessenger.com/assets/yellow-docs/generatefaq.png)
      
* FAQs will be generated for each uploaded document. You can generate FAQs for up to 100 documents at once.

#### Configure Set criteria for Knowledge base

After generating the test cases, you need to configure set criteria to define how the test should be evaluated.

To configure set criteria, follow these steps:

1. Click **Set criteria**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/setcriteria.png)

2. Set the Evaluation rules and click **Save**.

    i. **Accuracy**: Set the empathy level on the slider. **Value**: 75 – This is the suggested setting for optimal empathy.<br/>
    ii. **Empathy**: Set the empathy level on the slider. **Value**: 75 – This is the suggested setting for optimal empathy. It ensures the AI responds in a friendly, human-like manner.<br/>
    iii. **Rules**: Define rules that the AI agent should follow during test case evaluation.<br/>Example
      * Your questions must be phrased differently and varied each time to make it human-like. Each step should have actionable questions.
      * If the user expresses anger or frustration immediately skip to cancellation.

     ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/seteval.png)

3. **Set Simulation rules**: Add the rules to guide how the AI simulates user interactions during testing.
   * If the user provides incomplete information, simulate a natural follow-up question instead of re-asking the original question.
   * Always rephrase questions in a human-like manner to avoid repetition and mimic natural conversation patterns.
 
     ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/simulationset.png)


### Run a test case for Knowledge base

To run a test case, follow these steps:

1. Go to the list of generated Knowledge Base test cases. Use the checkboxes to select one or more test cases you want to execute.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/selcheckbox.png)
   
2. Click **Run test cases** button at the top.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/selectrun.png)

3. Enter a **Execution name** and click **Run**. Note that, by default execution name will be displayed based on date and time.

      ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/nametestcase.png)
      
4. Click **Check reports** to view the results of the test case executions.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/check-report.png" alt="drawing" width="50%"/>
   
* In the **Report** section, you can view the status of each test case along with details like the accuracy score, empathy score, and whether the AI response meets your configured rules.

    ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/reportview.png)
   
### View Knowledge base report

You can view the detailed results of each test case and compare actual versus expected outcomes.

To view report, follow these steps:

1. Click the **Execution name link**.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/testcasenamelink.png)

* Here, you can view the complete status of the report. This report contains Accuracy score, Empathy score, clear communication, Hallucination, and Follow-up handling.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/analyzeconv1.png)
   
2. Click **Analyse conversation** to compare the expected FAQ and the agent’s response during simulation.

    ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/comparision.png)