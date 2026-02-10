---
title: Sensitive Data Guardrails (PII Protection)
sidebar_label: PII Guardrails
---

In an era of stringent data privacy regulations (GDPR, HIPAA, PCI-DSS) and Generative AI, protecting customer data is no longer optional—it is critical.

Sensitive Data Guardrails is an enterprise-grade security layer that proactively scans every user interaction in real-time. It acts as a shield between your users and your systems, ensuring that Personally Identifiable Information (PII) and Protected Health Information (PHI) are detected, redacted, or masked before they reach your databases, logs, or third-party LLMs.

:::tip Security by Default
Sensitive data is intercepted at the source, ensuring no unmasked PII ever enters your logs.
:::

## Why use Sensitive Data Guardrails?

- **Zero-Compromise Security:** Achieve "Security by Default." Sensitive data is intercepted at the source, ensuring no unmasked PII ever enters your logs.
- **LLM Safety:** Safely leverage the power of Generative AI. We automatically sanitize inputs so you never accidentally train public models on your private customer data.
- **Strict Governance:** Enforce global policies that cannot be bypassed by individual developers, ensuring consistent compliance across all your bots.
- **Voice Compliance:** Automatically prevent the storage of voice recordings if sensitive entities are detected in the transcript.

## Key Capabilities

- **Active Detection:** Scans 100% of incoming messages in real-time using advanced NLP (Amazon Comprehend).
- **Global Enforcement:** Policies set by Admins are the "Single Source of Truth." A developer cannot override a global mask settings.
- **Fail-Closed Design:** If the PII detection service encounters an error, the system automatically blocks the message to prevent data leakage.
- **Custom Entities:** Beyond standard PII (Name, Email), define your own regex patterns for Order IDs, Policy Numbers, or Tracking Codes.
- **Visual Trust Indicators:** Developers see clear "Green Shield" icons in the Studio, confirming that a variable is protected by global policies.
- **Broad LLM Support:** Seamlessly integrates with major providers including Azure OpenAI, Anthropic, and Google, ensuring compliance regardless of your underlying AI model.

## How It Works

The guardrails operate on a strict **Global vs. Local** hierarchy to balance security with functionality.

### 1. The Global Safety Net (Admin Controlled)

![Global Safety Net](/img/pii-guardrails/Island-design.png)

This is your baseline defense. Policies defined here apply to **every** interaction.

- **Action:** If you set "Email" to Mask globally, every email address detected in any conversation is immediately obfuscated (e.g., j***@example.com).
- **Immutability:** Developers can read these variables, but they cannot unmask them or change the protection level.

### 2. Secure Collection (Developer Controlled)

When a bot flow must collect sensitive data (e.g., verification steps), developers use specific Secure Input Nodes.

- **Action:** Data is captured, encrypted, and stored temporarily for the session duration.
- **Access:** The raw value is available only to the secure API execution layer. Logs and debugging tools continue to see only the masked version.

## Architecture & Data Flow

Understanding how data moves through the system is critical for security compliance. The following diagram illustrates the lifecycle of a message containing sensitive data (PII).

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <img src="/img/pii-guardrails/architecture_diagram.png" alt="Architecture & Data Flow Diagram" style={{maxWidth: '100%', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}} />
</div>

### Flow Breakdown

- **Ingestion:** The user sends a message containing sensitive data (e.g., SSN, Email).
- **Interception:** Before any processing logic occurs, the Platform sends the raw text to the PII Detection Service.
- **Redaction:** The service identifies entities based on Admin policies and returns a sanitized version (e.g., [SSN-REDACTED]).
- **Inference:** The Platform sends only the redacted message to the Third-Party LLM. The external AI provider never receives the raw PII.
- **Storage:** Finally, the conversation is logged in the database using the redacted/masked content, ensuring long-term compliance (GDPR/audit trails).

## Configuration Guide (For Admins)

:::info Prerequisite
Super Admin access is required to modify security policies.
:::

### Step 1: Access the Dashboard

1. Click on the Settings button on the right panel to open your platform controls.
2. Under the General section, locate the Sensitive Data handling card. (Description: "Detect and de-identify sensitive PII/PHI information with methods like masking/replacement...")

![Settings Dashboard](/img/pii-guardrails/Settings---Phase-98.png)

3. Click the card and toggle the Master Switch to ON.

:::warning
Disabling this turns off detection for the entire bot. Proceed with caution.
:::

![Step 1](/img/pii-guardrails/step-1.jpeg)

### Step 2: Unlock Protected Entities (PII & PCI)

Once the Master Switch is enabled, the system automatically activates protection capabilities for key sensitive data types. These entities immediately become eligible for masking and appear in the developer's "Get Input" panel for secure use.

#### Supported PII (Personally Identifiable Information):

- **Contact:** Name, Phone, Email.
- **Identification:** PAN Card, Aadhaar Card, Social Security Number (SSN).

#### Supported PCI (Payment Card Industry):

- **Financial:** Card Information (Credit/Debit card details).

:::info
By enabling these here, you ensure that anytime a developer selects "Aadhaar Card" or "Phone" in a bot flow, your security policies are automatically enforced.
:::

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '2rem 0'}}>
  <img src="/img/pii-guardrails/island-design-2.jpeg" alt="Entity Configuration 1" style={{maxHeight: '950px', objectFit: 'contain', borderRadius: '0.5rem'}} />
  <img src="/img/pii-guardrails/Default--1.png" alt="Entity Configuration 2" style={{maxHeight: '650px', objectFit: 'contain', borderRadius: '0.5rem'}} />
