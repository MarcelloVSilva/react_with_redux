export const addToCart = (item) => {
    console.log("item add", item);
    return {
        type: "add",
        item
    };
}