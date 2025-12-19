// This is what I have learned while getting to know about
// Enums.

// Enums helps us define constant values in our javascript
// code for better type checking and documentation in our project.

// Example
enum FinancialCondition {
    Poor = "Poor",
    MiddleClass = "MiddleClass",
    UpperMiddleClass= "UpperMiddleClass",
    UpperClass="UpperClass",
    FinancialyIndepended  = "Financial Independent"
}

const currentCondition: FinancialCondition = FinancialCondition.MiddleClass;

// Let's hope so
const upcomingCondition: FinancialCondition = FinancialCondition.FinancialyIndepended;


// By default if we don't name the enum values with string
// It assigns the values with the incrementing value

enum MentalState {
    Relaxed,
    Stressed,
    FullRetard
}


// MentalState.Relaxed will have a value as 0
// MentalState.Stressed will have a value as 1
// MentalState.FullRetard will have a value as 2


// During compiling it to Javascript it converts the 
// existing code as.

// I have changed the name of MentalState to MentolState
// As it is throwing errors on my code editor.
let MentolState;
(function(MentolState: any) {
    MentolState[MentolState["Relaxed"] = 0] = "Relaxed";
    MentolState[MentolState["Stressed"] = 1] = "Stressed";
    MentolState[MentolState["FullRetard"] = 2] = "FullRetard"
})(MentolState || (MentolState = {}))