</div>

### Step 3: Define Custom Regex Patterns

Do you use specific formats like ORDER-1234 or POL-999?

1. Click + **Add Custom Entity.**
2. **Category:** Select Regex.
3. **Sensitive data handling method:** Mask
4. **Pattern:** Enter your regex (e.g., `^[A-Z]{3}-\d{4}$`).

![Custom Entity](/img/pii-guardrails/Default.png)

#### ✨ Pro Tip: Zero-Code Regex Generation

Struggling with complex regex patterns? Let our built-in AI assistant do the heavy lifting.

Click the Ask AI button to open the smart generator. You can simply:

- **Describe the format:** "3 letters + 4 digits"
- **Give an example:** "ABC-1234"

Hit Generate Regex, and the system will instantly convert your plain English into precise code. No technical expertise required!

![Ask AI](/img/pii-guardrails/Ask-AI.png)

5. **Test It:** Use the Preview tool to type a sample message. Verify that the system correctly masks the data before saving.

![Test It](/img/pii-guardrails/test_it.jpeg)

## Developer Guide: Building Secure Flows

:::info Goal
Build functional bots without compromising security compliance.
:::

As a developer, the platform makes security transparent. You don't need to write complex code to hide data; you simply consume the secure variables.

### Permission & Visibility Logic

The "Get Input" panel behaves differently depending on the Admin's Global Policy. This ensures that critical security rules are always enforced while still giving developers flexibility where allowed.

#### Scenario 1: Strict Enforcement (Global Policy Active)

When the Admin has enabled the Global Toggle AND explicitly enabled a specific entity (like Name, Phone, or Email), the "Enable Sensitive Data Handling" checkbox will be checked and locked.

- **What this means:** The system forces protection because the Admin has deemed this data sensitive globally. You cannot uncheck this box.

![Get Card Input](/img/pii-guardrails/Get-card-input.png)

#### Scenario 2: Developer Choice (Optional Protection)

When the Global Toggle is ON, but the specific entity is disabled in the Admin settings, the checkbox will appear unchecked and unlocked.

- **What this means:** You have the choice. You can manually check the box to enable protection for this specific node if you believe the data needs security, even if it's not mandated globally.

![Get Custom Input 1](/img/pii-guardrails/Get-custom-input--1.png)

#### Scenario 3: Feature Inactive (Global Policy Off)

When the Admin has disabled the Master Switch entirely, the checkbox will not appear.

- **What this means:** PII protection is not active for this bot.

![Get Custom Input 3](/img/pii-guardrails/Get-custom-input--3.png)

:::tip
If a checkbox is greyed out and checked, it means an Admin policy is protecting you from accidentally leaking sensitive data.
:::

### Collecting Sensitive Info (e.g., OTPs, IDs)

Never use a standard "Text Input" node for sensitive data. Instead:

1. Add a Get Input node.
2. Select the specific type from the menu (e.g., Phone, PAN card, or Card information).
3. In Additional Settings, check Enable Sensitive Data Handling.
   - **System Message:** "This input follows admin protection configurations. Data is stored securely and deleted after the session."
   - **Privacy Action:** You will see a read-only field labeled Privacy Action (e.g., "Masking"). This confirms exactly how the data will be treated upon capture.
4. Map it to a variable. The platform handles the encryption automatically.

:::warning
Never attempt to bypass masking by splitting data across multiple variables. The active detection layer scans the final output string and will re-mask any reconstructed PII.
:::

### Handling Custom Entities (e.g., Order IDs, Tracking Codes)

Sometimes you need to collect organization-specific data that isn't a standard PII (like a Name or Phone). This is where Custom Entities come in.

**Prerequisite:** Your Admin must first define and enable the Custom Entity (e.g., "Order ID") in the Admin Dashboard.

How to configure:

1. Add a Get Input node and select Custom from the input type menu.
2. Define your Input Name (variable) and select the Data Type (e.g., String, Number).
3. Check the box: Enable Sensitive Data Handling.
4. A new Entity Dropdown will appear. This list is populated directly from the Admin Dashboard.
5. Select the specific custom entity (e.g., "Order ID") you want to map to this variable.
   - **System Message:** The system will now apply the specific regex and protection rules defined by the Admin for this entity.

![Get Custom Input 2](/img/pii-guardrails/Get-custom-input--2.png)

## Compliance & Analytics

### Compliance Standards

This feature supports compliance with:

- **GDPR:** Right to be forgotten (Session-based storage).
- **PCI-DSS:** Masking of credit card information in logs.

## Frequently Asked Questions

### Can I whitelist specific terms?

Yes. In the Entity Configuration, use the Exclusions list to prevent false positives (e.g., if a product name like 'Galaxy S23' is mistakenly flagged as a Person's Name).

### Does this work on Voice channels?

Absolutely. If PII is identified in the speech-to-text transcript, the system prevents the audio file from being stored, reducing your compliance footprint.

### What happens if I send a masked variable to an API?

By default, the API receives the masked value (****). To send the raw value to a trusted internal system, you must use a Secure API Node which is authorized to decrypt the session-scoped token.

### Is data sent to the PII detection service stored?

No. The detection service is stateless. It processes the text stream, returns the masked version/tags, and immediately discards the original data.

