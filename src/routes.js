import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Pricing from "./components/Pricing/PricePage";
import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./components/Contact/ContactForm";

function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Navbar/>} >
                    <Route index element = {<App/>}/>
                    <Route path="/pricing" element ={<Pricing/>}/>
                    <Route path="/contact" element ={<ContactForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;