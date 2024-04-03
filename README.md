# Stack Exchange API App

This is a simple application that utilizes the Stack Exchange API to retrieve a list of tags along with the number of related posts and the last activity date.

## Usage

## 1. Without API Key:
- If you use the app without an API key, the functionality will be limited due to request throttling. Without a key, you can make up to 300 requests per day. Maximum page size is limited to 25.
- To use the app without an API key, simply run it as is.

## 2. With API Key:
- To unlock full functionality and make up to 10,000 requests per day, you can obtain your own Stack Exchange API key.
- You can access your own key by following these steps:
https://app-docs.etssoft.net/stackexchange/
- Once you have your API key, save it in a .env file in the root directory of the application as follows:
```js
VITE_KEY=YOUR-APP-KEY
```
- With the API key configured, the app will run normally.

# Deployed Version
Alternatively, you can use the deployed version of the app, which does not require you to obtain your own API key or configure anything. You can access the deployed version of the app [here](https://stackexchange-api-app.vercel.app).

## Note
Please be aware of the rate limits imposed by the Stack Exchange API. Exceeding these limits may result in throttling or blocking of requests. It is recommended to use your own API key for uninterrupted access to the API.
