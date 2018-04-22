export interface Animal {
    id: number;
    name: string;
    breed?: string;
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
    id: number;
    name?: string;
    username: string;
    contact?: string;
    city?: string;
    address?: string;
    isBreeder?: false,
    latitude?: string;
    longitude?: string;
}