---
title: Webview
sidebar_label: Webview
---

WebView enables you to add custom UI elements (using HTML, CSS, and JavaScript) into your chatbot. To use this feature, create your custom UI components with the necessary HTML code. Collaborate with the platform team to deploy your code on Yellow's Bitbucket repository. Once deployed, the platform team will host your code on Yellow's CDN, generating a unique URL. This URL can then be integrated into the WebView node of your chatbot.

You can preview the WebView in the WebView node. However, if the URL is invalid or restricted due to Content Security Policy (CSP), please contact our support team for assistance.

## Steps to configure the Webview

### Step 1: Enable webview

Before getting started, get the Webview node is enabled for your bot. To enable the Webview node, please raise a ticket on DevRev.

### Step 2: HTML to create a custom Webview UI 

Below is the sample code of the UI component:

```html
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mr Appliance</title>

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/gotham-fonts@1.0.3/css/gotham-rounded.min.css">
<style>
        /* Body styling */
        body {
            background: #fff;
            color: #fff;
            font-family: 'Gotham Rounded', sans-serif; /* Apply Gotham Rounded font to all text */
            text-align: left;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            min-height: 100vh;
            flex-direction: column;
        }
        /* Header styling */
        header {
            text-align: center;
            padding: 20px 0;
            background-color: #333;
            color: #00f;
            width: 100%;
        }
        /* Form styling */
        form {
            background-color: rgba(255, 255, 255, 0.8);
            width: 271px;
            height: 253px;
            margin: 1px;
            padding: 16px 16px;
            box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            align-self: flex-start;
        }
        /* Form control styling */
        .form-control {
            text-align: left;
            margin-bottom: 20px;
            color: black !important;
        }
        /* Label styling */
        .form-control label {
            display: block;
            margin-bottom: 12px;
            color: #0B2451; /* Set label color to #0B2451 */
            font-weight: bold;
            font-size: 17px;
            line-height: 22px;
        }
        /* Input styling */
        .form-control input,
        .form-control select,
        .form-control textarea {
            border: 1px solid #000;
            border-radius: 2px;
            font-family: inherit;
            padding: 10px;
            display: block;
            width: calc(100% - 20px);
            background-color: rgba(255, 255, 255, 0.5);
            color: black !important;
            font-size: 13px;
        }
        /* Button styling */
        button {
            background-color: #ce360b;
            border: 0.0px solid #ce360b;
            border-radius: 14px;
            font-family: inherit;
            font-size: 14px;
            display: block;
            width: 40%;
            margin-top:9px;
            margin-bottom: 20px;
            color: #fff;
            padding: 08px 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #142651;
        }
        /* Submission message styling */
        .submission-message {
            color: black;
            text-align: center;
            margin-top: 0px;
        }
      /* Autofill text color for all input fields in Edge */
@supports (-ms-ime-align:auto) {
    input:-ms-input-placeholder,
    input[type="first-name"]:-ms-input-placeholder,
    input[type="email"]:-ms-input-placeholder,
    input[type="Last Name"]:-ms-input-placeholder,
    input[type="phone"]:-ms-input-placeholder {
        color: black !important;
    }
}
input:-webkit-autofill {
    -webkit-text-fill-color: black !important;
}

    </style>
</head>
<body>

<form id="form" autocomplete="off">
<div class="form-control">
<label>Contact Information</label>
</div>
<div style="display: flex; justify-content: space-between;">

<div class="form-control" style="width: 48%;">
<input type="text" id="first-name" name="first-name" placeholder="First Name" style="width: 79%;height: 15px; border-radius: 8px; font-size: 13px; font-family: 'Gotham Rounded', sans-serif;" autocomplete="off" />
</div>

<div class="form-control" style="width: 48%;">
<input type="text" id="last-name" name="last-name" placeholder="Last Name" style="width: 83%;height: 15px; border-radius: 8px;font-size: 13px;" autocomplete="off" />
</div>
</div>

<div class="form-control">
<input type="email" id="email" name="email" placeholder="Email" style="width: 249px;height: 15px;border-radius: 8px;font-size: 13px;" autocomplete="off" />
</div>

<div class="form-control">
<input type="tel" id="phone" name="phone" placeholder="Phone Number" style="width: 249px; height: 15px; border-radius: 8px; font-size: 13px;" autocomplete="off" />
</div>

<div style="display: flex; justify-content: flex-end;">
<button type="button" id="submit-btn">Next</button>
</div>

<div class="submission-message" style="display: none;"></div>
</form>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    window.onload = function() {
    var inputFields = document.querySelectorAll('input');
    inputFields.forEach(function(input) {
      input.setAttribute('autocomplete', 'off');
    });
  };
        $(function () {
            $("#submit-btn").click(function () {
                // Retrieve form data
                var firstName = $("#first-name").val().trim();
                var lastName = $("#last-name").val().trim();
                var email = $("#email").val().trim();
                var phone = $("#phone").val().trim();
                // Validate input fields
                if (firstName === '' || lastName === '' || email === '' || phone === '') {
                    alert('Please fill in all fields.');
                    return;
                }
                // Validate email format
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                // Validate phone number format (simple validation)
                var phonePattern = /^(?!0{10})(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
                if (!phonePattern.test(phone)) {
                    alert('Please enter a valid phone number.');
                    return;
                }
                // Disable form fields after submission
                $("input").prop('disabled', true);
                $("button").prop('disabled', true);
                // Send form data via postMessage
                var targetOrigin = 'https://www.mrappliance.com'; // Replace this with your target origin

                window.parent.postMessage(JSON.stringify({
                    event_code: 'ym-client-event',
                    data: JSON.stringify({
                        event: {
                            code: "userdetails",
                            data: {
                                firstname: firstName,
                                lastname: lastName,
                                phone: phone,
                                email: email
                            }
                        }
                    })
                }), targetOrigin);
                // Hide cancel button
                $("#cancel-btn").fadeOut("slow");
                // Fade out the form and append thank you message
                $("#submit-btn").fadeOut("slow", function () {
                    $(".submission-message").fadeIn("slow");
                });
            });

            // Cancel button click event
            $("#cancel-btn").click(function () {
                $("#form").html("<div class='submission-message'>Going Back!</div>");
            });
        });
    </script>
</body>
</html>
```
### Step 3: Host component on Yellow.ai's CDN

Host this component on Yellow.ai's CDN. A URL is generated. 

Here's an example of the URL:


```html
https://app.yellowmessenger.com/components/webview/mr_appliance_llc/form
```

  <img src="https://i.imgur.com/3dUVSfJ.png" alt="drawing" width="80%"/>

### Step 4: Configure Webview node


To configure the webview node, follow these steps:

1. Go to **Automation** > **Build** > **Flows**.

2. Search for the Web wiew node and select it.

   ![](https://i.imgur.com/X74GSN6.png)
   
3.  **Enter URL** of the UI component hosted on Yellow.ai's CDN.
4.  Specify the **Hieght** of the UI component based on your preference. 
5.  Enable **Hide input bar** to hide the input bar in the chatbot.
6.  Enable **Hide home button** to hide the home button in the chatbot.
7.  Enable **Scrollable** to make the UI component scrollable in the chatbot.
8.  Enable **Full width** to view the UI component in a horizontal view in the chatbot.
9.  Enable **Fixed position** to view the full view of the UI component in the chatbot.

     <img src="https://i.imgur.com/B2WyIqK.png" alt="drawing" width="50%"/>

10. Preview the bot to view the custom UI component in the chatbot.

     <img src="https://i.imgur.com/VGjXrsE.png" alt="drawing" width="50%"/>





