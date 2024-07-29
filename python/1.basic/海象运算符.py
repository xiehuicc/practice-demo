prompt = "Entry a city name:"

while True:
  city = input(prompt)
  if city =='quit':
    break;
  else:
    print(f"I'd like to go to {city.title()}")