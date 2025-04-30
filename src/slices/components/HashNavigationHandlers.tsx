"use client";

import { useEffect } from "react";

export function HashNavigationHandler() {
  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1); // Remove the # character
      const targetElement = document.getElementById(targetId);

      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    }
  }, []);

  return null; // This component doesn't render anything
}
