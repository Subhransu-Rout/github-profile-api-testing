# GitHub Profile Analyzer API

A Node.js + Express + MySQL application that fetches public GitHub profile data, analyzes useful insights, stores the results in MySQL, and exposes REST APIs to retrieve analyzed profiles.

## Features

* Fetch GitHub profile data using GitHub username
* Analyze profile metrics
* Store analyzed data in MySQL
* Prevent duplicate profile entries
* Get all analyzed profiles
* Get a single analyzed profile by username

## Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* Axios
* dotenv

## Project Structure

```text
.
├── src
│
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── profile.controller.js
│   │
│   ├── models
│   │   └── profile.model.js
│   │
│   ├── routes
│   │   └── profile.routes.js
│   │
│   ├── services
│   │   ├── github.service.js
│   │   └── analysis.service.js
│   │
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Subhransu-Rout/github-profile-api-testing
cd github-profile-analyzer
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=10000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=github_analysis
```

### Create Database

```sql
CREATE DATABASE github_analysis;
```

### Run Application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server starts at:

```text
http://localhost:10000
```

## API Endpoints

### Health Check

**GET /**

Response:

```json
{
  "message": "API is live"
}
```

### Analyze and Store Profile

**POST**

```http
/api/profiles
```

Request Body:

```json
{
  "username": "<username>"
}
```

### Get All Profiles

**GET**

```http
/api/profiles
```

### Get Single Profile

**GET**

```http
/api/profiles/:username
```

Example:

```http
/api/profiles/john
```

## Analysis Metrics

The application stores:

* GitHub Username
* Display Name
* Followers Count
* Following Count
* Public Repository Count
* Profile Level (Beginner / Growing / Popular)
* Account Age (Years)

## Deployment

The application can be deployed on Railway.

Required environment variables:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
```
