## Interfaces
This project implements interfaces as required by the specs using the prop-types construct.
Both the wizard component and the wizard steps implement prop-types that drive both the flow and structure of the project.

## Structure
The top level component gives an array of components that represent the wizard steps 
to the wizard component as a prop.
The wizard is a reusable component that is not concerned with the content, shape or layout of 
the wizard steps, and manages the rendering of these components through actions that represent 
navigating back and forth through the array of wizard step components

## State
Local state was used for each wizard step to persist changes as per user input.  
The GetWizard component demonstrates the implementation using functional components with hooks.
Initial state is loaded from the relevant slice of state in wizardContext that is passed in as a prop.  
This starts out as empty state the first time each wizard step is loaded, then is updated
as per user input. Hence, the wizard builds the state from an initial empty state object to fully
populated object by the last step.

## Flow
When user clicks next to navigate to subsequent wizard step, a prop function is called that communicates
the local state to the top level component.  The local state is merged into the top level state and
passed down to parent wizard component which in turn passes updated state to all wizard steps.
The final wizard step displays all slices of state in one view and prompts user for confirmation at 
which point the user can switch to label maker view. 

## Label Maker View
The top level component responds to the complete action from the wizard by toggling the view 
from wizard to make label view.  The top level state is passed to the label view as a prop. 
Clicking on the Make another label button toggles the complete status and renders the first wizard
step.

## Validation
Simple validation is implemented that ensures all fields are filled.  If any fields remain
empty the next navigation button/action is disabled.

## Styling
Styled components was used as the styling framework of choice.  It offers a self-contained styling
solution, that avoids namespace styling conflicts and gives styling a semantic declarative approach.

## To do's
Given more time the following improvements can be implemented:
All wizard steps can be converted to functional components that leverage the new hooks feature to
manage local state.  The GetWeight step is in functional component form using setState to persist and update state as 
mentioned above. The other wizard steps can be converted in a similar fashion.
Validation can be more elaborate, and go beyond the simple required field validation.

## Instructions
Clone the project
Navigate into project root directory
Run 'npm install'
Run 'npm start'



 

