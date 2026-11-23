
import "./App.css";
import { useState } from "react";
import games from "./data/games.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {

    const [search, setSearch] = useState("");

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
                            genre={game.genre}
                            rating={game.rating}
                            year={game.year}
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
