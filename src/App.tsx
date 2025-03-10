import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/config/routing/router";
import { setUser } from "./app/store/reducers/user.slice";
import { AuthResponse } from "./app/types/interfaces/response/auth-response-dto";

function App() {

  let userData = JSON.parse(localStorage.getItem("USER_SESSION_KEY") ?? "{}");
    if (Object.keys(userData).length > 0) {
      let loginData: AuthResponse = {
        email: userData.email,
        name: userData.name,
        id: userData.id,
        status: userData.status,
        session: userData.session
      };
      store.dispatch(setUser(loginData));
    }

  return (
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  );
}

export default App;
