import { Button } from "./FeedbackOptions.styled"
export const Feedbackoptions = ({onFeedback, good, neutral, bad}) => {
    return (
        
        <div>
            <h2>Please leave feedback</h2>
            <Button name = {good} onClick = {(evt) => onFeedback(evt.target.name)}>Good</Button>
            <Button name={neutral} onClick = {(evt) => onFeedback(evt.target.name)}>Neutral</Button>
            <Button name={bad} onClick = {(evt) => onFeedback(evt.target.name)}>Bad</Button>

    </div>
)
}