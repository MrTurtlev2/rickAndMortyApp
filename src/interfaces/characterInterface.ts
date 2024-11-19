interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

interface Location {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharactersListInterface {
    fetchCharactersStatus: string,
    info: Info;
    characters: Character[];
}
