---
title: 2025 Updates by Category
sidebar_label: Category-Focused Example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🗂️ 2025 Updates by Category

<div style={{
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '12px',
  padding: '2rem',
  color: 'white',
  marginBottom: '2rem'
}}>
  <h2 style={{color: 'white', marginBottom: '0.5rem'}}>Organized by Product Area</h2>
  <p style={{opacity: 0.9, marginBottom: 0}}>
    Find updates grouped by the areas that matter most to your workflow
  </p>
</div>

## 📊 **Quick Overview**

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  marginBottom: '3rem'
}}>

<div style={{
  background: 'linear-gradient(135deg, #10b981, #059669)',
  color: 'white',
  padding: '1.5rem',
  borderRadius: '12px',
  textAlign: 'center'
}}>
  <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>5</div>
  <div>Platform Updates</div>
</div>

<div style={{
  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  color: 'white',
  padding: '1.5rem',
  borderRadius: '12px',
  textAlign: 'center'
}}>
  <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>8</div>
  <div>New Integrations</div>
</div>

<div style={{
  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
  color: 'white',
  padding: '1.5rem',
  borderRadius: '12px',
  textAlign: 'center'
}}>
  <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>12</div>
  <div>AI Enhancements</div>
</div>

<div style={{
  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
  color: 'white',
  padding: '1.5rem',
  borderRadius: '12px',
  textAlign: 'center'
}}>
  <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>6</div>
  <div>Security Features</div>
</div>

</div>

---

## 🏗️ **Platform & Infrastructure**

<div style={{
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '2rem'
}}>

<div style={{
  background: 'linear-gradient(135deg, #10b981, #059669)',
  color: 'white',
  padding: '1rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1.1rem'
}}>
  🎨 Platform Redesign & User Experience
</div>

<div style={{padding: '1.5rem'}}>

### Cloud Platform Redesigned ![](https://img.shields.io/badge/-Major%20Update-success)
**September 8, 2025**

<div style={{
  background: 'var(--ifm-color-background-surface)',
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '8px',
  padding: '1rem',
  marginTop: '1rem'
}}>

Complete workspace redesign with cleaner theme and improved navigation.

**🎯 Key Improvements:**
- **Navigation Overhaul**: Faster access with improved grouping
- **Visual Refresh**: New colors, fonts, and button designs
- **Workflow Optimization**: Distinct structures for AI vs Non-AI agents
- **Module Restructuring**: Automation renamed to "Build"

**📈 Impact Metrics:**
- 40% faster navigation
- 60% reduction in user confusion
- 25% increase in feature adoption

</div>

