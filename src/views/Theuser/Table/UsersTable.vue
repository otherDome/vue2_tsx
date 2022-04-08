<template>
  <div>
    <el-table
      :data="tableData"
     
      stripe
      tooltip-effect="dark"
      size="mini"
      show-summary
      style="width: 100%"
      class="tableBox"
      :row-style="iRowStyle"
      :cell-style="iCellStyle"
      :header-row-style="iHeaderRowStyle"
      :header-cell-style="iHeaderCellStyle"
      :row-class-name="tableRowClassName"
    >
      <el-table-column show-overflow-tooltip   type="selection" width="55"></el-table-column>
      <el-table-column show-overflow-tooltip   label="详情" :show-header="false" type="expand">
        <template slot-scope="scope">
          <div style="padding: 0 15px 15px 15px; box-sizing: border-box">
            <h6 style="padding: 8px 0; box-sizing: border-box">编号:12987123</h6>
            <el-descriptions class="margin-top" :column="3" size="mini" border>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  用户名
                </template>
                kooriookami
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-mobile-phone"></i>
                  手机号
                </template>
                18100000000
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-location-outline"></i>
                  居住地
                </template>
                苏州市
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  备注
                </template>
                <el-tag size="small">学校</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-office-building"></i>
                  联系地址
                </template>
                江苏省苏州市吴中区吴中大道 1188 号
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip   prop="id" label="ID" width="100"></el-table-column>
      <el-table-column show-overflow-tooltip   :show-header="false" :render-header="atteLeavetooltip" label="姓名">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount1" sortable label="数值 1"></el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount2" sortable label="数值 2"></el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount3" sortable label="数值 3"></el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount4" sortable label="数值 4"></el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount5" sortable label="数值 5"></el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount6" sortable label="数值 6"></el-table-column>
      <el-table-column show-overflow-tooltip   prop="amount7" sortable label="数值 7"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="mini" class="btmmini">查看</el-button>
          <el-button type="text" size="mini" class="btmmini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="datasize">
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class UsersTable extends Vue {
  protected tableData: any = [
    {
      id: "12987122",
      name: "王小虎",
      amount1: "234",
      amount2: "3.2",
      amount3: 10,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987123",
      name: "王小虎",
      amount1: "165",
      amount2: "4.43",
      amount3: 12,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987124",
      name: "王小虎",
      amount1: "324",
      amount2: "1.9",
      amount3: 9,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987125",
      name: "王小虎",
      amount1: "621",
      amount2: "2.2",
      amount3: 17,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
    },
  ];
  protected currentPage4: number = 1;
  protected handleClick(row: any) {
    console.log("rowrow", row);
  }
  protected atteLeavetooltip(h: any, { column }: any) {
    return [
      column.label,
      h(
        "el-tooltip",
        {
          props: {
            content: "这是提示文案",
            placement: "top",
          },
        },
        [
          h(
            "span",
            {
              class: "el-icon-question",
              style: "color:#409EFF;"
            }
          )
        ]
      ),
    ];
  }
  protected handleSizeChange(val: any) {
    console.log(`每页 ${val} 条`);
  }
  protected handleCurrentChange(val: any) {
    console.log(`当前页: ${val}`);
  }
  protected iRowStyle({ row, rowIndex }: any) {
    return "height:20px;padding:0px";
  }

  protected iHeaderRowStyle({ row, rowIndex }: any) {
    return "height:20px;padding:0px";
  }

  protected iCellStyle({ row, rowIndex }: any) {  //行内
    var bgstyle = 'height:22px;padding:0px;font-size:13px;line-height: 22px;'
    if (rowIndex % 2 == 0) {
      bgstyle += 'background: rgb(238 250 255 / 80%);'
    }
    if (rowIndex % 2 !== 0) {
      bgstyle += 'background: rgb(238 250 255 / 30%);'
    }
    return bgstyle
  }

  protected iHeaderCellStyle({ row, rowIndex }: any) {
    return "height:20px;padding:0px; background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);";  //头部标题
  }

  protected tableRowClassName({ row, rowIndex }: any) {
    if (rowIndex === 1) {
      return 'warning-row';
    } else if (rowIndex === 3) {
      return 'success-row';
    }
    return '';
  }
}
</script>
<style lang="scss" scoped>
.tableBox {
}
.linshiwen {
  display: flex;
}
.descriptionssl {
  padding: 15px;
  box-sizing: border-box;
}
.datasize {
  width: 100%;
  display: flex;
  padding: 18px 0 0 0;
  box-sizing: border-box;
  justify-content: space-between;
  justify-content: center;
}
.tableBox {
  border-radius: 5px;
  box-shadow: #ebeef5 0px 0px 13px;
  color:#515151;
}
.btmmini{
  font-size: 12px;
  padding:0;
}
.isbtnshod{
  box-shadow: #ebeef5 0px 0px 13px;
}
</style>
