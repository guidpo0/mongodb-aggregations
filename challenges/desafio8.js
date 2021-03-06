db.air_alliances.aggregate([
  { $unwind: "$airlines" },
  { $lookup: {
    from: "air_routes",
    let: { airlines: "$airlines" },
    pipeline: [
      { $match: { $and: [
        { airplane: { $in: ["747", "380"] } },
        { $expr: { $eq: ["$airline.name", "$$airlines"] } },
      ] } },
    ],
    as: "airline_detail",
  } },
  { $group: {
    _id: "$name",
    totalRotas: { $sum: { $size: "$airline_detail" } },
  } },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]);
