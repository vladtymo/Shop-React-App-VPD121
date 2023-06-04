import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { useContext } from "react";
import { CounterContext } from "../contexts/counter.context";

export function Layout() {
    const { count } = useContext(CounterContext);

    return (
        <div className="App">
            <header>
                <h1>Our Logo! {count > 0 ? '+' : ''}{count}</h1>
                <Menu />
            </header>

            {/* active route element */}
            <Outlet />
        </div>
    );
}