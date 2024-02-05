export function getProjectIdFromURL(defaultValue = 9717) {
    if (typeof window !== 'undefined') {

        const currentURL = new URL(window.location.href);
        const pathSegments = currentURL.pathname.split("/");
    
        const projectIndex = pathSegments.findIndex(
            (segment) => segment === "proyecto"
        );
    
        if (projectIndex !== -1 && pathSegments.length > projectIndex + 1) {
            return Number(pathSegments[projectIndex + 1]);
        }
    }

    return defaultValue;
}