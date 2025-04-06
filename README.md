# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# 🛠️ Upcoming Development

This section outlines the planned enhancements and architectural improvements for the platform.

---

### 🔧 Core Infrastructure & Services

- ✅ Integrate centralized **logger** in all services:
  - Evaluator Service
  - Submission Service
  - Socket Service
  - Frontend (via `loglevel` or similar)

- 🛠️ Create standalone **Auth Service**:
  - JWT-based authentication
  - Access token + refresh token mechanism
  - Secure route protection

- 🔐 Implement **Role-Based Access Control (RBAC)**:
  - Roles: `admin`, `problem-setter`, `user`
  - Permissions applied both on backend routes and frontend UI controls (tabs, actions)

---

### ⚙️ Developer Experience Improvements

- 🧩 **GraphQL Integration** (Apollo Client):
  - Refactor REST endpoints to GraphQL for fine-grained control
  - Use GraphQL queries in problem list and detail pages

- 🧪 Testing:
  - Unit Tests (Jest)
  - Component Tests (React Testing Library / Cypress Component Testing)
  - Backend Integration Tests (Supertest)

---

### 🚀 DevOps, Deployment & Load Handling

- ⚙️ **CI/CD Pipeline**:
  - Set up GitHub Actions or GitLab CI
  - Steps: Lint → Test → Build → Deploy

- 📊 **Load Testing with K6**:
  - Simulate concurrent user submissions
  - Benchmark evaluator and submission services

- 🔁 **Evaluator Queue Load Balancing**:
  - Multiple queue instances
  - Round-robin or load-based distribution

- ⭐ **Premium Queue Prioritization**:
  - Dedicated high-priority queues for premium users
  - Weighted or time-based dequeue logic

---

### 🧠 Git Strategy & Release Management

- 🪄 Adopt Git branching workflow:
  - `develop`: daily active development
  - `release`: monthly stable version
  - `main`: production branch
  - Cherry-pick important bug fixes from `develop` to `release`
