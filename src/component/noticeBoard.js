import React, { Component } from 'react'
import Notice from './notice'
import '../component-less/noticeBoard.less'

class NoticeBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urlList: [
                {
                    url: 'https://yz.chsi.com.cn/kyzx/yxzc',
                    host: 'https://yz.chsi.com.cn',
                    title: '研招网',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjsy.nwnu.edu.cn/2713/list.htm',
                    host: 'http://yjsy.nwnu.edu.cn',
                    title: '西北师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjsy.jsnu.edu.cn/sszs/list.htm',
                    host: 'http://yjsy.jsnu.edu.cn/sszs',
                    title: '江苏师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://zsb.ynnu.edu.cn/articlelist.aspx?id=24',
                    host: 'http://zsb.ynnu.edu.cn',
                    title: '云南师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjsy.hunnu.edu.cn/index.php/cms/item-list-category-24.shtml',
                    host: '',
                    title: '湖南师范大学',
                    encodeType: 'gbk'
                },
                {
                    url: 'http://www.yz.gxnu.edu.cn/html/sublist_9.htm',
                    host: 'http://www.yz.gxnu.edu.cn',
                    title: '广西师范大学',
                    encodeType: 'gb2312'
                },
                {
                    url: 'http://yjsc.gznu.edu.cn/list.jsp?urltype=tree.TreeTempUrl&wbtreeid=1091',
                    host: 'http://yjsc.gznu.edu.cn/',
                    title: '贵州师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjsc.hainnu.edu.cn/html/zhaoshenggongzuo/gongzuoxinxi/',
                    host: '',
                    title: '海南师范大学',
                    encodeType: 'gbk'
                },
                {
                    url: 'http://yz.ahnu.edu.cn/4472',
                    host: '',
                    title: '安徽师范大学',
                    encodeType: 'gb2312'
                },
                {
                    url: 'http://yjs.ccsfu.edu.cn/zsgz/zsjz.htm',
                    host: 'http://yjs.ccsfu.edu.cn',
                    title: '长春师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjs.hznu.edu.cn/tkyjszs/',
                    host: 'http://yjs.hznu.edu.cn/tkyjszs',
                    title: '杭州师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjsc.sicnu.edu.cn/p/23/',
                    host: '',
                    title: '四川师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://master.lnnu.edu.cn/webroot/master/qrzxs/',
                    host: 'http://master.lnnu.edu.cn',
                    title: '辽宁师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://graduate.cqnu.edu.cn/zsgz/gonggao/Index.html',
                    host: 'http://graduate.cqnu.edu.cn',
                    title: '重庆师范大学',
                    encodeType: 'gb2312'
                },
                {
                    url: 'http://yjs.synu.edu.cn/',
                    host: 'http://yjs.synu.edu.cn',
                    title: '沈阳师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjsc.mnnu.edu.cn/zsgz/tzsss.htm',
                    host: 'http://yjsc.mnnu.edu.cn',
                    title: '闽南师范大学',
                    encodeType: 'utf-8'
                },
                {
                    url: 'http://yjs.gnnu.cn/4791/list.htm',
                    host: 'http://yjs.gnnu.cn',
                    title: '赣南师范大学',
                    encodeType: 'utf-8'
                }
            ]
        }
    }

    render () {
        let noticeList = this.state.urlList.map(item => {
            return <Notice url={item.url} host={item.host} key={item.host} title={item.title} encodeType={item.encodeType}/>
        })

        return (
            <div className="notice-board">
                {noticeList}
            </div>
        )
    }
}

export default NoticeBoard