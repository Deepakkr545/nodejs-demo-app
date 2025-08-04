# Node.js Demo App with CI/CD

This is a simple **Node.js Express web app** deployed using a **Docker container** and automated via **GitHub Actions CI/CD**. 


## 📦 Tech Stack

- Node.js (Express)
- Docker
- GitHub Actions
- Docker Hub (image registry)



## 🧱 Project Structure

nodejs-demo-app/
├── .github/workflows/deploy.yml # GitHub Actions workflow
├── Dockerfile      # Docker container config
├── index.js        # Main app file
├── package.json        # App metadata & scripts
├── .gitignore      # Files to exclude from git
└── README.md       # You're reading it!


## 🚀 Features

- Home route (`/`) displays a welcome message.
- Handles 404 errors gracefully.
- Builds and runs as a Docker container.
- Pushes Docker image to Docker Hub on `main` push.

## 🔧 Setup

1. Clone the repo

git clone https://github.com/Deepakkr545/nodejs-demo-app.git
cd nodejs-demo-app

2. Install dependencies
npm install

3. Run the app locally
npm start


🐳 Docker Commands
To build the image
docker build -t my-node-app .

To run the container
docker run -d -p 3000:3000 my-node-app

🔄 CI/CD Pipeline (GitHub Actions)
Triggered on:
Push to main branch

Workflow:
Installs Node.js dependencies

Builds Docker image

Pushes to Docker Hub
Docker Hub Repo Link: https://hub.docker.com/r/deepakkr545/nodejs-demo-app
