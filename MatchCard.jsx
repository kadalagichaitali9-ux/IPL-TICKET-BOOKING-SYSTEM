function MatchCard({ match }) {
    const [homeTeam, awayTeam] = match.teams;

    return (
        <article className="match-card">
            <p className="match-number">{match.number}</p>
            <h3>{homeTeam} <span>vs</span> {awayTeam}</h3>
            <p className="match-details">
                <time dateTime={match.dateTime}>{match.dateLabel}</time>
                <span>{match.venue}</span>
            </p>
            <dl className="price-list">
                {match.prices.map((price) => (
                    <div className="price-item" key={price.category}>
                        <dt>{price.category}</dt>
                        <dd>{price.amount}</dd>
                    </div>
                ))}
            </dl>
        </article>
    );
}

export default MatchCard;
