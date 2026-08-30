import React, { useEffect, useState } from "react";

const greetings = ["Hello!", "こんにちは!", "你好!"];
const TYPE_DELAY = 140;
const DELETE_DELAY = 85;
const GREETING_PAUSE = 2400;
const LANGUAGE_PAUSE = 450;

function Type() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const greeting = greetings[greetingIndex];
    let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;
    let update;

    if (!isDeleting && displayedText === greeting) {
      delay = GREETING_PAUSE;
      update = () => setIsDeleting(true);
    } else if (isDeleting && displayedText === "") {
      delay = LANGUAGE_PAUSE;
      update = () => {
        setIsDeleting(false);
        setGreetingIndex((current) => (current + 1) % greetings.length);
      };
    } else {
      const nextLength = displayedText.length + (isDeleting ? -1 : 1);
      update = () => setDisplayedText(greeting.slice(0, nextLength));
    }

    const timer = window.setTimeout(update, delay);

    return () => window.clearTimeout(timer);
  }, [displayedText, greetingIndex, isDeleting]);

  return (
    <span className="hero-typewriter" aria-hidden="true">
      <span className="hero-typewriter-text">{displayedText}</span>
      <span className="hero-typewriter-cursor" />
    </span>
  );
}

export default Type;
