export interface Animal {
    name: string;
    breederName?: string;
    ownerName?: string;
    sex?: string;
    birthDate?: string;
    landOfBirth?: string;
    size?: string;
    weigth?: string;
    color?: string;
    titles?: string;
    features?: string;
}

export interface User {
    name?: string;
    username: string;
    contact?: string;
    city?: string;
    address?: string;
    isBreeder?: false,
    latitude?: string;
    longitude?: string;
}

export interface Filters {
    rangeMinWeight?: any;
    rangeMaxWeight?: any;
    breed?: string;
    color?: string;
    lanOfStanding?: string;
}