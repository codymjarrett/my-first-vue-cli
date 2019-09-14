primative and reference types

primative types : strings, bools, number
reference: object and arrays

passing an object/array as a prop just passings a reference of the original data. Editing data in one component will change in all components

primative types changed in a component only affects that one component not the others. 

***Events*** can be used to make primative types act as reference types where when a child component changes something it will emit an event to the parent, rerender, and let the other child components know that a change has been made.

on the child component use the `$emit` method to send an event up tothe parent.

The ***event bus** allows you to talk between child components without going through parent component

life cylce hooks

new Vue()

 -- beforeCreate
        instantance observes data
        init events

-- created
        fires when the component is created,
        fetch data

-- beforeMount

-- mounted 
        access to the DOM for manipulation

-- beforeUpdate
        fire code before the component updates

-- updated
        fire code after update,
        access to updated data

--destroyed
        fire code before destroyed
        clean up listeners 
