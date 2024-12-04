# Habit Tracker App

This is a simple Habit Tracker App built using React Native and Firebase. The app allows users to manage their habits, mark them as completed, and delete habits. It also includes basic features such as login/logout functionality, a swipeable interface, and image management using Expo Image Picker.

---

## **Features**
- Add new habits to your habit list.
- Delete habits from both the app and Firebase Firestore.
- View habits stored in Firebase Firestore in real-time.
- Login screen for user authentication (placeholder logic, not integrated with Firebase Auth).
- Profile screen with the ability to update profile pictures using Expo Image Picker.
- Swipe navigation between Home, Profile, and Add Habit screens.
- Persistent data storage using Firebase Firestore.

---

## **Technologies Used**
- **React Native**
- **Firebase Firestore**: For real-time database and storage.
- **Expo**: Framework for building the app.
- **Expo Image Picker**: For selecting and updating profile pictures.
- **React Navigation**: For navigation and swipeable tabs.

---

## **Screens Overview**
### 1. **Login Screen**
- Allows users to enter their credentials and navigate to the Home screen.
- Placeholder logic for email/password validation.

### 2. **Home Screen**
- Displays a list of habits stored in Firebase Firestore.
- Includes functionality to:
  - Add new habits.
  - Delete existing habits.
- Floating Action Button (`+`) to navigate to the Add Habit screen.

### 3. **Profile Screen**
- Displays user details (static placeholder data).
- Allows users to select a profile picture using Expo Image Picker.
- Logout button to navigate back to the Login screen.

### 4. **Add Habit Screen**
- Form to input and save new habits.
- Stores habits in Firebase Firestore with a timestamp and default "not completed" status.

---

## **Installation Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/TUDublinBlanchBusinessIT/project-NojusIlekis-1.git

