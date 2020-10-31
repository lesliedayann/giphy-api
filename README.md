##Giphy searcher

The giphy searcher app allows you to find whatever gif you want with the help of Giphy API.

"GIPHY is an animated GIF search engine. The GIPHY API is a series of JSON read endpoints that allow you to integrate the features of GIPHY's search engine into your project or app."

## Technical stack

For the app, we are using the following tech stack:

- [Giphy API](https://developers.giphy.com/)
- [Fortawesome](https://fontawesome.com/) _v5.14.0_
- [node-sass](https://www.npmjs.com/package/node-sass) _v4.14.1_

# Functional Requirements

1.Search bar: Implement search functionality with any of the

- Search bar with button: As a user I want to perform a search for gifs from text and after pressing the search button
- Search bar: As a user I want to perform a search for GIFs from text after press enter key.
- Real-time search bar: As a user, I want to search for gifs in real time from the third character I type.
- Note: Filter by SFW

#

Search bar with button: CTA with "click" event to activate a function taht calls the fetch API

Search bar: To perform a search in real time, first, with a "keyup" event, the input value is evaluated that at least 3 characters are , if the condition is true, it activates a debounce function to force the fetch function to wait a certain amount of time to be executed

Search bar: The "keyup" event evaluates that the keyup typed belongs to Enter

Filter by SWF, Ghiphy API has the option to filter by rating. Rating values:

- G: Content that is appropriate for all ages and people.
- PG: Content that is generally safe for everyone, but may require parental preview before children can watch.
- PG-13: Mild sexual innuendos, mild substance use, mild profanity, or threatening images. May include images of semi-naked people, but DOES NOT show real human genitalia or nudity.
- R: Strong language, strong sexual innuendo, violence, and illegal drug use; not suitable for teens or younger. NO NUDITY.

2. GIFs grid. As a user I want to visualize the gifs that I am going to find in a grid as shown in the wireframe.

   To display the gifst results the CSS Grid Layout was used.
   CSS Grid Layout is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces.

3. Save favorites. As a user I want to save my favorite gifs.
   The Giphy Searcher app is capable to save the gifs that user wants as "favorite" in localSotorage:
   "Web storage object localStorage allow to save key/value pairs in the browser."
   The user could add and remove "n" number of gifs as many times as he wants.
   localstorage limit:
   5120KB is the default storage size for an entire domain.
   However, the size of this storage area can be customized by the user (so a 5MB storage area is not guaranteed, nor is it implied) and the user agent (Opera, for example, may only provide 3MB - but only time will tell.)
   The gif's ID will be saved in localStorage

4. Filter by favorites: As a user I want to use a filter to see my favorite gifs.
   To achieve this requirement, a CTA with "click" event was implemented to activate a function that searches in localstorage for the IDS of the previously saved gifs to convert them to a string separated by "," and perform a fetch to the API.

# Use Cases

1. When the users types on search input, clicks on search button or types enter, a gifs grid with the result will be displayed.

- If status response is not ok, a user message will be displayed.

- If no gif is found, a user message will be displayed.

2. When the user adds a gif as favorite, the gif's ID will be saved in local storage

- if the gif is already in localsotorage, the gif will be removed from the user's favorite list

3. When the user clicks on "My Gifs" button a grid with the user's favorite gifs will be displayed

- if the user does not have any favorite gif saved, a user message will be displayed
- if the gif's ID does not exists anymore, a user message will be displayed##Giphy searcher

4. When the user clicks on any gif, a modal will be shown with the gif clicked and its title
