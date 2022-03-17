import "modern-css-reset";
import "./../assets/styles/tailwind.css";
import "./../assets/styles/style.css";
import "phosphor-icons";



window.addEventListener("load", () => {
    renderTweets()
})


const renderTweets = () => {

    //
    initTweetEvents()
}

const initTweetEvents = () => {
    document.addEventListener("click", () => {
        //
        updateEvents()
    })
}

const updateEvents = () => {
    //


    renderTweets()
}