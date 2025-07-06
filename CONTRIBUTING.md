# 🤝 Contributing to validate-form-simple

Welcome, and thank you for considering contributing to `validate-form-simple`!

This library is a lightweight, dependency-free JavaScript solution for validating HTML forms. Whether you're fixing a bug, suggesting an improvement, or adding a new feature, this guide will walk you through how to contribute — even if you're new to open source.

---

## 📦 About the Project

`validate-form-simple` provides an easy way to add validation to HTML forms (e.g., required fields, email and phone format checks) without writing complex JavaScript or using large libraries.

---

## 🧰 Project Setup

To set up the project locally:

1. **Fork** the repository.
2. Clone your fork:

   git clone https://github.com/YOUR_USERNAME/validate-form-simple.git  
   cd validate-form-simple

3. Install dependencies:

```bash
   npm install
```

4. Build the project:

```bash
   npm run build
```

5. Run tests:

```bash
   npm test
```

6. Run the example in your browser:

```bash
   npx serve example
```

---

## 🧩 Types of Contributions

| Type        | Description                               | GitHub Label  |
| ----------- | ----------------------------------------- | ------------- |
| Bug Report  | Report unexpected or broken behavior      | `bug`         |
| Enhancement | Improve existing functionality or code    | `enhancement` |
| Feature     | Add entirely new features or capabilities | `feature`     |

---

## 📝 Creating an Issue

If you encounter a bug, have a question, or want to request a feature:

1. Go to the [Issues tab](../../issues) and click **New issue**.
2. Select the appropriate type:
   - **Bug Report**
   - **Feature Request**
   - **Enhancement**
3. Fill in the issue form with as much detail as possible:
   - Steps to reproduce (for bugs)
   - What you expected to happen
   - Screenshots or code examples, if helpful

---

## 🧑‍💻 Working on an Issue

Want to contribute code? Follow these steps:

1. Look for issues labeled `good first issue` or `help wanted`.
2. Comment on the issue:  
   "Hi! I'd like to work on this."
3. Wait for a maintainer to assign you.
4. Create a new branch with a name that includes the issue number. This helps everyone track what each branch is for.

```bash
   git checkout -b issue-#1
```

5. Make your changes.
6. Commit using [Conventional Commits](https://www.conventionalcommits.org):

```bash
   git commit -m "fix: correct email validation error message"
```

7. Push your branch:

```bash
   git push origin issue-#1
```

8. Open a Pull Request (PR) to the `master` branch.

---

## 🏷️ Understanding Labels

We use GitHub labels to organize contributions:

- `bug`: Fixes an error or broken functionality.
- `enhancement`: Improves an existing feature or code.
- `feature`: Introduces new functionality.
- `good first issue`: Great for first-time contributors.
- `help wanted`: Contributions are welcome.
- `question`: Open-ended discussions or clarifications.

---

## 🧼 Code Quality

We use **ESLint** and **Prettier** to ensure consistent code formatting. Before committing:

```bash
   npm run lint
```

Linting and formatting will also run automatically on staged files using **Husky** and **lint-staged**.

---

## ✅ Pull Request Checklist

Before you open a PR, please make sure:

- [ ] Your code follows the project's style.
- [ ] All tests pass.
- [ ] You use a descriptive commit message.
- [ ] The PR references a related issue (`Closes #123`).
- [ ] You’ve explained **what** and **why** you changed something.

---

## 💬 Need Help?

Feel free to open an issue with your question — we’re happy to help and support you on your open source journey!

Thanks again for being part of this project! 🙌
