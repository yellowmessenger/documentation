---
title: Voice FAQs
sidebar_label : Voice FAQs
---

  

<details>
<summary> What are the languages supported for Voice Bot? </summary>
<div>
<div> Language support depends on the STT/TTS engine selected. <a  href="https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=stt"> Languages supported in Microsoft engine. </a></div>
</div>
</details>

<details>
<summary>
Can yellow voice bots support DTMF inputs?
</summary>
<div>
<div> Yes, voice bots support both speech recognition and DTMF (keypad) inputs. <a  href="https://docs.yellow.ai/docs/cookbooks/voice-as-channel/usecases/dtmf"> Learn more here. </a>
</div>
</div>
</details>

<details>
<summary>
How will voice-bot work with third-party CRM?
</summary>
<div>
<div> It can integrate with any CRM for picking up information or posting back updates as long as we have APIs available to configure. </div>
</div>
</details>

<details>
<summary>
How can the voice bot transfer contextual information (like name, number, etc) collect from the end user to the contact center as well?
</summary> 
<div>
<div> We can use SIP Header transfer or Tonetag transfer to pass extra information while doing the call transfer. </div> 
</div>
</details>

<details>
<summary>
What are the STT engines provided for configuration?
</summary>
<div>
<div> Currently we have native integrations with Microsoft and Google for our STT services.</div>
</div>
</details>

  

<details>
<summary>
Can the bot be configured for regional languages?
</summary>
<div>
<div> Yes, a voice bot (same as a chatbot) can be configured for multiple languages.</div>
</div>
</details>

<details>
<summary>
How a voice bot can capture alphanumeric inputs accurately from user speech?
</summary>
<div>
<div> Accuracy depends on many factors like the complexity of the input, background noise, etc. If the list of these characters is available (for example a list of Product IDs or an Order ID) we can train the bot on the same using boost phrases. </div>
</div>
</details>

<details>
<summary>
Can voice bot dynamically understand different languages and if required, switch the language on the fly?
</summary>
<div>
<div> Yes, this can be done using the Auto-Language Detection feature. Currently, this is under Beta. <a  href="https://docs.yellow.ai/docs/cookbooks/voice-as-channel/usecases/languagedetection"> Learn more here. </a>  </div>
</div>
</details>