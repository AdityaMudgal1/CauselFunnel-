# CauselFunnel-Overview
Shopify Survey App
Introduction
The Shopify Survey App is an embedded application designed to collect customer feedback through surveys within a Shopify store. Built using Next.js, Express.js, and Shopify API, this app provides a seamless integration with Shopify stores.

Features
Embedded Shopify App
OAuth Authentication with Shopify
Survey Creation & Submission
Secure Data Handling
Installation & Setup
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/shopify-survey-app.git
cd shopify-survey-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_SCOPES=write_products,read_orders
HOST=https://your-ngrok-url.ngrok-free.app
4. Start the Development Server
bash
Copy
Edit
npm run dev
5. Set Up Ngrok for Public URL
Since Shopify requires a secure HTTPS URL, start Ngrok and update the app settings:

bash
Copy
Edit
ngrok http 3000
Copy the Ngrok URL and update it in Shopify Partners Dashboard under:

App URL
Allowed Redirection URL(s)
6. Install the App in Shopify
Go to your Shopify store
Install the app using the provided installation URL
Authenticate and start using the app
Tech Stack
Frontend: Next.js, React.js
Backend: Express.js, Node.js
Database: MongoDB (if applicable)
Authentication: OAuth with Shopify
License
This project is licensed under the MIT License.


