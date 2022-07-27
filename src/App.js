import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  return (
    <div className="App bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
        Component composition in React
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        Using component composition helps to avoid repeating code, basically
        giving you a template in which you can pass in whatever you like, not
        just props.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        Without composition, we're limited in that we can only dynamically alter
        elements of the components via props. add a card component, but use
        seperate closing tags instead of making it self closing.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        Anything we put inside these tags is known as the children of the
        component - so if we add props.children to the card component, anything
        we write inside the component tags will be rendered within and as part
        of the card component.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        So this allows us to reuse components easily, passing anything we like
        into them simply by not making them self closing tags and interpolating
        the children keyword into the component itself.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <Card title="Card 1" content="this is card one!" links="card 1 links" />
        <Card title="Card 2" content="this is card two!" links="card 2 links">
          <p>Hi there, i'm child data!</p>
          <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            And i'm a button lol
          </button>
        </Card>
      </div>
    </div>
  );
}

export default App;

//Card component
const Card = (props) => {
  return (
    <div class="w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md">
      <div>
        <h1 class="mt-2 text-2xl font-semibold text-gray-800">{props.title}</h1>
        <p class="mt-2 text-sm text-gray-500 ">{props.content}</p>
      </div>
      {props.children}
      <div>
        <div class="flex items-center mt-2 text-gray-700">
          <span>{props.links}</span>
        </div>

        <div class="flex items-center justify-center mt-4"></div>
      </div>
    </div>
  );
};
