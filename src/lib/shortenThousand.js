function shortenThousand(amount) {
    if (amount >= 10000) return Number.parseInt(amount / 1000) + 'k';
    else return amount;
}

export default shortenThousand;
