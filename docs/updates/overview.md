---
title: Release History
sidebar_label: Release history
featured: true
---

# Release History

Explore our comprehensive archive of platform updates, feature releases, and improvements from previous quarters. This historical overview showcases the continuous evolution of our platform capabilities and enhancements delivered to enhance your experience.

<div style={{
  background: "var(--ifm-color-background-surface)",
  borderRadius: "8px",
  padding: "1.5rem",
  marginBottom: "2rem",
  border: "1px solid var(--ifm-color-emphasis-200)"
}}>
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem"
  }}>
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
        <path d="M3 4.5H21V6H3V4.5ZM3 11.25H15V12.75H3V11.25ZM3 18H9V19.5H3V18Z" fill="currentColor"/>
      </svg>
      <span style={{
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "var(--ifm-color-text-base)",
        letterSpacing: "0.025em"
      }}>Categories</span>
    </div>
  </div>
  <div style={{display: "flex", gap: "0.5rem", flexWrap: "wrap"}}>
    <button 
      className="filter-btn active" 
      data-category="all"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { item.style.display = 'block'; });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-primary)",
        color: "white",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease",
        border: "none",
        cursor: "pointer"
      }}>All Updates</button>
    <button 
      className="filter-btn" 
      data-category="platform"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'platform') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Platform</button>
    <button 
      className="filter-btn" 
      data-category="integrations"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'integrations') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Integrations</button>
    <button 
      className="filter-btn" 
      data-category="engage"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'engage') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Engage</button>
    <button 
      className="filter-btn" 
      data-category="insights"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'insights') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Insights</button>
    <button 
      className="filter-btn" 
      data-category="channels"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'channels') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Channels</button>
    <button 
      className="filter-btn" 
      data-category="agent-ai"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'agent-ai') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Agent AI</button>
    <button 
      className="filter-btn" 
      data-category="analyze"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'analyze') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Analyze</button>
    <button 
      className="filter-btn" 
      data-category="inbox"
      onClick={(e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.release-item');
        buttons.forEach(btn => { btn.classList.remove('active'); btn.style.background = 'var(--ifm-color-emphasis-100)'; btn.style.color = 'var(--ifm-color-text-base)'; });
        e.target.classList.add('active');
        e.target.style.background = 'var(--ifm-color-primary)';
        e.target.style.color = 'white';
        items.forEach(item => { 
          if (item.getAttribute('data-category') === 'inbox') { 
            item.style.display = 'block'; 
          } else { 
            item.style.display = 'none'; 
          }
        });
      }}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ifm-color-emphasis-100)",
        color: "var(--ifm-color-text-base)",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid transparent"
      }}>Inbox</button>
  </div>
</div>

***

<div className="release-item" data-category="platform" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h2 style={{margin: 0}}>Cloud platform redefined for better experience</h2>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #10b981, #059669)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>MAJOR UPDATE</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Platform</span>
</div>

We've redesigned the Yellow.ai workspace with a cleaner theme and improved navigation to give you a smoother, more intuitive experience. This update reduces clutter in the left navigation and provides an overall better workflow.

### Highlights of this redesign:

* **New Navigation** for faster access to modules with improved grouping and organization.  
* **New Theme & Typography** with refreshed colors, fonts, and redesigned buttons for improved usability.  
* **Automation module is now renamed to Build** for AI agents.  
* **Distinct structures for AI and Non-AI agents** to provide tailored workflows.  
* **All features are organized within their respective sections** on each page for intuitive access.  


#### 1. What's changed in the navigation for brands using AI Agents
The **Build** section is focused on agent-centric components:

* **Agents:** Manage AI agents individually.  
* **Tools:** Access utilities and integrations to support agents.  
* **Test Suites:** Validate agent performance across scenarios.  

   ![](/img/ai-agent.gif)

#### 2. What's changed in the navigation for brands using Non-AI Agents
For brands using Non-AI agents, the **Automation module** now contains only **Build, Train, and Test** at the top level.  

* **Build:** Existing features (Flows, Workflows, Functions, API, Events, Translations) are now grouped under Build.  
* **Train:** Intents, Entities, FAQs, Documents, Synonyms, Small Talk, Context Management.  
* **Test:** Test Intents, Test FAQs, Test Knowledge Base.  
   ![](/img/non-aigent.gif)


