import { useState, useEffect } from "react";

export enum ScreenSize {
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
}

const getMatches = (query: string): boolean => {
  // Prevents SSR issues
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return false;
};

/**
 * Check if screen size is smaller or equal to given query
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    let matchMedia: null | MediaQueryList;

    if (typeof window !== "undefined") {
      matchMedia = window.matchMedia(query);
    }

    // Triggered at the first client-side load and if query changes
    handleChange();

    if (matchMedia !== null) {
      // Listen matchMedia
      if (matchMedia.addListener) {
        matchMedia.addListener(handleChange);
      } else {
        matchMedia.addEventListener("change", handleChange);
      }
    }

    return () => {
      if (matchMedia !== null) {
        if (matchMedia.removeListener) {
          matchMedia.removeListener(handleChange);
        } else {
          matchMedia.removeEventListener("change", handleChange);
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export default useMediaQuery;
