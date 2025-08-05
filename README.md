# SMTP Email Tester (Office365 & Gmail)

This project is a Node.js app using Express and EJS to send emails via Office365 or Gmail SMTP. Users can enter their email, password, recipient, subject, and message from a simple web form. Results and errors are shown in a modal overlay.

## Features

- Choose Office365 or Gmail as SMTP provider
- Enter credentials and email details via web form
- See success or error in a modal popup
- Helpful instructions for accounts with multi-factor authentication (MFA)

## Prerequisites

- Node.js (v20 or newer required)
- npm (comes with Node.js)

## Installation

1. **Clone or download this repository**
   ```powershell
   git clone <your-repo-url> # or Download Code
   cd nodemailer-test
   ```
2. **Install dependencies**
   ```powershell
   npm install
   ```

## Usage

1. **Start the server**
   ```powershell
   npm start
   ```
2. **Open your browser and go to** [http://localhost:3000](http://localhost:3000)
3. **Fill out the form:**
   - Select provider: Office365 or Gmail
   - Enter your email address
   - Enter your password (see notes below for MFA)
   - Enter recipient email, subject, and message
   - Click "Send Email"
4. **See result in a modal popup**

## Important Notes

- **Multi-Factor Authentication (MFA):**
  - If your account uses MFA, you must use an **app password** instead of your regular password.
  - [How to create an app password for Office365](https://support.microsoft.com/en-us/account-billing/create-app-passwords-from-the-security-info-page-d8bc744a-ce3f-4d4d-89c9-eb38ab9d4137)
  - [How to create an app password for Gmail](https://support.google.com/accounts/answer/185833)
- **SMTP must be enabled:**
  - For Office365, ensure SMTP AUTH is enabled for your account in the admin settings.
  - For Gmail, "Less secure apps" is no longer supported; use app passwords if you have MFA.
- **Common Errors:**
  - `Invalid login: 535 5.7.3 Authentication unsuccessful`: Check your credentials, use app password if needed, and ensure SMTP is enabled.
  - If you see other errors, check your account settings and permissions.

## Troubleshooting

- Double-check your email and password/app password.
- Try logging in to your email provider's webmail to verify credentials.
- Make sure your account is allowed to send emails via SMTP.
- If you need help, see the links above or contact your email administrator.

## License

MIT
