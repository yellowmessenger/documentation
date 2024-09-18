---
title: Common challenges of Gen AI bots
sidebar_label : Gen AI common challenges
---

Gen AI/LLMs are powerful tools with their own set of advantages and limitations. When not used correctly, they present challenges.

## LLMs challenges  

- **Citing sources**: LLMs often struggle to cite sources accurately, which can lead to fabricated references.
- **Bias**: LLMs may produce biased responses, reflecting prejudiced or stereotypical views.
- **Hallucinations**: LLMs can confidently generate incorrect or misleading information when they cannot answer a question accurately.
- **Mathematics**: LLMs frequently provide incorrect answers to mathematical questions, as they are primarily trained on text data. However, newer models are improving in logical reasoning.
- **Prompt hacking**: Users can exploit prompt hacking techniques to induce inappropriate or undesirable content from LLMs.

------


## Dynamic flow challenges

### Picking the right model by evaluating early

- **GPT-3.5/GPT-3.5 Turbo**: More cost-effective but may exhibit hallucinations, especially with non-specific instructions. They can support 1-2 skills stably, plus a knowledge base skill, but may still show some level of hallucination. 
- **GPT-4**: Handles 8-10 skills comfortably and is better for complex cases. Upgrading to newer models when needed can save time and effort.
- **Complex Cases**: GPT-3.5 or older models may struggle with complex scenarios. If issues persist, consider upgrading to a newer model.
- **Dynamic Chat Nodes**: If using GPT-3.5 models, ensure specific points for completion versus continuation. Adding dummy inputs may help manage unexpected exits.
- **Rich Media**: Features like rich media and quick replies are only available for GPT-4. While they can be enabled for lower models, they may not perform as expected.
- **Skill Combination**: Combine skills in a sequence as INPUT → SKILL → OUTPUT. For example, if two APIs need to run sequentially without intermediate data, combine them into a single skill.

:::note
It’s crucial to understand use cases, budgets, and context to select the right model. Higher cost does not always equate to better performance for every use case. GPT-3.5 may not be suitable for complex scenarios with many skills. You can use different models in different nodes within the same bot, but select GPT-3.5 only for very simple use cases or if cost is a significant constraint.
:::

### Prompt testing and iteration

- **Iterations**: Multiple iterations may be necessary to craft an effective prompt.
    - Avoid assuming prompt behavior. Clearly specify what should happen if things deviate from expectations.
    - Keep test cases handy for each iteration to ensure thorough testing.
- **Live Performance**: Your prompt might not always perform perfectly in live scenarios.
    - Issues may arise if edge cases weren't tested or if there's a mismatch between user expectations and the use case.
    - Be prepared to iterate during the initial days of go-live to refine your prompt.
    - Gen AI is not infallible but can handle more cases than static flows. Build customer confidence by addressing these issues promptly.

### Dynamic flows may not be the right tool for your bot/flow

Understand where dynamic flows fit best and select your tools wisely.

> For a detailed understanding of dynamic nodes and their suitability, refer to [this documentation](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode).

-----

## Knowledgebase challenges

- **JavaScript-rendered Content**: Some web pages use JavaScript to render content, which can be challenging for crawlers like Yellow and Google to access. In these cases, integrating with the source data via CMS or customer APIs is recommended.
- **Selective Indexing**: Only index the necessary web pages from a domain to avoid including irrelevant information. For example, search only specific support pages rather than the entire domain.
- **Crawler Restrictions**: Some domains prevent indexing through services like Cloudflare. Customers need to allowlist Yellow’s IP for data ingestion.
- **No OCR Support**: Images and videos cannot be processed for text extraction.
- **Links in Responses**: Generated responses cannot include clickable links, as LLMs may miss critical characters that break the link.
- **Gated Webpages**: Currently, there is no support for indexing gated webpages. Consider using CMS or API approaches instead.
- **Complex Tables**:
  - Tables with merged columns/rows and structured relationships between cell values and headers can be difficult to process.
  - Excel-like filters may be needed for effective searching.
  - Long entity values (e.g., part numbers) are challenging to search due to their similarity with other parts.
- **Duplicate or Conflicting Knowledge**: Duplicate or conflicting information from the same or different sources can result in cluttered search results.
- **Contextual Relationships**: If a topic’s context is in the title while related paragraphs are placed apart, the system may struggle to establish the connection. We are working on improving this at the parser level to enhance performance.
