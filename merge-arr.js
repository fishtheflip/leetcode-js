const merge = (nums1, m, nums2, n) =>{
    const firstArr = []
    const secArr = []
    for (let i = 0; i < m; i++) {
        firstArr.push(nums1[i])
        
    }
    for (let i = 0; i < n; i++) {
        secArr.push(nums2[i])
    }
    return [...firstArr, ...secArr].sort((a,b)=> a - b)
};