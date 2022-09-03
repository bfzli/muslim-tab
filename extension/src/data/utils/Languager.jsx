const Languager = (current) => {
    let mode = current;

    switch (mode) {
        case "english":
            mode = "shqip";
                break;

        default:
            mode = "english";
                break;
    }

    return mode;
}

export default Languager;