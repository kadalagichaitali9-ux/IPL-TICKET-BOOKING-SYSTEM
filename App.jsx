import { useState } from "react";
import Hero from "./components/Hero.jsx";
import MatchCard from "./components/MatchCard.jsx";
import Navbar from "./components/Navbar.jsx";
import { matches, teams } from "./data/matches.js";

function App() {
    const [selectedTeam, setSelectedTeam] = useState("all");
    const visibleMatches = selectedTeam === "all"
        ? matches
        : matches.filter((match) => match.teams.includes(selectedTeam));

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <section className="schedule section" id="matches" aria-labelledby="matches-title">
                    <div className="container">
                        <div className="section-heading">
                            <div>
                                <p className="eyebrow">Find your match</p>
                                <h2 id="matches-title">Match Schedule</h2>
                                <p>Compare ticket prices and pick your matchday.</p>
                            </div>
                            <label className="filter-field" htmlFor="team-filter">
                                Filter by team
                                <select
                                    id="team-filter"
                                    value={selectedTeam}
                                    onChange={(event) => setSelectedTeam(event.target.value)}
                                >
                                    <option value="all">All teams</option>
                                    {teams.map((team) => (
                                        <option key={team} value={team}>{team}</option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {visibleMatches.length > 0 ? (
                            <div className="match-grid">
                                {visibleMatches.map((match) => (
                                    <MatchCard key={match.id} match={match} />
                                ))}
                            </div>
                        ) : (
                            <p className="empty-state" role="status">No matches found for this team.</p>
                        )}
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <p>&copy; 2026 IPL Tickets. Sample schedule and prices for demonstration.</p>
            </footer>
        </>
    );
}

export default App;
