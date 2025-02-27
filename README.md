# Aqua Track Project Documentation

## Overview

Aqua Track is an application designed to help users monitor their water balance
based on their age and physical data. The application provides personalized
recommendations and tracks water consumption over time.

## Repositories

- **Frontend Repository:** [https://github.com/Oolha/aqua-track-project]
- **Backend Repository:**
  [https://github.com/BurglachOK/aqua-track-project-back]
- **Swagger Documentation:**
  [https://aqua-track-project-back.onrender.com/api-docs/]

## Team Members

- **Team Lead:** Yevhen Martsafei
- **Scrum Master:** Olha Sydorchuk

### Frontend Team

- **Developers:**
  - Tatiana Grigorash: `HomePage`
  - Roman Suprunovsky: `MonthInfo, Calendar, Tracker Page`
  - Olha Sydorchuk: `WaterList, Tracker Page`
  - Olga Taranenko: `WaterMainInfo, Tracker Page`
  - Veronika Dyka: `SignUpPage`
  - Roman Zubakha: `Modal`, `ModalUserSettings`
  - Nazar Pashko: `LogOut`, `DeleteWaterModal`
  - Natalija Trehubenco: `Onboarding for new users`,
  - Hetmanchuk Oleksandr: `WaterForm`, `WaterModal`
  - Kateryna Efanova: `SignInPage`
  - Didkovskyi Davyd: `Localization`

### Backend Team

- **Developers:**
  - Yevhen Martsafei: `Swagger`
  - Alina Klochko: `Authorization through Google`
  - Serhii Buriak: `/users`
  - Oleksandr Liashenko: `/water`
  - Suprunovsky Roman: `/water`

## Technologies Used

### Frontend

The frontend of the application is built using the following technologies:

- **Framework:** React
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form, Formik, Yup
- **Localization:** i18next, react-i18next
- **UI Components:** React Icons, Floating UI
- **HTTP Requests:** Axios
- **Styling:** Modern Normalize, CSS Modules
- **Other Libraries:** Clsx, React Tour, React Loader Spinner
- **Build & Development Tools:** Vite, ESLint

### Backend

The backend is built using the following technologies:

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB, Mongoose
- **Authentication:** Google OAuth, JWT, bcrypt
- **File Uploads:** Multer, Cloudinary
- **Validation:** Joi
- **Logging:** Pino, Pino-HTTP
- **Email Service:** Nodemailer
- **API Documentation:** Swagger, Redocly CLI
- **Error Handling:** HTTP Errors
- **Environment Configuration:** dotenv

## Features

- User authentication (Google OAuth, email/password login)
- Personalized water intake recommendations
- Water intake tracking
- Calendar view for logging daily water consumption
- Multi-language support
- Mobile-friendly design
- Onboarding process for new users

## Installation & Setup

### Frontend

1. Clone the repository:

   git clone [https://github.com/Oolha/aqua-track-project]

2. Navigate to the project directory:

   cd aqua-track-project

3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

### Backend

1. Clone the repository:

   git clone [https://github.com/BurglachOK/aqua-track-project-back]

2. Navigate to the project directory:

   cd nodejs-hw-mongodb

3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

## Contribution Guidelines

1. Fork the repository and create a new branch.
2. Follow the coding style defined in ESLint.
3. Make sure to write clear commit messages.
4. Submit a pull request for review.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or contributions, contact the team lead: **Yevhen Martsafei**.
