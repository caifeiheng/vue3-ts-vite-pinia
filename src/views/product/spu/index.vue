<template>
  <div>
      <!-- 三级分类 -->
      <Category :scene="scene"></Category>
      <el-card style="margin:10px 0px">
          <!-- v-if|v-show:都可以实现显示与隐藏 -->
          <div v-show="scene == 0">
              <el-button :disabled="categoryStore.c3Id?false:true"  type="primary" size="default" icon="Plus" @click="addSpu">添加SPU</el-button>
              <!-- 展示已有SPU数据 -->
              <el-table style="margin: 10px 0px;" border :data="records">
                  <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
                  <el-table-column label="SPU名称" prop="spuName"></el-table-column>
                  <el-table-column label="SPU描述" prop="description" show-overflow-tooltip></el-table-column>
                  <el-table-column label="SPU操作">
                      <!-- row:即为已有的SPU对象 -->
                      <template #="{ row, $index }">
                          <el-button type="primary" size="small" icon="Plus" title="添加SKU"
                            @click="addSku(row)" ></el-button>
                          <el-button type="primary" size="small" icon="Edit" title="修改SPU"
                            @click="amendSup(row)"  ></el-button>
                          <el-button type="primary" size="small" icon="View" title="查看SKU列表"
                            @click="findSku(row)"  ></el-button>
                          <el-popconfirm :title="`你确定删除${row.spuName}?`" width="200px" @confirm="deleteSpu(row)">
                              <template #reference>
                                  <el-button type="primary" size="small" icon="Delete" title="删除SPU" ></el-button>
                              </template>
                          </el-popconfirm>

                      </template>
                  </el-table-column>
              </el-table>
              <!-- 分页器 -->
              <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[3, 5, 7, 9]"
                  :background="true" layout="prev, pager, next, jumper,->,sizes,total" :total="total"
                  @current-change="getHasSpu" @size-change="changeSize"/>
          </div>
          <!-- 添加SPU|修改SPU子组件 -->
          <SpuForm ref="spu" v-show="scene == 1" @changeScene="changeScene"></SpuForm>
          <!-- 添加SKU的子组件 -->
          <SkuForm ref="sku" v-show="scene == 2" @changeScene="changeScene"></SkuForm>
          <!-- dialog对话框:展示已有的SKU数据 -->
          <el-dialog v-model="show" title="SKU列表">
                <el-table border :data="skuArr">
                    <el-table-column label="SKU名字" prop="skuName"></el-table-column>
                    <el-table-column label="SKU价格" prop="price"></el-table-column>
                    <el-table-column label="SKU重量" prop="weight"></el-table-column>
                    <el-table-column label="SKU图片">
                        <template #="{ row, $index }">
                            <img :src="row.skuDefaultImg" style="width: 100px;height: 100px;">
                        </template>
                    </el-table-column>
                </el-table>
            </el-dialog>
      </el-card>
  </div>
</template>

<script setup lang="ts">
//引入category仓库
import {useCategoryStore} from '@/stores/modules/category'
//引入请求数据接口
import { getSpuData,getSkuData,removeSpu} from '@/api/product/spu';
//引入返回数据的ts类型
import type {Records,AllSkuData,SkuData} from '@/api/product/spu/type'
//引入方法
import { ref, watch, onBeforeUnmount } from 'vue';
//引入分类的仓库
import { ElMessage } from 'element-plus';
//引入sku、spu组件
import SkuForm from './skuForm.vue'
import SpuForm from './spuForm.vue'
//引入spu数据类型
import type {SpuData} from '@/api/product/spu/type'
let categoryStore = useCategoryStore()
//场景的数据
let scene = ref<number>(0); //0:显示已有SPU  1:添加或者修改已有SPU 2:添加SKU的结构
//分页器默认页码
let pageNo = ref<number>(1);
//每一页展示几条数据
let pageSize = ref<number>(3);
//存储已有的SPU的数据
// //存储已有SPU总个数
let total = ref<number>(0);
//存储全部的SKU数据
let records = ref<Records>([]);
//生命变量接收DOM示例
let spu = ref()
let sku = ref()
//存储全部的SKU数据
let skuArr = ref<SkuData[]>([]);
let show = ref<boolean>(false);
//监听3id的变化获取数据
watch(()=>categoryStore.c3Id,()=>{
  //当三级分类发生变化的时候清空对应的数据
  records.value = [];
  if(!categoryStore.c3Id) return
  getHasSpu()
})
//封装获取spu数据方法
const getHasSpu = async (page = 1)=>{
  pageNo.value = page
  let result =  await getSpuData(pageNo.value,pageSize.value,categoryStore.c3Id)
  if(result.code == 200){
    total.value = result.data.total
    records.value = result.data.records
  }else{
    ElMessage.error(result.message)
  }
  
}
//分页器下拉菜单发生变化的时候触发
const changeSize = () => {
  getHasSpu();
}
//添加新的SPU按钮的回调
const addSpu = () => {
    //切换为场景1:添加与修改已有SPU结构->SpuForm
    scene.value = 1;
    //点击添加SPU按钮,调用子组件的方法初始化数据
    spu.value.initAddSpu(categoryStore.c3Id);
}
//点击修改spu回调
const amendSup = (row:SpuData)=>{
  scene.value = 1
  spu.value.getSpu(row)
  
}
//点击添加sku回调
const addSku = (row:SpuData)=>{
  scene.value = 2
  sku.value.initSkuData(categoryStore.c1Id,categoryStore.c2Id,row)
}
//子组件SpuForm绑定自定义事件:目前是让子组件通知父组件切换场景为0
const changeScene = (obj: any) => {
    //子组件Spuform点击取消变为场景0:展示已有的SPU
    scene.value = obj.flag;
    if (obj.params == 'update') {
        //更新留在当前页
        getHasSpu(pageNo.value);
    } else {
        //添加留在第一页
        getHasSpu();
    }
}

//查看SKU列表的数据
const findSku = async (row: SpuData) => {
  let result: AllSkuData = await getSkuData((row.id as number));
  if (result.code == 200) {
      skuArr.value = result.data;
      //对话框显示出来
      show.value = true;
  }     
}

//删除已有的SPU按钮的回调
const deleteSpu = async (row: SpuData) => {
  let result: any = await removeSpu((row.id as number));
  if (result.code == 200) {
      ElMessage({
          type: 'success',
          message: '删除成功'
      });
      //获取剩余SPU数据
      getHasSpu(records.value.length > 1 ? pageNo.value : pageNo.value - 1)
  } else {
      ElMessage({
          type: 'error',
          message: '删除失败'
      })
  }
}

//路由组件销毁前，情况仓库关于分类的数据
onBeforeUnmount(() => {
  categoryStore.$reset();
})
</script>

<style scoped></style>