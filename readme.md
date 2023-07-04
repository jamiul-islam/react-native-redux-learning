**first in the store.js**,
1. create reducer
2. create store

**then in the app.tsx, to connect the store with the whole app,**

3. wrap the whole app in the provider component
4. then, complete counterSlice function
5. give the name of the slice
6. set an initial value
7. add action functions in the reducer
8. export the action functions
9. export the counter value
10. export the reducer from the slice

**then, in tab one screen,**

11. trigger any action created in the slices using useDispatch hook
12. useSelector hook to show the state in UI

