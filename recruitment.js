// Complete the alternatingCharacters function below.

function alternatingCharacters(s) {
    const item = s;
    let newItem = item.split("");
    let string = "";
    let numberOfDeletions = 0;

    if (newItem.length > 0) {
        let prev = newItem[0];
        string += prev
        for (let i = 1; i < newItem.length; i++) {
            let cur = newItem[i];
            if (cur != prev) {
                string += cur;
                prev = cur;
            } else {
                numberOfDeletions += 1;
            }
        };

        console.log(`New Item ===> ${string}`);

        console.log(`${numberOfDeletions} deletions`);

    };
    return numberOfDeletions;
}

const String = "babaaab"; // input string
alternatingCharacters(String);