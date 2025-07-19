# Informatsy 🚀

[![GitHub stars](https://img.shields.io/github/stars/jeethendra2000/informatsy?style=flat-square)](https://github.com/jeethendra2000/informatsy/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jeethendra2000/informatsy?style=flat-square)](https://github.com/jeethendra2000/informatsy/forks)
[![GitHub issues](https://img.shields.io/github/issues/jeethendra2000/informatsy?style=flat-square)](https://github.com/jeethendra2000/informatsy/issues)
[![License](https://img.shields.io/github/license/jeethendra2000/informatsy?style=flat-square)](LICENSE)

> A modern full-stack web application built with Django REST Framework and React, featuring Google Drive integration and JWT authentication.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 🎯 Overview

Informatsy is a comprehensive full-stack web application that demonstrates modern web development practices using Django REST Framework for the backend and React for the frontend. The application features robust authentication, cloud storage integration, and a responsive user interface.

### Key Highlights
- **Full-Stack Architecture**: Seamless integration between Django backend and React frontend
- **Cloud Storage**: Google Drive API integration for file management
- **Modern Authentication**: JWT-based authentication with Django-Allauth
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **RESTful API**: Well-structured API endpoints following REST principles

## ✨ Features
### Backend Features
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📊 **Django REST Framework** - Robust API development
- ☁️ **Google Drive Integration** - Cloud file storage and management
- 🛡️ **CORS Support** - Cross-origin resource sharing
- 🔄 **Auto-slug Generation** - SEO-friendly URL generation
- 📱 **Social Authentication** - Multiple authentication providers

### Frontend Features
- ⚛️ **React 18** - Modern React with hooks and functional components
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🔄 **Real-time Updates** - Dynamic content updates
- 📊 **Interactive Components** - Rich user interactions

## 🛠️ Technology Stack

### Backend
- **Framework**: Django 3.2.7
- **API**: Django REST Framework 3.12.4
- **Authentication**: Django-Allauth 0.45.0, JWT 2.1.0
- **Database**: SQLite (development), PostgreSQL (production ready)
- **Cloud Storage**: Google Drive API 2.22.0
- **Environment**: Python 3.8+, Pipenv

### Frontend
- **Framework**: React 18+
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3, SCSS
- **Build Tool**: Create React App
- **Package Manager**: npm

### Development Tools
- **Version Control**: Git
- **Environment Management**: Pipenv
- **CORS**: Django-CORS-Headers
- **API Testing**: Django REST Framework Browsable API

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Informatsy Architecture                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────┐         ┌──────────────────┐         ┌─────────────┐  │
│  │   React Frontend │◄────────┤ Django REST API  │────────►│ Google Drive│  │
│  │                  │   HTTP  │                  │  API    │   Storage   │  │
│  │  - Components    │ Requests│  - Authentication│ Calls   │             │  │
│  │  - State Mgmt    │         │  - Serializers   │         │ - File Mgmt │  │
│  │  - Routing       │         │  - ViewSets      │         │ - Cloud Sync│  │
│  │  - API Service   │         │  - Models        │         │             │  │
│  └──────────────────┘         └──────────────────┘         └─────────────┘  │
│           │                            │                                     │
│           │                            │                                     │
│           │                            ▼                                     │
│           │                   ┌──────────────────┐                          │
│           │                   │    Database      │                          │
│           │                   │   (SQLite/       │                          │
│           └──────────────────►│   PostgreSQL)    │                          │
│             JWT Tokens        │                  │                          │
│                               │ - User Data      │                          │
│                               │ - App Data       │                          │
│                               │ - Sessions       │                          │
│                               └──────────────────┘                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Architecture Principles
- **API-First Design**: Backend serves as headless API service
- **SPA Architecture**: React frontend consumes REST APIs
- **Token-Based Auth**: JWT authentication for secure API access
- **Cloud Integration**: External Google Drive API for file management

## 📋 Prerequisites

Before setting up Informatsy, ensure you have the following installed:

### Required Software
- **Python**: Version 3.8 or higher
- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **Git**: For version control

### Optional Tools
- **VS Code**: Recommended code editor
- **Postman**: For API testing
- **PostgreSQL**: For production database

### System Requirements
- **Operating System**: Windows 10+, macOS 10.14+, or Ubuntu 18.04+
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Storage**: At least 2GB free space

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/jeethendra2000/informatsy.git
cd informatsy
```

### 2. Backend Setup (Django)

#### Install Python Dependencies
```bash
# Install pipenv if not already installed
pip install pipenv

# Create virtual environment and install dependencies
pipenv shell
pipenv install

# Alternative: Install from Pipfile
pipenv install --dev
```

#### Database Setup
```bash
# Navigate to the Django project directory
cd informatsy/

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
```

### 3. Frontend Setup (React)

#### Install Node Dependencies
```bash
# Navigate to frontend directory
cd frontend/

# Install npm packages
npm install

# Alternative: Clean install
npm ci
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database Configuration (for production)
DATABASE_URL=postgresql://user:password@localhost:5432/informatsy

# Google Drive API
GOOGLE_DRIVE_CLIENT_ID=your-google-client-id
GOOGLE_DRIVE_CLIENT_SECRET=your-google-client-secret

# JWT Settings
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ALGORITHM=HS256
```

### Google Drive API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Drive API
4. Create credentials (OAuth 2.0)
5. Add credentials to your `.env` file

## 🎯 Usage

### Development Mode

#### Start Backend Server
```bash
# In the root directory
pipenv shell
cd informatsy/
python manage.py runserver
```
Backend will be available at: `http://localhost:8000`

#### Start Frontend Server
```bash
# In a new terminal, navigate to frontend directory
cd frontend/
npm run dev
```
Frontend will be available at: `http://localhost:3000`

### Production Mode

#### Build Frontend
```bash
cd frontend/
npm run build
```

#### Deploy Backend
```bash
# Collect static files
python manage.py collectstatic

# Run with production server (e.g., Gunicorn)
gunicorn informatsy.wsgi:application
```

 


<!--
 ## Hi there 👋
#### --------------------------------------------------------------------------------------------------------------------------------
####       INSTALLATION WORKFLOW 💥:
##### ✔ Before Installing below packages you will have python and node.js installed on your desktop 🖥 [version:greater 3.8.0]
##### ✔ Install pip or pip3 (for python3)
##### ✔ pip install pipenv (to create environment for develpoment)
##### ✔ pipenv shell (it will create a subshell for development)
##### ✔ pipenv install pipfile (which install all files under pipFile which are used in development)
##### ✔ npm i (install nodemodules which are used in project)[folder 📁:Go to path /informatsy/frontend]
##### ✔ python manage.py runserver (to run the django server)[folder 📁:/informatsy/]
##### ✔ npm run dev (to run the react application)[folder 📁:/informatsy/frontend ]
#### ---------------------------------------------------------------------------------------------------------------------------------

**informatsy/informatsy** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
