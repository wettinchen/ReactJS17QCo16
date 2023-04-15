## ReactJS Chapter 17
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 Reactjs 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp
### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## ReactJS Chapter 17
   Quick Concept outline
   中文摘要說明與重點提問
   
###  1. Intro 
        教學影片固定的開頭和摘要說明

###  2. Welcome <Code更動>
        

###  3. Quick Objectives
        

###  4. Applying CSS to the project <Code更動>
        應用 CSS

###  5. Header component <Code更動>
        修改 Header 為 React JS Blog

###  6. Nav component and React Router Links <Code更動>
        設定 Search bar 和 三個 Link

###  7. Adding search state <Code更動>
        在 App.js 加入 [search, setSearch]

###  8. Adding post state and starter post data <Code更動>
        在 App.js 加入 [posts, setPosts]
        新增 Array 並加入 Object

###  9. Adding search results state <Code更動>
        在 App.js 加入 [searchResults, setSearchResults]
        新增 Array 

### 10. Passing props to Nav component <Code更動>
        在 Layout.js 的 Nav 加入需要 search 和 setSearch 參數
        接著 Destruct 參數
        在 App.js 的 Nav 加入需要 search 和 setSearch 參數

### 11. Home component <Code更動>
        在 Layout.js 的 Home 加入需要 posts 參數
        應用 CSS 樣式，依照貼文數修改 Home.js
        新增 Feed.js

### 12. Feed component <Code更動>
        修改 Feed.js

### 13. Post component <Code更動>
        新增 Post.js
        修改 Post.js，並匯入 React Router Link

### 14. PostPage component and useParams hook <Code更動>
        修改 PostPage.js，
        並匯入 React Router useParams 和 Link
        修改 App.js 的 PostPage 屬性。
        在 App.js 新增 handleDelete

### 15. handleDelete function and useNavigate hook <Code更動>
        修改 handleDelete

### 16. NewPost component <Code更動>
        在 App.js 加入 [postTitle, setPostTitle]
        在 App.js 加入 [postBody, setPostBody]
        在 App.js 新增 handleSubmit
        修改 App.js 的 NewPost 屬性。
        修改 NewPost.js，並 destruct

### 17. handleSubmit function and date-fns package <Code更動>
        在 App.js 修改 handleSubmit
        在 git bash 輸入 npm i date-fns -S
        fns: functions
        S: Save
        匯入 format

### 18. Adding search functionality with useEffect and filter <Code更動>
        新增 useEffect 並修改 Home 的參數

### 19. Correcting a handleSubmit function error
        如果 handleSubmit 有錯誤記得修正。

### 20. Missing component / 404 page
        修改 Missing.js，
        並匯入 React Router Link

### 21. Footer component
        修改 Footer.js

### 22. About component
        修改 Footer.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
