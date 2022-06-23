import { useRouter } from "next/router";

export const useGetPath = () => {
    const location = useRouter();
    console.log(location);
    const locationReplaceDashes = location.asPath.replace(/-/g, " ");
    const path = locationReplaceDashes.replace(/(^\/+|\/+$)/gm, "").split("/");
    const breadcrumbs = path.map((pathSegment) => pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1));
    return breadcrumbs;
};
