# CESA Website

Welcome to the CESA Community Website! 
This README provides guidelines for organizing your Next.js project, including folder and file naming conventions, and how to structure your code for each page and feature.



## Folder and File Naming Conventions

### 1. Pages Directory

In the Next.js "pages" directory, follow these conventions:

- Each file in the "pages" directory represents a route or page.
- The file name corresponds to the route's path. For example, "about.js" creates a route for "/about".

### 2. Dynamic Routes

To create dynamic routes, use brackets in the file name. For example, "pages/products/[id].js" will match routes like "/products/1" and "/products/2".

### 3. Optional Catch-All Routes

Use brackets with three dots in the file name to create optional catch-all routes. For example, "pages/products/..." can match various subpaths like "/products/1/2/3".

### 4. Custom Route Names

You can set custom route names using the "as" key in "getServerSideProps" or "getStaticProps" functions if you want to define the route's name independently of the file structure.
This will change the URL displayed in the browser, while preserving the actual route structure.

### 5. Nested Routes

Organize your files and directories to create nested routes. For example, "pages/blog/index.js" creates a route for "/blog", and "pages/blog/post.js" creates a nested route for "/blog/post".




## Organizing Code

### 1. Components

Store reusable components in the "components" directory. Create subdirectories for each feature or component, following this pattern:

- **Feature Name**
  - **FeatureName.js**: The main React component for the feature.
  - **FeatureNameModel.js**: View models or data-fetching functions specific to the feature.
  - **FeatureNameService.js**: Service or utility functions for the feature.

```js
// Example :-

app/
  pages/
   - index.js
   - about.js
   - products/[id].js
   - ...

// Outside app folder
components/
 - Footer/
   - Footer.js
   - FooterModel.js
   - FooterService.js
 - Header/
   - Header.js
   - HeaderModel.js
   - HeaderService.js
 - ... 

```



### 2. Git Naming conventions


1. **issue Branch:**

   Issues branches are used to address regarding issues in project. Use a brief description of the issue you're addressing as the branch name.
   
   Create the issue branch:

   ```bash
   git checkout -b issue/issue-name
   ```

3. **Feature Branches:**

   Feature branches are used for developing new features or enhancements. Replace feature-name with a descriptive name of the feature or task you are working on.

   Create a feature branch:

   ```bash
   git checkout -b feature/login-page
   ```

5. **Bugfix Branches:**

   Bugfix branches are used for fixing specific issues or bugs. Use a brief description of the issue you're addressing as the branch name.
   
   Create a bugfix branch:

   ```bash
   git checkout -b bugfix/bug-fixed-name
   ```


6. **Release Branches:**

   Release branches are used to prepare the project for a new release. The version-number represents the version you are working on, such as 1.0 or 2.1.
   
   Create a release branch:

   ```bash
   git checkout -b release/1.0
   ```

7. **Documentation Branches:**
   
   Documentation branches are used for updating project documentation. The documentation-topic describes the specific documentation you're working on, such as readme-update or user-guide.
   Create a documentation branch:

   ```bash
   git checkout -b docs/readme-update
   ```



