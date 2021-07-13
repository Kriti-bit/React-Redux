export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id // equivalent to id: id
    }
}