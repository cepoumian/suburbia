"use client";

import { useScrollNavigation } from "@/lib/useScrollNavigation";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import { LinkField } from "@prismicio/client";
import { useCallback, useMemo } from "react";

type NavigationLinkProps = PrismicNextLinkProps & {
  field: LinkField;
  className?: string;
};

export function NavigationLink({
  field,
  className,
  ...props
}: NavigationLinkProps) {
  const { scrollToSection } = useScrollNavigation();

  // This mapping defines which link text should scroll to which section ID
  const sectionMappings = useMemo(
    () =>
      ({
        Team: "team",
        Latest: "latest",
        // Add more mappings as needed
      }) as Record<string, string>,
    [],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // Check if this link text is in our mapping and we're handling navigation internally
      const linkText = field.text?.toLowerCase();

      for (const [sectionText, sectionId] of Object.entries(sectionMappings)) {
        console.log(
          `Scrolling to section: ${sectionId} for link text: ${linkText}`,
        );
        if (linkText === sectionText.toLowerCase()) {
          // !REMOVE
          e.preventDefault();
          scrollToSection(sectionId);
          return;
        }
      }

      // If no mapping is found, let the default navigation happen
    },
    [field.text, scrollToSection, sectionMappings],
  );

  return (
    <PrismicNextLink
      field={field}
      className={className}
      onClick={handleClick}
      {...props}
    />
  );
}
