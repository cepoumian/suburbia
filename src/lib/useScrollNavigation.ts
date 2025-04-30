"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useScrollNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      // If we're not on the homepage, navigate to it first with the hash
      if (pathname !== "/") {
        router.push(`/#${sectionId}`);
        return;
      }

      // If we're already on the homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [pathname, router],
  );

  return { scrollToSection };
}
