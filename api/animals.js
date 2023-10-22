const example_data = [
    {name: "Tiger", color: "yellow"}, 
    {name: "Parrot", color: "red"},
    {name: "Turtle", color: "green"},
    {name: "Wombat", color: "brown"},
  ]

export default (request, response) => {
    return response.json({animals: example_data});
}