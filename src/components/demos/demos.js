const demos = [
  'basic/grid1',
  'basic/grid2',
  'basic/grid3',
  'basic/grid4',
  'basic/grid5',
  'basic/grid6',
  'basic/icon',
  'plugins/timeline1',
  'plugins/timeline2',
  'basic/extend1',
  'basic/extend2',
  'basic/button1',
  'basic/button2',
  'form/input1',
  'form/input2',
  'form/input3',
  'form/input4',
  'form/input5',
  'form/input6',
  'form/radio1',
  'form/radio2',
  'form/radio3',
  'form/radio4',
  'form/switch1',
  'form/switch2',
  'form/switch3',
  'form/switchlist1',
  'form/switchlist2',
  'form/switchlist3',
  'form/switchlist4',
  'form/checkbox1',
  'form/checkbox2',
  'form/checkbox3',
  'form/checkbox4',
  'form/rate1',
  'form/rate2',
  'form/form1',
  'form/form2',
  'form/form3',
  'form/form4',
  'form/form5',
  'form/form6',
  'dataplugins/datepicker1',
  'dataplugins/datepicker2',
  'dataplugins/datepicker3',
  'dataplugins/datepicker4',
  'dataplugins/datepicker5',
  'dataplugins/datepicker6',
  'dataplugins/datepicker7',
  'dataplugins/datepicker8',
  'dataplugins/daterangepicker1',
  'dataplugins/daterangepicker2',
  'dataplugins/daterangepicker3',
  'dataplugins/daterangepicker4',
  'dataplugins/daterangepicker5',
  'dataplugins/daterangepicker6',
  'dataplugins/datetimepicker1',
  'dataplugins/datetimepicker2',
  'dataplugins/datetimepicker3',
  'dataplugins/datetimepicker4',
  'dataplugins/datetimepicker5',
  'dataplugins/datetimepicker6',
  'dataplugins/datetimepicker7',
  'dataplugins/datetimepicker8',
  'dataplugins/datetimepicker9',
  'dataplugins/select1',
  'dataplugins/select2',
  'dataplugins/select3',
  'dataplugins/select4',
  'dataplugins/select5',
  'dataplugins/select6',
  'dataplugins/select7',
  'dataplugins/select8',
  'dataplugins/select9',
  'dataplugins/timepicker1',
  'dataplugins/timepicker2',
  'dataplugins/timepicker3',
  'dataview/loading1',
  'dataview/loading2',
  'dataview/pagination1',
  'dataview/pagination2',
  'dataview/pagination3',
  'dataview/pagination4',
  'dataview/pagination5',
  'dataview/pagination6',
  'message/message1',
  'message/message2',
  'message/message3',
  'message/message4',
  'message/message5',
  'message/message6',
  'message/modal1',
  'message/modal2',
  'message/modal3',
  'message/modal4',
  'message/modal5',
  'message/modal6',
  'message/modal7',
  'message/modal8',
  'message/modal9',
  'message/modalTest',
  'message/notice1',
  'message/notice2',
  'message/notice3',
  'message/notice4',
  'message/notice5',
  'message/notice6',
  'message/tooltip1',
  'message/tooltip2',
  'message/tooltip3',
  'message/tooltip4',
  'message/tooltip5'
]

const components = {};

for (let d of demos) {
  components[d] = () =>
    import (`./${d}`)
}

export default components

// export default {
//   grid1: resolve => require(['./grid1'], resolve),
//   grid2: () => import(`./${''}grid1`),
//   grid3: () => import('./grid3'),
//   grid4: r => require.ensure(['./grid4'], () => r(), 'test'),
//   grid5: r => require.ensure([], () => r(require('./grid5')), 'test'),
//   grid6: r => require.ensure([], () => r(require('./grid6')), 'test'),
//   icon: r => require.ensure([], () => r(require('./icon')), 'test'),
//   timeline1: r => require.ensure([], () => r(require('./timeline1')), 'test'),
//   timeline2: r => require.ensure([], () => r(require('./timeline2')), 'test'),
//   extend1: r => require.ensure([], () => r(require('./extend1')), 'test'),
//   extend2: r => require.ensure([], () => r(require('./extend2')), 'test'),
// }
