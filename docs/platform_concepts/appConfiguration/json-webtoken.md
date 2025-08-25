---
title: JSON Web Token Integration
sidebar_label: JSON web token
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## JSON Web Token (JWT) Integration

This guide explains how to integrate JWT authentication with your application. JWTs allow the secure exchange of information between a client and server using a signed, compact token.

#### RFC 7519 defines JWT (JSON Web Token).

A JWT is a compact, URL-safe token that represents claims securely between two parties. It typically consists of three parts separated by dots:
* **Header** – specifies the algorithm and token type.
* **Payload** – contains the claims (such as user ID, roles, and expiry).
* **Signature** – ensures integrity and authenticity, created using a secret or private key.

Example structure:

```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.  // Header (base64url)
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvbiBEb2UifQ.  // Payload (base64url)
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ  // Signature
```

* **Signing**: Usually done with a private key (RS256, ES256) or a shared secret (HS256).
* **Verification**: Usually done with the corresponding public key.



### RFC 7517 defines JWK (JSON Web Key).
A JWK is a JSON object that represents a cryptographic key in a standard, interoperable format.
Example JWK (RSA):

```
{
"kty": "RSA", // Key type (RSA, EC, oct for symmetric, etc.)
"use": "sig", // (Optional) Intended use (sig = signature, enc = encryption)
"alg": "RS256", // (Optional) Algorithm this key is meant for
"kid": "1", // (Optional) Key ID (to identify the key in a set)
"n": "base64url...", // RSA modulus
"e": "AQAB" // RSA exponent
}
```

### JWK Set (JWKS)
A JWKS is a JSON object containing an array of keys:

```
{
"keys": [
{ ...JWK1... },
{ ...JWK2... }
]
}
```



:::info
JWTs are a compact, URL-safe means of representing claims to be transferred between two parties. They are commonly used for authentication and authorization in APIs.
:::

---

## Prerequisites

-   Access to your application’s backend code.
-   An installed JWT library for your programming language (e.g., `jsonwebtoken` for Node.js, `PyJWT` for Python).
-   A secret key (for symmetric algorithms) or a private/public key pair (for asymmetric algorithms) to sign the tokens.






---

## Steps to Integrate JWT in the Platform

Follow these steps to configure the JWT integration within the yellow.ai platform.

1.  In the platform, navigate to your **Development** or **Staging** environment.
2.  Go to **Extensions** > **Integrations** and select the **JSON Web Token** integration from the **Tools & Utilities** category.
   ![](https://i.imgur.com/UG4GJpt.png)
3.  In the **Account Name** field, enter a unique name for this integration.
    -   Use only lowercase letters, numbers, and underscores (`_`).
    -   This name cannot be changed after the account is created.

    :::note
    Your account name should be unique and permanent. Choose carefully before saving.
    :::

4.  In **Signing algorithm**, select your desired algorithm. Here’s a simple breakdown:
    * **HS256 / HS384 / HS512 (Symmetric):** Uses a **single shared secret key** to both create and verify a token. It's simpler but requires both parties to have the same secret.
    * **RS256 / RS384 / RS512 (Asymmetric):** Uses a **private key** to create the token and a corresponding **public key** to verify it. This is more secure for distributed systems, as the private key never needs to be shared.
    * **ES256 / ES384 (Asymmetric):** A more modern and efficient asymmetric algorithm using Elliptic Curve cryptography. It offers strong security with smaller key sizes compared to RSA.

5.  In **Private key**, paste your private key if you are using an asymmetric algorithm (RS or ES series).
6.  In **Public key**, paste your public key if you are using an asymmetric algorithm.
7.  Enable **Expose Public Key as JWK** if your workflow requires the public key to be available at a JWK Set endpoint.
8.  Click **Connect**.



---

## Best Practices

:::caution Security Best Practices
-   **Set a Short Expiration:** Always set a reasonable expiration time (`exp` claim) for tokens to limit the impact of a potential leak.
-   **Use HTTPS:** Never transmit JWTs over non-encrypted connections.
-   **Secure Storage:** Store tokens securely on the client-side. For web applications, storing them in HTTP-only cookies is safer than Local Storage to prevent XSS attacks.
:::





## Using JWT in Your Application

Once integrated, you will generate and verify tokens in your application's backend.

### 1. Generate a JWT

After a user successfully authenticates (e.g., with a username and password), your server should generate a JWT to send back to them.

:::tip
Always keep your signing secret safe. Use environment variables instead of hardcoding secrets in your source code.
:::
<Tabs>
  <TabItem value="nodejs" label="Node.js">

```javascript
const jwt = require('jsonwebtoken');

// The data you want to include in the token
const payload = { 
  id: 1, 
  username: 'john_doe' 
};

const secretKey = process.env.JWT_SECRET;
const options = { expiresIn: '1h' }; // Token expires in 1 hour

const token = jwt.sign(payload, secretKey, options);
console.log('Generated Token:', token);
```
</TabItem> 

<TabItem value="python" label="Python">

```python
import jwt
import datetime

secret_key = "your_secret_key"
payload = {
    "id": 1,
    "username": "john_doe",
    "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
}

token = jwt.encode(payload, secret_key, algorithm="HS256")
print("Generated Token:", token)
```
</TabItem> 
</Tabs>

### 2. Verify a JWT

On subsequent requests, the client will send the JWT (usually in an Authorization header). Your server must verify its signature to ensure the request is authentic.

<Tabs> 
<TabItem value="nodejs" label="Node.js">

```javascript
const token = '...'; // Token received from the client
const secretKey = process.env.JWT_SECRET;

try {
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded Payload:', decoded);
  // User is authenticated, proceed with the request
} catch (err) {
  console.error('Invalid token:', err.message);
  // Authentication failed
}
```
</TabItem> 
<TabItem value="python" label="Python">

```python
token = '...'  # Token received from the client
secret_key = "your_secret_key"

try:
    decoded_payload = jwt.decode(token, secret_key, algorithms=["HS256"])
    print("Decoded Payload:", decoded_payload)
    # User is authenticated, proceed
except jwt.ExpiredSignatureError:
    print("Token has expired.")
except jwt.InvalidTokenError:
    print("Invalid token.")
```

</TabItem> 
</Tabs>
