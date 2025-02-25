## Prompts to Chat GPT-4o

# First (I also uploaded reversestring-example.png)

You are an experienced software engineer with excepcional skills developing websites. You have to create a web page with the next requirements:

- A text field where the user can write a text.
- A button with the text "Reverse" that once clicked, will show the input text reversed (i.e "Hello I am Chat-GPT!" as "!TPG-tahC ma I olleH").
- The button must remain disabled until the input has at least 3 characters.
- A checkbox to enable real-time conversion, so that reversed text is shown in real time as the user writes. While this checkbox is enabled the "Reverse" button will remain disabled.
- A copy button that saves the reversed text into the clipboard.
- You are given with an image as support. Bear in mind that the image has not the real time checkbox, so find the best place to add it.
- Level up the UX/UI at your discretion.
- This is the base HTML template "index.html" to start building from:

---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>
---

# Second

I provided you with the base HTML template that includes a referenced JS file "script.js", so you should have used such file for the Javascript code.

# Third (Chat GTP remove the JS code from HTML but he did not create the script.js file content on the previous step)

please, provide the JS file content

# Fourth

Now put on the UX/UI suit and modify the styles to create an amazing, beautiful and more eye friendly (easy to read and bigger) UI
