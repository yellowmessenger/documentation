# CRM Integration

Integrate Yellow.ai with your Customer Relationship Management (CRM) systems.

## Supported CRMs

- Salesforce
- HubSpot
- Microsoft Dynamics
- Zoho CRM
- Creatio CRM

## Salesforce Integration

### Prerequisites

- Salesforce account with API access
- Connected App configured in Salesforce
- OAuth credentials

### Setup Steps

1. **Configure Connected App in Salesforce**
   ```javascript
   // OAuth settings
   Callback URL: https://cloud.yellow.ai/oauth/salesforce/callback
   Scopes: api, refresh_token, offline_access
   ```

2. **Configure in Yellow.ai**
   - Navigate to Settings > Integrations
   - Select Salesforce
   - Enter OAuth credentials
   - Test connection

3. **Map Data Fields**
   ```json
   {
     "contact": {
       "email": "sf_email__c",
       "phone": "sf_phone__c", 
       "name": "sf_name__c"
     }
   }
   ```

## HubSpot Integration

### Setup Process

1. **Get HubSpot API Key**
   - Navigate to HubSpot Settings > Integrations
   - Create private app
   - Copy API key

2. **Configure in Yellow.ai**
   - Add HubSpot integration
   - Enter API key
   - Select sync direction

3. **Sync Configuration**
   ```yaml
   sync_direction: bidirectional
   sync_interval: 5_minutes
   fields_to_sync:
     - email
     - phone
     - first_name
     - last_name
   ```

## Data Synchronization

### Real-time Sync

- Contact updates sync immediately
- Conversation data flows to CRM
- Lead scoring updates automatically

### Batch Sync

- Scheduled synchronization
- Bulk data import/export
- Conflict resolution

## Best Practices

- Map only necessary fields
- Set up proper error handling
- Monitor sync performance
- Regular data validation
