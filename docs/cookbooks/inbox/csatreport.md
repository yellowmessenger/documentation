---
title: CSAT in chat archives report
sidebar_label: CSAT in chat archives report
---

To include CSAT scores in the chat archives report, follow these steps:

1. Ensure that you **capture** the CSAT scores during the conversation and store them in appropriate variables.

:::info 
Click [here](https://docs.yellow.ai/docs/cookbooks/insights/botagentfedback) to learn more on creating flows to fetch CSAT. 
:::

2. Use the following **API request**:

```
import requests
import json
url = 'https://cloud.yellow.ai/api/agents/tickets/update_csat_score_from_bot'
headers = {
    'Content-Type': 'application/json'
}
bot_id = 'x1623067352191'
ticket_id = '100733'
ticket_csat_score = 1
agent_csat_score = 5
data = {
    'botId': bot_id,
    'ticketId': ticket_id,
    'csatData': {
        'ticketCsatScore': ticket_csat_score,
        'agentCsatScore': agent_csat_score
    }
}
response = requests.post(url, headers=headers, data=json.dumps(data))
# Handle the response as needed
```



Modify the API request by providing the correct values for the variables:
- Replace `botId`: "x1623067352191" with the actual bot ID.
- Replace `ticketId`: "100733" with the relevant ticket ID.
- Replace `ticketCsatScore`: 1 with bot CSAT score you have captured.      
    
    The *ticketCsatScore* field in the API accepts the values 0, 1, or null, indicating the following:
    - 1: The ticket has been solved.
    - 0: The ticket remains unsolved.
    - Null: No CSAT score has been provided.
- Replace `agentCsatScore`: 5 with the corresponding CSAT score you have captured.      
    
    The *agentCsatScore* field in the API only accepts numerical values from 0 to 5. A score of 0 represents the lowest rating, while 5 represents the highest rating.

