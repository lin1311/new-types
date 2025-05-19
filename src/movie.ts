export class Movie {
    title: string;
    year: number;
    country: string;
    genre: string;
    duration: string;

    constructor(title: string, year: number, country: string, genre: string, duration: string) {
        this.title = title;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.duration = duration;
    }

    toString(): string {
        return `${this.title} (${this.year})\nСтрана: ${this.country}\nЖанр: ${this.genre}\nПродолжительность: ${this.duration}`;
    }
}

export class Cart {
    items: Movie[] = [];

    addItem(item: Movie): void {
        this.items.push(item);
    }

    displayCart(): void {
        this.items.forEach(item => console.log(item.toString()));
    }
}