exports.install = function (Vue, options) {
    Vue.prototype._GlobaleNum = 0
    /**
     *@method returnTipsRenderFunc
     *@param {function} h 传入render的h函数
     *@param {object} columns 需要添加到tips中column的key值 和头信息
     *@param {string} params 当前行中所有的值
     *@param {object} rowContent 当前列中显示的内容
     *@param {object}  options 列中其他的属性
     *@description 用来自定义tooltip的样式
     */
    Vue.prototype.$returnTipsRenderFunc = function (h, columns, params, rowContent, options) {
        options = this.$isBlank(options) ? { parent: { tag: 'div' }, child: { tag: 'p' } } : options
        if (!options.child.attrs) {
            options.child.attrs = {
                transfer: true,
                placement: 'bottom-start',
                class: 'issue-table-row'
            }
        }
        var eleArr = []
        var eleObject = {}
        for (var key in columns) {
            eleObject[key] = h(options.child.tag, { slot: 'content' }, [h('h3', columns[key]), key])
            if (!this.$isBlank(key)) {
                eleArr.push(eleObject[key])
            }
        }
        eleArr.push(rowContent)
        return h(options.parent.tag, options.parent, [
            h('Tooltip', options.child,
                eleArr)
        ])
    }
    /**
     *@method isBlank
     *@param {string || object} h 传入render的h函数
     *@description 判断传入的值为空
     */
    Vue.prototype.$isBlank = function (v) {
        return v === null || v === undefined || v === ''
    }
    /**
     *@method getFormatDate
     *@param {string || object} date 日期的字符串或日期对象
     *@description 使用moment库获取想要的date格式
     */
    Vue.prototype.$getFormatDate = function (date, f) {
        if (this.$isBlank(date)) return ''
        date = new Date(date)
        f = this.$isBlank(f) ? 'YYYY-MM-DD' : f
        return isNaN(date.valueOf()) ? '' : moment(date).format(f)
    }
    /**
     *@method isBlank
     *@param {object} obj 自定义的object
     *@param {array} arr 空数组
     *@description 处理传入的数组
     */
    Vue.prototype.$getCombinedArr = function (obj, arr) {
        for (var key in obj) {
            var newObj = {}
            newObj.value = key
            newObj.label = obj[key]
            arr.push(newObj)
        }
    }
    /**
    *@method getDetailRouter
    *@param {object} obj 传入的obj
    *@description 跳转到正确的路由
    */
    Vue.prototype.$goToDetailRouter = function (obj) {
        var idNewStr = {}
        obj = !obj.row ? obj : obj.row
        if ((typeof obj._id == 'undefined')) {
            idNewStr = obj.id
        } else {
            idNewStr = obj._id
        }
        var queryParams = this.$store.state.query_params
        queryParams.id = idNewStr
        this.$router.push({ path: this.$route.path, query: queryParams })
    }
    /**
     *@method executeClickEvent
     *@param {object} curNode 组件的名称或者是DOM节点
     *@param {Number} index 当前table的行下标
     *@param {boolean} isDomEle 判断curNode传入的是组件对象还是DOM节点对象
     *@description 手动点击事件
     */
    Vue.prototype.$executeClickEvent = function (curNode, index, isDomEle) {
        isDomEle = this.$isBlank(isDomEle) ? false : true
        if (!isDomEle && curNode.$el.getElementsByClassName('ivu-table-row')[index]) {
            curNode.$el.getElementsByClassName('ivu-table-row')[index].click()
        } else if (isDomEle && curNode[index]) {
            curNode[index].click()
        }
    }
    /**
     *@method getCurModalDeatilData
     *@param {string} id 传入的路由的query id
     *@returns {object} 返回当前id列的数据以及其在表格中的位置
     *@description 返回detail modal中展示的数据
     */
    Vue.prototype.$getCurModalDeatilData = function (id, arr) {
        //新的服务器使用
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                arr[i].index = i
                return arr[i]
            }
        }
        //迁移后需废弃
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]._id === id) {
                arr[i].index = i
                return arr[i]
            }
        }
        var errorInfo = { index: -1, error: '你访问的id=' + id + '数据不存在' }
        return errorInfo
    }
    /**
    *@method showErrorDialog
    *@param {string} info 显示的error信息
    *@description iview中的自定义的error diloag
    */
    Vue.prototype.$showErrorDialog = function (info) {
        var self = this
        this.$Modal.error({
            title: 'Error Info',
            content: info,
            okText: '关闭',
            // onOk:function returnRightRouter(){
            //     self.$router.push(this.$route.path)
            //     console.log('this.$router.push(this.$route.path)')
            // }
        });
    }
    /**
   *@method refreshTable
   *@param {Object} resData 显示的error信息
   *@param {Function} initFun 增加数据，用来重新获取非表格中显示的数据数据，比如版本查询中的大版本号
   *@param {Array} tableData 表格绑定的数据
   *@description 在表单执行提交后，用来刷新视图
   */
    Vue.prototype.$refreshTable = function (resData, initFun, tableData) {
        // resData.data.publishDate = this.$getFormatDate(resData.data.publishDate)
        if (resData.isAdd) {
            this.$Message.success("恭喜,数据插入成功。")
            if (initFun) initFun();
            tableData.unshift(resData.data);
        } else {
            this.$Message.success("恭喜,数据修改成功。");
            _.forEach(tableData, function (v) {
                if (!v._id) {
                    if (v.id === resData.data.id) {
                        _.assign(v, resData.data);
                    }
                } else {
                    if (v._id === resData.data._id) {
                        _.assign(v, resData.data);
                    }
                }
            })
        }
    }
    //The method of handler array 
    /**
     *@method getEleArrayIndex
     *@param {Array} arr 传入的数组
     *@param {Stringy} value 传入的数组中的元素
     *@description 返回某个元素在数组中的下标
     */
    Vue.prototype.$getValArrayIndex = function (arr, value) {
        for (var i = 0, vlen = arr.length; i < vlen; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
    }
    //The method of transforming arr into str
    /**
     *@method getFormatStr
     *@param {Array} arr 传入的数组
     *@description 遍历传入的数组，将数组的每个元素换行组合并返回
     */
    Vue.prototype.$getFormatStr = function (arr) {
        var str = ''
        _.forEach(arr, function (v) {
            str = str + v + "\n"
        })
        return str
    }
    /**
     *@method getModifyData
     *@param {Object} initObj 输入前的数据
     *@param {Object} newObj 输入后的数据
     *@description 遍历传入输入前的数据，与输入后的数据对比，返回已经改变的数据
     */
    Vue.prototype.$getModifyData = function (initObj, newObj) {
        var obj = {}
        if (!initObj && !newObj) {
            return obj
        }
        for (var key in initObj) {
            if (initObj[key] !== newObj[key]) {
                obj[key] = newObj[key]
            }
        }
        return obj
    }
    /**
    *@method initCurRouter
    *@param {Object} obj 当前组件中data的所有值
    *@param {Object} params 当前路由的query参数
    *@description 初始化当前路由（将store中存储的路由query参数下发到相对应的data中）
    */
    Vue.prototype.$initCurRouter = function (obj, params) {
        _.forIn(obj, function (val, key) {
            for (var k in params) {
                if (key == k) {
                    obj[key] = (isNaN(params[k]) || !params[k]) ? params[k] : Number(params[k])
                }
            }
        })
    }
    /**
    *@method changeRouter
    *@param {Object} params 根据用户所选参数动态的改变当前路由
    *@description 根据页面所选则的相关参数，动态的改变路由
    */
    Vue.prototype.$changeRouter = function (params) {
        this.$store.commit('refreshScreen', false)
        this.$router.push({
            query: params
        })
    }
    /**
    *@method formatExcelData
    *@param {Array} data 当前表格所展示的数据
    *@description 将表格中的数据加上"",使数据的换行可以正确的显示在Excel表格里
    */
    Vue.prototype.$formatExcelData = function (data) {
        var arr = []
        var self = this
        var dateArr = ['createDate', 'fixedDate', 'reportDate']
        _.forEach(data, function (v) {
            for (var k in v) {
                //格式化日期
                if (dateArr.indexOf(k) > -1) {
                    v[k] = self.$getFormatDate(v[k], "YYYY-MM-DD HH:mm:ss")
                }
                if (typeof v[k] == 'string') {
                    v[k] = '"' + v[k].replace(/"/g, '""') + '"'
                }
            }
            arr.push(v)
        })
        return arr
    }
    /**
   *@method httpGetRequestFactory
   *@param {String} url 用户发送的url
   *@param {Array} initTable 展现在页面数据的数组初始值为[]
   *@param {String} dataFormate 展现日期格式的字符串
   *@param {Boolean} reqStatus 判断get请求是否成功
   *@description 用来发送Get请求,返回从服务器上得到的数据
   */
    Vue.prototype.$httpGetRequestFactory = function (url, tableData, dataFormate,status) {
        let dateArr = ['createDate', 'fixedDate', 'reportDate']
        let self = this
        dataFormate = this.$isBlank(dataFormate) ? '' : dataFormate
        this.$http.get(url)
            .then((response) => {
                if (response.status > 199 && response.status < 300) {
                    _.forEach(response.data, function (v) {
                        for (let key in v) {
                            if (dateArr.indexOf(key) > -1 ) {
                                v[key] = self.$getFormatDate(v[key])
                            }
                        }
                        tableData.push(v)
                    })
                    for(let k in status){
                        status[k] = true
                    }
                } else {
                    this.$Message.error(response.statusText)
                    console.log('test')
                }
            }).catch(function (response) {
                console.error("response")
            })
    }

}
