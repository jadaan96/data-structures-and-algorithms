const {
  sortYear,
  sortTitle,
  compareYear,
  compareTitle,
} = require("./Comparisons");
const test = [
  {
    title: "The Chronicles of Zephyr",
    year: 2020,
    genres: ["fantasy", "adventure"],
  },
  {
    title: "Midnight Echoes",
    year: 1990,
    genres: ["horror", "thriller"],
  },
  {
    title: "Galactic Odyssey",
    year: 2005,
    genres: ["sci-fi", "action", "adventure"],
  },
  {
    title: "A Tale of Whispers",
    year: 2023,
    genres: ["drama", "mystery"],
  },
  {
    title: "Legends of the Azure Sea",
    year: 2021,
    genres: ["adventure", "fantasy"],
  },
];

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(test);
    const sortedYears = movies.map((m) => m.year);
    const expectedYears = [2023, 2021, 2020, 2005, 1990];
    expect(sortedYears).toEqual(expectedYears);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(test);
    const sortedTitles = movies.map((m) => m.title);
    const expectedTitles = [
      "The Chronicles of Zephyr",
      "Galactic Odyssey",
      "Legends of the Azure Sea",
      "Midnight Echoes",
      "A Tale of Whispers",
    ];
    expect(sortedTitles).toEqual(expectedTitles);
  });

  it("compareYear function correctly compares movie years", () => {
    const yearOne = { year: 2000 };
    const yearTwo = { year: 2001 };
    const result = compareYear(yearTwo,yearOne );
    expect(result).toBeLessThan(0);
  });

  it("compareTitle function correctly compares movie titles", () => {
    const titleOne = { title: "Galactic Odyssey" };
    const titleTwo = { title: "Legends of the Azure Sea" };
    const result = compareTitle(titleOne, titleTwo);
    expect(result).toBeLessThan(0);
  });
});
