# Test Project One

This is a test project that I created for an application. I enjoyed working on this project and have decided to upload it to my GitHub.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript preset.

## Getting Started

To run the project locally, follow these steps:

1. Install the dependencies by running `npm install`.
2. Start the development server with `npm start`. The project will be available at `localhost:3000`.


## Available Commands

You can use the following commands:

- `npm start`: Starts the development server and runs the project locally.
- `npm test`: Runs the tests for the project.

## Assignment

The assignment details can be found in the assignment folder.


## Where I Deliberately Broke the Rules

1. I took longer than the assigned 1 hour for this test project, spending approximately 5-7 hours on it. The extra time was dedicated to setup (including configuring a Steam Deck for development), writing tests, deploying the result and writing this README.
2. The assignment mentioned that the result should roughly resemble the design. However, I aimed to implement it exactly as per the layout, deviating only when I identified possible errors in the designer's work (e.g., the padding of the tile).
3. There was ambiguity regarding the grey rectangle around the icon and text: whether it was meant to be a tile or it was just part of a screenshot with a grey background. I deduced that it should be a tile based on the minimal border radius (approximately 2px). Due to time constraints (working on a Sunday with Monday being a public holiday), I did not have the opportunity to seek clarification. In a real-world project, I would ensure a clear understanding of the requirements and ask questions if needed.

I am capable of working within tight time constraints. However, if economically feasible, I will spend as much time as necessary to deliver high-quality results.

## Approach to Solving the Assignment

### Considerations Before Implementation

Before starting the implementation, I spent time contemplating the following:

1. How to place the hand inside the circle?
   - I decided to position the hand at the top of the circle and then rotating the entire circle, including the hand. This approach works well when dealing with values ranging from 0 to the maximum value. To achieve this, I utilized both the rotate and transform: rotate() CSS properties (Move it back with one of the properties and then forward with the other with a value between 0 and maxValue). While this may not be a conventional approach, it simplifies the calculations by not having to subtract at the end. An alternative approach would involve introducing another parent element and applying the transform: rotate property to both. However, I opted not to pursue this approach.
2. How to position the min and max limiters on the outside of the circle?
   - To achieve this, I utilized absolute positioning and the transform: rotate property.
3. Project setup considerations
   - I chose to use Create React App because of my familiarity with React compared to Vue or Angular. Alternatively, I could have used Next.js or set up a custom webpack configuration, but these options seemed less favorable.
4. Test-driven development (TDD)
   - I decided against TDD for this project since I was uncertain about the implementation details. Instead, I leveraged the help of AI to generate some of the tests at the end.

### Noteworthy Implementation Details

During the implementation, I made the following choices and improvements:

1. Enabled absolute imports for better code organization. Refer to the [Create React App documentation](https://create-react-app.dev/docs/importing-a-component/#absolute-import) for more details.
2. Used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
3. Moved the Tile component inside the `libs/ui` directory to promote reusability. Typically, UI libraries are created or used to facilitate reuse across the project.
4. Implemented error handling in the TemperatureIcon component. It now displays an error if the maxValue is smaller than the minValue. Additionally, if the value exceeds the maxValue or falls below the minValue, it is automatically limited to the defined range without displaying an error.
5. Utilized React.memo for the TemperatureIcon component. Since it performs calculations and renders HTML elements without dynamic behavior, which means the same input always produces the same output, the calculations for subsequent renders can be skipped, as long as the props don't change. While this can be considered a form of pre-optimization, it probably improves performance in certain scenarios.
6. Switched to CSS modules to scope CSS styles to their respective components, enhancing maintainability and preventing style conflicts.
7. Tested the project in both Chrome and Firefox to ensure cross-browser compatibility.
8. Wrote tests for every component, focusing on functionality rather than CSS, which should be tested using end-to-end CSS regression tests (which I didn't create for this project).
9. Moved the TemperatureIcon component inside an `icons` folder to accommodate potential future additions of more icons and improve organization.
10. Restructured the default project structure created by Create React App, including the placement and naming of `global.css` and the positioning of the `App` component.
11. Utilized the [Ubuntu](https://fonts.google.com/specimen/Ubuntu) font for the text, which I believe matches the font used in the layout (though I cannot confirm this with certainty).

### Retrospective - Areas for Improvement

Upon reflection, the following areas could be improved:

1. The alignment of the limiters with the min and max values may appear slightly off due to pixelation issues. Exploring alternative methods for creating these elements could potentially resolve this.
2. The error text appears differently sized on my computer in Firefox and Chrome. This could be related to font rendering issues specific to Linux or Flatpak.
3. Writing end-to-end tests would provide additional test coverage and ensure the integrity of the entire application.

## Contact

If you have any questions, please feel free to contact me at test-project-1@fabianletsch.de.
