export const AcquisitionsAPI = {

    search:() => 'url',

    searchContent: (params: Record<string, string>)=> {
        const query = new URLSearchParams(params).toString();
        return `url?${query}`;
    }
}