---
title: Phone node
sidebar_label: Phone
---

The Phone node collects and validates phone numbers during conversations. Use this node when the AI-agent requires user contact information for verification, follow-ups, or registration purposes.

The built-in validator checks if the phone number follows the correct formatting rules, such as having the right number of digits. If the entered number is invalid or incomplete, the AI-agent prompts the user to provide a valid phone number, ensuring accurate and reliable data collection. To know more about how the Phone validator node works, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes-overview/phone-validator).

If your AI-agent is deployed in a specific region, select the default ISD (International Subscriber Dialing) code for that region to ensure accurate validation of phone numbers. When no ISD code is specified, the platform defaults to India's ISD code and validates user inputs against the format of Indian phone numbers. However, if you select an ISD code for a specific country, the platform will validate phone numbers based on that country's format, ensuring region-specific accuracy in user inputs.

:::note
A phone node can only validate one country code at a time.
:::

#### Supported input types

|Input Type|User Input|Accepted/Not Accepted as a valid phone number|Phone number processed by the platform|
|------|------|-------|------|
|Gibberish |sdsad1211|Not Accepted|-|
|Gibberish with special characters|eqwrj#|Not Accepted|-
|9 digit no (If India selected as ISD/ Nothing selected in ISD)|704430890|Not Accepted|-|
|10 digit No( If India selected as ISD)|7044308905|Accepted|7044308905
|Sentences with 9 digit no (If India is selected)|My No is 703330890|Not Accepted|-|

**Configure Phone node**

To configure phone node, follow these steps:

1. Drag and drop the Phone node in the flow editor.

    <img src="https://imgur.com/Ff7rorv.png" alt="drawing" width="50%"/>

2. Enter a message that you want to use to fetch the phone number of the user.
3. In **If validation fails** field, enter the message to be displayed when the user enters an invalid response and store the user response in a variable.

     ![](https://imgur.com/Zo08MjG.png)

Refer to the following GIF to see how the phone node works:

   ![](https://imgur.com/ubbp6Ya.gif)