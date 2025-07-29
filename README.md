# Informatsy 🎓

[![GitHub stars](https://img.shields.io/github/stars/jeethendra2000/informatsy?style=flat-square)](https://github.com/jeethendra2000/informatsy/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jeethendra2000/informatsy?style=flat-square)](https://github.com/jeethendra2000/informatsy/forks)
[![GitHub issues](https://img.shields.io/github/issues/jeethendra2000/informatsy?style=flat-square)](https://github.com/jeethendra2000/informatsy/issues)
[![License](https://img.shields.io/github/license/jeethendra2000/informatsy?style=flat-square)](LICENSE)

> A modern full-stack web application built with Django REST Framework and React, featuring Google Drive integration and JWT authentication.
This comprehensive academic platform is designed to support students to track academic activities, access study materials, and stay updated with real -time college notifications.

## 🌐 Live Demo
- **Frontend**: [https://informatsy-1606997742068.web.app](https://informatsy-1606997742068.web.app)
- **Django Admin Backend**: [https://informatsy.pythonanywhere.com/admin/](https://informatsy.pythonanywhere.com/admin/)
- **API Backend**: [https://informatsy.pythonanywhere.com/api/](https://informatsy.pythonanywhere.com/api/)
## 📸 Screenshots

### Homepage
![Homepage](screenshots/Homepage.png)
*Welcome page showing the main features and navigation*

### User Authentication
![Signup Page](screenshots/Signup.png)
*User registration form with email verification*

![Login Page](screenshots/Login.png)
*Firebase-powered login page for secure user authentication*

### Attendance
![Attendance](screenshots/Attendance.png)
*Mark the Attendance for the session attended in class/clubs*

### Study Materials
![Study Materials](screenshots/Resources.png)
*Browse and download notes, question papers by semester*

<!-- ### Notifications
![Notifications](screenshots/notifications.png)
*Real-time college announcements and updates* -->

<!-- ### Mobile View
![Mobile View](screenshots/mobile-view.png)
*Responsive design working perfectly on mobile devices* -->

### API Interface
![API Interface](screenshots/API.png)
*Django REST Framework browsable API interface*

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
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 🎯 Overview

Informatsy is a comprehensive academic platform designed to help students manage their college activities and academic resources. Built by Jeethendra S R and Pranav V Bharadwaj, enthusiastic students from Government Engineering College, Hassan (GECH), this platform serves as a one-stop solution for accessing study materials, tracking academic activities, and staying updated with college notifications.

The application provides students with essential resources and features that make it easier to track academic activities and receive alerts from their college, ultimately supporting the learning process through organized resource management.

The application features robust authentication, cloud storage integration, and a responsive user interface.

### Key Highlights
- **Academic Resource Management**: Access to study materials, notes, and question papers
- **Notification System**: Real-time updates on college activities and announcements
- **Student-Centric Design**: Built by students for students with intuitive interface
- **Multi-Semester Support**: Resources organized by semester and subject
- **Contest Information**: ICC coding contest details and updates
- **24/7 Accessibility**: Access resources anytime, anywhere
- **Full-Stack Architecture**: Seamless integration between Django backend and React frontend
- **Cloud Storage**: Google Drive API integration for file management
- **Modern Authentication**: JWT-based authentication with Django-Allauth
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **RESTful API**: Well-structured API endpoints following REST principles

## ✨ Features

### Academic Management
- 📚 **Study Materials** - Access to notes, question papers, and academic resources
- 📋 **Notifications** - Real-time updates on college activities and announcements
- 🏫 **College Information** - Detailed college data and contact information
- 👥 **Club Activities** - Information about various college clubs and societies
- 🏆 **ICC Contests** - Coding contest details and competition updates
- 📊 **Attendance Tracking** - Session records and attendance management

### Authentication & User Management
- 🔐 **Firebase Authentication** - Secure user authentication system
- 📝 **User Registration** - Easy signup process for new students
- 🔑 **Login System** - Secure login with email/password
- 👤 **User Profiles** - Personalized user accounts and preferences
- 🔒 **Password Recovery** - Secure password reset functionality
- 📧 **Email Verification** - Account verification via email

### Technical Features
- 🔧 **RESTful API** - Well-structured Django REST Framework backend
- ⚛️ **React Frontend** - Modern, responsive user interface
- 📱 **Mobile Responsive** - Mobile-first responsive layout & also accessible on all devices
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🔍 **Search & Filter** - Easy content discovery
- 📥 **Download Support** - Direct download of study materials
- 🌐 **Cross-Platform** - Works on web, mobile, and tablet
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📊 **Django REST Framework** - Robust API development
- ☁️ **Google Drive Integration** - Cloud file storage and management
- 🛡️ **CORS Support** - Cross-origin resource sharing
- 🔄 **Auto-slug Generation** - SEO-friendly URL generation
- 📱 **Social Authentication** - Multiple authentication providers
-  **Firebase Authentication** - Firebase Authentication and login

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
## 📚 API Documentation

### Base URL
- **Production**: `https://informatsy.pythonanywhere.com/api/`
- **Local Development**: `http://localhost:8000/api/`

### Core API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | API root - Lists all available endpoints |
| GET | `/api/notes/` | Access study materials and notes |
| GET | `/api/questionPapers/` | Retrieve question papers |
| GET | `/api/notifications/` | Get college notifications and announcements |
| GET | `/api/aboutUs/` | About us information |
| GET | `/api/college/` | College information and details |
| GET | `/api/club/` | Club activities and information |
| GET | `/api/SessionRecord/` | Session records and attendance |
| GET | `/api/attendance/` | Attendance tracking data |
| GET | `/api/IccContest/` | ICC coding contest details |

### Example API Responses

#### Notifications
```json
[
  {
    "id": 17,
    "notificationTitle": "ICC Contest",
    "relatedTo": "Coding Contest",
    "notificationDescription": "Hey Everyone!\nNew update in ICC section, which list all the contests details"
  },
  {
    "id": 18,
    "notificationTitle": "3rd sem and 4th sem notes",
    "relatedTo": "Study Material",
    "notificationDescription": "Hey!,\nWe have received your request for 3rd and 4th sem notes and question paper.\nwe will upload it soon.\nThank you"
  }
]
```

#### College Information
```json
[
  {
    "id": 1,
    "college_name": "Government Engineering College, Hassan (GECH)",
    "college_code": "NA",
    "college_address": "Opposite Dairy Circle, B M Road, Hassan, Karnataka - 573201"
  }
]
```

### Usage Example

```javascript
// Fetch notifications
const response = await fetch('https://informatsy.pythonanywhere.com/api/notifications/');
const notifications = await response.json();
console.log('Latest notifications:', notifications);
```
## 🛠️ Development

### Code Quality

#### Python Code Style
```bash
# Format with black
black .

# Lint with flake8
flake8 .

# Type checking with mypy
mypy .
```

#### JavaScript Code Style
```bash
# Format with Prettier
npm run format

# Lint with ESLint
npm run lint

# Fix linting issues
npm run lint:fix
```

### Testing

#### Backend Tests
```bash
# Run Django tests
python manage.py test

# Run with coverage
coverage run --source='.' manage.py test
coverage report
```

#### Frontend Tests
```bash
# Run React tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Database Management

#### Migrations
```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Show migration status
python manage.py showmigrations
```

#### Database Reset
```bash
# Reset database (development only)
python manage.py flush

# Reset migrations
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc" -delete
```
## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Commit your changes: `git commit -m "Add feature"`
7. Push to the branch: `git push origin feature-name`
8. Submit a pull request

### Development Guidelines
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Keep pull requests focused and small

### Code Review Process
1. All pull requests require review
2. Automated tests must pass
3. Code coverage should not decrease
4. Documentation must be updated

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 🙏 Acknowledgments

### Special Thanks
- **Django Team** - For the excellent web framework
- **React Team** - For the powerful frontend library
- **Google** - For the Drive API integration
- **Open Source Community** - For the amazing tools and libraries

### Built With
- [Django](https://djangoproject.com/) - High-level Python web framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Django REST Framework](https://www.django-rest-framework.org/) - Powerful toolkit for building Web APIs
- [Google Drive API](https://developers.google.com/drive) - Cloud storage for academic resources
- [PythonAnywhere](https://www.pythonanywhere.com/) - Backend hosting platform
- [Firebase Hosting](https://firebase.google.com/products/hosting) - Frontend deployment

### Contact Information
- **Phone**: +91 7676373298 / +91 6363255811
- **Email**: informatsy@gmail.com, jeethendrajeethu8@gmail.com
- **College**: Government Engineering College, Hassan (GECH)
- **Address**: Opposite Dairy Circle, B M Road, Hassan, Karnataka - 573201

### Contributors
- [@jeethendra2000](https://github.com/jeethendra2000) - Project Creator & Maintainer
- [@pranav-bharadwaj](https://github.com/pranav-bharadwaj) - Project Partner

---

<div align="center">
  <strong>🚀 Built with ❤️ using Django & React</strong>
</div>

<div align="center">
  <sub>If you found this project helpful, please consider giving it a ⭐ on GitHub!</sub>
</div>
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
-->