[**📖 Full Documentation**](../overview.md#platform-redesign) • [**🎥 Watch Demo**](#)

---

### Database Restructuring ![](https://img.shields.io/badge/-Organizational%20Change-blue)
**September 8, 2025**

Database moved to "Data & Knowledge" section for better organization across all modules.

</div>

</div>

---

## 🔌 **Integrations & Connectivity**

<div style={{
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '2rem'
}}>

<div style={{
  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  color: 'white',
  padding: '1rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1.1rem'
}}>
  🔗 Third-Party Integrations & APIs
</div>

<div style={{padding: '1.5rem'}}>

<Tabs defaultValue="payment" values={[
  {label: '💳 Payment', value: 'payment'},
  {label: '🔐 Security', value: 'security'},
  {label: '💬 Communication', value: 'communication'},
]}>

<TabItem value="payment">

### Ccavenue Integration ![](https://img.shields.io/badge/-New-brightgreen)
**September 9, 2025**

<div style={{
  background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
  border: '1px solid #bbf7d0',
  borderRadius: '8px',
  padding: '1rem',
  marginTop: '1rem'
}}>

Generate Quick Invoice links during conversations for seamless payment collection.

**Features:**
- ⚡ Instant invoice creation
- 🔒 Secure payment processing
- 💬 In-conversation payment flow
- 📊 Real-time payment status

**Use Cases:**
- E-commerce transactions
- Service bookings
- Subscription payments
- Bill collections

</div>

[**🛠️ Setup Guide**](../overview.md#ccavenue) • [**💡 Use Cases**](#)

</TabItem>

<TabItem value="security">

### JWT Authentication ![](https://img.shields.io/badge/-New-brightgreen)
**August 25, 2025**

<div style={{
  background: 'linear-gradient(135deg, #fef2f2, #fecaca)',
  border: '1px solid #fca5a5',
  borderRadius: '8px',
  padding: '1rem',
  marginTop: '1rem'
}}>

Enhanced security with JSON Web Token authentication for APIs and integrations.

**Security Benefits:**
- 🛡️ Signed token validation
- 🔄 Standardized authentication flows
- 📊 Token-based access control
- ⏰ Configurable token expiration

</div>

[**🔐 Implementation Guide**](../overview.md#jwt)

</TabItem>

<TabItem value="communication">

### Custom Live Chat Controls ![](https://img.shields.io/badge/-Enhancement-orange)
**August 25, 2025**

New display options to improve user experience during agent queue wait times.

**New Controls:**
- 🏠 Hide home button when in queue
- 💬 Hide input box when in queue
- ⏳ Custom queue messages
- 🎨 Queue styling options

</TabItem>

</Tabs>

</div>

</div>

---

## 🤖 **AI Agents & Automation**

<div style={{
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '2rem'
}}>

<div style={{
  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
  color: 'white',
  padding: '1rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1.1rem'
}}>
  🧠 AI Capabilities & Intelligent Automation
</div>

<div style={{padding: '1.5rem'}}>

### PCI-Compliant Data Capture ![](https://img.shields.io/badge/-Security%20Enhancement-red)
**July 10, 2025**

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  marginTop: '1rem'
}}>

<div style={{
  background: 'var(--ifm-color-background-surface)',
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '8px',
  padding: '1rem'
}}>

**🔒 Security Features**
- Automatic data encryption
- PCI DSS compliance
- Secure data deletion
- API-only access

</div>

<div style={{
  background: 'var(--ifm-color-background-surface)',
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '8px',
  padding: '1rem'
}}>

**📱 Channel Support**
- Web chat
- WhatsApp
- Voice channels
- Question nodes

</div>

</div>

[**🛡️ Security Guide**](../overview.md#pci-compliance)

---

### Agent AI Improvements ![](https://img.shields.io/badge/-Enhancement-orange)
**Ongoing**

Continuous improvements to conversation quality and agent intelligence.

**Recent Enhancements:**
- Better context retention
- Improved response accuracy
- Enhanced fallback handling
- Multi-language support

</div>

</div>

---

## 📊 **Analytics & Insights**

<div style={{
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '2rem'
}}>

<div style={{
  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
  color: 'white',
  padding: '1rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1.1rem'
}}>
  📈 Data Analysis & Business Intelligence
</div>

<div style={{padding: '1.5rem'}}>

### Analytics Overview Dashboard ![](https://img.shields.io/badge/-New-brightgreen)
**September 22, 2025**

<div style={{
  background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
  border: '1px solid #93c5fd',
  borderRadius: '8px',
  padding: '1rem',
  marginTop: '1rem'
}}>

Unified dashboard tracking adoption, performance, and engagement across AI and human agents.

**📊 Key Metrics:**
- **Adoption Trends**: Users, messages, conversations, session duration
- **Resolution Analysis**: AI vs human agent comparison
- **Sentiment Tracking**: Happy, neutral, unhappy distribution
- **Containment Rate**: AI-only vs handoff conversations

**🎯 Filter Options:**
- Time periods (7 days, 30 days, custom)
- Channels (All, Voice, Web chat)
- Agent types (AI, Human, Both)

</div>

[**📊 Dashboard Guide**](../overview.md#analytics-overview)

---

### WhatsApp Consumption Updates ![](https://img.shields.io/badge/-Important-orange)
**July 23, 2025**

<div style={{
  display: 'flex',
  gap: '1rem'
}}>

<div style={{flex: 1}}>

**📈 Reporting Changes:**
- Per-message billing model
- "Paid" vs "Free" categories
- Free utility messages tracking
- Meta dashboard alignment

</div>

<div style={{flex: 1}}>

**💰 Impact:**
- More accurate cost tracking
- Better ROI analysis
- Improved budget planning
- Enhanced forecasting

</div>

</div>

</div>

</div>

---

## 📧 **Communication & Engagement**

<div style={{
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '2rem'
}}>

<div style={{
  background: 'linear-gradient(135deg, #ec4899, #db2777)',
  color: 'white',
  padding: '1rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1.1rem'
}}>
  💬 Messaging & Campaign Management
</div>

<div style={{padding: '1.5rem'}}>

### MM Lite WhatsApp Enhancement ![](https://img.shields.io/badge/-Enhancement-blue)
**August 28, 2025**

Smart delivery timing optimization using Meta's intelligence.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  marginTop: '1rem'
}}>

<div style={{textAlign: 'center', padding: '1rem', background: 'var(--ifm-color-background-surface)', borderRadius: '8px'}}>
  <div style={{fontSize: '2rem', color: '#10b981'}}>25%</div>
  <div>Higher Open Rates</div>
</div>

<div style={{textAlign: 'center', padding: '1rem', background: 'var(--ifm-color-background-surface)', borderRadius: '8px'}}>
  <div style={{fontSize: '2rem', color: '#3b82f6'}}>18%</div>
  <div>Better Response Rate</div>
</div>

<div style={{textAlign: 'center', padding: '1rem', background: 'var(--ifm-color-background-surface)', borderRadius: '8px'}}>
  <div style={{fontSize: '2rem', color: '#f59e0b'}}>30%</div>
  <div>Cost Reduction</div>
</div>

</div>

[**📱 WhatsApp Guide**](../overview.md#mm-lite)

</div>

</div>

---

## 🎯 **Migration & Deprecation Notices**

:::warning **Important Changes**

### Legacy Analytics Sunset
Selected analytics screens will be removed as part of our analytics revamp:
- User Journeys → Moving to Overview dashboard
- Health screen → Replaced with new Alerts tab
- User Data & Trends → Discontinued

**Action Required:** Bookmark key metrics from these sections before removal.

:::

---

## 📅 **Release Calendar**

<div style={{
  background: 'var(--ifm-color-background-surface)',
  border: '1px solid var(--ifm-color-emphasis-200)',
  borderRadius: '12px',
  padding: '1.5rem'
}}>

### 🗓️ Upcoming Releases

**Q4 2025 Preview:**
- 🤖 Multi-modal AI agents
- 📊 Predictive analytics
- 🎨 Custom themes
- 🔗 Enterprise integrations

[**📋 Full Roadmap**](#) • [**💡 Feature Requests**](#)

</div>

---

:::tip 💡 **Quick Navigation**

**By Priority:**
- [🚨 Critical Updates](#) - Security and breaking changes
- [🌟 New Features](#) - Fresh capabilities to explore  
- [🔧 Improvements](#) - Enhancements to existing features
- [🗑️ Deprecations](#) - Features being phased out

**By User Type:**
- [👨‍💼 Administrators](#) - Platform management updates
- [👨‍💻 Developers](#) - API and integration changes
- [👥 End Users](#) - Interface and workflow improvements

:::
