# Derek Huynen Website API (Azure Functions Backend)

This is the backend API for the Derek Huynen personal website, built with Azure Functions (TypeScript). It provides endpoints for contact form submissions, integrates with Azure Cosmos DB for data storage, and sends notifications via Telegram.

## Features

- **Contact Form Endpoint**: Receives POST requests from the frontend and stores submissions in Cosmos DB.
- **Cosmos DB Integration**: All contact requests are saved in a Cosmos DB container for persistence.
- **Telegram Notifications**: Sends a message to a specified Telegram chat/group when a new contact request is received.
- **TypeScript**: Fully typed backend for safety and maintainability.

## Project Structure

```
API/
  src/
    functions/
      ContactMe.ts         # HTTP trigger for contact form
    services/
      CosmosService.ts     # Reusable Cosmos DB service
      TelegramService.ts   # Reusable Telegram notification service
    types/
      ContactMeRequest.ts  # Type for contact form data
  local.settings.json      # Local dev environment variables
  package.json             # Dependencies and scripts
  tsconfig.json            # TypeScript config
```

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local)
- [Azure Cosmos DB account](https://docs.microsoft.com/azure/cosmos-db/create-sql-api-dotnet)

### Setup

1. **Install dependencies:**
   ```powershell
   cd API
   npm install
   ```
2. **Configure local settings:**
   Edit `local.settings.json` with your Cosmos DB and Telegram credentials:
   ```json
   {
   	"IsEncrypted": false,
   	"Values": {
   		"AzureWebJobsStorage": "",
   		"FUNCTIONS_WORKER_RUNTIME": "node",
   		"TELEGRAM_BOT_TOKEN": "<your-telegram-bot-token>",
   		"TELEGRAM_CHAT_ID": "<your-telegram-chat-id>",
   		"COSMOS_ENDPOINT": "<your-cosmos-endpoint>",
   		"COSMOS_KEY": "<your-cosmos-key>",
   		"COSMOS_DATABASE": "<your-database>",
   		"COSMOS_CONTAINER": "<your-container>"
   	},
   	"Host": {
   		"CORS": "http://localhost:5173",
   		"CORSCredentials": true
   	}
   }
   ```
3. **Start the API locally:**
   ```powershell
   npm run build
   func start
   ```

## Endpoints

### POST `/api/contact_me`

- **Description:** Receives contact form submissions.
- **Request Body:**
  ```json
  {
  	"name": "John Doe",
  	"email": "john@example.com",
  	"phone": "123-456-7890",
  	"topic": "General Inquiry",
  	"body": "Hello, I would like to get in touch!"
  }
  ```
- **Response:**
  - `200 OK` on success
  - `400 Bad Request` if the body is invalid
  - `500 Internal Server Error` if saving to Cosmos DB fails

## Environment Variables

- `TELEGRAM_BOT_TOKEN`: Telegram bot token from BotFather
- `TELEGRAM_CHAT_ID`: Chat or group ID to receive notifications
- `COSMOS_ENDPOINT`: Cosmos DB endpoint URL
- `COSMOS_KEY`: Cosmos DB primary key
- `COSMOS_DATABASE`: Cosmos DB database name
- `COSMOS_CONTAINER`: Cosmos DB container name

## Adding More Endpoints

- Add new files in `src/functions/` for additional HTTP triggers.
- Use the provided `CosmosService` and `TelegramService` for data and notifications.

## License

MIT
