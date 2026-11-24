
import "./App.css";
import { useState } from "react";
import games from "./data/games.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
    const [search, setSearch] = useState("");

    const filteredGames = games.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase()) ||
        game.platform.toLowerCase().includes(search.toLowerCase()) ||
        game.genre.toLowerCase().includes(search.toLowerCase()) ||
        (game.developer || "").toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <Header title="🎮 Salim's Game Collection" />

            <h2>Ontdek mijn favoriete games!</h2>
            <p className="intro">
                Mijn persoonlijke verzameling van games.
            </p>

            <input
                className="search-input"
                type="text"
                placeholder="Zoek op game, platform, genre of developer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <p className="game-count">
                Aantal gevonden games: {filteredGames.length}
            </p>

            <div className="game-list">
                {filteredGames.map((game) => (
                    <GameCard
                        key={game.id}
                        title={game.title}
                        platform={game.platform}
                        genre={game.genre}
                        rating={game.rating}
                        year={game.year}
                        image={game.image}
                        developer={game.developer}
                        multiplayer={game.multiplayer}
                    />
                ))}
            </div>

            {filteredGames.length === 0 && (
                <p className="no-results">
                    Geen games gevonden.
                </p>
            )}

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
