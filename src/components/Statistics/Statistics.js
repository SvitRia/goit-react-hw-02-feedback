
export const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
        <div>
            <h2>Ctatistics</h2>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positiv Feedback: {percent}%</span>
        </div>
    )
}