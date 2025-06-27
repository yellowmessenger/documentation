---
title: Unknown error’ in Conversation Logs
sidebar_label : Unknown error’ in Conversation logs
---




## Encountered unknown error in Conversation Logs


### Prerequisites

* Access to the bot
* Access to **Sandbox** or **Staging** environment




### Steps to Troubleshoot

1. **Go to** the **Sandbox or Staging** environment.

2. **Identify and replicate** the exact flow where the `Encountered unknown error` appears in the conversation logs.

3. After reproducing the error:

   1. **Duplicate the browser tab**
   2.  Navigate to **Automation** → **Build** → **Functions**
   3. On the **right sidebar**, click the **book icon** (📘  Logs ).

      ![](https://i.ibb.co/YTy5RVY9/image1.png)

4. In the **Logs** popup:

   * Open the **‘Tail Lines’** dropdown
   * Select the **maximum value** → `800`

5. **Click inside the Logs window** and search for:

   ```
   Error
   ```

6. **Match the log timestamp** with the exact time when `Encountered unknown error` appeared in the conversation logs.

7. Use the identified **stack trace or error details** to **debug and fix** the root cause.
