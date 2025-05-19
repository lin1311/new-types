import { Movie, Cart } from './movie';

describe('Movie', () => {
    it('should create a movie object', () => {
        const movie = new Movie("Мстители", 2012, "США", "Фантастика, боевик, фэнтези, приключения", "137 мин.");
        expect(movie.title).toBe("Мстители");
        expect(movie.year).toBe(2012);
        expect(movie.country).toBe("США");
        expect(movie.genre).toBe("Фантастика, боевик, фэнтези, приключения");
        expect(movie.duration).toBe("137 мин.");
    });

    it('should return correct string representation', () => {
        const movie = new Movie("Мстители", 2012, "США", "Фантастика, боевик, фэнтези, приключения", "137 мин.");
        const expectedString = "Мстители (2012)\nСтрана: США\nЖанр: Фантастика, боевик, фэнтези, приключения\nПродолжительность: 137 мин.";
        expect(movie.toString()).toBe(expectedString);
    });
});

describe('Cart', () => {
    it('should add a movie to the cart', () => {
        const cart = new Cart();
        const movie = new Movie("Мстители", 2012, "США", "Фантастика, боевик, фэнтези, приключения", "137 мин.");
        cart.addItem(movie);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toBe(movie);
    });

    it('should display cart items', () => {
        const cart = new Cart();
        const movie = new Movie("Мстители", 2012, "США", "Фантастика, боевик, фэнтези, приключения", "137 мин.");
        cart.addItem(movie);
        const expectedOutput = "Мстители (2012)\nСтрана: США\nЖанр: Фантастика, боевик, фэнтези, приключения\nПродолжительность: 137 мин.";
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        cart.displayCart();
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
        consoleSpy.mockRestore();
    });
});