<template>
    <el-form-item :label="label">
        <el-select @change="PickerChange" v-model="pickValue" :placeholder="placeholder" :readonly="readonly">
            <el-option v-for="(item,index) in selectData" :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </el-form-item>
</template>

<script>
import axios from "axios"
export default {
    props:{
        // 自定义下拉框数据
        pickData:{
            default(){
                return []
            },
            type:Array
        },
        // 表单label
        label:{
            default:"",
            type:String
        },
        // 默认选中项
        defaultValue:{
            default:"",
            type:String
        },
        // 声明使用哪个节点下的数据作为下拉框数据（pickData为空的时候有效）
        node:{
            default:"0",
            type:String
        },
        // 表单placeholder
        placeholder:{
            default:"请选择",
            type:String
        },
        // 是否为只读模式
        readonly:{
            default:false,
            type:Boolean
        },
    },
    computed:{
        selectData(){
            if(this.pickData.length > 0){
                return this.pickData;
            }else{
                return this.nodePickData;
            }
        }
    },
    created(){
        this.pickValue = this.defaultValue;
        this.getDictList();
    },
    data(){
        return{
            pickValue:"",
            nodePickData:[],
        }
    },
    methods:{
        PickerChange(){
            this.$emit('change',this.pickValue);
        },
        getDictList(){
            axios.get('/js/dict.json').then(res=>{
                if(res.data.code == 200){
                    res.data.data.forEach(item=>{
                        if(item.parentId == this.node){
                            this.nodePickData.push({
                                label:item.name,
                                value:item.code
                            })
                        }
                    })
                    console.log(this.nodePickData)
                }else{
                    console.error("数据请求异常")
                }
            })
        }
    }
}
</script>
<style scoped>

</style>