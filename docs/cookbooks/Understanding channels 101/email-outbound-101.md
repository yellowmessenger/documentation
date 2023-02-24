---
title: Email outbound domain authentication
sidebar_label: Domain authentication process
---

- From the bulk email campaign account created for the brand, we will send something called ‘CNAME’ records to the mail ID suggested by the brand. CNAME records are a type of DNS records.
- DNS records are like text instructions available in the DNS server (the view of this is possible in the registrar account of the brand such as GoDady account of the brand). In certain cases, instead of CNAMEs, TXT and MX records will be generated for domain authentication.
- These DNS records tell what IP address is associated with what domains.
- By performing domain authentication, we map an IP address to the domains/subdomains of the brand.
- The CNAME records sent by us to the brand should be manually added by the brand in their DNS/ domain registrar portal.
- It takes upto 48 hours for the domain to be authenticated or rejected.

  
:::note
After the Domain authentication setup, we do reverse DNS. Reverse DNS is the opposite of domain auth , that is,  connect the domain to the IP address.
:::