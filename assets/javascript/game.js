$(document).ready(function () {

    var randomNumber;
    var wins = 0;
    var losses = 0;
    var totalScore;

    var crystal = [
        $('#d-one'),
        $('#d-two'),
        $('#d-three'),
        $('#d-four')
    ];

    function startNewGame() {
        totalScore = 0;
        $('.total-score')
            .empty()
            .append(totalScore);

        randomNumber = [Math.floor(Math.random() * (120 - 19 + 1 + 19))];
        $('.random-number')
            .empty()
            .append(randomNumber);

        for (var i = 0; i < crystal.length; i++) {
            varRandomValue = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
            crystal[i].attr('crystal', varRandomValue);
            console.log("random " + varRandomValue);
            console.log(crystal);
        }
    }

    startNewGame();

    $('.wins').append(wins);
    $('.losses').append(losses);

    $(".diamond-image").on("click", function () {
        console.log("i was clicked");
        var storedCrystalValue = $(this).attr("crystal");
        console.log("hi " + storedCrystalValue);
        storedCrystalValue = parseInt(storedCrystalValue);
        console.log("hi " + storedCrystalValue);
        totalScore = totalScore += storedCrystalValue;
        $(".total-score")
            .empty()
            .append(totalScore);
        console.log("total score " + totalScore);

        if (totalScore == randomNumber) {
            wins++;
            console.log("youwin");
            $(".wins")
                .empty()
                .append(wins);
            startNewGame();
        }

        else if (totalScore > randomNumber) {
            losses++;
            console.log("youlose");
            $(".losses")
                .empty()
                .append(losses);
            startNewGame();
        }
    });
});