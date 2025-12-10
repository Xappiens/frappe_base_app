# 🚀 Custom App Boilerplate
> *The ultimate boilerplate for building modern Frappe applications.*

[![Made with Frappe](https://img.shields.io/badge/Made_with-Frappe-blue.svg?style=flat-square)](https://frappeframework.com)
[![Vue.js 3](https://img.shields.io/badge/Frontend-Vue.js_3-42b883.svg?style=flat-square)](https://vuejs.org/)
[![Built by Xappiens](https://img.shields.io/badge/Built_by-Xappiens-orange.svg?style=flat-square)](https://xappiens.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Custom App Boilerplate** is a community initiative by **[Xappiens](https://xappiens.com)**. We've extracted the powerful frontend structure from **Frappe CRM** and adapted it into a clean slate, so you don't have to start from scratch.

The result? A solid, modern, production-ready foundation perfect for building **corporate portals**, educational platforms, or any app requiring a polished frontend and seamless Frappe integration.

---

## ✨ Why use this boilerplate?

Skip the setup for routes, authentication, and basic components. Here's what you get out of the box:

### 🎨 Premium User Experience
*   **CRM Replica**: Inherits the clean design, collapsible sidebar, and responsive navbar you love from Frappe CRM.
*   **Modern Frontend**: Built with **Vue 3**, **Frappe UI**, and **Tailwind CSS**. Fast, reactive, and beautiful by default.
*   **Fully Responsive**: Looks amazing on laptops, tablets, and mobile devices effortlessly.

### 🛡️ Robust & Secure
*   **Native Permission Management**: Uses Frappe's role and permission system. If a user doesn't have access, they don't see the module. Simple.
*   **Integrated Authentication**: Login and session management ready to go.

### 🧩 Modular & Extensible
*   **Ready-to-use Modules**: Comes with functional examples to guide your development.
*   **Clean Architecture**: Clear separation between frontend (Vue) and backend (Python/Frappe), facilitating scalable development.

### ⚙️ Easy Configuration
*   **Dynamic App Title**: Configurable via the **App Settings** DocType in the Desk. No code changes needed to update the site title.
*   **Workspace Management**: Easily manage your app's workspace and navigation.

---

## 🚀 How to Make it Yours (Quick Start)

Deploy your own custom app in minutes.

### Prerequisites
*   Frappe Framework v15+
*   Node.js 18+

### 1. Clone the Repository
Go to your bench directory and clone the app.
```bash
cd frappe-bench
bench get-app https://github.com/Xappiens/frappe_base_app.git
```

### 2. Install on Your Site
Install the app on your Frappe site to verify it works.
```bash
bench --site your-site.com install-app custom_app
```

### 3. Rename the App (Crucial Step)
To make this app truly yours (e.g., `my_cool_app`), you need to rename the directories and update the code references.

**Option A: The "New App" Method (Recommended)**
The clean way is to create a new app and copy the `frontend` folder and necessary backend logic.
1.  Create your new app: `bench new-app my_cool_app`
2.  Copy the `frontend` folder from this repo to your new app.
3.  Copy the logic from `hooks.py` and your desired controllers.

**Option B: Rename In-Place**
If you want to rename *this* repo directly:
1.  Rename the directory:
    ```bash
    mv apps/custom_app apps/my_cool_app
    ```
2.  Rename the inner python package:
    ```bash
    mv apps/my_cool_app/custom_app apps/my_cool_app/my_cool_app
    ```
3.  Find and replace all occurrences of `custom_app` with `my_cool_app` in all files (use VS Code or `sed`).
4.  Re-install the app on your site.

### 4. Build the Frontend
Once renamed and installed, build the assets.
```bash
bench build
```

Access your portal at `https://your-site.com/portal` (or your configured route).

---

## 🛠️ Tech Stack

The winning combination for modern enterprise apps:

| Area | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | 🐍 **Frappe Framework** | Business logic, database, and REST API. |
| **Frontend** | 💚 **Vue.js 3** | Reactive framework for dynamic UI. |
| **UI Kit** | 🧩 **Frappe UI** | Pre-designed components (buttons, dialogs, lists). |
| **Styling** | 🌊 **Tailwind CSS** | Fast and maintainable utility-first styling. |
| **Build** | ⚡ **Vite** | Blazing fast development environment. |

---

## 🤝 A Contribution by Xappiens

At **[Xappiens](https://xappiens.com)**, we believe in the power of **Open Source**. This project is our way of giving back to the amazing Frappe community.

We want to empower developers like you to build incredible tools without wasting time on initial setup.

### Love this project?
*   ⭐ **Star** the repo on GitHub.
*   🐞 **Report issues** if you find anything to improve.
*   👩‍💻 **Contribute** with PRs to make it even better.

---

## 📞 Support & Community

If you have questions or need professional help with your Frappe projects:

*   🌐 Web: [xappiens.com](https://xappiens.com)
*   📧 Email: xappiens@xappiens.com
*   🐙 GitHub: [Xappiens](https://github.com/Xappiens)

---
<div align="center">
  <sub>Made with ❤️ code and coffee by the Xappiens team.</sub>
</div>
