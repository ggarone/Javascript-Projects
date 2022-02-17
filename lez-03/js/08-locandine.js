let films = [
    {
        titolo: 'El Camino',
        durata: 122,
        anno: 2019,
        locandina: 'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg',
        genere: 'Drammatico',
        attori: ["Aaron Paul", "Jonathan Banks", "Matt Jones"]
    },

    {
        titolo: 'Avatar',
        durata: 162,
        anno: 2009,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
        genere: 'Fantascienza',
        attori: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver']
    },

    {
        titolo: 'The Wold of Wall Street',
        durata: 180,
        anno: 2013,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
        genere: 'Biography',
        attori: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie']
    },

    {
        titolo: 'Interstellar',
        durata: 162,
        anno: 2014,
        locandina: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        genere: 'Sci-Fi',
        attori: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
    },
]


// from js obj -> json
let mioJSON = JSON.stringify(films[0]);
console.log(mioJSON);
// from json -> obj
let filmJSON = '{"Title":"The Prestige","Year":"2006","Rated":"PG-13","Released":"20 Oct 2006","Runtime":"130 min","Genre":"Drama, Mystery, Thriller","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan, Christopher Priest","Actors":"Christian Bale, Hugh Jackman, Scarlett Johansson","Plot":"After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.","Language":"English","Country":"United States, United Kingdom","Awards":"Nominated for 2 Oscars. 6 wins & 45 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.5","imdbVotes":"1,276,545","imdbID":"tt0482571","Type":"movie","DVD":"13 Feb 2007","BoxOffice":"$53,089,891","Production":"N/A","Website":"N/A","Response":"True"}';
let mioOBJ = JSON.parse(filmJSON);
console.log(mioOBJ);

