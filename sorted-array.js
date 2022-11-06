const deleteDuplicates = (head) => {
    if(head.length === 0) return head
    let i = 0
    let j = 1
    while(j <head.length){
        if(head[j] !== head[i]){
            i++
            head[i] = head[j]
            j++
        } else {
            j++
        }
    }
    return i + 1
};