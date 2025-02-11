export interface ListGenresResponse {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}
export interface Result {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
