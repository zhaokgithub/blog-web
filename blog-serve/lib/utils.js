/**
 * @Description:
 * @author zhaokai
 * @date 2019/11/9
 */
let formatNormalRes = function(res={}){
    if(res){
        res.success = true;
        res.code = 0;
        return res;
    }else {
        return {
            success:true,
            code:0
        }
    }
};

module.exports = {
    formatNormalRes:formatNormalRes
}