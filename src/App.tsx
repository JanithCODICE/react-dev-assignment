import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routing/router";

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  );
}

export default App;
