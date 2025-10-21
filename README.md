# Posts list Angular

A modern Angular application demonstrating component-based architecture, zoneless signal-based state management, and API integration.

---

## 📁 Folder Structure

```
.
├── .editorconfig
├── .gitignore
├── .postcssrc.json
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── public/
│   └── favicon.ico
├── src/
│   ├── custom-theme.scss
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app/
│       ├── app.config.ts
│       ├── app.css
│       ├── app.html
│       ├── app.routes.ts
│       ├── app.spec.ts
│       ├── app.ts
│       ├── config/
│       │   ├── api.config.ts
│       │   └── routes.config.ts
│       ├── home/
│       ├── main/
│       ├── navbar/
│       │   ├── nav-desktop/
│       │   ├── nav-mobile/
│       │   └── navbar.config.ts
│       ├── posts/
│       │   ├── interfaces/
│       │   ├── list-item/
│       │   ├── post-details/
│       │   ├── post-details-page/
│       │   ├── posts-list/
│       │   ├── posts-page/
│       │   ├── posts-search/
│       │   └── services/
│       └── UI/
│           ├── clear-button/
│           ├── empty-page/
│           ├── icons/
│           ├── mobile-menu-button/
│           ├── page-loader/
│           ├── search-field/
│           └── spinner/
└── ...
```

---

## 🧩 Component List

### **App Shell**

- [`App`](src/app/app.ts): Root component, includes navbar and main content.
- [`Main`](src/app/main/main.ts): Hosts the router outlet for page content.

### **Navigation**

- [`Navbar`](src/app/navbar/navbar.ts): Main navigation bar.
  - [`NavDesktop`](src/app/navbar/nav-desktop/nav-desktop.ts): Desktop navigation links.
  - [`NavMobile`](src/app/navbar/nav-mobile/nav-mobile.ts): Mobile navigation menu.
  - [`NavItem`](src/app/navbar/nav-desktop/nav-item/nav-item.ts): Single desktop nav item.
  - [`NavMobileItem`](src/app/navbar/nav-mobile/nav-mobile-item/nav-mobile-item.ts): Single mobile nav item.
  - [`MobileMenuButton`](src/app/UI/mobile-menu-button/mobile-menu-button.ts): Hamburger menu button for mobile.

### **Posts**

- [`PostsPage`](src/app/posts/posts-page/posts-page.ts): Main posts page, handles loading and state.
- [`PostsSearch`](src/app/posts/posts-search/posts-search.ts): Search/filter posts by title/body or user ID.
- [`PostsList`](src/app/posts/posts-list/posts-list.ts): Displays a grid of posts.
- [`ListItem`](src/app/posts/list-item/list-item.ts): Single post preview card.
- [`PostDetailsPage`](src/app/posts/post-details-page/post-details-page.ts): Post details, author, and comments.
- [`PostDetails`](src/app/posts/post-details/post-details.ts): Combines author and comments sections.
- [`AuthorDetailsPage`](src/app/posts/post-details/author-details-page/author-details-page.ts): Handles author loading state.
- [`AuthorDetails`](src/app/posts/post-details/author-details/author-details.ts): Displays author info.
- [`PostCommentsPage`](src/app/posts/post-details/post-comments-page/post-comments-page.ts): Handles comments loading state.
- [`PostComments`](src/app/posts/post-details/post-comments/post-comments.ts): Lists all comments for a post.
- [`PostCommentsItem`](src/app/posts/post-details/post-comments-item/post-comments-item.ts): Single comment display.

### **UI/Utility**

- [`SearchField`](src/app/UI/search-field/search-field.ts): Search input with clear button and icon.
- [`ClearButton`](src/app/UI/clear-button/clear-button.ts): Button to clear search input.
- [`Spinner`](src/app/UI/spinner/spinner.ts): Loading spinner.
- [`PageLoader`](src/app/UI/page-loader/page-loader.ts): Centered spinner for page loading.
- [`EmptyPage`](src/app/UI/empty-page/empty-page.ts): Placeholder for empty states.
- [`SearchIcon`](src/app/UI/icons/search-icon/search-icon.ts): SVG search icon.

---

## 🛠️ Services

- [`PostsService`](src/app/posts/services/posts-service.ts):  
  Handles all API requests for posts, post details, comments, and author details.
  - `getPosts$(userId?: number)`
  - `getPostDetails$(id: number)`
  - `getPostComments$(id: number)`
  - `getAuthorDetails$(id: number)`

API endpoints are configured in [`API_ROUTES`](src/app/config/api.config.ts).

---

## 🗂️ State Management

This project uses Angular's [signals](https://angular.dev/reference/signals) for local component state and input/output bindings for communication between components.

- **Signals** are used for reactive state in components (e.g., `isLoading`, `posts`, `author`, `postComments`).
- **Inputs/Outputs** are used for passing data and events between parent and child components.
- No external state management library (like NgRx) is used; state is managed locally and via services.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app:**
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:4200](http://localhost:4200).

---

## 📚 Additional Notes

- Theming is handled via [Tailwind CSS](https://tailwindcss.com/).
- Routing is configured in [`app.routes.ts`](src/app/app.routes.ts) using Angular Router.
- The project is set up with strict TypeScript and Angular compiler options for reliability.

---
