import React, { useState, useEffect } from 'react'
import {
  SchemaForm,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/antd'
import {
  Input,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  NumberPicker,
  TimePicker,
  Upload,
  Switch,
  Range,
  Transfer,
  Rating
} from '@formily/antd-components'
import Printer from '@formily/printer'

const components = {
  Input,
  Radio:           Radio.Group,
  Checkbox:        Checkbox.Group,
  TextArea:        Input.TextArea,
  NumberPicker,
  Select,
  Switch,
  DatePicker,
  DateRangePicker: DatePicker.RangePicker,
  YearPicker:      DatePicker.YearPicker,
  MonthPicker:     DatePicker.MonthPicker,
  WeekPicker:      DatePicker.WeekPicker,
  TimePicker,
  TimeRangePicker: TimePicker.RangePicker,
  Upload,
  Range,
  Rating,
  Transfer
}


const getInitialValues = () => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove({
        daterange: ['2018-12-19', '2018-12-19'],
        string: 'this is string',
        radio: '2',
        checkbox: ['2', '3', '4'],
        textarea:
          'this is long text.this is long text.this is long text.this is long text.this is long text.',
        rating: 3,
        transfer: [1, 2],
        range: 384,
        date: '2020-02-20',
        month: '2020-08',
        time: '22:29:53',
        timerange: ['9:00:00', '18:00:00'],
        week: '2020-9th',
        number: 123,
        boolean: true,
        select: '2'
      })
    }, 1000)
  })
}

const App = () => {
  const [initialValues, setIntialValues] = useState({})
  useEffect(() => {
    getInitialValues().then(initialValues => {
      setIntialValues(initialValues)
    })
  }, [])
  return (
    <Printer>
      <SchemaForm
        components={components}
        labelCol={7}
        initialValues={initialValues}
        wrapperCol={12}
        onSubmit={(value) => console.log(value)}
        schema={{
          type:       'object',
          properties: {
            string: {
              type:          'string',
              title:         'String',
              'x-component': 'Input'
            },
            select: {
              type:          'string',
              title:         'Select',
              enum:          ['1', '2', '3', '4'],
              'x-component': 'Select'
            },
            checkbox: {
              type:          'string',
              title:         'Checkbox',
              enum:          ['1', '2', '3', '4'],
              'x-component': 'Checkbox'
            },
            textarea: {
              type:          'string',
              title:         'Textarea',
              'x-component': 'Textarea'
            },
            number: {
              type:          'number',
              title:         '数字选择',
              'x-component': 'NumberPicker'
            },
            boolean: {
              type:          'boolean',
              title:         '开关选择',
              'x-component': 'Switch'
            },
            date: {
              type:          'string',
              title:         '日期选择',
              'x-component': 'DatePicker'
            },
            daterange: {
              type:          'array<date>',
              title:         '日期范围',
              default:       ['2018-12-19', '2018-12-19'],
              'x-component': 'DateRangePicker'
            },
            year: {
              type:          'string',
              title:         '年份',
              'x-component': 'YearPicker'
            },
            month: {
              type:          'string',
              title:         '月份',
              'x-component': 'MonthPicker'
            },
            timerange: {
              type:          'string',
              title:         '时间范围',
              'x-component': 'TimeRangePicker'
            },
            week: {
              type:          'string',
              title:         '周',
              'x-component': 'WeekPicker'
            },
            upload: {
              type:                'array',
              title:               '卡片上传文件',
              'x-component':       'Upload',
              'x-component-props': { 
                listType: 'card'
              }
            },
            transfer: {
              type:                'string',
              title:               '穿梭框',
              enum:                [
                { key: 1, title: '选项1' },
                { key: 2, title: '选项2' }
              ],
              'x-component':       'Transfer',
              'x-component-props': { 
                render: item => item.title
              }
            },
            range: {
              type:                'number',
              title:               '范围选择',
              'x-component':       'Range',
              'x-component-props': { 
                min:   0,
                max:   1024,
                marks: [0, 1024]
              }
            },
            rating: {
              type:          'number',
              title:         '等级',
              'x-component': 'Rating'
            },
          }
        }}
      >
        <FormButtonGroup offset={7}>
          <Submit>提交</Submit>
        </FormButtonGroup>
      </SchemaForm>
    </Printer>
  )
}

export default App