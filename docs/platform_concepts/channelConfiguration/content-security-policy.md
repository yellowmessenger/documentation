---
title: Content Security Policy 
sidebar_label : Content Security Policy
---

Content Security Policy (CSP) is a security standard implemented by web browsers to provide an additional layer of security for your website. It functions as a gatekeeper, determining who or what is permitted to access your website and significantly reduces the risk of cross-site scripting (XSS) attacks, data breaches, and other malicious activities.

CSP allows website administrators to specify the allowable resources, such as scripts, stylesheets, and images, that can be loaded by web pages. By defining these rules, you can prevent unauthorized individuals or malicious content.

Consider a scenario where you have a website that allows user-generated content, like a forum or a comment section. In the absence of CSP, an attacker could inject malicious code into user comments or forum posts, posing a serious threat to user data and potentially spreading malware. However, by implementing CSP, you can specify that only scripts from trusted sources are allowed to run on your website, effectively blocking any unauthorized code from executing.

## Add CSP to your website

To implement Content Security Policy (CSP) on your website, configure the Content-Security-Policy header in your server's response. This header allows you to define the rules for your website's content security policy. You can specify directives such as `default-src`, `script-src`, `style-src`, `img-src`, `media-src`, and so on, to control the sources from which different types of content can be loaded.

For instance:
*  To allow only the resources to be loaded from the same origin, or specify specific domains or trusted sources for different types of content, set `default-src 'self'`.
* To specify a URL where violation reports should be sent, use the `report-uri` directive.


## Add rules to your website

You can implement these rules on your website using the following methods:

1. **Using Meta tag in Static HTML Webpage**

   This meta tag all resources from the current domain along with all subdomains of yellow.ai.

```javascript
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' https://*.yellow.ai;"
/>;
```

2. **Using Headers in Server Configuration** 

```javascript
add_header Content-Security-Policy-Report-Only "default-src 'none'; form-action 'none'; frame-ancestors 'none';"
```

If you find server configurations challenging, reach out to your infrastructure team for assistance. Alternatively, you can refer to this [link](https://mattferderer.com/how-to-add-a-header) for better understanding.

## Types of resources

You can also specify what type of resources you would like to load from certain origins. For example, let’s say you want to allow loading videos only from YouTube, images from Cloudinary, and fonts from Google fonts, and the rest of the other content only from your website. You can create a rule like this.

```javascript
add_header Content-Security-Policy-Report-Only "default-src 'self'; media-src https://youtube.com; img-src: https://*.cloudinary.com; font-src https://*.google.com;"
```
or 

```javascript
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; media-src https://youtube.com; img-src: https://*.cloudinary.com; font-src https://*.google.com;"
/>;
```

In the above example:

* `default-src 'self'`: Allows resources (images, scripts, styles) to be loaded only from the same origin.
* `media-src 'self' https://www.youtube.com`: Allows media resources, such as videos, from the same origin and YouTube.
* `img-src 'self' https://res.cloudinary.com`: Allows images from the same origin and Cloudinary.
* `font-src 'self' https://fonts.gstatic.com`: Allows fonts to be loaded from both the same origin and the specified Google Fonts origin.

Now that you have got a basic idea of what CSP is and how to configure on your website. Let’s see how to add a CSP to ensure Yellow.ai chat widget performs as expected.

## Configure CSP for Yellow.ai Chat widget

Yellow.ai's chat widget: 

- Makes a socket connection with wss://cloud.yellow.ai/websocket,
- Fetches assets from https://cdn.yellowmessenger.com,
- Tracks how the widget is used from `blob://<your_domain>`. (a web-worker that is created on the parent website’s domain).
- Makes API requests to `https://*.yellow.ai`.

So you need to create the rules as follows:

1. You can add all the resources to the `default-src`.

```javascript
add_header Content-Security-Policy-Report-Only "default-src 'self' https://*.yellow.ai https://*.yellowmessenger.com wss://*.yellow.ai blob://*.your_website.com;"
```

or

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' https://*.yellow.ai https://*.yellowmessenger.com wss://*.yellow.ai;"
/>;
```

2. Or, you can specify exactly what type of resources that you would like to allow from our domains.

```javascript
add_header Content-Security-Policy-Report-Only "default-src 'self' 'unsafe-inline'; connect-src wss://*.yellow.ai https://*.yellow.ai; script-src https://*.yellowmessenger.com; style-src https://*.yellowmessenger.com; worker-src blob://*.your_website.com;"
```
--------- or ---------

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' 'unsafe-inline'; connect-src wss://*.yellow.ai https://*.yellow.ai; script-src https://*.yellowmessenger.com; style-src https://*.yellowmessenger.com; worker-src blob://*.your_website.com;"
/>;
```


:::note
If you explicitly specify a rule to allow a type of resource only from these websites and Yellow’s resource is not from one of those sources, the resource will be rejected.

For instance, specifying `font-src 'self';` restricts font loading from Yellow's CDN.  However, omitting this rule would prompt the browser to check the parent rule instead (default-src).
:::