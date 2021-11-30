// eslint-disable-next-line no-unused-vars
exports.handler = async () => {
  console.log("Starting create operation");
  return {
    statusCode: 200,
    statusMessage: "Create operation successful",
    body: JSON.stringify({
      name: "Air Canada",
      focusCities: ["Halifax", "Ottawa"],
      hubs: ["Calgary", "Montreal", "Toronto", "Vancouver"],
      frequentFlyerProgram: "Aeroplan",
      AOC: {
        Canada: "5262",
        UnitedStates: "ARNF245C",
      },
      fleetSize: 159,
      destinations: 222,
      country: "Canada",
    }),
  };
};
