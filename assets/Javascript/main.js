/*
Button gives 5 random cards out of 52

Two randomizers, one for card number, one for suit

Array of all cards


*/

function cardRandomizer(){
    cardHand = [];
    while (cardHand.length < 5){
        var value = Math.floor(Math.random() * 13) + 2;
        var suit = Math.floor(Math.random() * 4);

        switch (value){
            case 14:
                value = "A";
                break;

            case 13:
                value = "K";
                break;

            case 12:
                value = "Q";
                break;
            
            case 11:
                value = "J";
                break;

            default:

        };

        switch (suit){
            case 0:
                suit = "S";
                break;

            case 1:
                suit = "C";
                break;

            case 2:
                suit = "D";
                break;

            case 3:
                suit = "H";
                break;

            default:

        };

        var card = (value + suit);

        cardHand.push(card);
        console.log(cardHand);
    };
    

    $.each(cardHand, function(index, val){

        var cardNumber = (index + 1);
        var cardSelector = cardNumber.toString();
        console.log(cardSelector);
        console.log("cardSelector is " + typeof cardSelector);

        var cardHref = ("./assets/images/" + val + ".png");
        console.log(cardHref);
        console.log("cardHref is " + typeof cardHref);

        $(".card-" + cardSelector).attr("src", cardHref);
    });
};