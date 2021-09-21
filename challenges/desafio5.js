const atores = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  { $match: { $and: [
    { countries: "USA" },
    { "tomatoes.viewer.rating": { $gte: 3 } },
    { cast: { $in: atores } },
  ] } },
  { $project: {
    _id: 0,
    num_favs: { $size: { $setIntersection: [atores, "$cast"] } },
    "tomatoes.viewer.rating": 1,
    title: 1,
  } },
  { $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 } },
  { $project: { title: 1 } },
  { $skip: 24 },
  { $limit: 1 },
]);
