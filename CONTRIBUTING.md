# Project Contribution Guide

Every contributor should read and follow this guide.

---

## Installation & Tooling
You'll need the following to develop and test the project
- Git Installed: https://git-scm.com/downloads
- Nodejs (with NPM) installed. https://nodejs.org/en/download/
- VS Code Editor (recommended): https://code.visualstudio.com/download
  - ES7 React snippets extension (recommended)
  - Prettier extension (recommended)

---

## Setup & Workflow
1. Fork this repository to your GitHub account. This creates a copy of the repo on your profile
2. Clone the project you forked onto your PC (`git clone your_repo_link`)
3. Install any recommended extensions in vscode
3. Switch to the dev branch (`git checkout dev`). Do not work on the main branch
4. Run `npm install` to download all the dependencies to run the app
4. Remember to do a `git pull` each day before you start coding so you can keep up with everyone elses changes
5. Stage changes with `git add .` before commiting. 
6. Commit your changes periodically (`git commit -m "message"`). See git commit message style below
7. Upload your changes after completing a task (`git push`)
8. Go to your forked repo on GitHub.com and submit a pull request to have your changes reviewed and added to the original repo


---
## Coding Style

> **NOTE:** If you have the Prettier extension, your code should auto format when saved (Ctrl+S). Alternately you can run `npm run prettier` to format your code to the repository standard
### Readability
- Put spaces on both sides of operators(*/-+=)
  - Bad: `let name="John"`, Good: `let name = "John"`
- Skip lines between large blocks of code
  ``` js
  while (b < 9) {

  } // <-- should skip a line after }
  if (a == b) {
    
  } // <-- should skip a line after }
  print(a)
  a = 0
  ```
- Proper indentation (use tabs preferably)
- Use meaningful comments. Don't state the obvious
- Don't use outdated HTML tags or attributes (center, font, etc)

### Naming Convention
- **Variables & Functions:** 
  - first letter is lowercase & first letter of subsequest words are uppercase
    - eg. `let numOfUsers = 0`
    - eg. `function getNameOfUser() {}`
- **React Functional Components**
  - first letter of each word is uppercase
    - eg. `function HomePage() {}`
    - eg. `function EventsPage() {}`
- **Files**
  - Javascript filenames (.js, .jsx) follow same rules as **React Functional Components**
    - eg. `HomePage.jsx`
  - SCSS filenames should be all lowercase
    - eg. `homepage.scss`

### Writing CSS Rules
We'll using be using SASS (Syntactically Awesome Stylesheets). It's exactly like regular css except it has some features css doesnt, like variables, math operators, loops, imports. We're mostly concerned with variables and imports. Sass files have a `.scss` extension, not `.css`.

- Give each React component its own .scss file in the styles folder. (see naming convention above)

- Give the root element in a component a className thats the same as the component name. This will be useful for styling the component
  - Eg. In the file `HomePage.jsx`:
  ``` js
  // component
  function HomePage() {
    return (
        <div className='HomePage'>
            <h1>This is the Homepage</h1>
        </div>
    )
  }
  ```

- Be specific with CSS rules so they can't affect any other components. Begin every rule with the classname of the component the css is for.

  - Example: If the component is HomePage, your homepage.scss file would look like this:
    ```css
    .HomePage h1{
      color: red;
    }

    .HomePage .container #logo{
      border: none;
    }
    ```

### Git Commit Messages
* State what you did eg `"created navbar component"`
* (optional) Consider starting the commit message with an applicable emoji:
    
    * ✔ or ✅: when completing a task/ adding a feature
    * 🛠 or 🔧: when fixing an issue
    * ❌: when removing files or features

Example: `git commit -m "✅Finished creating database"`

---
## Notes
> Always write code on the `dev` branch of the repository. The main branch will be used for production-ready code. After cloning, switch to the dev branch using `git checkout dev`.

> Bootstrap v5 and JQuery have already been added to the project. No need to install them if you wish to use them.

> Use React's `<Link/>` tag, instead of `<a/>` tag to navigate between pages on the site.

> Add this line `@import '../../globals';` to the top of your scss files to import the global styles and access its color variables.
```css
@import '../../globals';
h1{
  color: $google_blue;
}
```

> Always add a message to your commits explaining what you've done.

---
## TODO:
- Setup a Firestore database for events and projects


---
## Resources

[Figma UI Designs](https://www.figma.com/file/bgSgS82rovj7jtqSqYJ6b7/GDSC_Website_Design?node-id=1%3A2)

[Video: Creating React Apps](https://www.youtube.com/watch?v=kVeOpcw4GWY&ab_channel=TheNetNinja)

[Video: React Components](https://www.youtube.com/watch?v=9D1x7-2FmTA&ab_channel=TheNetNinja)

[Video: React Templating](https://www.youtube.com/watch?v=pnhO8UaCgxg&ab_channel=TheNetNinja)

[Bootstrap Navbar](https://getbootstrap.com/docs/5.0/components/navbar/)
