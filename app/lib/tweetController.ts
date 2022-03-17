/**
 *
 */
const block: HTMLDivElement =
  document.querySelector<HTMLDivElement>(".tweet_in");
const blockText: HTMLDivElement =
  block.querySelector<HTMLDivElement>(".content_text");
let tweetLength: number = 0;

/**
 *
 */
const tweetTextController = (): void => {
  let initText: string = "Tweet something...";

  blockText.addEventListener("focus", () => {
    if (blockText.innerHTML == initText) {
      blockText.innerHTML = "";
    }
  });
  blockText.addEventListener("blur", () => {
    blockText.innerHTML.trim();
    if (blockText.innerHTML == "") {
      blockText.innerHTML = initText;
    }
  });
  blockText.addEventListener("keydown", (ev: KeyboardEvent) => {
    if (ev.shiftKey && ev.key == "Enter") {
      blockText.blur();
      return false;
    } else {
      tweetLengthController();
    }
  });
};

/**
 *
 */
const tweetLengthController = (): void => {
  if (blockText.innerHTML.length > 0) {
    console.log(blockText.innerHTML.length);
  }
};

export { tweetTextController, tweetLengthController, tweetLength };
