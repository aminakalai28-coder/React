
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {

    const [search, setSearch] = useState("");

    const games = [
        {
            id: 1,
            title: "Minecraft",
            platform: "PC"
        },
        {
            id: 2,
            title: "Mario Kart",
            platform: "Nintendo Switch"
        },
        {
            id: 3,
            title: "Rocket League",
            platform: "PlayStation 5"
        },
        {
            id: 4,
            title: "GTA V",
            platform: "PlayStation 5"
        },
        {
            id: 5,
            title: "The Legend of Zelda",
            platform: "Nintendo Switch"
        },
        {
            id: 6,
            title: "Fortnite",
            platform: "PC"
        },
        {
            id: 7,
            title: "EA Sports FC 26",
            platform: "PlayStation 5"
        }
    ];

    return (
        <div className="container">
            <Header title="🎮 Game Collection" />

            <h2>Welkom bij mijn Game Collection!</h2>

            <input
                className="search-input"
                type="text"
                placeholder="Zoek een game..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="game-list">
                {games
                    .filter((game) =>
                        game.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((game) => (
                        <GameCard
                            key={game.id}
                            title={game.title}
                            platform={game.platform}
                        />
                    ))}
            </div>

            <div className="student-info">
                <p>Naam: Salim Akalai</p>
                <p>Klas: 25B</p>
                <p>Studentnummer: 2238463</p>
            </div>

            <Footer />
        </div>
    );
}

export default App;
