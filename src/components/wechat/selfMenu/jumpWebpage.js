//@flow
import React,{ Component } from 'react'
import { View } from 'react-web-dom'
import { Card, Input } from 'antd'
import styles from './index.css'

type Props = {}
type State = {
    approve:boolean
}

export default class JumpWebpage extends Component<Props,State>{
    state = {
        approve:false
    }
    render(){
        const { approve } = this.state
        return(
            <Card>
                <View className={styles.cardView}>
                    <p>订阅者点击该子菜单会跳到以下链接</p>
                    <View className={styles.jumpWebpageView}>
                        <span>页面地址</span>
                        <Input
                            disabled={!approve}
                            defaultValue="认证后才可手动输入地址"
                            style={{ width:282 }}
                        />
                    </View>
                    <a>从公众号图文消息中选择</a>
                </View>
            </Card>
        )
    }
}
