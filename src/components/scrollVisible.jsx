"use client"

import { useEffect, useRef } from "react"

export default function ScrollVisible({ children }) {

  const targetDOM = useRef(null);

  useEffect(() => {

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          observer.unobserve(targetDOM.current)
        }
      })
    }

    let options = {
      root: null,
      threshold: 0.75
    }

    const observer = new IntersectionObserver(observerCallback, options)

    observer.observe(targetDOM.current)
    
  }, [])

  return (
    <div ref={targetDOM} className='opacity-0 blur-xs translate-y-8 ease-out duration-720'>
      { children }
    </div>
  );
}