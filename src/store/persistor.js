import {persistStore} from "redux-persist";
import store from "./index";

let persistor = persistStore(store);

export default persistor