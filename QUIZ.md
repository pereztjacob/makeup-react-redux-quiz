Makeup Redux/Redux Quiz
===

Implement a pets list with detail view in react/redux.

* Normal PR like a Lab
* Open Dev (Internet, your prior work, docs)
* **135 minutes**!
* You _will_ need to bootstrap your own project!
* Install any need/desired depenencies

## Routes

Your app should offer the following routes:

* `/` (default) Displays a welcome greeting and a link to `/pets`
* `/pets` displays:
    1. `Pets` component which shows a list of pets
    1. `Pets` contains an `AddPet` component for adding a pet.
    1. After adding a pet, navigates to the appropriate pet detail route 
* `/pets/:id` displays:
    * `Pet` detail view of a single pet. 
    * It should offer a delete button that removes the pet (navigate back to list view).

## Data

All data can be local and temporary. This means you do **not** need to deal with asychronicity. 
You can hard-code initial seed data in `createStore` or in the `pets` reducer if you wish.

Your pet should have at lest:
* `name`
* `animal`
* `description`

You should assign your pet objects and `id` that is used to uniquely identifiy each pet.

## Testing

* Unit test reducers and actions!
