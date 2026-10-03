

Hej,

Här är inspelningen av min React Todo-app där jag visar komponenterna App, Form och List, samt hur props, map, filter och state fungerar.
[https://funet-my.sharepoint.com/personal/3ggyhmu26_shouos_folkuniversitetet_nu/_layouts/15/stream.aspx?id=%2Fpersonal%2F3ggyhmu26%5Fshouos%5Ffolkuniversitetet%5Fnu%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FMicrosoftTeams%2Dvideo%2Emp4&referrer=Teams%2ETEAMS%2DELECTRON&referrerScenario=teamsSdk%5F5af6a76b%2D40fc%2D4ba1%2Daf29%2D8f49b08e44fd%5Fns%2Dbim]





Med vänliga hälsningar,
Osama

# Todo App

A simple Todo App built with React.

## Features

* Add new todos
* Display todos
* Mark todos as done
* Remove todos

## Technologies

* React
* JavaScript
* CSS
* Vite

## React concepts

This project is created to practice:

* `useState`
* `map()`
* `filter()`
* Spread operator
* Event handling
* Form handling

## Run the project

```bash
npm install
npm run dev
```
1. Frågor om koden
State-hantering

Jag använder useState för att hålla reda på mina todos och texten i inputfältet. Varje todo har ett id, text och done som visar om uppgiften är klar. När state uppdateras med till exempel setTodos renderar React komponenterna igen och gränssnittet visar den nya datan.

Oföränderlighet (Immutability)

I React ska jag inte ändra den befintliga arrayen direkt med till exempel .push(), eftersom React behöver upptäcka att state har fått ett nytt värde. När jag lägger till en todo skapar jag därför en ny array med spread operator ...todos. När jag tar bort en todo använder jag filter(), som skapar en ny array utan den valda uppgiften.

2. Kodgranskning

Funktionen använder .push() och ändrar den befintliga todos-arrayen direkt. Det är inte ett bra sätt att uppdatera state i React eftersom arrayen behåller samma referens. Jag skulle istället skapa en ny array och använda setTodos, till exempel:

function addTodo(text) {
  setTodos([...todos, { id: Date.now(), text, done: false }]);
}

På det sättet ändrar jag inte den gamla arrayen utan skapar en ny array som React kan upptäcka och rendera om.

3. Problemlösning & Reflektion

När jag körde fast försökte jag först läsa felmeddelandet och kontrollera min egen kod steg för steg. Ett konkret problem var att jag inte kunde skriva i inputfältet efter att jag flyttat formuläret till en egen komponent. Jag upptäckte att text och setText måste skickas från App till Form som props. Jag använde även AI för att förklara varför props och funktioner skickas mellan parent- och child-komponenter, och testade sedan själv lösningen i min app.




## Author

Osama Shousha
