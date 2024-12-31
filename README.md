## How to Run the Project
npx react-native run-android
or npx react-native run-ios



## Design Choices

1. **State Management**:
   - Used **React hooks** (`useState`, `useEffect`) for managing form input state and validation.
   - **Formik** was used to handle form state and validation logic to simplify the form handling process.

2. **Validation**:
   - Form validation was done using **Yup** alongside Formik to ensure the form fields are correctly filled out before submission.
   - Password strength indicator on the Sign-Up screen provides real-time feedback to the user on their password strength.

3. **UI and UX**:
   - The UI is designed to be **simple** and **user-friendly**.
   - The **"Remember Me" checkbox** is implemented to keep the user's email after a successful login.
   - **Accessibility**: The app includes basic accessibility features like `aria-label` for form elements.

4. **No third-party UI libraries** were used as per the assessment requirements, so I built custom components for the forms.
## Assumptions/Limitations

1. **Assumptions**:
   - The user has an **Android or iOS device** (emulator or physical device) to run the app.
   - The user has **node.js** and **npm** installed on their machine.

2. **Limitations**:
   - No **backend integration** for actual authentication or database management. The app is front-end only, simulating the Sign-Up and Login process.
   - Limited password strength validation logic (only basic criteria are checked).
   - **No cloud storage** or advanced features such as email verification or password reset.
