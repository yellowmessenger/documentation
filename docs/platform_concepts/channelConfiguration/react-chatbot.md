---
title : Deploy chatbot on your react website
sidebar_label : Deploy chatbot on react website
---

This guide provides detailed steps on how to deploy a chatbot on your React website

### How to deploy a chatbot on a React website

To deploy a chatbot into your React website, follow these steps :

1. Go to the React app's directory. 

2. In your React project directory, go to the src folder and open the `App.js` file using a code editor.


3. Add the below code in your App.js file to deploy a chabot on the react website:

```c
import { useEffect } from 'react';

const YellowMessengerWidget = () => {
  
  useEffect(() => {
    window.ymConfig = {
      bot: 'xxxxxxxxxxxx',
      logging: true,
      alignLeft: true,
    };

    const loadYellowMessengerScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      // For V1 bot
      // script.src = 'https://app.yellowmessenger.com/widget/main.js';
      //For V2 bot
      script.src = 'https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js';

      script.onload = () => {
        const ic = window.YellowMessenger;
        if (typeof ic === 'function') {
          ic('reattach_activator');
          ic('update', window.ymConfig);
        }
      };
      document.body.appendChild(script);
    };

    loadYellowMessengerScript();

    return () => {
      // For V1 bot
      // const script = document.querySelector(`script[src="https://app.yellowmessenger.com/widget/main.js"]`);
      // For V2 bot
      const script = document.querySelector(`script[src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js"]`);

      if (script) {
        document.body.removeChild(script);
      }
    };
  });

  return null;
};

const App = () => {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <YellowMessengerWidget />
    </div>
  );
};

export default App;
```

4. Open your app in a browser to verify the chatbot widget appears and functions as expected.

    <img src="https://i.imgur.com/u1HgAIS.png" alt="drawing" width="40%"/>
    
:::note
* Enter your unique bot ID provided by the [support](mailto:support@yellow.ai) team.
* Ensure you uncomment the appropriate script URL for your bot version (V1 or V2).
:::
       