<template>
  <div style="width:70%;margin:50px auto">
    <div class="time">
      <div>
        <span>日期：</span>
        <el-date-picker
          v-model="timea.value3"
          type="year"
          placeholder="年份"
          clear-icon="el-icon-circle-close"
        ></el-date-picker>
        <el-date-picker
          v-model="timea.value2"
          type="month"
          placeholder="月份"
          clear-icon="el-icon-circle-close"
        ></el-date-picker>
      </div>
      <div>
        <el-button type="primary">搜索</el-button>
        <el-button>清空</el-button>
        <el-button type="primary">新建</el-button>
      </div>
    </div>
     
    <FullCalendar
        showNonCurrentDates="false"

      defaultView="dayGridMonth"
      locale="zh-cn"
      firstDay="1"
      weekNumberCalculation="ISO"
      :eventTimeFormat="evnetTime"
      @dateClick="handleDateClick"
      :plugins="calendarPlugins"
      :events="calendarEvents"
      :weekends="true"
      
      :fixedWeekCount="true"
      :header="header"  
       @eventClick="handleEventClick"
        >
    </FullCalendar>

  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
// import {formatDate} from "./time.js";
export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      time: new Date(),
      timea: {
        value2: "",
        value3: ""
      },
      calendarPlugins: [dayGridPlugin, interactionPlugin],
      header: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      evnetTime: {
        hour: "numeric",
        minute: "2-digit",
        hour24: false
      },
      calendarEvents: [{ title: "部门会议", start: new Date() }]
    };
  },
created(){
  this.time = new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ": " +
        new Date().getSeconds();

},
  methods: {
  //  handleDateClick(arg) {
  //               if(arg.dateStr < this.evnetTime){
  //                   window.console.log(arg.dateStr)
  //                   window.console.log(this.time)
  //                 alert("您不能创建")
  //               }else{
  //                 alert("您可以创建")
  //               }
          
                
  //  }}
   handleDateClick(arg) {
            if (confirm('您是否要在' + arg.dateStr + this.time + '添加一个新的事件?')) {
                this.calendarEvents.push({ // add new event data
                  title: '新的事件',
                  start: arg.date,
                  allDay: arg.allDay
                })
            }
              window.console.log(111111111)

        },
        handleEventClick(info) {
            alert('Event: ' + info.event.title);
            info.el.style.borderColor = 'red';
              window.console.log(info.event.title)
              window.console.log(111111111)
        }
    }
  
};
</script>
<style lang="less" scoped>
.time {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>