#### 3. Database moved to Data & Knowledge
The **Database** has been moved to the **Data & Knowledge** section as it serves as a central DB tool for all modules, including AI and Non-AI agents.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/data-base.png)

</div>

## **Integration** {#integration}

<div className="release-item" data-category="integrations" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Ccavenue</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>NEW</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Integrations</span>
</div>

CcAvenue is a leading payment gateway that enables businesses to securely accept online payments through credit cards, debit cards, net banking, and other methods.

We’ve added a new configuration option in the CcAvenue integration to simplify payment collection directly within conversations:

* **Generate Quick Invoice**: Allows AI agents to create and share invoice payment links with users during a conversation.

[Learn where to configure these options](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/ccavenue-payment)
</div>

<div className="release-item" data-category="integrations" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Custom Live Chat Integration</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Integrations</span>
</div>

Custom Live Chat Integration – New Display Control Options

We’ve introduced two new configuration options to give you more control over the live chat experience when users are in the queue:

* **Hide Home Button When User is in Queue** – Removes the home button from the chat interface while a user is waiting in the queue, keeping them focused on the current conversation.
* **Hide Input Box When User is in Queue** – Disables the message input box while a user is waiting in the queue, preventing premature responses before an agent joins.

:::note
For existing configurations, these options will be disabled by default. You can enable them manually by editing your integration account.
These enhancements help you create a cleaner and more guided chat experience for users during wait times.
:::

