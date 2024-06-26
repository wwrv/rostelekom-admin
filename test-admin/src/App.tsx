import { Admin, Resource } from "react-admin";
import authProvider        from "./authProvider";
import dataProvider        from "./dataProvider";
import { GoodsList }       from '../components/GoodsList/GoodsList';

export const App = () => (
<Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="goods" list={GoodsList} />
  </Admin>
);
