import React from 'react';
import BlogPosts from './components/blogposts/blogposts';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';





const App = () => {
return (
    <div className="Homepage">
        <Header />
        <NavBar />
        <BlogPosts />
        <SideBar />
    </div>
)
}

export default App;