[Learn where to configure these options](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/customliveagent#connect-custom-live-chat-account-to-yellowai)
</div>

<div className="release-item" data-category="integrations" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>JSON Web Token (JWT) Integration</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>NEW</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Integrations</span>
</div>

We've added support for JWT (JSON Web Token) authentication, enabling a more secure way to exchange information between your applications and Yellow.ai.

**With this integration, you can:**

* Configure JWT-based authentication to protect APIs and integrations.
* Use signed tokens to ensure data integrity and security during client–server communication.
* Standardize authentication flows with a widely adopted, compact, and URL-safe format.

**Where to find it**:

Navigate to **Integrations** > **JSON Web Token** (JWT) to set up and configure.

[Learn how to integrate JWT](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/json-webtoken)
</div>

-----

## **Engage** {#engage}

<div className="release-item" data-category="engage" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>MM Lite Global Setting</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Engage</span>
</div>

You can now enable MM Lite once at the global level under **Settings** > **Engage** > **Preferences**.
No need to configure it for every campaign—though you can still override it at the campaign level if needed.

For more details, see [Engage settings](https://docs.yellow.ai/docs/platform_concepts/engagement/engage-settings#5-whatsapp-api-preferences-mm-lite-or-meta-cloud)
</div>

<div className="release-item" data-category="engage" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Smarter WhatsApp Message Delivery with MM Lite API Integration</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Engage</span>
</div>

We've added **MM Lite API** support to outbound campaigns, flows, and notification APIs.
This smart delivery feature uses Meta's intelligence to decide the best time to send WhatsApp messages, improving your chances of reaching customers when they're most likely to engage.

No change in how you build your campaigns — just choose the API reference while configuring WhatsApp campaign, Meta takes care of the rest.


#### How it works

* **Default**: Follows your [Org level setting](https://docs.yellow.ai/docs/platform_concepts/engagement/engage-settings#5-whatsapp-api-preferences-mm-lite-or-meta-cloud)
* **Customizable**: You can override this setting when configuring individual WhatsApp campaigns (Outbound, Flows, or Notification APIs).


#### Who gets it

* Available **only for customers onboarded to MM Lite**
* Works with **Meta-approved MARKETING templates**


#### How to enable MM lite

If your account is managed by Yellow\.ai:

* Your CSM will contact you
* Or, reach out to your CSM to request access

**For more details, refer to**
* [**Org level setting**](https://docs.yellow.ai/docs/platform_concepts/engagement/engage#set-mm-lite-preference-at-org-level)
* [**Outbound campaigns documentation**](https://docs.yellow.ai/docs/platform_concepts/engagement/engage)
* [**Flow campaign documentation**](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#1-whatsapp-channel-configuration)
* [**Notification API documentation**](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#mmlite-preference-support-in-notifications-api-for-whatsapp)
* [**Notification API reports**](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#4-reports)
   

### How to choose MM Lite for each WhatsApp campaign:

* [Flow campaign](http://localhost:3001/docs/platform_concepts/engagement/flows_campaign#1-whatsapp-channel-configuration)
* [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#33-whatsapp-campaign)
* [Notification API](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#mmlite-preference-support-in-notifications-api-for-whatsapp)

</div>



<div className="release-item" data-category="engage" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Deprecated Engage Overview Page</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #ef4444, #dc2626)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>DEPRECATED</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Engage</span>
</div>

The Engage Overview page has been deprecated as part of our ongoing efforts to streamline the platform. 

</div>

-----

## **Insights** {#insights}


### WhatsApp Consumption Report Aligned with New Pricing (Effective July 1, 2025)
**Important Update** • Insights

We've updated your WhatsApp consumption report to  ensure your reporting remains accurate and consistent with Meta's new pricing model, effective **July 1, 2025**.

#### What’s changed

* **Per-message billing**: Charges are now calculated **per message** instead of per conversation.
* **Free utility messages**: Utility template messages sent within an **open customer service window** are now free.
* **Improved reporting**: New fields provide more clarity on **billable vs free messages**.

### Reporting changes for better alignment with Meta:

* **New message categories**: "User Initiated" and "Business Initiated" have been replaced with **"Paid" and "Free"**, consistent with Meta’s dashboard.
* **Raw data table updates**:

  * Added: `message_type` (e.g., Utility, Marketing)
  * Added: `message_category` (Paid or Free)
* **Deprecated**: “Referral Initiated” will no longer appear in reports.


📚 [Learn more about the new pricing on Meta’s official page](https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing)
📩 Questions? Reach out to your Account Manager or contact us at **[support@yellow.ai](mailto:support@yellow.ai)**


-----

## **Channels** {#channels}

<div className="release-item" data-category="channels" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Email Channel – OAuth Support</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Channels</span>
</div>

You can now configure the Email channel with Microsoft OAuth for a more secure and seamless connection between your email service and the AI agent. This configuration enables the agent to send and receive emails securely.

[Learn more about Email channel OAuth support](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound#setup-email-channel-with-oauth)

<!-- ## **Knowledgebase**

### Conversational Knowledge Base (KB) **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We have introduced Conversational KB, a smarter and more intuitive way to deliver knowledge-driven conversations in your AI agents!

**What is Conversational KB?**

Conversational KB is an intelligent AI-powered knowledge assistant that enables your AI agent to understand user intent, retain conversation context, and respond in a more human-like, interactive manner when answering queries from your knowledge base.

**What’s new?**

**Before:**

* KB responses were static, one-shot Q&A interactions.
* No context retention across user messages.
* Complex KB setup involving multiple methods (DC nodes, KB skills, prompt engineering, custom functions).
* Creating a conversational experience often required writing dozens of lines of prompt code and debugging issues in the setup.

**Now:**

* Unified and simplified KB setup: One clean interface to configure search instructions.
* Prompt complexity drastically reduced. Example: Recreating the Enbridge bot previously needed 74 lines of prompt code in a DC node. With Conversational KB, it now takes just 20 lines — cutting down time, effort, and complexity significantly.

**Key features**

* **Smarter conversations**: The agent can ask follow-up questions, clarifying questions and follow up with users, creating a much more natural, interactive experience..
* **Context retention:** It remembers what the user previously asked, enabling smoother, context-aware interactions without repetition.
* **Rich media responses**: Enhance answers with images and videos as part of the KB response.
* **Multi-step reasoning over retrieved content**: Agent can reason over the retrieved content, before sharing the final response
* **Multilingual support**: The AI agent can automatically respond in the user’s language.
* **Clickable hyperlinks**: Any links in responses are now displayed as hyperlinks.

[**Check out the documentation →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/kb-agent-config)


### Redesigned Knowledge Base: Faster Setup, Smarter Syncing, Better Organizing **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We’ve completely revamped the Knowledge Base module to help you manage and deliver content more efficiently. Now enabled by default for all newly created bots, this update brings powerful new capabilities to streamline setup, syncing, and ongoing content management—ensuring your AI agents stay accurate and context-aware.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/KBonboarding.png)

**What’s new**:

* **Guided content onboarding**: Step-by-step onboarding for websites, document uploads, and third-party platforms.
* **Automated content syncing**: Schedule regular content updates using the built-in scheduler—no backend configuration required.
* **Smarter file management**: Organize your content with folders, subfolders, and perform bulk actions for quicker updates.
* **Metadata management**: Tag and filter files to improve search accuracy and make content more discoverable for your AI agent.
* **Independent publishing workflow**: Publish Knowledge Base updates without redeploying the entire bot.


[**Read the full documentation →**](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview) -->
</div>

---


## **Integration**

Custom Live Chat Integration – New Display Control Options
We’ve introduced two new configuration options to give you more control over the live chat experience when users are in the queue:

* **Hide Home Button When User is in Queue** – Removes the home button from the chat interface while a user is waiting in the queue, keeping them focused on the current conversation.
* **Hide Input Box When User is in Queue** – Disables the message input box while a user is waiting in the queue, preventing premature responses before an agent joins.

:::note
For existing configurations, these options will be disabled by default. You can enable them manually by editing your integration account.
These enhancements help you create a cleaner and more guided chat experience for users during wait times.
:::

[Learn where to configure these options](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/customliveagent#connect-custom-live-chat-account-to-yellowai)


---


## **Engage**

### MM Lite Global Setting
**Enhancement** • Engage

You can now enable MM Lite once at the global level under **Settings** > **Engage** > **Preferences**.
No need to configure it for every campaign—though you can still override it at the campaign level if needed.

For more details, see [Engage settings](https://docs.yellow.ai/docs/platform_concepts/engagement/engage-settings#5-whatsapp-api-preferences-mm-lite-or-meta-cloud)





<div className="release-item" data-category="engage" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Deprecated Engage Overview Page</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #ef4444, #dc2626)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>DEPRECATED</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Engage</span>
</div>

The Engage Overview page has been deprecated as part of our ongoing efforts to streamline the platform. 

</div>

---

## **Agent AI** {#agent-ai}

<div className="release-item" data-category="agent-ai" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Automate Revamp: A Simpler, Smarter Way to Build Gen AI Agents</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Agent AI</span>
</div>

We've reimagined the AI agent setup experience to be more guided, efficient, and powerful—so you spend less time configuring and more time delivering intelligent conversations.



#### **What’s enhanced:**

#### Simplified Setup

Define your AI agent’s behavior using natural language. Just describe what the agent should do, and the system generates the logic for you—no technical configuration required.


#### Super Agents & Agents

Design large, multi-functional AI assistants with ease using a modular architecture.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/superagent.png)

* **Super Agent:** Acts as the master controller that defines your AI assistant’s overarching goal (e.g., customer support, travel, healthcare). It intelligently routes queries to the right sub-agent and manages the overall conversation flow.
* **Agents:** Independent, task-specific AI agents under the Super Agent. Each one handles a focused use case such as booking a flight, cancelling a ticket, or responding to knowledge-based queries. This structure keeps logic clean, reusable, and scalable.


#### Improved Conversation Design

Build smarter, more natural conversations using intuitive building blocks:

* **Start Triggers:** Automatically detect user intent and launch the right conversation.
* **Prompts:** Ask relevant questions, deliver precise answers, and guide users clearly.
* **Actions:** Perform tasks like capturing inputs, calling APIs, or handling fallback responses.
* **Variables:** Store, recall, and reuse user data throughout the interaction for a personalized experience.
* **Workflows:** Seamlessly connect to external systems and dynamically fetch or update data in real time.

[**Check out the setup guide →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona)

---


### PCI-Compliant Data Capture Now Supported in Question Nodes  **![](https://img.shields.io/badge/-Enhancement-ff9800)**
**Security Enhancement** • Agent AI

As part of our ongoing commitment to security and compliance, Yellow.ai now supports PCI-compliant data capture across multiple channels using question nodes, in addition to the previously supported voice input nodes. You can then use the API node to transfer PCI-sensitive information securely.

#### Key enhancements

* **PCI Classification for Inputs**
   Specific input fields—such as card number, CVV, PIN, and expiry—can now be marked as PCI data. Once classified, these inputs are automatically encrypted, logged securely, and handled per PCI DSS guidelines.
* **Multi-Channel Support**
   PCI input is now supported in question nodes, enabling secure data collection across Web, WhatsApp, and Voice channels.
* **API-Only Access for PCI Variables**
   PCI variables are securely stored and cannot be accessed via function or code nodes. They are available only through the API node. 
   <br/>
   PCI variables can be accessed only once via the API node. After a successful API call, the associated PCI data is securely deleted and can no longer be retrieved. This ensures sensitive information is never stored longer than necessary, maintaining strict compliance with PCI standards.


[**Learn how to capture PCI card data securely using Question node**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-node-overview/question-node#collecting-pci-details-using-question-node)

[**Learn how to store PCI data using the API**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes-overview/api-node)
</div>

---

## **Insights**

<div className="release-item" data-category="insights" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>WhatsApp Consumption Report Aligned with New Pricing (Effective July 1, 2025)</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>IMPORTANT UPDATE</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Insights</span>
</div>

We've updated your WhatsApp consumption report to  ensure your reporting remains accurate and consistent with Meta's new pricing model, effective **July 1, 2025**.

#### What’s changed

* **Per-message billing**: Charges are now calculated **per message** instead of per conversation.
* **Free utility messages**: Utility template messages sent within an **open customer service window** are now free.
* **Improved reporting**: New fields provide more clarity on **billable vs free messages**.

### Reporting changes for better alignment with Meta:

* **New message categories**: "User Initiated" and "Business Initiated" have been replaced with **"Paid" and "Free"**, consistent with Meta’s dashboard.
* **Raw data table updates**:

  * Added: `message_type` (e.g., Utility, Marketing)
  * Added: `message_category` (Paid or Free)
* **Deprecated**: “Referral Initiated” will no longer appear in reports.


📚 [Learn more about the new pricing on Meta’s official page](https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing)
📩 Questions? Reach out to your Account Manager or contact us at **[support@yellow.ai](mailto:support@yellow.ai)**



### Access Control–Based Filters for Monitor and Reporting  **![](https://img.shields.io/badge/-Enhancement-ff9800)**
**Enhancement** • Insights

We're making monitoring and reporting more secure and relevant by applying **access control–based filters**. Supervisors will now see only data related to their assigned teams across both the **Monitor** and **Analytics** sections.


#### **Monitor Section Updates**

* **Removed: Online Visitors**
  The *Online Visitors* metric has been removed from the Monitor view to streamline the dashboard.

* **Live Chats, Now Filtered**
  Live chats shown will now reflect only those conversations that fall under the supervisor’s assigned teams.

* **Updated: Email Trends UI**
  The filters in *Email Trends* have been refreshed to match the platform’s standard UI style. Functionality remains unchanged.

* **Team Tab, Now Scoped**
  The *Team* tab now displays only agents and groups belonging to the supervisor’s team, instead of showing all.


#### **Analytics Enhancements**

* **New Filters in Chat Analytics & Agent Performance**
  Supervisors now have access to filters in these sections. Data will be scoped to agents and groups in their own teams.

* **Improved Filter Key**
  A filter key has been added to clarify how team-specific filters work, ensuring that supervisors see only relevant data.


---


### Name change: Dataops is not renamed to Data export **![](https://img.shields.io/badge/-Enhancement-ff9800)**
**Enhancement** • Insights

Data Operations (DataOps) has been renamed to Data Export to better reflect its functionality.

### Sunset Notice: Clearing the Path for a Smarter Analytics Experience **![](https://img.shields.io/badge/-Enhancement-ff9800)**
**Deprecation** • Insights

As we prepare for a major revamp of our Analytics module, we're streamlining the experience by removing a few legacy screens over the next two weeks. These updates are part of our broader effort to deliver cleaner insights, modern visualizations, and a more intuitive interface.

Here’s what’s changing:


#### Insights – User Journeys  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

With the shift towards agentic AI workflows, this section—based on an older implementation—no longer aligns with our direction. We’re removing it, but don’t worry:

* **Top Flows Visited** and
* **Journey Completion Rate** (will still be available in the **Overview** dashboard)

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/userjourney.png)

#### Insights – Health

This screen is being taken down temporarily. In its place, we’re working on a refreshed **Alerts** tab to provide a more actionable view into bot performance and system health—coming soon.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/alerts.png)

#### Engage – User Data & User Trends

These screens haven’t seen active usage since January 2025 and aren’t tied to core workflows. To reduce clutter and focus on what matters, we’re phasing them out.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/user-data.png)


#### What’s Next?

We're reimagining Analytics to support faster decision-making with smarter, cleaner, and more relevant insights. Stay tuned for upcoming releases with exciting upgrades.
</div>



---

## **Analyze** {#analyze}

<div className="release-item" data-category="analyze" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Redesigned Topic Details Page</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Analyze</span>
</div>

We've introduced a refreshed design and improved terminology on the Topic Details page in the **Analyze** module to make insights easier to understand and act on.

![topics](https://cdn.yellowmessenger.com/assets/yellow-docs/gif.gif)

#### Updated Terminology for Clarity

1. To ensure consistency across the platform and enhance clarity, we've updated the following terms:
   * CR Rate → AI Resolution Rate
   * Containment Rate → Automation Rate
   * CR Opportunity → Automation Opportunity
2. Each term now includes a tooltip definition—simply hover to learn more.

#### Layout Enhancements for Better Usability

To ensure faster access to actionable insights and smoother navigation:
* KB Recommendations and the Manual Conversation Analysis CTA have been moved to the top of the page.


[**Continue reading →**](https://docs.yellow.ai/docs/platform_concepts/analyze/indepthinsights)
</div>

---



---

## **Inbox** {#inbox}

<div className="release-item" data-category="inbox" style={{marginBottom: "3rem"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem"}}>
  <h3 style={{margin: 0}}>Redact sensitive messages in Chats</h3>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "linear-gradient(90deg, #ef4444, #dc2626)",
    color: "white",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    flexShrink: 0,
    marginLeft: "1rem"
  }}>SECURITY ENHANCEMENT</span>
</div>

<div style={{marginBottom: "1.5rem"}}>
  <span style={{
    padding: "0.25rem 0.75rem",
    background: "var(--ifm-color-emphasis-100)",
    color: "var(--ifm-color-text-secondary)",
    borderRadius: "4px",
    fontSize: "0.75rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  }}>Inbox</span>
</div>

We've introduced Message Redaction to help you safeguard sensitive customer data directly from the Inbox. Agents can now mark specific text messages as sensitive, ensuring private information is masked across chat views, transcripts, and logs — while remaining securely stored for audits and compliance.

:::info
* *Message Redaction is a gated feature.* To enable it for your account, please [contact Yellow.ai Support](mailto:support@yellow.ai).
:::

* **Redact individual text messages** with one click (attachments not supported).
* **Admin-controlled permissions**: Only agents with redaction access can redact messages. Permissions can be managed in the Agent Settings page.
* **Secure masking, not deletion**: Redacted content is hidden from all users but retained securely for audit purposes.
* **Visible across views**: Redacted messages appear masked in the Inbox, chat transcripts, and conversation exports.
* **Complete audit trail**: Every redaction is logged with metadata including who redacted, when, and which message.

[Check out doc](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#message-redaction-to-protect-sensitive-information-with-controlled-visibility)



### Monitor & Reporting Access Control Updates  **![](https://img.shields.io/badge/-Enhancement-ff9800)**
**Enhancement** • Inbox

Supervisors now get scoped views across Monitor, Reporting, and Team tabs—ensuring visibility is limited to their assigned teams.

**What’s changed:**

* 🗑️ *Online Visitor* metric removed from the Monitor section
* 💬 *Live Chats*, *Team Tab*, and *Analytics* now show data only for supervisor-assigned teams
* ✉️ *Email Trends* filters updated to match the latest UI
* 📈 New filters + key added for *Chat Analytics* and *Agent Performance* views

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/monitor.png)

Cleaner data. Sharper control. Just the way it should be.


### Sender Email Logic Update in Email Ticketing  **![](https://img.shields.io/badge/-Enhancement-ff9800)**

We've cleaned up how the "From" address is picked when replying to tickets. Agents can also see clear From/To details while composing—no more guesswork. -->
</div>



