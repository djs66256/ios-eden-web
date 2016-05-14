import routes from "../app/mainRoutes";
// import stores from "../app/mainStores";
import renderApplication from "./renderApplication";

renderApplication(routes, null/*stores*/, {
	timeout: 600
});
