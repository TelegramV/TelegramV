import "../sass/application.scss"

if (__IS_PRODUCTION__) {
    document.title = "Connecting.."
    console.log("%c%s", "color: #4ea4f6; font-size: 4em;", "Telegram V")
    console.log("%c%s", "color: #DF3F40; font-size: 1.5em;", "using console may slow down the application")
} else {
    document.title = "[dev] Connecting.."
}

if (document.getElementById("page-loader")) {
    document.getElementById("page-loader").remove()
}