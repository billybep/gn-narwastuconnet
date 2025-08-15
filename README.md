# Narwastu Connect - Church Community Mobile App

<!-- 
A comprehensive mobile application for church members featuring daily bible verses, 
worship schedules, and prayer request functionality.
-->

## 📱 Application Overview
<!-- Core features of the application -->
- ✝️ Digital spiritual resources
- 📖 Daily Bible verse (Verse of the Day)
- 🗓 Weekly worship schedules
- 🎶 Hymns database
- 🙏 Prayer request system
- 🔔 Church event notifications
- 📱 Available for Android & iOS

## 🛠️ Technology Stack

### Frontend (Mobile)
<!-- Modern Flutter architecture choices -->
- **Framework**: `Flutter 3.x+`
- **Language**: `Dart`
- **State Management**: `Riverpod` (recommended)
- **Local DB**: `Hive` (Lightweight NoSQL)
- **Internationalization**: `intl` package
- **Notifications**: `Firebase Cloud Messaging`
- **Testing**:
  - `Mockito` (unit testing)
  - `Flutter Driver` (integration testing)

### Backend
<!-- Robust backend architecture -->
- **Framework**: `NestJS` (TypeScript)
- **Database**: `PostgreSQL` (Relational DB)
- **API**: `RESTful` + `JWT Authentication`
- **Deployment**: `Docker` + `Railway.app`

## 🏗️ Project Structure
<!-- 
Modular structure optimized for solo developer 
maintainability and scalability
-->

```
gn-narwastuconnect/
├── mobile/ # Flutter project
│ ├── lib/
│ │ ├── core/ # Configurations, utilities
│ │ ├── features # Feature modules
│ │ └── ... # Additional files
│
└── backend/ # NestJS project
├── src/
│ ├── modules/ # Feature modules
│ └── ... # Additional files
```

<!-- Quick start guide -->
## 🚀 Getting Started
1. Clone repository
2. For Flutter: `cd mobile && flutter pub get`
3. For Backend: `cd backend && npm install`
4. See individual folder documentation

## 🔗 Key Integrations
<!-- Required external services -->
- Firebase Project (FCM)
- PostgreSQL Database
- Bible API (optional)

<!-- Additional notes -->