# g-auth-base
Barebones google authenticator implementation with ReactJS and speakeasy.

This site can be accessed online at [auth.zwenyantoe.me](auth.zwenyantoe.me)

This site is built entirely on client-side javascript with ReactJS and a Javascript Library called speakeasy.

To run this web-app on your local machine, clone the project into a local directory.

`cd` into the directory.

`cd g-auth-base`

Install the required dependencies with

`npm i`

Start the application.

`npm start`

---

The premise of the authenticator works under your provision of a secret key length. However, you might notice with any length you enter, a longer secret key is generated. This is because speakeasy's generateSecret() method first creates an ASCII secret, then converts it to base32. Don't worry too much about the length, except that the longer, the better.

After you get your secret key, go to your Google Authenticator app and enter a new entry with "manual entry". The account field doesn't matter, just give it any random name. Enter the key on the screen into the Key field, and click the tick at the top right.

You can validate the OTP by entering your OTP into the field at the bottom. You can use this as a basis for Google Authenticator in basically any application, or modify however any of you may see fit.

---

This app was built by Zwe Nyan Toe.



