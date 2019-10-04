// export const fetchBench = (id) => {
//     return (
//         $.ajax({
//             method: "GET",
//             url: `api/benches/${id}`
//         })
//     )
// };
//maybe add later
export const createBench = bench => {
    return (
        $.ajax({
            method: "POST",
            url: 'api/benches',
            data: { bench }
        })
    )
};

export const fetchBenches = () => {
    return (
        $.ajax({
            method: "GET",
            url: 'api/benches'
        })
    )
};
