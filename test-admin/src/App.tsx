import authProvider          from "./authProvider";
import dataProvider          from "./dataProvider";
import { Admin, Resource }   from "react-admin";
import { GoodsList }         from '../components/GoodsList/GoodsList';
import { ProductShow }       from '../components/ProductShow/ProductShow';


export const App = () => (
<Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="goods" list={GoodsList} show={ProductShow}/>
  </Admin>
);
