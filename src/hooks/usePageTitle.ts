import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Code Envision Technologies`
      : "Code Envision Technologies | AI, SaaS & Custom Software Development";
  }, [title]);
};

export default usePageTitle;
