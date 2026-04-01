firstly setup vite app remove all default structure.
after thinking how to start, as i need components again and again like in searchbar i need to fetch again thats not perfect for optmization i use usecontext to call api once and use everywhere as i want.
setting up the usecontext
created ProductContext
created ProductProvider
created error and loading state
created handleFetchProducts function to fetch data fetch data using api i am using webapi fetch as axios is compromised yesterday fetching in try catch block also i added finally to final loading after getting data now calling the handleFetchProducts inside useeffect and setting dependency empty as it is one api call project its okay to fetch data in useeffect but if it was large then i would use react query. 
returning values products error and loading
wrapping provider into app.jsx so every component i wrap into app.jsx can use this product context.
okay i tested productcontext its working with help of logging in
creating products component
now destructuring values
now setting some conditonal if product in fetching state i mean in pending isLoading true then returning a simple message <h2>Loading products...</h2> if any error came during api call returing error message <h2>{error}</h2>
and last condition i will set if not getting the products from product context or products.length === 0 so returning a simple message <h2>No products found</h2>
now to show in creating product list component before this creating search bar component.
created searchbar.jsx component added input there.
taking query from user as input.
now work on product list component by default search query is empty.
so i filter like searchquery is empty show all products.
adding in case sensitive filter with lower case from searchquery.
now creating seperate ui making easy to show if user type something on searchquery get value then show only filterproducts so i assign this value to showproduct variable and it hold all value now as condition.
now if searchquery have some text and nothing in products i will show a message 
simple return no products found with the help of ternary operator.
********css part*****
now i will add css classes to style this i will use flexbox for resposiveness then continue to set media screen later for mobile and tablet.
focusing on css now first removing browser default by setting margin padding to 0 now hiding the scrollbar by using display none property wrapped this two things on index.css or global.css.
now creating the styles folder and creating products.css inside that folder to seprate result of all styles if its large scale app i prefer tailwind.
importing products.css in main.jsx file to update style globally.
improvement added alternative for image if api not send image alt will show.
added all classes well structured created card added css.
added transform property traslate to y on product card hover also added box shadow.
make responsive for mobile phone write mediascreen width 500px and for tablet write media screen for width 800px or 1400px.
now adding css for searchbar make it responsive.
adding searchbar.css file still making seperate for readiblity.
now creating the repo on github.

*******key to be improved tn this project****
while searching,we can add debounce functionality so with every keypress backend not hit only wait with delay what we proviode.
for now products array length is 20 if it is more or big we can add pagination by getting first index and last index then with the help of slice method show them as how many products we show in one page.
if api taking time to render products we can set lazy loading and set suspense or can show a skeleton like something coming here in mean time.
we can add loading animation for better user interface.
we can add toastify errors for better ui.