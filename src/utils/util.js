    //正则提取标签内容
    function htmlParse(str) {
        //去掉span标签
        let spanBeginReg = new RegExp("<span([^<]*)>",'gi')
        let spanEndReg = new RegExp("</span>",'gi')
        // let reg = new RegExp("<(?!p|/p).*?>","gi") //只留下p标签        
        // str = str.replace(reg,"")
        str = str.replace(spanBeginReg,"")
        str = str.replace(spanEndReg,"")
        let nbspReg = new RegExp("&nbsp;",'gi')
        str = str.replace(nbspReg,'')
        //匹配><标签，提前内容
        let pReg = new RegExp(">([^<]+)<",'gi')
        let strList = str.match(pReg)
        strList = strList.map(item => {
            let str = item.substr(1)
            str = str.substr(0,str.length - 1)
            return str
        })
        var imgReg = /<img.*?(?:>|\/>)/i;
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        var srcStr = str.match(imgReg)
        let src = null
        if(srcStr != null) {
          src = srcStr[0].match(srcReg)[1]
        }
        return [strList,src]   //返回文本内容列表和image的src地址
    }

    function removeTags(str) {
          //去掉所有标签
          let reg = new RegExp("<[^>]*>",'gi')
          str = str.replace(reg,"")
          return str
    }

    module.exports  = {
        htmlParse:htmlParse,
        removeTags:removeTags,
    }