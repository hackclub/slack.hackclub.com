export function getEmailQueryParam(): string | null {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("email")
}