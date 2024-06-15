const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/zyanken/:hand", (req, res) => {
    const hands = ["グー", "チョキ", "パー"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerHand = hands[randomIndex];
    const userHand = req.params.hand;

    let result = "";

    try {
        if (computerHand === userHand) {
            result = "あいこ";
            res.json({result: result, computerHand: computerHand});
        } else if ((computerHand === "グー" && userHand === "チョキ") ||
                    (computerHand === "チョキ" && userHand === "パー") ||
                    (computerHand === "パー" && userHand === "グー")) {
            result = "あなたの負け";
            res.json({result: result, computerHand: computerHand});
        } else {
            result = "あなたの勝ち";
            res.json({result: result, computerHand: computerHand});
        }
    } catch (e) {
        console.log(e);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
