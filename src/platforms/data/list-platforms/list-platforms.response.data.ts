export interface ListPlatformsResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    image:            null;
    year_start:       number | null;
    year_end:         null;
    games:            Game[];
}

export interface Game {
    id:    number;
    slug:  string;
    name:  string;
    added: number;
}
