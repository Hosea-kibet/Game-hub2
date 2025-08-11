"use client"

import { useEffect } from "react"

export default function BackButtonInjector() {
  useEffect(() => {
    // Check if we're on a game site and should show the back button
    const urlParams = new URLSearchParams(window.location.search)
    const isFromZaam = urlParams.get("returnTo") === "Zaam"

    if (isFromZaam) {
      // Create and inject the back button
      const backButton = document.createElement("div")
      backButton.id = "zaam-back-button"
      backButton.innerHTML = `
        <button 
          onclick="window.location.href = localStorage.getItem('zaamReturnUrl') + '?returnFrom=game'"
          style="
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            background: linear-gradient(135deg, #7c3aed, #3b82f6);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          "
          onmouseover="this.style.transform = 'scale(1.05)'; this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)'"
          onmouseout="this.style.transform = 'scale(1)'; this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)'"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to zaam
        </button>
      `

      // Add to page
      document.body.appendChild(backButton)

      // Cleanup function
      return () => {
        const existingButton = document.getElementById("zaam-back-button")
        if (existingButton) {
          existingButton.remove()
        }
      }
    }
  }, [])

  return null
}
