export const errorHandler = (result, res, data) => {
    if (result) {
        res.send(data);
    } else {
        res.status(400).json({ error: result });
    }
};
