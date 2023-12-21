function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    // const newTitle = document.title;
    // console.log(document);
    // const newTitle = document.getElementsByTagName('head title')
    // newTitle.innerText = "Your name's Portfolio";
    document.title = "Your Name's Portfolio"

}

function changeHeader() {
    // Change the name in the h1 of the page to your name
    const newHeader = document.querySelector('h1')
    newHeader.innerText = "Your Name"

}

function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    // const newBody = document.body.div
    // console.log(newBody);
    const newAbout = document.querySelector('.section:nth-of-type(2)')
    newAbout.innerText = "Nothing interesting"


}

export {
    changeTitle,
    changeHeader,
    changeAboutMe
}
