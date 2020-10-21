type FindOption = "Many" | "One";

export interface IQueryConfig {
    type: FindOption,
    
}

interface QueryArguments {
    limit?: number,
    offset?: number,
    
}