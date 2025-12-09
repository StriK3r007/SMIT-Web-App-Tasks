let totalScore = 0
let wickets = 0
let balls = 0

function bat() {
    var runs = Math.floor(Math.random() * 7);
    balls++;
    totalScore += runs;
    document.getElementById('runs').innerHTML = `${runs}`;
    document.getElementById('balls').innerHTML = `${balls}/60`;
    if (runs === 0){
        document.getElementById('out').innerHTML = `${totalScore}`;
        wickets++;
        document.getElementById('wickets').innerHTML = `${wickets}/10`;
    };

    if (wickets == 10){
        document.getElementById('button').setAttribute('disabled', 'disabled');
        document.getElementById('wickets').innerHTML = `${wickets}/10 Entire team got out at ${totalScore}`;
    }
    if (balls == 60){
        document.getElementById('button').setAttribute('disabled', 'disabled');
        document.getElementById('balls').innerHTML = `${balls}/60 Innings Ended`;
    }

    document.getElementById('score').innerHTML = totalScore;
}