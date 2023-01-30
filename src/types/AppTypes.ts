export interface Budget {
    _id: string;
    title: string;
}

export interface Entry {
    _id: string;
    account: string;
    amount: number;
    budget: string;
    category: string;
    date: string;
    description: string;
}
