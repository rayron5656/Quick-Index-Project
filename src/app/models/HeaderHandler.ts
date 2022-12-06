export function HeaderHandler(chooseHeaders:any,allHeaders : any[]) : any[] {
    const h : any[] = [];
    
    for (const key in chooseHeaders) {
        if (chooseHeaders[key] == true) {
            allHeaders.forEach(element => {
                if (element.name == key) {
                    h.push(element);
                }

            });
        }
    };
    return h;
}