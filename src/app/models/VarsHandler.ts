export function handleVars(vars : string[]) : string[]{
    let mockVars = vars;
    for (let i = 0; i < mockVars.length; i++) {
        var splited = mockVars[i].trim();
        mockVars[i] = splited;
    }
    return mockVars;
}