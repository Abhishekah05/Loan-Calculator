# 💰 Loan EMI Calculator App

This is a modern, single-page web application built using **React JS** and **Material UI**. It allows users to:

- Calculate Loan EMIs (Equated Monthly Installments)
- View a dynamic amortization schedule
- Convert EMI amounts into other currencies using live exchange rates

---

## ✨ Key Features (Step-by-Step)

1. **🔢 EMI Calculator**  
   - Users can input loan amount, interest rate, and duration (in years)
   - Calculates the monthly EMI using the standard financial formula
   - Updates instantly as inputs change

2. **📊 Amortization Schedule**  
   - Displays month-wise breakdown of:
     - Principal paid
     - Interest paid
     - Remaining balance  
   - Table updates dynamically when input changes

3. **🌐 Currency Conversion**  
   - Converts the calculated EMI into various global currencies
   - Uses real-time data from [ExchangeRate API](https://www.exchangerate-api.com)
   - User can select any currency from a dropdown

4. **🌓 Dark/Light Mode Toggle**  
   - Easily switch between light and dark UI themes
   - Theme is applied globally using Material UI's theming system

5. **📱 Mobile Responsive Design**  
   - Designed with breakpoints to ensure usability on all screen sizes
   - Navigation header collapses to a menu icon on mobile devices

6. **🚧 404 Error Handling**  
   - Unmatched routes lead to a custom “Page Not Found” screen
   - Improves user experience and robustness

7. **♻️ Reusable Custom Hooks**  
   - Business logic like EMI calculation and currency API calls are encapsulated into custom hooks (`useEmiCalculator`, `useCurrencyFetcher`)

---

## 🔧 Technical Highlights (Skills Demonstrated)

1. **🧠 React Fundamentals**
   - Used **functional components** with **React Hooks** (`useState`, `useEffect`)
   - Prop drilling minimized using **Context API**

2. **🎨 Material UI Integration**
   - Implemented a fully themed UI with **dark/light toggle**
   - Used MUI Grid, Cards, Buttons, Select components for layout & interaction

3. **🌐 API Integration (Axios + ExchangeRate API)**
   - Called external currency API using **Axios**
   - Included **loading states**, **error handling**, and **fallback UI**

4. **🌍 Global State Management**
   - Used **React Context API** to manage currency selection and theme mode globally

5. **📦 Modular & Scalable Codebase**
   - Separated logic into:
     - `/components` – UI blocks
     - `/hooks` – business logic
     - `/context` – shared state
     - `/utils` – helpers/formulas
   - Followed best practices for component reusability and folder structure

6. **⚛️ Custom React Hooks**
   - `useEmiCalculator` for EMI logic
   - `useCurrencyFetcher` for API interaction

7. **⚠️ Error Handling & Fallback UI**
   - Graceful handling of API failures with messages and UI feedback
   - Used optional chaining and conditional rendering

8. **🔁 Reusability**
   - Abstracted logic from UI
   - Component-driven design allows future scalability

---

## 🚀 Live Demo

🔗 **Deployed on Vercel:**  
https://loan-calculator-five-gamma.vercel.app/

---

## 📥 Installation & Running the App

```bash
# 1. Clone the repository
git clone https://github.com/Abhishekah05/Loan-Calculator.git

# 2. Go into the project directory
cd Loan-Calculator

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
# 💰 Loan EMI Calculator App

This is a modern, single-page web application built using **React JS** and **Material UI**. It allows users to:

- Calculate Loan EMIs (Equated Monthly Installments)
- View a dynamic amortization schedule
- Convert EMI amounts into other currencies using live exchange rates

---

## ✨ Key Features (Step-by-Step)

1. **🔢 EMI Calculator**  
   - Users can input loan amount, interest rate, and duration (in years)
   - Calculates the monthly EMI using the standard financial formula
   - Updates instantly as inputs change

2. **📊 Amortization Schedule**  
   - Displays month-wise breakdown of:
     - Principal paid
     - Interest paid
     - Remaining balance  
   - Table updates dynamically when input changes

3. **🌐 Currency Conversion**  
   - Converts the calculated EMI into various global currencies
   - Uses real-time data from [ExchangeRate API](https://www.exchangerate-api.com)
   - User can select any currency from a dropdown

4. **🌓 Dark/Light Mode Toggle**  
   - Easily switch between light and dark UI themes
   - Theme is applied globally using Material UI's theming system

5. **📱 Mobile Responsive Design**  
   - Designed with breakpoints to ensure usability on all screen sizes
   - Navigation header collapses to a menu icon on mobile devices

6. **🚧 404 Error Handling**  
   - Unmatched routes lead to a custom “Page Not Found” screen
   - Improves user experience and robustness

7. **♻️ Reusable Custom Hooks**  
   - Business logic like EMI calculation and currency API calls are encapsulated into custom hooks (`useEmiCalculator`, `useCurrencyFetcher`)

---

## 🔧 Technical Highlights (Skills Demonstrated)

1. **🧠 React Fundamentals**
   - Used **functional components** with **React Hooks** (`useState`, `useEffect`)
   - Prop drilling minimized using **Context API**

2. **🎨 Material UI Integration**
   - Implemented a fully themed UI with **dark/light toggle**
   - Used MUI Grid, Cards, Buttons, Select components for layout & interaction

3. **🌐 API Integration (Axios + ExchangeRate API)**
   - Called external currency API using **Axios**
   - Included **loading states**, **error handling**, and **fallback UI**

4. **🌍 Global State Management**
   - Used **React Context API** to manage currency selection and theme mode globally

5. **📦 Modular & Scalable Codebase**
   - Separated logic into:
     - `/components` – UI blocks
     - `/hooks` – business logic
     - `/context` – shared state
     - `/utils` – helpers/formulas
   - Followed best practices for component reusability and folder structure

6. **⚛️ Custom React Hooks**
   - `useEmiCalculator` for EMI logic
   - `useCurrencyFetcher` for API interaction

7. **⚠️ Error Handling & Fallback UI**
   - Graceful handling of API failures with messages and UI feedback
   - Used optional chaining and conditional rendering

8. **🔁 Reusability**
   - Abstracted logic from UI
   - Component-driven design allows future scalability

---

## 🚀 Live Demo

🔗 **Deployed on Vercel:**  
https://loan-calculator-five-gamma.vercel.app/

---

## 📥 Installation & Running the App

```bash
# 1. Clone the repository
git clone https://github.com/Abhishekah05/Loan-Calculator.git

# 2. Go into the project directory
cd Loan-Calculator

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
