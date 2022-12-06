export function handleVars(vars : any) : string[]{
    var mockVars = vars;
    for (let i = 0; i < mockVars.length; i++) {
        var splited = mockVars[i].trim();
        mockVars[i] = splited;
    }
    console.log(mockVars);
    return mockVars;
}