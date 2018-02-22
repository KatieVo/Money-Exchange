// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {'H':50, 'Q':25, 'D':10, 'N':5, 'P':1};
    var res = {};
    if (currency >10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    for (var key in exchange) {
        if (currency/exchange[key] >= 1) {
            res[key] = Math.floor(currency/exchange[key]);
            currency = currency%exchange[key];
            if (!currency) {
                break;
            }
        }
    }
    return res;
}
