import "./app.scss";

import ShoppingCartProvider from "./contexts/ShoppingCartProvider";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";

const App = () => {
    return (
        <ShoppingCartProvider>
            <Header/>
            <Main/>
            <Footer/>
        </ShoppingCartProvider>
    );
};

export default App;