export function parseQueryParams(queryString) {

    const params = new URLSearchParams(queryString

    );

    const result = {};

    for (const [key, value] of params.entries()) result[key] = value;

    return result;
}